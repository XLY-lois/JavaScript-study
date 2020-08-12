function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    var elem = document.getElementById('message');
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '100px';
    moveMessage("message",125,25,20);
}

// function moveMessage(){
//     if(!document.getElementById) return false;
//     if(!document.getElementById('message')) return false;
//     var elem = document.getElementById('message');
//     var xpos = parseInt(elem.style.left);//获取当前距离左侧的距离，由于属性带单位所以要转换类型
//     var ypos = parseInt(elem.style.top);//距顶部距离
//     if(xpos === 200 && ypos === 100) return true;//判断是否已经到达目标点
//     if(xpos < 200){
//         xpos++;
//     }
//     if(xpos > 200){
//         xpos--;
//     }
//     if(ypos < 100){
//         ypos++;
//     }
//     if(ypos > 100){
//         y--;
//     }
//     elem.style.left = xpos + 'px';
//     elem.style.top = ypos + 'px';
//     movement = setTimeout('moveMessage()',10);
// }

//抽象

function moveMessage(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);//获取当前距离左侧的距离，由于属性带单位所以要转换类型
    var ypos = parseInt(elem.style.top);//距顶部距离
    if(xpos === final_x && ypos === final_y) return true;//判断是否已经到达目标点
    if(xpos < final_x){
        xpos++;
    }
    if(xpos > final_x){
        xpos--;
    }
    if(ypos < final_y){
        ypos++;
    }
    if(ypos > final_y){
        ypos--;
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    var repeat = "moveMessage('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,10);
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

function prepartSlideshow(){
            //为图片应用样式
            var preview = document.getElementById('preview');
            preview.style.position = 'absolute';
            preview.style.left = '0px';
            preview.style.top = '0px';
            //取得列表中所有链接
            var list = document.getElementById('linklist');
            var links = list.getElementsByTagName('a');
            //添加mouseover 事件的动画效果
            links[0].onmouseover = function(){
                moveMessage('preview',-100,0,10);
            }
            links[1].onmouseover = function(){
                moveMessage('preview',-200,0,10);
            }
            links[2].onmouseover = function(){
                moveMessage('preview',-300,0,10);
            }
            
        }

addLoadEvent(prepartSlideshow);
