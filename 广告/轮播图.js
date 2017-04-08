/**
 * Created by Administrator on 2016/10/28 0028.
 */

var i=0;
var time;
$('#head li').on('click',function(){
    i= $(this).index();
    $('.content').css('display','none');
    $('.content').eq(i).css('display','block');
    $('#head li').removeClass('selected');
    $(this).addClass('selected');
});
function timer(){
    time = setInterval(function(){
        $('#head li').removeClass('selected');
        $('#head li').eq(i).addClass('selected');
        $('.content').css('display','none');
        $('.content').eq(i++).css('display','block');
        if(i>$('.content').size()-1) {
            i = 0;
        }
    },2000);
}
timer();
$('#head').on('mouseover',function(){
    clearInterval(time);

});
$('#head').on('mouseout',function(){
    timer();
});
//老师的想法中展示可以不用设置css，可以直接调用show(),hide()
//在找下面每个div不需要找.content，只需要找到它的siblings()即可
//鼠标划入head清除定时器，划出head回复定时器，可以换成hover(function(){},function(){})