function formatDate(data) {
    var date = data.getDate() < 10 ? "0" + data.getDate() : data.getDate().toString();
    var month = data.getMonth() < 10 ? "0" + (data.getMonth() + 1 ) : (data.getMonth() + 1).toString();
    var year = data.getFullYear().toString();

    return (date + '/' + month + '/' + year);
}

module.exports = formatDate;
