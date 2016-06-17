function addWord() {
    $('#word-button').on('click', function () {
        var message = $('#input-word').val();
        var blogDetailId = $('#blog').data('id');

        $.post('/user-blog-detail/add-word', {
            blogDetailId: blogDetailId,
            message: message
        }, function (resp) {
            var string = '<'+'li class="message">'+resp.blogMessage.message+'</li>'+
                '<'+'span class="message-userName" data-id='+resp.user.userId+'>'+resp.user.userName+'</span>'+
                '<span class="message-createdAt">'+resp.blogMessage.createdAt+'</span>'+
                '<'+'div class="message-line"></div>';

            $('#input-word').val('');
            $('#user-message').prepend(string);
        });
    });
}

$(function () {
    var string = $('#blog-content').text();

    $('#blog-content').text('');
    $('#blog-content').append(string);
    $('body').removeAttr('style');

    addWord();
})