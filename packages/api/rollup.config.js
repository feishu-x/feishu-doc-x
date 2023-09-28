import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs' // 解析js
import typescript from '@rollup/plugin-typescript'
import externals from 'rollup-plugin-node-externals' // 解析ts

const getBasePlugins = (tsConfig) => {
  return [
    resolve(),
    commonjs(),
    externals(),
    typescript({
      ...tsConfig,
    }),
  ]
}

export default [
  // 主逻辑代码打包
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    external: [],
    plugins: [
      ...getBasePlugins({
        outDir: 'dist',
        declaration: true,
        filterRoot: 'src',
      }),
    ],
  },
]
