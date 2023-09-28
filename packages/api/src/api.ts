/**
 * FeiShu API
 */
export class FeiShuApi {
  private readonly _baseUrl: string
  constructor(config?: any) {
    this._baseUrl = config?.baseUrl || 'https://flowus.cn/api'
    console.log(this._baseUrl)
  }
}
