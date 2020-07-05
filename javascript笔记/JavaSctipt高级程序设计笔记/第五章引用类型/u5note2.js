var numbers = [1,2,3,4,5,4,3,2,1];

// alert(numbers.indexOf(4));//3 因为4的索引是3

// alert(numbers.lastIndexOf(4));//5 因为从后往前遍历出现的第一个4的索引是5

// alert(numbers.indexOf(4,4));//5

// alert(numbers.lastIndexOf(4,4))//3

// var person = {name:'nick'};
// var people = [{name:'nick'}];

// var morePeople = [person];

// alert(people.indexOf(person));//-1 虽然值相同但不是同一个引用，因此为-1（即这两个方法都是全等比较）
// alert(morePeople.indexOf(person));//0 

//迭代方法

// var numbers = [1,2,3,4,5,4,3,2,1];

// var everyResult = numbers.every(function(item,index,arry){
//     return (item > 2);
// });

// alert(everyResult);//false

// var someResult = numbers.some(function(item,index,arry){
//     return (item > 2);
// });

// alert(someResult);//true 


// var filterResult = numbers.filter(function(item,index,arry){
//     return (item > 2);
// });

// alert(filterResult);//3,4,5,4,3

// var mapResult = numbers.map(function(item,index,arry){
//     return item * 2;
// })

// alert(mapResult);//2,4,6,8,10,8,6,4,2

//缩小方法

var values = [1,2,3,4,5];

var sum = values.reduce(function(prev,cur,index,array){
    return prev + cur;
});

alert(sum);//15 第一次：prev=1，cur=2；第二次prev=3（1+2），cur=3...

var sum2 = values.reduceRight(function(prev,cur,index,array){
    return prev + cur;
});

alert(sum2);//15 第一次：prev=5，cur=4；第二次prev=9（4+5），cur=3...