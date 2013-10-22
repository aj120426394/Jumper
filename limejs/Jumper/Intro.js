Jumper.intro1 = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var museum = new lime.Sprite().setFill('assets/museum.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(museum);
	
	var guy = new lime.Sprite().setFill('assets/img/museum-guide1.png').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	layer.appendChild(guy);
	
	var animated_guy = new lime.Sprite().setFill('assets/img/museum-guy2.gif').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	
	var roo = new lime.Sprite().setFill('assets/img/kangroo1.png').setSize(191,238).setPosition(-200,400).setAnchorPoint(0.5,0.5);
	layer.appendChild(roo);
	
	setTimeout(function(){
	layer.removeChild(guy);
	layer.appendChild(animated_guy);
	audio1 = new Audio('assets/audio/TutorialPt1.ogg'); 
	audio1.play();
	audio1.addEventListener('ended', function(){
	layer.removeChild(animated_guy);
	layer.appendChild(guy);
	})
	},1000);
	
	setTimeout(function(){
	jump = new lime.animation.MoveTo(200,600).setDuration(2);
	roo.runAction(jump);
	},11000);
	
	setTimeout(function(){
	layer.removeChild(guy);
	layer.appendChild(animated_guy);
	audio2 = new Audio('assets/audio/TutorialPt2.ogg'); 
	audio2.play();
	audio2.addEventListener('ended', function(){
	layer.removeChild(animated_guy);
	layer.appendChild(guy);
	goog.events.listen(roo,['mousedown','touchstart'],function(e){
	//time travel transition here and then into Jumper.intro2()
	Jumper.intro2();
	});
	})
	},13000);
	

	
	Jumper.director.replaceScene(scene);
	
	
}

Jumper.intro2 = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var bedroom = new lime.Sprite().setFill('assets/bedroom.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(bedroom);
	
	var ticket = new lime.Sprite().setFill('assets/ticket.png').setSize(200,123).setPosition(400,400).setAnchorPoint(0.5,0.5);
	layer.appendChild(ticket);
	
	var roo = new lime.Sprite().setFill('assets/img/kangroo1.png').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	layer.appendChild(roo);
	
	var panel = new lime.Sprite().setFill('assets/score box.png').setSize(500,50).setPosition(512,700).setAnchorPoint(.5,0);
	layer.appendChild(panel);
	
	var inst = new lime.Label().setPosition(512, 710).setAnchorPoint(0.5,0).setText('Click on the ticket!').setFontSize(24).setFontWeight('bold');
	layer.appendChild(inst);
	
	goog.events.listen(ticket,['mousedown','touchstart'],function(e){
	fade = new lime.animation.FadeTo(0).setDuration(2);
	ticket.runAction(fade);
	setTimeout(function(){
	//time travel transition here and then into Jumper.intro3()
	Jumper.intro3();
	},3000);
	});
	
	Jumper.director.replaceScene(scene);
	
}

Jumper.intro3 = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var museum = new lime.Sprite().setFill('assets/museum.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(museum);
	
	var guy = new lime.Sprite().setFill('assets/img/museum-guide1.png').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	layer.appendChild(guy);
	
	var animated_guy = new lime.Sprite().setFill('assets/img/museum-guy2.gif').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	
	var roo = new lime.Sprite().setFill('assets/img/kangroo1.png').setSize(191,238).setPosition(200,600).setAnchorPoint(0.5,0.5);
	layer.appendChild(roo);
	
	var coat = new lime.Sprite().setFill('assets/img/coat.png').setSize(200,200).setPosition(400,500).setAnchorPoint(0.5,0.5);
	
	var ch1box = new lime.Sprite().setFill('assets/ch1box.png').setSize(350,350).setPosition(108,50).setAnchorPoint(0,0);
	
	var ch1button = new lime.Sprite().setFill('assets/login_btn.png').setSize(184,65).setPosition(283,432).setAnchorPoint(0.5,0.5);
	
	var ch1label = new lime.Label().setPosition(283,432).setText('Chapter 1').setFontSize(28).setFontWeight('bold').setAnchorPoint(0.5,0.5);
	
	var ch2box = new lime.Sprite().setFill('assets/ch2box.png').setSize(350,350).setPosition(566,50).setAnchorPoint(0,0);
	
	var ch2button = new lime.Sprite().setFill('assets/login_btn.png').setSize(184,65).setPosition(741,432).setAnchorPoint(0.5,0.5);
	
	var ch2label = new lime.Label().setPosition(741,432).setText('Chapter 2').setFontSize(28).setFontWeight('bold').setAnchorPoint(0.5,0.5);
	
	
	setTimeout(function(){
	layer.removeChild(guy);
	layer.appendChild(animated_guy);
	audio3 = new Audio('assets/audio/TutorialPt3.ogg'); 
	audio3.play();
	audio3.addEventListener('ended', function(){
	layer.removeChild(animated_guy);
	layer.appendChild(guy);
	jump = new lime.animation.MoveTo(-200,400).setDuration(2);
	roo.runAction(jump);
	})
	},1000);
	
	setTimeout(function(){
	layer.appendChild(coat);
	fadein = new lime.animation.Sequence(
		new lime.animation.FadeTo(0).setDuration(0.0001),
		new lime.animation.FadeTo(100).setDuration(2)
	);
	coat.runAction(fadein);
	},11000);
	
	setTimeout(function(){
	layer.removeChild(guy);
	layer.appendChild(animated_guy);
	audio4 = new Audio('assets/audio/TutorialPt4.ogg'); 
	audio4.play();
	audio4.addEventListener('ended', function(){
	layer.removeChild(animated_guy);
	layer.appendChild(guy);
	fadeout = new lime.animation.FadeTo(0).setDuration(2)
	coat.runAction(fadeout);
	})
	},13000);
	
	setTimeout(function(){
	layer.removeChild(guy);
	layer.appendChild(animated_guy);
	audio5 = new Audio('assets/audio/TutorialPt5.ogg'); 
	audio5.play();
	audio5.addEventListener('ended', function(){
	layer.removeChild(animated_guy);
	layer.appendChild(guy);
	})
	},30000);
	
	setTimeout(function(){
	jump = new lime.animation.MoveTo(200,600).setDuration(2);
	roo.runAction(jump);
	},34500);
	
	setTimeout(function(){
	layer.appendChild(ch1box);
	layer.appendChild(ch1button);
	scene.appendChild(ch1label);
	layer.appendChild(ch2box);
	layer.appendChild(ch2button);
	scene.appendChild(ch2label);
	fadein = new lime.animation.Sequence(
		new lime.animation.FadeTo(0).setDuration(0.0001),
		new lime.animation.FadeTo(100).setDuration(2)
	);
	ch1box.runAction(fadein);
	ch1button.runAction(fadein);
	ch1label.runAction(fadein);
	ch2box.runAction(fadein);
	ch2button.runAction(fadein);
	ch2label.runAction(fadein);
	},40000);
	
	setTimeout(function(){
	layer.removeChild(guy);
	layer.appendChild(animated_guy);
	audio6 = new Audio('assets/audio/TutorialPt6.ogg'); 
	audio6.play();
	audio6.addEventListener('ended', function(){
	layer.removeChild(animated_guy);
	layer.appendChild(guy);
	goog.events.listen(ch1button,['mousedown','touchstart'],function(e){
	//insert transition to chapter 1 here
	});
	goog.events.listen(ch2button,['mousedown','touchstart'],function(e){
	alert("Sorry, chapter 2 is currently unavailable.");
	});
	})
	},42000);
	
	Jumper.director.replaceScene(scene);
	
	
}