// //函数声明
// sayHi(); //可以 因为会函数声明提升
// function sayHi(){
//     alert('Hi');
// }

// //函数表达式
// sayBye();//Uncaught TypeError: sayBye is not a function
// var sayBye = function(){
//     alert('Bye');
// }


//递归
// function factorial(num){
//     if(num <= 1){
//         return 1
//     }else{
//         return num * factorial(num-1);
//     }
// }

// var anotherFactorial = factorial;//此时anotherFactorial 是保存了原阶乘函数的函数
// factorial = null;//把原函数变空
// alert(anotherFactorial(3));//出错！原因是新函数保存的是原函数 而原函数里面调用了factorial 但此时 该函数已经为null 故报错

// //解决方法
// function factorial(num){
//     if(num <= 1){
//         return 1
//     }else{
//         return num * arguments.callee(num-1);
//     }
// }


// //闭包
// function createComparisonFunction(propertyName){
//     return function(obj1,obj2){
//         var val1 = obj1[propertyName];
//         var val2 = obj2[propertyName];

//         if(val1 < val2){
//             return -1;
//         }else if(val1 > val2){
//             return1
//         }else{
//             return 0;
//         }
//     }
// }

// //作用域链
// function compare(val1,val2){
//     if(val1 < val2){
//         return -1;
//     }else if(val1 > val2){
//         return1
//     }else{
//         return 0;
//     }
// }

// var result = compare(5,10);

// /*  1 先定义了compare（）函数
//     2 在全局作用域中掉调用它 此时会创建一个包含 this arguments val1 val2 的活动对象
//       而全局执行环境的变量对象（this result compare） 在compare（）函数的执行环境的作用域链中处于第二位
//     3 这个作用域链会被保存在内部的[[Scope]]属性中
// */


// //闭包与变量
// function createFunctions(){
//     var result = new Array();

//     for(var i=0;i<10;i++){
//         result[i] = function(){
//             console.log(i)
//             return i;
//         }
//     }
//     return result;
// }

// createFunctions();//该函数会返回一个函数数组 表面上看每个函数都会返回自己的下标索引值 但事实上全都是10
// //原因是每个函数都保存着createFunctions()函数的活动对象，所有他们的引用都是同一个变量i 当createFunctions函数返回后 i==10

// //强制闭包 让行为符合预期
// function createFuncitions2(){
//     var result = new Array();

//     for(var i=0;i<10;i++){
//         result[i] = function(num){
//             return function(){
//                 return num
//             }
//         }(i);//立即函数 将循环中的i传入
//     }
//     return result;
// }


// //this对象
// var name = 'the window';
// //闭包中的this 由于使用了匿名函数 所以this的指向为window
// var obj = {
//     name:'the obj',
//     getName:function() {//该方法返回一个匿名函数
//         return function() {
//             return this.name;
//         }
//     }
// }
// alert(obj.getName()());//the window

// var name = 'the window';
// //不闭包this就指向对象本身
// var obj = {
//     name:'the obj',
//     getName:function() {
//             return this.name;

//     }
// }
// alert(obj.getName());//the obj

// //让闭包访问对象本身 需要一个中间变量来保存this
// var name = 'the window';
// var obj = {
//     name:'the obj',
//     getName:function() {//该方法返回一个匿名函数
//         var that = this;
//         return function() {
//             return that.name;
//         }
//     }
// }
// alert(obj.getName()());//the obj



//模仿块级作用域
function outputNumber(count){
    for(var i=0;i<count;i++){
        alert(i);// 0 1 2 
    }//在java中 i 在循环结束后就会被销毁 
    //可是在js中 函数内部还是能访问到i
    alert(i);//计数 3
}
outputNumber(3);

//解决方法1 let关键字
function outputNumber2(count){
    for(let i=0;i<count;i++){
        alert(i);// 0 1 2 
    }//在java中 i 在循环结束后就会被销毁 
    //其实只要把var关键字改成let即可 
    alert(i);// i is not defined
}
outputNumber2(3);

//解决方法2 块级作用域（匿名函数立即执行）
function outputNumber3(count){
    (function(){
        for(var i=0;i<count;i++){
            alert(i);//0 1 2
        }
    })();
    alert(i);// i is not defined
}
outputNumber3(3);