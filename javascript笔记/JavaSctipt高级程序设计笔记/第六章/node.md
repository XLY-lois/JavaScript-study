# 第六章面向对象的程序设计 笔记
---
## 创建对象

- 工厂模式 由于构造函数和对象字面量创建多个对象时会产生大量重复的代码 因此工厂模式诞生
   ```
    function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    }
    return o;
    }

    var person1 = createPerson('jack',18,'student');

    person1.sayName();
    //工厂模式实际上就是用一个函数封装了创建对象的过程；缺点是 不能知道对象的类型
   ```

- 构造函数模式
    - 与工厂模式相比 构造函数名多数为大写开头 没有显式地创建对象（因此在调用时就要new） 没有return
    - 其实有点Java里 class 内味
    - 缺点 每当创建一个实例时 就会创建一个新的函数对象（sayName） 比方说新建了两个Person类的实例 他们都有相同的 sayName 方法，可是由于是两个指向不同的实例，因此就会出现实现同样功能却不是同一个对象的问题
```
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    }
}

var person1 = new Person('jack',15,'student')
person1.sayName();//jack

alert(person1 instanceof Object);//true
alert(person1 instanceof Person);//true
```
   - 缺点的解决方法 可以将定义在Person 内部的方法 放在外部定义（全局函数） 那这样封装又没有意义了。。该怎么办咧？（原型模式可以解决这个问题！）

- 原型模式
   - 我们创建的每一个函数都有一个属性---prototype（原型） 该属性是一个指向一个对象的指针
   - 不必在构造函数中定义对象实例的信息 而是将这些信息直接添加到原型对象中  
   - 但是新对象所有的属性和方法都是共享的
```
function Person(){
}

Person.prototype.name = 'jack';
Person.prototype.age = 18;
Person.prototype.job = 'student';
Person.prototype.sayName = function(){
    alert(this.name);
}

var person1 = new Person();
person1.sayName();//jack

var person2 = new Person();
person2.sayName();//jack

alert(person1.sayName == person2.sayName);//true
```
    - 不能通过实例对象重写原型中的值 
```
//接上一段代码
var person3 = new Person();
person3.name = 'rose';
alert(person3.name);//rose 来自实例对象
alert(person1.name);//jack 来自原型

delete person3.name;//将实例对象中的name属性删除 就不会屏蔽原型对象中的属性
alert(person3.name);//jack 来自原型

```
    - 原型模式简写 
```
//原型模式更简单的写法 就是和对象字面量结合
function Person(){
}

Person.prototype = {
    //construtoe:Person,
    name:'jack',
    age:18,
    job:'student',
    sayName:function(){
        alert(this.name);
    }
}
```
    - 原型模式的动态性 即使是先创建实例再修改原型对象的属性，也会从实例中反映出来；

#### 组合使用构造函数模式和原型模式
```
//组合使用构造函数和原型模式
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Shelby','Court'];
}

Person.prototype = {
    constructor : Person,
    sayName:function(){
        alert(this.name);
    }
}

var person1 = new Person('jack',20,'student');
var person2 = new Person('rose',19,'student');

person1.friends.push('Van');
alert(person1.friends);//Shelby,Court,Van
alert(person2.friends);//Shelby,Court
```
- 动态原型模式 将所有信息都封装到构造函数里 且在有必要的情况下初始化原型对象
- 寄生构建函数模式
- 稳妥构建函数模式

## 继承