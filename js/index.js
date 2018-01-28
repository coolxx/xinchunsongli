$(function () {
    $('.m2-btn li').each(function (index) {
        $(this).mouseenter(function () {
            $('.m2-btn li').removeClass('on').eq(index).addClass('on');
            $('.m2-show-wrap').hide().eq(index).show()
        })
    })
})