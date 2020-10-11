//代理 增强对象和函数
let obj = {
    add:function(val){
        return val+100;
    },
    name:'lois'
};
// console.log(obj.add(100));//200
// console.log(obj.name);//lois

let pro = new Proxy({
    add:function(val){
    return val+100;
    },
    name:'lois'
    },{
        //get 参数一就是传进来的对象 参数二是对象的属性值 参数三可省 tare
        get:function(target,key,property){
            console.log('get');
            console.log(target);
            return target[key];
        },
        //set 
        set:function(target,key,value,receiver){
            console.log(`setting ${key} = ${value}`);
            return target[key]=value;
        }

    });
//进入了预处理机制 也得到了值
console.log(pro.name);// get lois
pro.name = '水水';//setting name = 水水 触发了set函数
console.log(pro.name);//如果没有return name还是lois 原因是没返回


//apply
let target = function(){
    return 'i m lois';
};

let handler = {
    apply(target,ctx,args){
        console.log('apply');
        return Reflect.apply(...arguments);
    }
}

let pro2 = new Proxy(target,handler);

console.log(pro2());//i m lois