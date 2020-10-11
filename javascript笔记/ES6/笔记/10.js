//Set 
//主要功能是去重
let setArr = new Set(['lois','水水','hhhh']);//里面的值是唯一的不能重复
console.log(setArr);
/*
Set(3)
[[Entries]]
0: "lois"
1: "水水"
2: "hhhh"
size: (...)
__proto__: Set
*/
//增
setArr.add('lois');//加不进去，因为不能重复呀
setArr.add('loisssss');
console.log(setArr);//10.js:17 Set(4) {"lois", "水水", "hhhh", "loisssss"}
//查
console.log(setArr.has('水水'));//true
console.log(setArr.has('水水a'));//false
//删
setArr.delete('lois');//删除某一个
console.log(setArr);//Set(3) {"水水", "hhhh", "loisssss"}
setArr.clear();//全部清空
console.log(setArr);//Set(0) {}

//输出方法
let setArr1 = new Set(['lois','水水','hhhh']);
//for of 
for(let item of setArr1){
    console.log(item);
}
/*
水水
hhhh
lois
*/
//forEach
setArr1.forEach(value => console.log(value));
/*
水水
hhhh
lois
*/
//size属性
console.log(setArr1.size);//3


//weakset 可以放对象
let setArr2 = new WeakSet();
let obj2 = {a:'lois',b:'水水'};
let obj3 = {a:'lois',b:'水水'};//虽然值相同，但在内存中不是同一个引用，因此如果把该对象也加进去是可以的，不算重复噢
setArr2.add(obj2);
console.log(setArr2);