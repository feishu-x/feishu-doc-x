import { FeiShuClient } from '@feishux/api'
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

const tree = await flowUsClient.getFolderTree(process.env.FEISHU_FOLDER_TOKEN)
fs.writeFileSync('./feishu-tree.json', JSON.stringify(tree, null, 2))
