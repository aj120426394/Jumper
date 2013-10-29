$(document).ready(function() {

	console.log("document ready function started");

    Parse.initialize("67U33LB7BRGpGARddbJvshafxX5voTzvlY4gWlWE", "a9E5kBevwjKHlxcZh8ALAhmuLvrH66Lt2mjsaSXl");
    
    //var username = "pete";
    //var password = "wnr*1421";
    var gfq1 = false; //bool
    var gfq2 = false; //bool
    var gfq3 = false; //bool
    var gfclue = false; //bool
    //var src;
    //var soundInstance;
    
    $('#clue1').hide();
    $('#clue1small').hide();
    $('#museumguidegif').hide();
    
    // forced login used for testing only
    //Parse.User.logIn(username, password, {
    //	success: function(user) {
    //    	// Do stuff after successful login.
    //        window.sessionStorage.setItem('username',username);
    //        //window.location = "main.html";
    //        alert("successfully logged into parse");
    //    },
    //    error: function(user, error) {
    //        // The login failed. Check error to see why.
    //        alert("Error: " + " " + error.message);
    //    }
    //}); //end parse login function
    
    // get parse current user data
    
    var currentUser = Parse.User.current();
    if (currentUser) {
    	console.log(currentUser);
    	var userID = currentUser.get("username");
		var userID2 = currentUser.get("username").charAt(0).toUpperCase() + currentUser.get("username").slice(1);
    
    	console.log(userID);
    
    	// get gold rush journal data from parse
    
    	gfq1 = currentUser.get("grq1");
    	gfq2 = currentUser.get("grq2");
    	var gfq2text = currentUser.get("grq2text");
    	gfq3 = currentUser.get("grq3");
    	var gfq3text = currentUser.get("grq3text");
    	gfclue = currentUser.get("grclue");
    	console.log(gfclue);
    
    } else {
    // do nothing
    }
    
    
    
    // header for the page
    
    document.getElementById("journalname").innerHTML = userID2+"'s Investigation Journal";
    
    // check to see if gold rush answers already provided and put them into the journal
    
    if (gfq1) {
    	btn = document.getElementById("gfanswer2");
    	btn.checked = true;
    	console.log("completed check for q1 answered");
    }
    
    if (gfq2 && gfq2text!="undefined" && gfq2text!="") {
    	document.getElementById("gfq2text").value=gfq2text;
    	console.log("added text for q2 box");
    } else {
    	gfq2=false;
    }
    
    if (gfq3 && gfq3text!="undefined" && gfq3text!="") {
    	document.getElementById("gfq3text").value=gfq3text;
    	console.log("added text for q3 box");
    } else {
    	gfq3=false;
    }
    
    //init(); // for soundjs ignore until we can get it working
    
    //responding to question 1
    
    $('#gfanswer1').click(function(e) {
    	//alert("To be spoken:\nNo, that's not the right answer\nTry again");
    	//voice to go here
    	playpart2();
    });
    
    $('#gfanswer2').click(function(e) {
    	//alert("To be spoken:\nThat's right\nWell done!");
    	gfq1 = true;
    	//voice to go here
    	playpart7();
    });
    
    $('#gfanswer3').click(function(e) {
    	//alert("To be spoken:\nNo, that's not the right answer\nTry again");
    	//voice to go here
    	playpart3();
    });
    
    // save answers function including sending information to parse
    
    $('#lsbuttontext').click(function(e) {
    	gfq2text = document.getElementById("gfq2text").value;
    	if (gfq2text!="" && gfq2text!="undefined") {
    		gfq2 = true;
    	} else {
    		gfq2=false;
    	};
    	gfq3text = document.getElementById("gfq3text").value;
    	if (gfq3text!="" && gfq3text!="undefined") {
    		gfq3 = true;
    	} else {
    		gfq3=false;
    	};
    	if (gfq1 && gfq2 && gfq3) {
    		currentUser.save(null, {
    			success: function(currentUser) {
    				currentUser.set("grq1", gfq1);
    				currentUser.set("grq2", gfq2);
    				currentUser.set("grq2text", gfq2text);
    				currentUser.set("grq3", gfq3);
    				currentUser.set("grq3text", gfq3text);
    				currentUser.save();
    			},
    			error: function(gameScore, error) {
			    // Execute any logic that should take place if the save fails.
			    // error is a Parse.Error with an error code and description.
			  }
    		});
    		playpart4();
    	} else {
    		//alert("To be spoken\nYou haven't answered all of the questions\nPlease check them and try again");
    		playpart6();
    	};
    	//voice to go here
    });
    
    playpart1();

}); //end document ready function

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	console.log("in the drop function");
	$('#clue1').show();
	$('#clue1small').hide();
	//var data=ev.dataTransfer.getData("Text");
	//ev.target.appendChild(document.getElementById(data));
	playpart5();
}

function init() {
	// if initializeDefaultPlugins returns false, we cannot play sound in this browser
	console.log("in the init() function for soundjs");
	
	if (!createjs.Sound.initializeDefaultPlugins()) {
		console.log("error with soundjs plugins");
		return;
	}
 
	createjs.Sound.addEventListener("fileload", handleLoad);
	createjs.Sound.registerSound("../assets/audio/test1.mp3|../assets/audio/test1.ogg", "pete");
	console.log("sound should be registered");
	}
 
function handleLoad(event) {
	console.log("sound should be playing");
	createjs.Sound.play("pete");
}

function playpart1() {
	setTimeout (function() {
		document.getElementById('part1').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show()},
		3000);
		endpart1();
}

function endpart1() {	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide()},
		25000);
}

function playpart2() {
	stopallaudioandgifs();
		document.getElementById('part2').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show();
		endpart2();
}

function endpart2() {	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide()},
		10000);
}

function playpart3() {
	stopallaudioandgifs();
		document.getElementById('part3').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show();
		endpart3();
}

function endpart3() {	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide()},
		10000);
}

function playpart4() {
	stopallaudioandgifs();
    	$('#clue1small').show();
		document.getElementById('part4').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show();
		endpart4();
}

function endpart4() {	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide()},
		9000);
}

function playpart5() {
	stopallaudioandgifs();
		document.getElementById('part5').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show();
		endpart5();
}

function endpart5() {
	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide();
		window.location.href = 'Jumper.html';
		},
		13000);
}

function playpart6() {
	stopallaudioandgifs();
		document.getElementById('part6').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show();
		endpart6();
}

function endpart6() {	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide()},
		6000);
}

function playpart7() {
	stopallaudioandgifs();
		document.getElementById('part7').play();
		$('#museumguideimage').hide();
		$('#museumguidegif').show();
		endpart7();
}

function endpart7() {	
	setTimeout (function() {
		$('#museumguideimage').show();
		$('#museumguidegif').hide()},
		4000);
}

function stopallaudioandgifs() {
	console.log("Trying to stop all audio");
	part1.pause();
	part1.currentTime = 0;
	part2.pause();
	part2.currentTime = 0;
	part3.pause();
	part3.currentTime = 0;
	part4.pause();
	part4.currentTime = 0;
	part5.pause();
	part5.currentTime = 0;
	part6.pause();
	part6.currentTime = 0;
	part7.pause();
	part7.currentTime = 0;
	$('#museumguideimage').show();
	$('#museumguidegif').hide();
}