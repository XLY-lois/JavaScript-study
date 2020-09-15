# 03 对象扩展运算符和rest运算符
---

### 对象扩展运算符
```
function test(...arg){//当我们不确定参数的个数时
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}

test(1,2,3);//1 2 3 undefined

// let arr1 = ['aaa','bbb'];
// let arr2 = arr1;//其实arr1和arr2是同一个指向
// console.log(arr1);//["aaa", "bbb"]
// arr2.push('ccc');
// console.log(arr2);//["aaa", "bbb", "ccc"]
// console.log(arr1);//["aaa", "bbb", "ccc"] 指向问题引起了arr1也改变了

//解决方法
let arr1 = ['aaa','bbb'];
let arr2 = [...arr1];//此时的赋值是arr1数值里面的内容，而不是数组本身
console.log(arr1);//["aaa", "bbb"]
arr2.push('ccc');
console.log(arr2);//["aaa", "bbb", "ccc"]
console.log(arr1);//["aaa", "bbb"]
```
### rest运算符 (rest剩余部分)
```
function test2(first,...arg){
    console.log(arg.length);
}
test2(0,1,2,3,4,5,6,7);//7 因为是除了已知参数之外剩下的个数

function test2(first,...arg){
    for(let val of arg){//for of 循环
        console.log(val);
    }
}
test2(0,1,2,3,4,5,6,7);//1 2 3 4 5 6 7
```
