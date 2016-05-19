
$(function () {
    $('#login').on('click', function () {
        var userEmail = $('#inputUserEmail').val();
        var userPassword = $('#inputPassword').val();
        $.post('/user-login', {
            userEmail: userEmail,
            userPassword: userPassword
        }, function (resp) {
            console.log(resp.status);
        })
    });

    $('.form-rigister').on('click',function(){
        location.href = "user-register"
    });
});

