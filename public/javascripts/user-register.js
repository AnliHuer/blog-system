function userRegister() {
    var userName = $('#inputUserName').val();
    var userEmail = $('#inputUserEmail').val();
    var userPassword = $('#inputPassword').val();
    var userPhone = $('#inputUserPhone').val();
    var userCareer = $('#inputUserCareer').val();
    var userLog = $('#inputUserLog').val();

    $.post('/user-register', {
        userName: userName,
        userRole: 'user',
        userEmail: userEmail,
        userPassword: userPassword,
        userPhone: userPhone,
        userCareer: userCareer,
        userLog: userLog
    }, function (resp) {
        if (resp.message === 'success') {
            $('.prompt-message').text('注册成功！ 3秒后将自动跳转至登录页面...');

            setTimeout(function () {
                location.href = 'user-login';
            }, 3000);
        } else {
            $('.prompt-message').append('该邮箱已注册！');
            $('#inputUserName').val('');
            $('#inputPassword').val('');
            $('#inputUserEmail').val('');
            $('#inputUserPhone').val('');
            $('#inputUserCareer').val('');
            $('#inputUserLog').val('');
        }
    });
}


$(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        userRegister();
    });

    $('.form-login').on('click', function () {
        location.href = 'user-login';
    });
})
