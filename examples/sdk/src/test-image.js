import { FeiShuClient } from '@feishux/api'
import path from 'path'
import * as dotenv from 'dotenv'
process.env.DEBUG = true
const envPath = path.resolve(process.cwd(), '.env')
dotenv.config({ override: true, path: envPath })
const flowUsClient = new FeiShuClient({
  appId: process.env.FEISHU_APP_ID,
  appSecret: process.env.FEISHU_APP_SECRET,
})

const image = await flowUsClient.getResourceItem('CTkKbqy2bomUlFxg7ouciBs1n7d')
console.log('type', image.headers['content-type'].split('/')[1])
