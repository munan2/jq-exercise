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
//��ʦ���뷨��չʾ���Բ�������css������ֱ�ӵ���show(),hide()
//��������ÿ��div����Ҫ��.content��ֻ��Ҫ�ҵ�����siblings()����
//��껮��head�����ʱ��������head�ظ���ʱ�������Ի���hover(function(){},function(){})