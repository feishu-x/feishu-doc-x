import { transform } from './utils/flowus'
import { FlowUsToMarkdownOptions } from './types'
import { FeiShuClient } from '@feishux/api'
import { IBlock, IBlockType, IBlockTypeText, out } from '@feishux/shared'

/**
 * FlowUs文档转Md
 */
export class FeiShuToMarkdown {
  private readonly feiShuClient?: FeiShuClient

  constructor(options?: FlowUsToMarkdownOptions) {
    this.feiShuClient = options?.client
  }

  public async pageToMarkdown(id: string) {
    if (!this.feiShuClient) {
      out.err('feiShuClient is not provided')
      process.exit(1)
    }
    const pageBlocks = await this.feiShuClient.getPageBlocks(id)
    return this.toMarkdownString(pageBlocks)
  }

  public toMarkdownString(blocks: IBlock[]): string {
    let mdString = ''
    // 判断是是否是文档页面
    // const blocksKeys = Object.keys(blocks.blocks)
    // 第一个节点标记了该Block的属性是文档还是其他
    const firstBlock = blocks[0]
    if (firstBlock.block_type === IBlockType.page) {
      let prevType = 0
      const needEnter = [
        IBlockType.callout,
        IBlockType.quote,
        IBlockType.text,
        IBlockType.quote_container,
      ]

      firstBlock.children?.forEach((blockId) => {
        const block = blocks.find((item) => item.block_id === blockId) as IBlock

        const curType = block.block_type
        let linefeed = ''
        // 特殊处理一些md语法的粘连性，需要额外加换行
        if (needEnter.includes(prevType) && needEnter.includes(curType)) {
          linefeed += '\n'
        }
        if (!transform[curType]) {
          out.debug(`暂不支持的块类型: ${IBlockTypeText[curType]}`)
        } else {
          mdString +=
            linefeed +
            transform[curType]({
              block,
              blocks: blocks,
              pageTitle: firstBlock.page?.elements[0].text_run.content as string,
            }) +
            '\n'
          prevType = curType
        }
      })
    } else {
      // 非页面Block，退出转换
      out.err('类型错误', '非文档类型')
      process.exit(1)
    }
    return mdString
  }
}
