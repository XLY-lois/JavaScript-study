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