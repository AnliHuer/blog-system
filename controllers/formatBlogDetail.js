var formatDate = require('./formatDate');


function formatBlogDetail(blogDetail) {
    return {
        id: blogDetail.id,
        blogTagId: blogDetail.blogTagId,
        userId: blogDetail.userId,
        abstract: blogDetail.content.substr(0,200),
        content: blogDetail.content,
        contentHtml: blogDetail.contentHtml,
        createdAt: formatDate(blogDetail.createdAt),
        updatedAt: formatDate(blogDetail.updatedAt),
        blogName: blogDetail.blogName,
        clickNum: blogDetail.clickNum
    }
}

module.exports = formatBlogDetail;
