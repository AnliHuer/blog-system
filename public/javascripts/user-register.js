function userRegister() {
    var userEmail = $('#inputUserEmail').val();
    var userPassword = $('#inputPassword').val();

    $.post('/user-register', {
        userEmail: userEmail,
        userPassword: userPassword
    }, function (resp) {
        if (resp.message === 'success') {
            $('.label-user-email').text('注册成功！ 3秒后将自动跳转至登录页面...');

            setTimeout(function () {
                location.href = 'user-login';
            }, 3000);
        } else {
            $('.label-user-email').text('该邮箱已注册！');
        }
    });
}


$(function () {
    $('#register').on('click', function () {
        userRegister();
    })

    $('.form-login').on('click', function () {
        location.href = 'user-login';
    });
})