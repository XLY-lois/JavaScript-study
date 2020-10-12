# Class 类
---
### 类名大写
```
//声明类
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('水水')+'skill:'+val);
    }
}
//使用
let lois = new Coder;
lois.name('水水');//水水
lois.skill('发呆');//水水skill:发呆
```

### 类的传参
```
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('水水')+'skill:'+val);
    }
    //类的参数
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a+this.b;
    }
}

let jack = new Coder(1,2);
console.log(jack.add());//3
```

### 类的继承
```
//类的继承
class Htmler extends Coder{

}
let h = new Htmler;
h.name('xushuishui');//xushuishui 继承了Coder的方法
```