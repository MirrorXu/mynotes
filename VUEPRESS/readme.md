---
title: VuePress
lang: zn-ch
---

## 展示当前文档的目录(大纲)

```md
[[toc]]
```

[[toc]]

## 静态资源使用

### 在`.md`文件中使用图片

- 使用相对路径引入图片

`![relative path to import a img file](../assets/imgs/useByRelativepath.png)`


![relative path to import a img file](../assets/imgs/useByRelativepath.png)

- 使用alias引入图片,使用在`.vuepress/config.js`中对`configureWebpack(webpack配置对象)`中进行配置


`![Alias  path to import a img file](~@imgs/beautify.png)`
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

## MarkDown拓展

###  自定义容器

- 输入

```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

```

- 输出

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

### 显示代码块的行号

```js {4}

let name = 'Mirror';

function sayName(name){
    console.log(name || 'lost name param')
};

sayName();

```

### 导入代码段(beta)

- 输入

```
引入代码片段，高亮代码的2，3行

<<< @/docs/assets/js/chunk.js {2,3}
```

- 输出

<!-- <<< @/docs/assets/js/chunk.js {2,3} -->

::: tip
由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 @ 默认值是 process.cwd()。 process.cwd() 方法返回 Node.js 进程的当前工作目录。
:::


## 在MarkDown中使用Vue

<Panel></Panel>
