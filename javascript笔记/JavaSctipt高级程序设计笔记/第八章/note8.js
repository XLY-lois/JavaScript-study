// var age = 29;
// window.color = 'red';

// delete window.age;

// delete window.color;

// alert(window.age);//29
// alert(window.color);//undefined

const readline = require('readline')

var n = parseInt(readline());
var arr = [];

while(n>0){
    var tmp = parseInt(readline());
    arr.push(tmp);
    n--;
}

function S(arr){
    var res = [];
    for(let i=0; i<arr.length; i++){
        var k = Math.floor(arr[i]/9);//计算有多少个9 放在位数低的位置
        var k1 = arr[i]%9;//余数放在最高位
        var str = '';
        if(k1 != 0){
            str += k1.toString();//最高位
        }
        for(let j=0; j<k; j++){
            str += '9';//补齐低位数的9
        }
        res.push(str);
    }
    return res;
}

var res = S(arr);
for(let i=0; i<res.length; i++){
    console.log(res[i]);
}