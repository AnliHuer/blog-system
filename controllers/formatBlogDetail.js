var formatDate = require('./formatDate');

function formatBlogDetail(blogDetail) {
    return {
        id: blogDetail.id,
        blogTagId: blogDetail.blogTagId,
        userId: blogDetail.userId,
        content: blogDetail.content,
        createdAt: formatDate(blogDetail.createdAt),
        updatedAt: formatDate(blogDetail.updatedAt),
        blogName: blogDetail.blogName
    }
}

module.exports = formatBlogDetail;
