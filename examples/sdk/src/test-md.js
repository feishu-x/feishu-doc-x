import { FeiShuClient } from '@feishux/api'
import { FeiShuToMarkdown } from '@feishux/doc-to-md'
import * as fs from 'fs'
import path from 'path'
import * as dotenv from 'dotenv'
process.env.DEBUG = true
const envPath = path.resolve(process.cwd(), '.env')
dotenv.config({ override: true, path: envPath })
const flowUsClient = new FeiShuClient({
  appId: process.env.FEISHU_APP_ID,
  appSecret: process.env.FEISHU_APP_SECRET,
})
const flowUsToMd = new FeiShuToMarkdown({ client: flowUsClient })
const genMd = async () => {
  // const pageBlocks = await flowUsClient.getPageBlocks('279f6935-4103-4d64-9b11-ec588fc0b51b')
  // const mdString = flowUsToMd.toMarkdownString(pageBlocks)
  const mdString = await flowUsToMd.pageToMarkdown(process.env.FEISHU_PAGE_ID)

  fs.writeFileSync('./feishu-test.md', mdString)
}

void genMd()
