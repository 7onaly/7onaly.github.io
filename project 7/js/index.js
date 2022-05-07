var btnList = [].slice.call(document.querySelectorAll("header>button"));
var imgList = [].slice.call(document.querySelectorAll("img"));
var pageList = [].slice.call(document.querySelectorAll("section"));
var liList = [].slice.call(document.querySelectorAll(".m-dataPg>li>button"));
var bigImg = document.querySelector("div.m-bigimg");
var closeBtn = document.querySelector(".m-bigimg>button");
var addBtn = document.querySelector(".m-dataPg>button");
//翻页函数
function BTN(e) {
    btnList.forEach(btn => {
        btn.style.backgroundColor = "white";
    });
    e.target.style.backgroundColor = "gray";
    for (i = 0; i < btnList.length; i++) {
        if (btnList.indexOf(e.target) == i) pageList[i].removeAttribute("hidden");
        else pageList[i].setAttribute("hidden", "true");
    }
}
//图片放大
function IMG(e) {
    bigImg.removeAttribute("hidden");
    imgList[10].src = "img/" + imgList.indexOf(e.target) + ".jpg";
}
//添加数据
function ADD() {
    btn = document.createElement("button");
    btn.innerHTML = "Delete";
    l = document.createElement("li");
    l.appendChild(btn);
    document.querySelector("section.m-dataPg").appendChild(l);
    liList.push(btn);
    btn.addEventListener('click', DELETE);
}
//删除数据
function DELETE(e){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}
//初始化翻页按钮
btnList[0].style.backgroundColor = "gray";
for (i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click',BTN)
}
//初始化图片
for(i = 0; i < 10; i++){
    imgList[i].src = "img/" + i + ".jpg";
    imgList[i].addEventListener('click', IMG)
}
//初始化放大图片关闭按钮
closeBtn.addEventListener('click', function () {
    bigImg.setAttribute("hidden", "true");
    flag = 0;
})
//初始化添加按钮
addBtn.addEventListener('click', ADD);
//初始化关闭按钮
liList.forEach(li => {
    li.addEventListener('click', DELETE);
});
