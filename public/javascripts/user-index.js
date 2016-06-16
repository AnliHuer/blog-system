$(function () {
    $('.blogs').on('click', 'a', function () {

        $.post('user-blog-detail?id='+this.id,function(resp){
            location.href('user-blog-detail');
        });
    });
})