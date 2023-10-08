import { IBlock, IBlockType } from '@feishux/shared'
import { FeiShuClient } from '@feishux/api'

export interface TransformPrams {
  block: IBlock
  blocks: IBlock[]
  pageTitle: string
}

export type Transform = {
  [key in IBlockType]: (data: TransformPrams) => string
}

export interface ConfigOptions {
  saveChildPage?: boolean
}

export interface FlowUsToMarkdownOptions {
  client?: FeiShuClient
  config?: ConfigOptions
}
