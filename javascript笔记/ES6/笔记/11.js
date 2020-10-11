//Map
let json = {
    'name':'lois',
    'skill':'web'
}
console.log(json.name);//lois
//对象的遍历，效率不高，比数组慢很多噢

var map = new Map();
map.set(json,'string');//此时 json对象作为一个key（键）值，与字符串string对应
console.log(map);
/*
key: {name: "lois", skill: "web"} =>
value: "string"
*/

map.set('水水',json);
console.log(map);
/*
0: {Object => "string"}
1: {"水水" => Object}
*/

//get
console.log(map.get(json));//string 取出key为json对象的值
//删
map.delete(json);//删除特定的
console.log(map.size);//1
map.clear();//全部删除

//has
console.log(map.has('水水'));//false 因为已经清空了