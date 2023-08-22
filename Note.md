# Note

## 文件路由

[vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

## 全局组件

[vite-plugin-components](https://github.com/antfu/vite-plugin-components)

## 模块解析路径映射

> tsconfig.json

```json
{
  "compilerOptions": {
    /* paths */
    "baseUrl": ".",
    "paths": {
      "@api/*": ["src/api/*"],
      "@logic/*": ["src/logic/*"]
    }
  }
}
```

[vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)

> vite.config.ts

```ts
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths({
      loose: true, // 宽松模式
    }),
  ]
})
```

## 禁止缩放