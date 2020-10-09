# 10Set和weakset
---
### set的主要功能是 去重 
```
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
```