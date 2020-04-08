---
title: getter setter 
---


- 当尝试查询属性时，**get**语法将对象属性绑定到调用的**函数**。有时需要允许访问返回动态计算值的属性，或者你可能需要反映内部变量的状态，而不需要使用显式方法调用。在JavaScript中，可以使用 getter 来实现。虽然可以使用 getter 和 setter 来创建一个伪属性类型，但是不可能同时将一个 getter 绑定到一个属性并且该属性实际上具有一个值。 - [MDN-Getter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get)
    - 语法：
        - `{get prop() { ... } }`
        - `{get [expression]() { ... } }`

- 当尝试设置属性时，**set**语法将对象属性绑定到要调用的**函数**。 在 javascript 中，如果试着改变一个属性的值，那么对应的 setter 将被执行。setter 经常和 getter 连用以创建一个伪属性。不可能在具有真实值的属性上同时拥有一个 setter 器。[MDN-Setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
    - 语法：
        - `{set prop(val) { . . . }}`
        - `{set [expression](val) { . . . }}`

<<< @/playground/js/getter_setter/getter.demo.js
