import { HttpClientResponse, request as req, RequestOptions } from 'urllib'
import out from './out'

/**
 * 网络请求封装
 * @param url
 * @param reqOpts
 */
export const request = async <T>(
  url: string,
  reqOpts?: RequestOptions,
): Promise<HttpClientResponse<{ code: number; data: T }>> => {
  const opts: RequestOptions = {
    contentType: 'json',
    dataType: 'json',
    headers: {
      'User-Agent': 'FeiShu X',
      ...reqOpts?.headers,
    },
    compressed: true,
    // 超时时间 60s
    timeout: Number(process.env.REQUEST_TIMEOUT) || 60000,
    ...reqOpts,
  }
  out.debug(`API请求URL: ${url}`)
  out.debug(`API请求参数: ${JSON.stringify(opts)}`)
  return req(url, opts)
}
