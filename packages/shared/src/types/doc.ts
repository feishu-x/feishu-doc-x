import { IBlockType } from '../const/doc'

export interface ICalloutData {
  background_color: number
  border_color: number
  emoji_id: string
}

export interface Elements {
  text_run: TextRun
  /** 公式 */
  equation: TextRun
  /** 日期提醒 */
  reminder: any
}

export interface IFileData {
  name: string
  token: string
}

export interface IImageData {
  align: number
  height: number
  token: string
  width: number
}

export interface IBlock {
  block_id: string
  block_type: IBlockType
  children?: string[]
  page?: IBaseData
  parent_id: string
  heading1?: IBaseData
  heading2?: IBaseData
  heading3?: IBaseData
  heading4?: IBaseData
  heading5?: IBaseData
  heading6?: IBaseData
  heading7?: IBaseData
  heading8?: IBaseData
  heading9?: IBaseData
  ordered?: IBaseData
  bullet?: IBaseData
  code?: IBaseData
  // 引用
  quote_container?: any
  text?: IBaseData
  // 分割线
  divider?: any
  todo?: IBaseData
  image?: IImageData
  // 视频
  view?: IViewData
  file?: IFileData
  sheet?: ISheetData
  callout?: ICalloutData
}

export interface IBaseData {
  elements: Elements[]
  style: IHeadingStyle | ICodeStyle | ITODOStyle
}

export interface IResponseData {
  has_more: boolean
  items: IBlock[]
  page_token?: string
}

export interface ISheetData {
  token: string
}

export interface IHeadingStyle {
  align: number
  folded: boolean
}

export interface ICodeStyle {
  language: number
  wrap: boolean
}

export interface ITODOStyle {
  align: number
  done: boolean
  folded: boolean
}

export interface TextElementStyle {
  bold: boolean
  inline_code: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  link: {
    url: string
  }
}

export interface TextRun {
  content: string
  text_element_style: TextElementStyle
}

export interface IViewData {
  view_type: number
}
