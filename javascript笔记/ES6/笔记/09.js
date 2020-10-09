let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;

let f = Symbol();


let g = Symbol('lois');
console.log(g);//Symbol(lois) 红色的表明是一个对象
console.log(g.toString());//Symbol(lois) 白色 字符串

let lois = Symbol();
let obj = {
    [lois]:'水水'
}
console.log(obj[lois]);//水水
obj[lois]='小水水';
console.log(obj[lois]);//小水水

//Symbol对对象属性的保护（？）
let obj2 = {name:'lois',skill:'web'};
let age = Symbol();
obj2[age] = 18;
console.log(obj2);//{name: "lois", skill: "web", Symbol(): 18}
for(item in obj2){
    console.log(item)
}//name skill 因为age不能被循环输出
console.log(obj2[age]);//18