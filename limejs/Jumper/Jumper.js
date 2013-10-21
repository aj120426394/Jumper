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
	Jumper.ChapterSelection();
	Jumper.director.makeMobileWebAppCapable();
	Jumper.director.setDisplayFPS(false);
	Jumper.fin_ch1 = false;
	Jumper.fin_ch2 = false;
	Jumper.fin_ch3 = false;
	Jumper.fin_ch4 = false;
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
		//Jumper.Chapter1();
		Jumper.timeTravle();
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
Jumper.timeTravle = function(){
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
    
    jumpInRotate.play();
    
    layer_kangroo = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
    
    kangroo1 = new lime.Sprite().setFill('assets/img/kangroo1.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setOpacity(0).setScale(0);
    //kangroo2 = new lime.Sprite().setFill('assets/img/kangroo2.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setScale(1.5);
    //kangroo3 = new lime.Sprite().setFill('assets/img/kangroo3.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setScale(1.5);
    kangroo4 = new lime.Sprite().setFill('assets/img/kangroo4.png').setSize(567,567).setAnchorPoint(.5,.5).setPosition(512,384).setScale(1.5);
    layer_kangroo.appendChild(kangroo1);
    
    jumpIn = new lime.animation.Spawn(
    	new lime.animation.ScaleTo(1.5).setDuration(2),
    	new lime.animation.FadeTo(1).setDuration(2),
    	new lime.animation.RotateBy(360).setDuration(2)
    );
    
    jumpOut = new lime.animation.Spawn(
    	new lime.animation.ScaleTo(0).setDuration(2),
    	new lime.animation.FadeTo(0).setDuration(2),
    	new lime.animation.RotateBy(-360).setDuration(2)
    ).addTarget(kangroo4);
    
    kangroo1.runAction(jumpIn);
    
    goog.events.listen(jumpIn,lime.animation.Event.STOP,function(){
		layer_kangroo.removeChild(kangroo1);
		layer_kangroo.appendChild(kangroo4);
		jumpInRotate.stop();
		jumpOut.play();
		jupmOutRotate.play();
	});
    
    goog.events.listen(jumpOut,lime.animation.Event.STOP,function(){
		Jumper.Chapter1();
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
