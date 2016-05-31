function saveUserInfo() {
    var userName = $('#inputUserName').val();
    var userPhone = $('#inputUserPhone').val();
    var userCareer = $('#inputUserCareer').val();
    var userLog = $('#inputUserLog').val();

    $.ajax({
        type: 'POST',
        url: '/user-about',
        data: {
            userName: userName,
            userPhone: userPhone,
            userCareer: userCareer,
            userLog: userLog
        }
    }).done(function (resp) {
        if (resp.message === 'success') {

            $('.prompt-message').text('保存成功！');

            setTimeout(function () {
                $('.prompt-message').text('');
            }, 3000);
        } else {
            $('.prompt-message').text('更新失败！');
        }
    });
}


$(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        saveUserInfo();
    });
})