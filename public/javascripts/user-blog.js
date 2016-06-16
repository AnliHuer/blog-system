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

            $('#search-total').text(resp.blogDetails.length);
        });
    });
}


function searchBlog(blogDetails) {
    var searchInput = $('#blog-search');
    var searchList = $('#blog-list');
    var list = '';

    searchInput.on('keyup', function () {
        var word = searchInput.val();
        var regExp = new RegExp(word, 'gim');
        list = '';

        if (word !== '') {
            $.get('/user-blog/search', function (resp) {
                var total = 0;

                resp.blogList.forEach(function (val) {
                    if (val.blogDetail.blogName.search(regExp) !== -1) {
                        var newTitle = val.blogDetail.blogName.replace(regExp, '<span class="highlight">$&</span>');

                        list += '<' + 'a href="user-blog-detail?id=' + parseInt(val.blogDetail.id)
                            + '" class="blog-name">' + newTitle + '</a>'
                            + '<' + 'li class="blog-createdAt">' + val.blogDetail.createdAt + '</li>'
                            + '<' + 'div class="blog-line"></div>';

                        total++;
                    }
                });
                searchList.html(list);

                $('#search-total').text(total);
            });
        } else {
            $.get('/user-blog/search', function (resp) {
                resp.blogList.forEach(function (val) {
                    list += '<' + 'a href="user-blog-detail?id=' + parseInt(val.blogDetail.id)
                        + '" class="blog-name">' + val.blogDetail.blogName + '</a>'
                        + '<' + 'li class="blog-createdAt">' + val.blogDetail.createdAt + '</li>'
                        + '<' + 'div class="blog-line"></div>';
                });
                searchList.html(list);

                $('#search-total').text(resp.blogList.length);
            });
        }
    });
}

$(function () {
    getBlogByTag();

    searchBlog();
})