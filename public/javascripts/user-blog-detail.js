$(function(){
        var string = $('#blog-content').text();

        $('#blog-content').text('');
        $('#blog-content').append(string);
        $('body').removeAttr('style')

})