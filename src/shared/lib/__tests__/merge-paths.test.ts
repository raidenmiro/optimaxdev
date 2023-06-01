import { mergePaths } from '../merge-path'

describe('merge paths', () => {
  it('should be concat with root path', () => {
    const baseUrl = '/root'

    const paths = mergePaths(baseUrl, {
      someEndPoint: () => 'someEndPoint'
    })

    expect(paths.someEndPoint()).toBe('root/someEndPoint')
  })

  it('should be remove slash from path', () => {
    const baseUrl = '/root//'

    const paths = mergePaths(baseUrl, {
      someEndPoint: () => '//someEndPoint/'
    })

    expect(paths.someEndPoint()).toBe('root/someEndPoint')
  })
})
