//编写一个函数：用于显示缩略语列表
function displayAbbr(){
    var abbrs = document.getElementsByTagName('abbr');//abbr数组
    if(abbrs.length < 1 ){
        return false;
    }
    //数组用来装缩略词与解释的键值对
    var defs = new Array();
    for(var i=0; i<abbrs.length; i++){
        var definition = abbrs[i].getAttribute('title');
        var key = abbrs[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建列表
    var dlist = document.createElement('dl');
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc)
    }
    //将列表插入到文档中
    var header = document.createElement('h2');
    var header_text = document.createTextNode('Abbreviations');
    header.appendChild(header_text);
    //将header追加到body
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
window.onload = displayAbbr;