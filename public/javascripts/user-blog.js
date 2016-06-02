function getBlogByTag() {
    $('#blog-tag').on('click', 'a', function () {
        $.get('/user-tag', {blogTagId: this.id}, function (resp) {
            var string = '';

            $('#blogs ul').remove();
            resp.blogDetails.forEach(function (val) {
                string += '<' + 'a href="user-blog-detail?id="' + val.id + ' class="blog-name">' + val.blogName + '</a>' +
                    '<' + 'li class="blog-createdAt">' + val.createdAt + '</li>' +
                    '<' + 'div class="blog-line"></div>';
            })

            $('#blogs').append('<' + 'ul>' + string + '</ul>');
        });
    });
}


$(function () {
    getBlogByTag();
})