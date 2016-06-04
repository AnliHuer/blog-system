function isNotExist(tag, blogTags) {
    var flag = 'true';

    blogTags.forEach(function (blogTag) {
        if (tag === blogTag) {
            flag === 'false';
        }
    })

    return flag;
}

function buildBlogTags(blogList) {
    var blogTags = [];

    for (var i = 0; i < blogList.length; i++) {
        if (isNotExist(blogList[i].blogTag.tag, blogTags)) {
            blogTags.push({id: blogList[i].blogTag.id, tag: blogList[i].blogTag.tag});
        }
    }

    return blogTags;
}

module.exports = buildBlogTags;
