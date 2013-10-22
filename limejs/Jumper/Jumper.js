//set main namespace
goog.provide('Jumper');
//123124

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Label');
goog.require('lime.Circle');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.RotateTo');
goog.require('lime.animation.Loop');
goog.require('lime.transitions.Dissolve');
goog.require('goog.style');
goog.require('lime.scheduleManager');
goog.require('lime.audio.Audio');

// entrypoint
Jumper.start = function(){

	Jumper.director = new lime.Director(document.body,1024,768),
	Jumper.intro1();
	Jumper.director.makeMobileWebAppCapable();
	Jumper.director.setDisplayFPS(false);
	Jumper.fin_ch1 = false;
	Jumper.fin_ch2 = false;
	Jumper.fin_ch3 = false;
	Jumper.fin_ch4 = false;
}
Jumper.intro1 = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var museum = new lime.Sprite().setFill('assets/museum.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(museum);
	
	var guy = new lime.Sprite().setFill('assets/img/museum-guide1.png').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	layer.appendChild(guy);
	
	var animated_guy = new lime.Sprite().setFill('assets/img/museum-guy2.gif').setSize(191,238).setPosition(800,600).setAnchorPoint(0.5,0.5);
	
	var roo = new lime.Sprite().setFill('assets/img/kangroo2.png').setSize(567,567).setPosition(-200,400).setAnchorPoint(0.5,0.5);
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
	//Jumper.intro2();
	Jumper.timeTravle("intro2");
	});
	})
	},13000);
	

	
	Jumper.director.replaceScene(scene,lime.transitions.Dissolve);
	
	
}

Jumper.intro2 = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var bedroom = new lime.Sprite().setFill('assets/bedroom.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(bedroom);
	
	var ticket = new lime.Sprite().setFill('assets/ticket.png').setSize(200,123).setPosition(400,400).setAnchorPoint(0.5,0.5);
	layer.appendChild(ticket);
	
	var roo = new lime.Sprite().setFill('assets/img/kangroo2.png').setSize(567,567).setPosition(800,600).setAnchorPoint(0.5,0.5);
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
	//Jumper.intro3();
	Jumper.timeTravle("intro3");
	},3000);
	});
	
	Jumper.director.replaceScene(scene,lime.transitions.Dissolve);
	
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
	
	var roo = new lime.Sprite().setFill('assets/img/kangroo2.png').setSize(567,567).setPosition(200,600).setAnchorPoint(0.5,0.5);
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
		Jumper.timeTravle("chapter1");
	});
	goog.events.listen(ch2button,['mousedown','touchstart'],function(e){
	alert("Sorry, chapter 2 is currently unavailable.");
	});
	})
	},42000);
	
	Jumper.director.replaceScene(scene,lime.transitions.Dissolve);
	
	
}
Jumper.ChapterSelection = function(){
	scene = new lime.Scene();
	layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	background = new lime.Sprite().setFill('assets/home.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	
	// Set Button: Chapter 1
	bnt_chapter1 = new lime.Layer().setPosition(520,570).setAnchorPoint(.5,.5).setSize(200,50);
	bg_chapter1 = new lime.Sprite().setFill('assets/chapter1.png').setSize(200,50).setPosition(0,0).setAnchorPoint(.5,.5);
	title_chapter1 = new lime.Label().setSize(200,100).setFontSize(24).setAnchorPoint(.5,.5).setText('Chapter 1').setPosition(0,32).setFontColor('#000').setFontFamily("Copperplate");
	
	var jQ_bnt_chapter1 = $(bnt_chapter1.getDeepestDomElement());
	jQ_bnt_chapter1.css('cursor', 'pointer');
	jQ_bnt_chapter1.hover(function(){
		bnt_chapter1.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(1),
            new lime.animation.ScaleTo(1.2)
        ));
        
	},function(){
		bnt_chapter1.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(1),
            new lime.animation.ScaleTo(1)
        ));
        
	});
	
	goog.events.listen(bnt_chapter1,['click','touchstart'],function(e){
	console.log("test");
		Jumper.timeTravle("chapter1");
	});
	
	bnt_chapter1.appendChild(bg_chapter1);
	bnt_chapter1.appendChild(title_chapter1);
	
	// Set Button: Chapter 2
	bnt_chapter2 = new lime.Layer().setPosition(520,620).setAnchorPoint(.5,.5).setSize(200,50);
	bg_chapter2 = new lime.Sprite().setFill('assets/chapter2.png').setSize(200,50).setPosition(0,0).setAnchorPoint(.5,.5);
	title_chapter2 = new lime.Label().setSize(200,100).setFontSize(24).setAnchorPoint(.5,.5).setText('Chapter 2').setPosition(0,32).setFontColor('#000').setFontFamily("Copperplate");

	var jQ_bnt_chapter2 = $(bnt_chapter2.getDeepestDomElement());
	jQ_bnt_chapter2.css('cursor', 'pointer');
	jQ_bnt_chapter2.hover(function(){
		bnt_chapter2.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(1),
            new lime.animation.ScaleTo(1.2)
        ));
	},function(){
		bnt_chapter2.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(1),
            new lime.animation.ScaleTo(1)
        ));
	});
	
	goog.events.listen(bnt_chapter2,['click','touchstart'],function(e){
	console.log("test2");
		Jumper.Chapter2();
	});
	bnt_chapter2.appendChild(bg_chapter2);
	bnt_chapter2.appendChild(title_chapter2);
	
	
	// add background in to layer
	layer.appendChild(background);

    //add target and title to the scene
    scene.appendChild(layer);
    scene.appendChild(bnt_chapter1);
    scene.appendChild(bnt_chapter2);
    
	// set current scene active
	Jumper.director.replaceScene(scene,lime.transitions.Dissolve);	
};
// Time travle animation
Jumper.timeTravle = function(nextStep){
	scene = new lime.Scene();
	layer_bg = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	background = new lime.Sprite().setFill('#000000').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer_bg.appendChild(background);
	
	time_clock = new lime.Sprite().setFill('assets/img/time-travel-clock.jpg').setSize(1280,1280).setAnchorPoint(.5,.5).setPosition(512,384);
	layer_bg.appendChild(time_clock);
	
	jumpInRotate = new lime.animation.Loop(
    	new lime.animation.RotateBy(5).setDuration(0.0025)
    ).addTarget(time_clock);
    
    jupmOutRotate = new lime.animation.Loop(
    	new lime.animation.RotateBy(-5).setDuration(0.0025)
    ).addTarget(time_clock);
    
    snd_timeTravel = new Audio('assets/audio/timeTravle.mp3');
    
    
    snd_timeTravel.play();
    jumpInRotate.play();
    
    layer_kangroo = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
    
    kangroo1 = new lime.Sprite().setFill('assets/img/kangroo1.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setOpacity(0).setScale(0);
    //kangroo2 = new lime.Sprite().setFill('assets/img/kangroo2.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setScale(1.5);
    //kangroo3 = new lime.Sprite().setFill('assets/img/kangroo3.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setScale(1.5);
    kangroo4 = new lime.Sprite().setFill('assets/img/kangroo4.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setScale(1.5);
    layer_kangroo.appendChild(kangroo1);
    
    ;
    jumpIn = new lime.animation.Spawn(
    	new lime.animation.ScaleTo(1.5).setDuration(2.5),
    	new lime.animation.FadeTo(1).setDuration(2.5),
    	new lime.animation.RotateBy(360).setDuration(2.5)
    );
    
    jumpOut = new lime.animation.Spawn(
    	new lime.animation.ScaleTo(0).setDuration(2.5),
    	new lime.animation.FadeTo(0).setDuration(2.5),
    	new lime.animation.RotateBy(-360).setDuration(2.5)
    ).addTarget(kangroo4);
    
    kangroo1.runAction(jumpIn);
    
    goog.events.listen(jumpIn,lime.animation.Event.STOP,function(){
		layer_kangroo.removeChild(kangroo1);
		layer_kangroo.appendChild(kangroo4);
		jumpInRotate.stop();
		jumpOut.play();
		jupmOutRotate.play();
	});
    /*
    goog.events.listen(jumpOut,lime.animation.Event.STOP,function(){
    	if(nextStep == "chapter1"){
    		Jumper.Chapter1();
    	}else if(nextStep == "chapter2"){
    		Jumper.Chapter2();
    	}else if(nextStep == "chapterSelect"){
	    	Jumper.ChapterSelection();
    	}else if(nextStep == "intro2"){
	    	Jumper.intro2();
    	}else if(nextStep == "intro3"){
	    	Jumper.intro3();
    	}
	});
	*/
	snd_timeTravel.addEventListener('ended', function(){
		if(nextStep == "chapter1"){
    		Jumper.Chapter1();
    	}else if(nextStep == "chapter2"){
    		Jumper.Chapter2();
    	}else if(nextStep == "chapterSelect"){
	    	Jumper.ChapterSelection();
    	}else if(nextStep == "intro2"){
	    	Jumper.intro2();
    	}else if(nextStep == "intro3"){
	    	Jumper.intro3();
    	}
	});
    
	scene.appendChild(layer_bg);
	scene.appendChild(layer_kangroo);
	Jumper.director.replaceScene(scene,lime.transitions.Dissolve);
}

Jumper.Chapter1 = function(){
	var timer;
	scene1();
	
	function scene1(){
		scene = new lime.Scene();
		// Set background
		layer_bg = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
		background = new lime.Sprite().setFill('assets/goldfield scene.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
		layer_bg.appendChild(background);
		scene.appendChild(layer_bg);
		
		//  Set the character
		layer_charc = new lime.Layer().setPosition(100,650).setAnchorPoint(.5,.5);
		charc  = new lime.Sprite().setFill('assets/character.gif').setSize(300,400).setPosition(0,0);
		layer_charc.appendChild(charc);
		scene.appendChild(layer_charc);
		
		// Character talking audio.
		snd_part2 = new Audio('assets/audio/part_2.ogg');
		snd_part1 = new Audio('assets/audio/part_1.ogg');
		
		snd_part1.addEventListener('ended', function(){
			putButton1();
			putButton2();
			timer = setTimeout(function(){
				snd_part2.play();
			}, 10000);
		});
		snd_part2.addEventListener('ended',function(){
			timer = setTimeout(function(){
				snd_part2.play();
			}, 10000);
		});
		putButton2();
		
		if(Jumper.fin_ch1 == true && Jumper.fin_ch2 == true && Jumper.fin_ch3 == true){
			window.location.replace("/journal.html");
		}else if(Jumper.fin_ch1 == false && Jumper.fin_ch2 == false && Jumper.fin_ch3 == false){
			snd_part1.play();
		}else if(Jumper.fin_ch1 == true && Jumper.fin_ch2 == true){
			putButton1();
			putButton2();
			putButton3();
			timer = setTimeout(function(){
					snd_part2.play();
			}, 10000);
		}else{
			putButton1();
			putButton2();
			timer = setTimeout(function(){
					snd_part2.play();
			}, 10000);
		}
		
		
		function putButton1(){
			// Set the button of the white horse
			layer_bnt1 = new lime.Layer().setPosition(585,260).setAnchorPoint(0,0).setSize(100,100);
			bnt1 = new lime.Sprite().setStroke(2,'#FFFFFF').setSize(100,100).setPosition(0,0).setAnchorPoint(0,0);
			layer_bnt1.appendChild(bnt1);
			
			var jQ_layer_bnt1 = $(layer_bnt1.getDeepestDomElement());
			jQ_layer_bnt1.css('cursor', 'pointer');
			
			scene.appendChild(layer_bnt1);
			goog.events.listen(layer_bnt1,['click','touchstart'],function(e){
				snd_part2.pause();
				snd_part2.currentTime = 0;
				clearTimeout(timer);
				scene.removeChild(layer_bnt1);
				scene.removeChild(layer_bnt2);
				ShowMap(scene);
			});
		}
		
		function putButton2(){
			// Set the button of the Gold game
			layer_bnt2 = new lime.Layer().setPosition(485,550).setAnchorPoint(0,0).setSize(200,200);
			bnt2 = new lime.Sprite().setStroke(2,'#FFFFFF').setSize(100,100).setPosition(0,0).setAnchorPoint(0,0);
			layer_bnt2.appendChild(bnt2);
			
			var jQ_layer_bnt2 = $(layer_bnt2.getDeepestDomElement());
			jQ_layer_bnt2.css('cursor', 'pointer');
			scene.appendChild(layer_bnt2);
			goog.events.listen(layer_bnt2,['click','touchstart'],function(e){
				snd_part2.pause();
				snd_part2.currentTime = 0;
				clearTimeout(timer);
				scene.removeChild(layer_bnt1);
				scene.removeChild(layer_bnt2);
				Game(scene);
			});
		}
		
		function putButton3(){
			layer_bnt3 = new lime.Layer().setPosition(120,320).setAnchorPoint(0,0).setSize(200,200);
			bnt3 = new lime.Sprite().setStroke(2,'#FFFFFF').setSize(150,150).setPosition(0,0).setAnchorPoint(0,0);
			layer_bnt3.appendChild(bnt3);
			
			var jQ_layer_bnt3 = $(layer_bnt3.getDeepestDomElement());
			jQ_layer_bnt3.css('cursor', 'pointer');
			scene.appendChild(layer_bnt3);
			goog.events.listen(layer_bnt3,['click','touchstart'],function(e){
				snd_part2.pause();
				snd_part2.currentTime = 0;
				clearTimeout(timer);
				scene.removeChild(layer_bnt1);
				scene.removeChild(layer_bnt2);
				scene.removeChild(layer_bnt3);
				Game(scene);
			});
			
		}
				
				
		Jumper.director.replaceScene(scene,lime.transitions.Dissolve);
	};
	
	function ShowMap(scene){
	
		layer_map = new lime.Layer().setPosition(-500,-500).setAnchorPoint(.5,.5);
		background_map = new lime.Sprite().setFill('assets/chn_au_map.jpg').setSize(700,600).setPosition(0,0).setAnchorPoint(0,0);
		layer_map.appendChild(background_map);
		snd_part3 = new Audio('assets/audio/part_3.ogg');
		snd_part3.play();
		
		snd_part3.addEventListener('ended', function(){
			timer = setTimeout(function(){
				Jumper.fin_ch1 = true;
				scene1();
			}, 5000);
		});
		
		ship = new lime.Sprite().setFill('assets/ship.png').setSize(50,50).setPosition(300,200).setAnchorPoint(.5,.5)
		layer_map.appendChild(ship);
		scene.appendChild(layer_map);
		
		mapMoveIn = new lime.animation.MoveTo(200,100).setSpeed(0.5).addTarget(layer_map);
		mapMoveIn.play();
		shipMove = new lime.animation.MoveTo(500,370).setSpeed(2);
		goog.events.listen(mapMoveIn,lime.animation.Event.STOP,function(){
		    ship.runAction(shipMove);
		    
		});
		landing = new lime.Sprite().setFill('assets/landing.jpg').setSize(400,300).setPosition(500,370).setAnchorPoint(.5,.5).setScale(0);
		//show_landing = new lime.animation.FadeTo(1).addTarget(landing).setDuration(2);
		show_landing = new lime.animation.Spawn(
			new lime.animation.ScaleTo(1),
			new lime.animation.MoveTo(500,100)
		).addTarget(landing).setDuration(2);
		layer_map.appendChild(landing);
		goog.events.listen(shipMove,lime.animation.Event.STOP,function(){
			show_landing.play();
		});
		
		
		walking = new lime.Sprite().setFill('assets/chineseinvasion.jpg').setSize(400,200).setPosition(500,450).setAnchorPoint(.5,.5).setScale(0);
		show_walking = new lime.animation.Spawn(
			new lime.animation.ScaleTo(1),
			new lime.animation.MoveTo(200,400)
		).addTarget(walking).setDuration(2);
		layer_map.appendChild(walking);
		
		goog.events.listen(show_landing,lime.animation.Event.STOP,function(){
			var footprint = new Array();
		    	
			footprint[0] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(500,400).setOpacity(0);
			footprint[1] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(505,405).setOpacity(0);
			footprint[2] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(510,410).setOpacity(0);
			footprint[3] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(512,415).setOpacity(0);
			footprint[4] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(511,420).setOpacity(0);
			footprint[5] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(509,425).setOpacity(0);
			footprint[6] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(508,430).setOpacity(0);
			footprint[7] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(507,435).setOpacity(0);
			footprint[8] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(505,440).setOpacity(0);
			footprint[9] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(503,445).setOpacity(0);
			footprint[10] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(500,450).setOpacity(0);
			footprint[11] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(496,455).setOpacity(0);
			footprint[12] = new lime.Circle().setSize(3,3).setFill(0,0,0).setPosition(492,457).setOpacity(0);
			for(var k = 0; k < footprint.length; k++){
				layer_map.appendChild(footprint[k]);
				ani_footprint = new lime.animation.FadeTo(1).addTarget(footprint[k]).setDuration(2).play();
			}
			show_walking.play();
		});
		/*
		goog.events.listen(show_walking,lime.animation.Event.STOP,function(){
				scene.removeChild(layer_map);
		});
		*/
	};
	
	function Game(scene){
		layer_video = new lime.Layer().setPosition(200,200).setAnchorPoint(.5,.5);
		video_container = new lime.Sprite().setRenderer(lime.Renderer.DOM).setPosition(0,0).setAnchorPoint(.5,.5);
		video = goog.dom.createDom('video');
		/*
		video.onended = function(e){
			console.log("123");
			snd_part5.play();
		};
		*/
		video.addEventListener('ended', function(){
			console.log("123");
			snd_part5.play();
			scene.removeChild(layer_video);
		});
		
		snd_part4 = new Audio('assets/audio/part_4.ogg');
		snd_part5 = new Audio('assets/audio/part_5.ogg');
		
		snd_part4.play();
		snd_part4.addEventListener('ended', function(){
			video.src = 'assets/GT-Chinese.webm';
			video.setAttribute('autoplay',true);
			video.setAttribute('width', 800);
			video_container.appendChild(video);
			layer_video.appendChild(video_container);
			scene.appendChild(layer_video);
		});
		
		snd_part5.addEventListener('ended', function(){
			Jumper.fin_ch2 = true;
			Jumper.gameIntro();
		});

	};
	
	function Task3(scene){
		layer_video = new lime.Layer().setPosition(200,300).setAnchorPoint(.5,.5);
		video_container = new lime.Sprite().setRenderer(lime.Renderer.DOM).setPosition(0,0).setAnchorPoint(.5,.5);
		video = goog.dom.createDom('video');
		
		video.addEventListener('ended', function(){
			console.log("123");
			snd_part5.play();
			scene.removeChild(layer_video);
		});
	};
};


Jumper.Chapter2 = function(){
	scene = new lime.Scene();
	layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	background = new lime.Sprite().setFill('assets/home.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	// add background in to layer
	layer.appendChild(background);
	
	scene.appendChild(layer);
	
	Jumper.director.replaceScene(scene,lime.transitions.Dissolve);
};


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('Jumper.start', Jumper.start);
