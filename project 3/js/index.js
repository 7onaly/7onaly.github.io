var titleList = document.querySelectorAll("div.m-title");
var iconList = document.querySelectorAll("div.m-icon");
var whatList = document.querySelectorAll("span.m-main-what");
var iList = document.querySelectorAll("div.icon");
var itList = document.querySelectorAll("div.icon-text");
var titleArray = new Array();
var iconArray = new Array();
var whatArray = new Array();
var iArray = new Array();
var itArray = new Array();

for (i = 0; i < titleList.length; i++) {
    var item = titleList[i];
    titleArray[i] = titleList[i];
    item.addEventListener('click', Title);
}
for (i = 0; i < iList.length; i++) {
    var item = iList[i];
    iArray[i] = iList[i];
    item.addEventListener('click', I);
}
for (i = 0; i < itList.length; i++) {
    var item = itList[i];
    itArray[i] = itList[i];
    item.addEventListener('click', It);
}
for (i = 0; i < whatList.length; i++) {
    var item = whatList[i];
    whatArray[i] = whatList[i];
    item.addEventListener('click', What);
}

function Title(e) {
    for (i = 0; i < titleList.length; i++) {
        titleList[i].style.borderBottomColor = "white";
        titleList[i].style.fontWeight = "normal";
    }
    var i = titleArray.indexOf(e.target);
    titleList[i].style.borderBottomColor = "coral";
    titleList[i].style.fontWeight = "bolder";
}

function I(e) {
    for (i = 0; i < iconList.length; i++) {
        iconList[i].style.borderColor = "whitesmoke";
        iconList[i].style.borderBottomColor = "coral";
    }
    var i = iArray.indexOf(e.target);
    console.log(i);
    iconList[i].style.borderColor = "coral";
    iconList[i].style.borderBottomColor = "whitesmoke";
}

function It(e) {
    for (i = 0; i < iconList.length; i++) {
        iconList[i].style.borderColor = "whitesmoke";
        iconList[i].style.borderBottomColor = "coral";
    }
    var i = itArray.indexOf(e.target);
    iconList[i].style.borderColor = "coral";
    iconList[i].style.borderBottomColor = "whitesmoke";
}

function What(e) {
    for (i = 0; i < whatList.length; i++) {
        whatList[i].style.color = "black";
    }
    var i = whatArray.indexOf(e.target);
    whatList[i].style.color = "coral";
}