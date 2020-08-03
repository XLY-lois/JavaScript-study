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

// var person1 = createPerson('jack',18,'student');

// person1.sayName();
//工厂模式实际上就是用一个函数封装了创建对象的过程；缺点是 不能知道对象的类型


//构造函数模式
// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function(){
//         alert(this.name);
//     }
// }

// var person1 = new Person('jack',15,'student')
// person1.sayName();//jack

// alert(person1 instanceof Object);//true
// alert(person1 instanceof Person);//true


//原型模式
// function Person(){
// }

// Person.prototype.name = 'jack';
// Person.prototype.age = 18;
// Person.prototype.job = 'student';
// Person.prototype.sayName = function(){
//     alert(this.name);
// }

// var person1 = new Person();
// person1.sayName();//jack

// var person2 = new Person();
// person2.sayName();//jack

// var person3 = new Person();
// person3.name = 'rose';
// alert(person3.name);//rose 
// alert(person1.name);//jack

// alert(person1.sayName == person2.sayName);//true

//原型模式更简单的写法 就是和对象字面量结合
// function Person(){
// }

// Person.prototype = {
//     //construtoe:Person,
//     name:'jack',
//     age:18,
//     job:'student',
//     sayName:function(){
//         alert(this.name);
//     }
// }


// //组合使用构造函数和原型模式
// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.friends = ['Shelby','Court'];
// }

// Person.prototype = {
//     constructor : Person,
//     sayName:function(){
//         alert(this.name);
//     }
// }

// var person1 = new Person('jack',20,'student');
// var person2 = new Person('rose',19,'student');

// person1.friends.push('Van');
// alert(person1.friends);//Shelby,Court,Van
// alert(person2.friends);//Shelby,Court


// //原型链
// function SuperType(){
//     this.prototype = true;
// }

// SuperType.prototype.getSuperValue = function(){
//     return this.prototype;
// }

// function SubType(){
//     this.subprototype = false;
// }
// //新建一个SuperType的实例以达到Subtype继承SuperType的目的
// SubType.prototype = new SuperType();

// //重新将方法写入SubType的原型（SuperTyper实例）中
// SubType.prototype.getSuperValue = function(){
//     return this.subprototype;
// }

// var instance = new SubType();
// alert(instance.getSuperValue());//false 书上写的是true？？可是明明已经重写了getSuperValue方法欸

// //确定原型和实例的关系
// alert(instance instanceof Object);//true
// alert(instance instanceof SubType);//true
// alert(instance instanceof SuperType);//true


//原型链的问题
// function SuperType(){
//     this.colors = ['red','blue','green'];
// }


// function SubType(){
// }
// //继承
// SubType.prototype = new SuperType();

// var instance1 = new SubType();
// instance1.colors.push('black');
// alert(instance1.colors);//red,blue,green,black

// var instance2 = new SubType();
// alert(instance2.colors);//red,blue,green,black



// //借用构造函数
// function SuperType(){
//     this.colors = ['red','blue','green'];
// }

// function SubType(){
//     //继承
//     //在此处调用父类的构造函数啦
//     SuperType.call(this);
// }

// var instance1 = new SubType();
// instance1.colors.push('black');
// alert(instance1.colors);//red,blue,green,black

// var instance2 = new SubType();
// alert(instance2.colors);//red,blue,green


//借用构造函数传参
// function SuperType(name){
//     this.name = name;
// }

// function Subtype(){
//     //继承SuperType 同时传参
//     SuperType.call(this,'jack');
//     this.age = 19;
// }

// var instance = new Subtype();
// alert(instance.name);//jack
// alert(instance.age);//19


//组合继承
//父类构造函数
function SuperType(name){
    this.name = name;
    this.colors = ['red','blue','yellow'];
}
//父类方法定义在他的原型对象中 避免多次创建function对象的现象发生
SuperType.prototype.sayName = function(){
    alert(this.name);
}

//子类继承属性
function SubType(name,age){
    //继承父类的属性name
    SuperType.call(this,name);
    this.age = age;
}

//子类继承方法
SubType.prototype = new SuperType();
//在子类的实例对象（即父类的实例）中定义新方法
SubType.prototype.sayAge = function(){
    alert(this.age);
}

var person1 = new SubType('rose',18);
person1.colors.push('black');
alert(person1.colors);//red,blue,yellow,black
person1.sayName();//rose
person1.sayAge();//18

var person2 = new SubType('jack',20);
person2.colors.push('green');
alert(person2.colors);//red,blue,yellow,black,green
person2.sayName();//jack
person2.sayAge();//20



