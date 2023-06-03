import { mergePaths } from '../merge-path'
import { trimByPattern } from '../string'

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

describe('trimByPattern', () => {
  it('should be trim by pattern', () => {
    const string = '$$$$test$'
    expect(trimByPattern(string, '$')).toBe('test')
  })

  it("should be doesn't change string", () => {
    const string = 'test'
    expect(trimByPattern(string, '$')).toBe('test')
  })
})
