"use strict";

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

function test2(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    // console.log(arg.length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;
            //for of 循环
            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

test2(0, 1, 2, 3, 4, 5, 6, 7); //7 因为是除了已知参数之外剩下的个数
