$(document).ready(function(){
    // 定义正在显示的元素的下标
    var index = 0;
    
    function clock(){
        index++;
        if(index>4){
            index = 0;
        }
        console.log(index)
        animate(index);
    }
    var int = setInterval(clock,3000);

    function animate(index){
        $(".pic img").eq(index).show().siblings().hide()
        $(".point>span").eq(index).addClass("active").siblings().removeClass("active");
    }
})