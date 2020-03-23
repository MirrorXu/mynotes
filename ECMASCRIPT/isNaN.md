---
title: 'isNaN'
---

## `NaN`是什么？

### `NaN`(not a number) 不是数字的数字
如果数学运行的操作数不是数值类型（或者无法解析为常规的十进制或十六进制数字），就无法返回一个有效的数字。 这种情况返回值为`NaN`。

```js
let num = 2 / 'foo'
num          // NaN
typeof num   // number
```

### `NaN`之间无法进行比较

```js
let num = 2 / 'foo'
num == NaN // false
num === NaN // false
NaN != NaN  // true
NaN !== NaN // true
```

## 如何判断一个值是否是`NaN`

### 使用内置的全局工具函数`isNaN`进行判断 （这是一个自从有javascript就存在的bug方法）

```js
let str= 'foo'
let num = 2/'foo';

window.isNaN(a)  // true

window.isNaN(str) // true  😵?!!!! funk !
```

### 使用ES6新增的`Number.isNaN`进行判断

```js
let str= 'foo'
let num = 2/'foo';

Number.isNaN(a)  // true

Number.isNaN(str) // false  😄 nice
```

###  `Number.isNaN` ES6之前的polyfill 

```js
if(!Number.isNaN){
    Number.isNaN = function( n ){
        return (typeof n === 'number' && window.isNaN(n))
    }
}
```