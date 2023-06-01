/* eslint-disable @typescript-eslint/no-explicit-any */

import { trimByPattern } from './string'

type PathConfig = {
  [K in string]: PathConfig | ((...args: any[]) => string)
}

export const mergePaths = <Paths extends PathConfig>(
  root: string | undefined,
  paths: Paths
): { [K in keyof Paths]: Paths[K] } => {
  function builder(root: string, cb: (...arg: any[]) => string) {
    return (...args: any[]) => {
      const path = cb(...args)

      const baseUrl = trimByPattern(root, '/')
      const formattedPath = trimByPattern(path, '/')

      return `${baseUrl}/${formattedPath}`
    }
  }

  const baseUrl = root ?? ''

  function traverse(paths: Paths) {
    const builtPaths = { ...paths } as any

    for (const key in builtPaths) {
      const current = builtPaths[key]

      if (typeof current === 'function') {
        builtPaths[key] = builder(baseUrl, current)
      } else if (typeof current === 'object') {
        builtPaths[key] = traverse(current)
      } else {
        builtPaths[key] = current
      }
    }

    return builtPaths
  }

  return traverse(paths)
}
