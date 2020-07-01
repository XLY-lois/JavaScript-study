function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    var elem = document.getElementById('message');
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '100px';
    movement = setTimeout('moveMessage()',5000);
}

function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    var elem = document.getElementById('message');
    elem.style.left = '200px';
}

function addLoadEvent(func) {//页面加载时可同时完成多个函数（可复用）
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(positionMessage);
