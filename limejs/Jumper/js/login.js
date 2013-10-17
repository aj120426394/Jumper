$(document).ready(function(){
    Parse.initialize("67U33LB7BRGpGARddbJvshafxX5voTzvlY4gWlWE", "a9E5kBevwjKHlxcZh8ALAhmuLvrH66Lt2mjsaSXl");
    $('#loginform').show();
    $('#registerform').hide();
    
    $('#login').on("submit",function(e){
    	e.preventDefault();
    	var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        //console.log(username);
        //console.log(password);
        
        Parse.User.logIn(username, password, {
          success: function(user) {
            // Do stuff after successful login.
            window.sessionStorage.setItem('username',username);
            //window.location = "main.html";
            $('#loginform').hide();
            $('#loginbuttons').hide();
            //$('#chapters').show();
            var currentUser = Parse.User.current();
            var userID = currentUser.get("username")
            console.log(userID);
            window.location.href = 'Jumper.html';
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            alert("Error: " + " " + error.message);
          }
        });
    });
        
    $('#registerbtn').click(function(){
        $('#loginform').hide();
        $('#registerform').show();
    });
});