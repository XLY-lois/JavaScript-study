//加载事件函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value){
    if(!element.className){//如果没有类名
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;

    }

}
//修改导航栏选中项颜色的函数
function highlightPage(){
    if(!document.getElementsByTagName) return false;//元素列表为空
    if(!document.getElementById) return false;
    var headers = document.getElementsByTagName('header');
    if(headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName('nav');
    if(navs.length == 0) return false;
    //获取导航链接 然后遍历
    var links = navs[0].getElementsByTagName('a');
    var linkurl;
    for(let i=0; i<links.length; i++){
        //比较当前url和链接url
        linkurl = links[i].getAttribute('href');//获取链接中的href属性
        if(window.location.href.indexOf(linkurl) != -1){//window.location.href是当前页面 url
            links[i].className = 'here';//修改css样式
            let linktext = links[i].lastChild.nodeValue.toLocaleLowerCase();//将当前所在页面导航栏的文本取出并转为小写
            document.body.setAttribute('id',linktext);//对当前body添加id 以达到不同页面的body有不同的css样式
        }
    }
}
addLoadEvent(highlightPage);