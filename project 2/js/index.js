var li = document.querySelectorAll("li.m-item");
var array = new Array();

for(i = 0; i < li.length; i++){
    var item = li[i];
    array[i] = li[i];
    item.addEventListener('click', doSomething);
}

function doSomething(e){
    var i = array.indexOf(e.target);
    alert(i+1);
    switch(i){
        case 0:
            li[0].style = "color: red;";
            break;
        case 1:
            var time = new Date();
            var month = time.getMonth() > 8 ? time.getMonth() + 1 : "0" + (time.getMonth() + 1);
            var date = time.getDate() > 9 ? time.getDate() : "0" + time.getDate();
            document.querySelector("h1").innerHTML = time.getUTCFullYear() + "-" + month + "-" + date;
            break;
        case 2:
            document.querySelector("ul").classList.add("fn-active");
            break;
        case 3:
            document.querySelector("ul").removeChild(li[7]);
            break;
        case 4:
            window.open().location.assign("https://www.taobao.com/"); 
            break;
        case 5:
            var list = document.createElement("li");
            list.appendChild(document.createTextNode("p9"));
            document.querySelector("ul").appendChild(list);
            list.addEventListener('click', doSomething);
            array[8] = list;
            break;
        case 6:
            mbox = document.getElementsByClassName("m-box");
            for(i = 0; i < mbox.length; i++){
                mbox[i].style.width = innerWidth;
            }
    }
}
