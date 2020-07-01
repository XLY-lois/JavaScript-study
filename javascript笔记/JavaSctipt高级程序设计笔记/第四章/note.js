// var name = 'nick';//类型为String
// name.age = 18;
// alert(name.age);


// var person = new Object();
// person.name = 'Nick';
// alert(person.name);

// var obj1 = new Object();
// var obj2 = obj1;
// obj1.name = 'nick';
// alert(obj2.name);//nick

// function addTen(num){
//     num += 10;
//     return num
// }
// var count = 20;
// var result = addTen(count);
// alert(count);//20
// alert(result);//30

// function setName(obj){
//     obj.name = 'nick';
// }
// var person = new Object();
// setName(person);
// alert(person.name);//nick

function setName(obj){
    obj.name = 'nick';
    obj = new Object();//指向一个新的局部的对象
    obj.name = 'jack';//即使修改了传入对象的引用 且修改了属性，但原始的引用保持不变
}
var person = new Object();
setName(person);
alert(person.name);//因此输出的还是 nick