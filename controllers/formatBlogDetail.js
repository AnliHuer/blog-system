function formatDate(data) {
    var date = data.getDate() < 10 ? "0" + data.getDate() : data.getDate().toString();
    var month = data.getMonth() < 10 ? "0" + (data.getMonth() + 1 ) : (data.getMonth() + 1).toString();
    var year = data.getFullYear().toString();

    return (date + '/' + month + '/' + year);
}

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
