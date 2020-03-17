---
title: 项目配置和使用说明
lang: zn-ch
---
## 展示当前文档的目录

[[toc]]

## 静态资源使用

### 在`.md`文件中使用图片

- 使用相对路径引入图片
![relative path to import a img file](./assets/imgs/useByRelativepath.png)

- 使用alias引入图片,使用在`.vuepress/config.js`中对`configureWebpack(webpack配置对象)`中进行配置
![Alias  path to import a img file](~@imgs/beautify.png)

- 有时，可能需要提供一个静态资源，但是它们并不直接被任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。

```bash
# 打包后的文件结构
.vuepress
    ├── config.js
    ├── dist
    │   ├── 404.html
    │   ├── assets
    │   │   ├── css
    │   │   ├── img
    │   │   └── js
    │   ├── index.html
    │   └── usePublicImg.png
    └── public
        └── usePublicImg.png
```

![use public img file](/usePublicImg.png)
