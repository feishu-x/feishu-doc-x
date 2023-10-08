export const enum IBlockType {
  // 文档块
  page = 1, // 页面Block
  text = 2, // 文本Block

  // 文本块
  heading1 = 3, // 一级标题Block
  heading2 = 4, // 二级标题Block
  heading3 = 5, // 三级标题Block
  heading4 = 6, // 四级标题Block
  heading5 = 7, // 五级标题Block
  heading6 = 8, // 六级标题Block
  heading7 = 9, // 七级标题Block
  heading8 = 10, // 八级标题Block
  heading9 = 11, // 九级标题Block
  bullet = 12, // 无序列表Block
  ordered = 13, // 有序列表Block
  code = 14, // 代码块Block
  quote = 15, // 引用Block

  // 任务块
  todo = 17, // 待办事项Block

  // 表格块
  bitable = 18, // 多维表格Block

  // 嵌入块
  callout = 19, // 高亮块Block
  chat_card = 20, // 会话卡片Block
  diagram = 21, // 流程图&UML图Block
  divider = 22, // 分割线Block
  file = 23, // 文件Block
  grid = 24, // 分栏Block
  grid_column = 25, // 分栏列Block
  iframe = 26, // 内嵌Block
  image = 27, // 图片Block
  isv = 28, // 开放平台小组件Block
  mindnote = 29, // 思维笔记Block
  sheet = 30, // 电子表格Block

  // 数据库块
  table = 31, // 表格Block
  table_cell = 32, // 表格单元格Block
  view = 33, // 视图Block

  quote_container = 34, // 引用容器Block

  // 任务块
  task = 35, // 任务Block

  // OKR块
  okr = 36, // OKR Block
  okr_objective = 37, // OKR Objective Block
  okr_key_result = 38, // OKR Key Result Block
  okr_progress = 39, // OKR 进展Block

  // 插件块
  add_ons = 40, // 文档小组件
  jira_issue = 41, // Jira 问题
  wiki_catalog = 42, // Wiki 子目录
}
export const IBlockTypeText = {
  [IBlockType.page]: '页面',
  [IBlockType.text]: '文本',
  [IBlockType.heading1]: '一级标题',
  [IBlockType.heading2]: '二级标题',
  [IBlockType.heading3]: '三级标题',
  [IBlockType.heading4]: '四级标题',
  [IBlockType.heading5]: '五级标题',
  [IBlockType.heading6]: '六级标题',
  [IBlockType.heading7]: '七级标题',
  [IBlockType.heading8]: '八级标题',
  [IBlockType.heading9]: '九级标题',
  [IBlockType.bullet]: '无序列表',
  [IBlockType.ordered]: '有序列表',
  [IBlockType.code]: '代码块',
  [IBlockType.quote]: '引用',
  [IBlockType.todo]: '待办事项',
  [IBlockType.bitable]: '多维表格',
  [IBlockType.callout]: '高亮块',
  [IBlockType.chat_card]: '会话卡片',
  [IBlockType.diagram]: '流程图&UML图',
  [IBlockType.divider]: '分割线',
  [IBlockType.file]: '文件',
  [IBlockType.grid]: '分栏',
  [IBlockType.grid_column]: '分栏列',
  [IBlockType.iframe]: '内嵌',
  [IBlockType.image]: '图片',
  [IBlockType.isv]: '开放平台小组件',
  [IBlockType.mindnote]: '思维笔记',
  [IBlockType.sheet]: '电子表格',
  [IBlockType.table]: '表格',
  [IBlockType.table_cell]: '表格单元格',
  [IBlockType.view]: '视图',
  [IBlockType.quote_container]: '引用容器',
  [IBlockType.task]: '任务',
  [IBlockType.okr]: 'OKR',
  [IBlockType.okr_objective]: 'OKR Objective',
  [IBlockType.okr_key_result]: 'OKR Key Result',
  [IBlockType.okr_progress]: 'OKR 进展',
  [IBlockType.add_ons]: '文档小组件',
  [IBlockType.jira_issue]: 'Jira 问题',
  [IBlockType.wiki_catalog]: 'Wiki 子目录',
}

export const codeLanguageMap = {
  1: 'plaintext',
  2: 'abap',
  3: 'ada',
  4: 'apache',
  5: 'apex',
  6: 'assembly',
  7: 'bash',
  8: 'csharp',
  9: 'cpp',
  10: 'c',
  11: 'cobol',
  12: 'css',
  13: 'coffeescript',
  14: 'd',
  15: 'dart',
  16: 'delphi',
  17: 'django',
  18: 'dockerfile',
  19: 'erlang',
  20: 'fortran',
  21: 'foxpro',
  22: 'go',
  23: 'groovy',
  24: 'html',
  25: 'htmlbars',
  26: 'http',
  27: 'haskell',
  28: 'json',
  29: 'java',
  30: 'javascript',
  31: 'julia',
  32: 'kotlin',
  33: 'latex',
  34: 'lisp',
  35: 'logo',
  36: 'lua',
  37: 'matlab',
  38: 'makefile',
  39: 'markdown',
  40: 'nginx',
  41: 'objective',
  42: 'openedgeabl',
  43: 'php',
  44: 'perl',
  45: 'postscript',
  46: 'power',
  47: 'prolog',
  48: 'protobuf',
  49: 'python',
  50: 'r',
  51: 'rpg',
  52: 'ruby',
  53: 'rust',
  54: 'sas',
  55: 'scss',
  56: 'sql',
  57: 'scala',
  58: 'scheme',
  59: 'scratch',
  60: 'shell',
  61: 'swift',
  62: 'thrift',
  63: 'typescript',
  64: 'vbscript',
  65: 'visual',
  66: 'xml',
  67: 'yaml',
  68: 'cmake',
  69: 'diff',
  70: 'gherkin',
  71: 'graphql',
  72: 'openglsl',
  73: 'properties',
  74: 'solidity',
  75: 'toml',
}
