$(function () {
    //滑动门
    $("header > button:first-child").css("background-color", "gray");
    $("header > button").each(function(i,e){
        $(e).click(function(){
            $("header > button").css("background-color", "white");
            $(this).css("background-color", "gray");
            $("section").hide();
            $("section:nth-child("+(i+2)+")").show();
        })
    });
    //图片放大
    $(".m-imgPg>img").each(function (i, e) {
        $(e).attr("src", "img/" + i + ".jpg");
    })
    $(".m-imgPg>img").click(function () {
        $(".m-bigimg>img").attr("src", "img/" + $(".m-imgPg>img").index(this) + ".jpg");
        $(".m-bigimg").show();
    })
    $(".m-bigimg>button").click(function () {
        $(".m-bigimg").hide();
    })
    //数据管理
    $(".m-dataPg>button").click(function(){
        $(".m-dataPg").append("<li><button>Delete</button></li>");
        $(".m-dataPg>li>button").click(function () {
            $(this).parent().remove();
        })
    })
    $(".m-dataPg>li>button").click(function(){
        $(this).parent().remove();
    })
});