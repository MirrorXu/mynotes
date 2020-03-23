--- 
title: 变量提升
---


## 有意思的例子

- 输出什么？

```js
console.log(fn); // ReferenceError: fn is not defined

if (false) {
    fn = () => { }
}
```

- 输出什么

```js
console.log(fn); // undefined  

if (false) {
    var fn = () => { }
}

/**
 *  在脚本未执行以前会进行与解析和变量提升，使用var 声明的变量即使在条件判断语句不成立时，依然会被提升
 * /
```

- 输出什么

```js
console.log(fn); // ReferenceError: fn is not defined

if (false) {
    let fn = () => { }
}
```

- 输出什么？

```js
console.log( typeof fn)  // undefined
console.log(fn)   // ReferenceError: fn is not defined

/**
 * 1. typeof 返回 undefined 并不一定代表值一定是undefined ，
 *    最起码未声明过的变量应该是 undeclared === is not defined 
 * 2. typeof 对 undeclared 返回 undefined其实是因为安全防范机制（阻止报错）
 * /
```
