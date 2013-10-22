$(document).ready(function(){
    Parse.initialize("67U33LB7BRGpGARddbJvshafxX5voTzvlY4gWlWE", "a9E5kBevwjKHlxcZh8ALAhmuLvrH66Lt2mjsaSXl");
    
    $('#register').on("submit",function(e){
    	e.preventDefault();
        var username = $('#username2').val();
        var password = $('#password2').val();
        var confirmpassword = $('#confirmpassword').val();
        var email = $('#email').val();
        
        console.log(username);
        console.log(password);
        console.log(confirmpassword);
        
        
        if (confirmpassword != password) {
            document.getElementById('confirmpassword').setCustomValidity('The two passwords must match.');
        } else {
            // input is valid -- reset the error message
            document.getElementById('confirmpassword').setCustomValidity('');
            
            var user = new Parse.User();
            user.set("username", username);
            user.set("password", password);
            user.set("email", email);
            user.set("tutDone",false);
            user.signUp(null, {
              success: function(user) {
                // Hooray! Let them use the app now.
                alert("Successfully Registered! Login to your account now.");
				$('#registerform').hide();
				$('#loginform').show();
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                console.log(error);
                alert("Error: " + " " + error.message);
              }
            });
		}
        
        
    });
});
