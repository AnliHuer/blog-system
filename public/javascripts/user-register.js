$(function(){
    $('#register').on('click',function(){
        var userEmail = $('#inputUserEmail').val();
        var userPassword = $('#inputPassword').val();
        console.log(userEmail);

        $.post('/user-register',{
            userEmail: userEmail,
            userPassword: userPassword
        }, function(resp){
            console.log(resp.message);
        });
    })
})