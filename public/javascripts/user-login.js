$(function () {
    $('#login').on('click', function () {
        var userEmail = $('#inputUserEmail').val();
        var userPassword = $('#inputPassword').val();
        $.post('/user-login', {
            userEmail: userEmail,
            userPassword: userPassword
        }, function (resp) {
            console.log(resp);
            if (resp.message === 'success') {
                location.href = 'user-index';
            } else {
                console.log('fail');
                $('.label-user-email').text('邮箱或密码错误!');
            }
        })
    });

    $('.form-rigister').on('click', function () {
        location.href = "user-register"
    });
});

