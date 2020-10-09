
let name = 'lois'
let skill = '发呆'
//es5 对象的赋值
// let obj = {
//     name:name,
//     skill:skill
// }

//es6 对象的赋值
let obj = {name,skill};
console.log(obj);//{name: "lois", skill: "发呆"}

//key值的构建
let key = 'skill';//假设这个skill是一个key值 是从后台读出来的,假设我们不知道他的值，但又要用它构造一个对象
var obj2 = {
    [key]:'web'
}
console.log(obj2);//{skill: "web"}

//自定义对象的方法
let obj3 = {
    add:function(a,b){
        return a+b
    }
}
console.log(obj3.add(1,2));//3

//is()
let obj4 = {
    name:'jack'
}
let obj5 = {
    name:'jack'
}
console.log(Object.is(obj4.name,obj5.name));


