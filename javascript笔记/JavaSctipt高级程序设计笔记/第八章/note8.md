# 第八章 BOM 浏览器对象模型
---
## window对象
- 通过js访问浏览器的接口 也是ECMAScript规定的Global对象
##### 全局作用域
- 定义全局变量与直接在window上定义的属性还是有区别的，全局变量不能通过delete操作符删除，而直接定义在window对象上的属性可以；
```
var age = 29;
window.color = 'red';

delete window.age;

delete window.color;

alert(window.age);//29
alert(window.color);//undefined
```