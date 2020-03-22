---
title: JS中各种变量的方法及差异
---

## `for...in` 语句（statement）

 *`for...in` 循环只遍历可枚举属性（包括它的原型链上的可枚举属性）*。像 Array和 Object使用内置构造函数所创建的对象都会继承自Object.prototype和String.prototype的不可枚举属性，例如 String 的 indexOf()  方法或 Object的toString()方法。循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性（更接近原型链中对象的属性覆盖原型属性）。

<<< @/playground/js/ergodic_forin.js
