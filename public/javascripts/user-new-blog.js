function saveBlog() {
    $('#save-blog').on('click', function () {
        var blogName = $('#blog-title').val();
        var blogTag = $('#blog-tag').val();
        var content = UE.getEditor('editor').getContentTxt();
        var contentHtml = UE.getEditor('editor').getContent();

        $.post('/user-new-blog/save-blog', {
            blogName: blogName,
            blogTag: blogTag,
            content: content,
            contentHtml: contentHtml
        }, function (resp) {
            location.href = "user-blog-detail?id=" + resp.data;
        });
    });
};

function addBlogTag() {
    var flag = true;

    $('#add-tag').on('click', function () {
        var string = '<' + 'input type="text" class="form-control" id="blog-tag">';

        if (flag === true) {
            $('#blog-tag').remove();
            $('#label-tag').append(string);
            
            flag = false;
        } else {
            $.get('user-new-blog/get-tag', function (resp) {
                $('#blog-tag').remove();

                var selectString = '<' + 'select type="text" class="form-control" id="blog-tag">';
                resp.blogTags.forEach(function (data) {
                    console.log(data.id);

                    selectString += '<' + 'option id=' + data.id + '>' + data.tag + '</option>'
                })
                selectString += '<' + '/select>';

                $('#label-tag').append(selectString);
                
                flag = true;
            });
        }
    });
}

$(function () {
    var ue = UE.getEditor('editor');

    saveBlog();

    addBlogTag();
})