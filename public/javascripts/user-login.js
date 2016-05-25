function userLogin() {
    var userEmail = $('#inputUserEmail').val();
    var userPassword = $('#inputPassword').val();

    $.post('/user-login', {
        userEmail: userEmail,
        userPassword: userPassword
    }, function (resp) {
        if (resp.message === 'success') {
            location.href = 'user-index';
        } else {
            $('.prompt-message').text('邮箱或密码错误!');
            $('#inputPassword').val('');
            $('#inputUserEmail').val('');
        }
    })
}


$(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        userLogin();
    });

    $('.form-rigister').on('click', function () {
        location.href = "user-register"
    });
});

