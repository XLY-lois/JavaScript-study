'use strict';

// let [a,b,c] = [0,1,2];//解构赋值
// console.log(a);
// console.log(b);
// console.log(c);

// let [foo='true'] = [];
// console.log(foo);

// let {foo,bar}  = {foo:'hhhhh',bar:'wwwww'};
// console.log(foo + bar);

// //假如在解构赋值前已经定义
// let foo;
// ({foo} = {foo:'yyyy'});//必须加括号包住，否则会报错
// console.log(foo);


// const [a,b,c,d] = 'lois';;
// console.log(a);//l
// console.log(b);//o
// console.log(c);//i
// console.log(d);//s

//03
// function test(...arg){//当我们不确定参数的个数时
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }

// test(1,2,3);//1 2 3 undefined

// let arr1 = ['aaa','bbb'];
// let arr2 = arr1;//其实arr1和arr2是同一个指向
// console.log(arr1);//["aaa", "bbb"]
// arr2.push('ccc');
// console.log(arr2);//["aaa", "bbb", "ccc"]
// console.log(arr1);//["aaa", "bbb", "ccc"] 指向问题引起了arr1也改变了

//解决方法
// let arr1 = ['aaa','bbb'];
// let arr2 = [...arr1];//此时的赋值是arr1数值里面的内容，而不是数组本身
// console.log(arr1);//["aaa", "bbb"]
// arr2.push('ccc');
// console.log(arr2);//["aaa", "bbb", "ccc"]
// console.log(arr1);//["aaa", "bbb"]

// function test2(first,...arg){
//     for(let val of arg){//for of 循环
//         console.log(val);
//     }
// }

// test2(0,1,2,3,4,5,6,7);//1 2 3 4 5 6 7


//04
// //原始的字符串拼接
// {
//     let name = 'lois';
//     let blog = 'hello ' + name + ' my old friend.';
//     document.write(blog);
// }
// //用字符串模板拼接
// {
//     let name = 'jack';
//     let a = 1;
//     let b = 2;
//     let result = `${a+b}`;
//     let blog = `hello ${name} <br/>im rose`;
//     document.write(blog + result);//支持运算 html标签等
// }
// //原始的字符串查找
// {
//     let name = 'lois';
//     let blog = 'hello lois my sweety';
//     document.write(blog.indexOf(name)>0);//true
// }
// //es6 的字符串查找（是否存在）
// {
//     let name = 'lois';
//     let blog = 'hello lois my sweety';
//     document.write(`<br/>`+ blog.includes(name));//true
// }
// //es6 开头有没有？
// {
//     let name = 'lois';
//     let blog = 'hello lois my sweety';
//     document.write(`<br/>`+ blog.startsWith(name));//false
// }
// //es6 结尾有没有？
// {
//     let name = 'lois';
//     let blog = 'hello lois my sweety';
//     document.write(`<br/>`+ blog.endsWith(name));//false
// }
// //es6 字符串的复制
// {
//     document.write(`shuishui`.repeat(3));//shuishui三次
// }


//05
//声明一个二进制
var binary = 21; //注意后面的二进制格式是 0Bxxxx 小写的b也可以
console.log(binary); //21
//声明一个八进制
var octal = 438;
console.log(octal); //438
//数字判断
{
    var a = 11 / 4;
    console.log(Number.isFinite(a)); //true 判断是否是数字 不管是整数还是浮点型
    console.log(Number.isFinite('a')); //false
    console.log(Number.isFinite(NaN)); //false
    console.log(Number.isFinite(undefined)); //false
}
//判断 NaN
{
    console.log(Number.isNaN(NaN)); //true
}
//判断传进的数是不是整数
{
    var num = 123.1;
    console.log(Number.isInteger(num)); //false
}
//转换为整型
{
    var _num = 123.1;
    console.log(Number.parseInt(_num)); //123
}
//js中的最大整数
{
    var max = Math.pow(2, 53) - 1;
    console.log(max); //9007199254740991
    //最大最小安全整数常量
    console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
    console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
    console.log(Number.isSafeInteger(max));
}
