export interface Request {
  path: string
  query?: Record<string, string>
  method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'
  headers?: Record<string, string>
  body?: Record<string, unknown> | null
}

export const request = async <Done = unknown>({
  path,
  method = 'GET',
  ...config
}: Request): Promise<Done> => {
  const body = config.body ? JSON.stringify(config.body) : undefined
  const query = config.query ? new URLSearchParams(config.query).toString() : ''

  const url = path.concat(query ? `?${query}` : '')

  const answer = await fetch(url, {
    method,
    body
  })

  if (!answer.ok) {
    throw new Error(answer.statusText)
  }

  return answer.json()
}
