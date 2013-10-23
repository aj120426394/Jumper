var points = 0;

Jumper.gameIntro = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var background = new lime.Sprite().setFill('assets/goldfield.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(background);
	
	var panel = new lime.Sprite().setFill('assets/dialog box.png').setSize(500,500).setPosition(512,384).setAnchorPoint(0.5,0.5);
	layer.appendChild(panel);
	
	Jumper.description = new lime.Label().setPosition(512, 234).setSize(350,0).setAnchorPoint(0.5,0).setText('Collect as many gold nuggets as you can in 30 seconds!').setFontSize(28).setFontWeight('bold');
	scene.appendChild(Jumper.description);
	
	Jumper.description2 = new lime.Label().setPosition(512, 354).setSize(350,0).setAnchorPoint(0.5,0).setText('(Click and drag them into the basket)').setFontSize(28).setFontWeight('bold');
	scene.appendChild(Jumper.description2);
	
	var button = new lime.Sprite().setFill('assets/login_btn.png').setSize(184,65).setPosition(512,450).setAnchorPoint(0.5,0);
	layer.appendChild(button);
	
	Jumper.play = new lime.Label().setPosition(512, 467).setText('Start').setFontSize(28).setFontWeight('bold').setAnchorPoint(0.5,0);
	scene.appendChild(Jumper.play);
	
	sound1 = new Audio('assets/button.mp3'); 
	
	goog.events.listen(button,['mousedown','touchstart'],function(e){
	sound1.play();
    Jumper.gameMain();
	});
	
	
	Jumper.director.replaceScene(scene);
}
 
Jumper.gameMain = function(){


	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var background = new lime.Sprite().setFill('assets/goldfield.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(background);
	
	var panel = new lime.Sprite().setFill('assets/score box.png').setSize(500,50).setPosition(512,700).setAnchorPoint(.5,0);
	layer.appendChild(panel);
	
	Jumper.score = new lime.Label().setPosition(512, 710).setAnchorPoint(0.5,0).setText('Gold Nuggets Collected: ' + points).setFontSize(24).setFontWeight('bold');
	scene.appendChild(Jumper.score);
	
	var drop1 = Jumper.drop1 = makeDroppable().setPosition(512, 550).setAnchorPoint(0.5,0.5);
	layer.appendChild(drop1);
	
	randomx = Math.floor((Math.random()*954)+35);
	randomy = Math.floor((Math.random()*320)+35);
	var drag1 = makeDraggable().setPosition(randomx, randomy);
	layer.appendChild(drag1);
	
	randomx = Math.floor((Math.random()*954)+35);
	randomy = Math.floor((Math.random()*320)+35);
	var drag2 = makeDraggable().setPosition(randomx, randomy);
	layer.appendChild(drag2);
	
	randomx = Math.floor((Math.random()*954)+35);
	randomy = Math.floor((Math.random()*320)+35);
	var drag3 = makeDraggable().setPosition(randomx, randomy);
	layer.appendChild(drag3);
	
	randomx = Math.floor((Math.random()*954)+35);
	randomy = Math.floor((Math.random()*320)+35);
	var drag4 = makeDraggable().setPosition(randomx, randomy);
	layer.appendChild(drag4);
	
	randomx = Math.floor((Math.random()*954)+35);
	randomy = Math.floor((Math.random()*320)+35);
	var drag5 = makeDraggable().setPosition(randomx, randomy);
	layer.appendChild(drag5);
	
	timer = 30;
	Jumper.timer = new lime.Label().setPosition(512, 640).setAnchorPoint(0.5,0).setText(timer).setFontSize(48).setFontWeight('bold').setFontColor('#c00');
	scene.appendChild(Jumper.timer);
	
	Jumper.director.replaceScene(scene);
	
	setTimeout(function(){
	clearInterval(countdown);
	Jumper.gameEnd()
	},31000);
	
	countdown = setInterval(function(){
	timer--;
	Jumper.timer.setText(timer);
	},1000);
}

Jumper.gameEnd = function(){
	var scene = new lime.Scene();
	var snd_part6 = new Audio('assets/audio/part_6.ogg');
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var background = new lime.Sprite().setFill('assets/goldfield.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(background);

	var panel = new lime.Sprite().setFill('assets/dialog box.png').setSize(500,500).setPosition(512,384).setAnchorPoint(0.5,0.5);
	layer.appendChild(panel);
	
	Jumper.timesup = new lime.Label().setPosition(512, 234).setText('Times up!').setFontSize(48).setFontWeight('bold');
	scene.appendChild(Jumper.timesup);
	
	Jumper.finalscore = new lime.Label().setPosition(512, 300).setSize(350,0).setText('Well done! You collected ' + points + ' gold nuggets.').setFontSize(28).setFontWeight('bold');
	scene.appendChild(Jumper.finalscore);
	
	var button = new lime.Sprite().setFill('assets/login_btn.png').setSize(184,65).setPosition(512,450).setAnchorPoint(0.5,0);
	layer.appendChild(button);
	
	Jumper.go = new lime.Label().setPosition(512, 467).setText('Continue').setFontSize(28).setFontWeight('bold').setAnchorPoint(0.5,0);
	scene.appendChild(Jumper.go);
	
	goog.events.listen(Jumper.go,['mousedown','touchstart'],function(e){
	snd_part6.play();
	});
	snd_part6.addEventListener('ended', function(){
		Jumper.fin_task2 = true;
		Jumper.Chapter1();
	});
	
	sound1 = new Audio('assets/button.mp3'); 
	
	Jumper.director.replaceScene(scene);
}

function makeDraggable() {
	var sprite = new lime.Sprite().setSize(70, 70).setFill('assets/gold.png');
	goog.events.listen(sprite, 'mousedown', function(e){
		var drag = e.startDrag(false, null, sprite); // snaptocenter, bounds, target
		
		// Add drop targets.
		drag.addDropTarget(Jumper.drop1);
		
		// Avoid dragging multiple items together
		e.event.stopPropagation();
		
		// Drop into target and animate
		goog.events.listen(drag, lime.events.Drag.Event.DROP, function(e){
			console.log('item was dropped');
			var dropTarget = e.activeDropTarget;
			sound2 = new Audio('assets/gold.mp3'); 
			sound2.play();
		  
			e.moveEndedCallback = function(){
			console.log('Called after animation has ended');
			randomx = Math.floor((Math.random()*954)+35);
			randomy = Math.floor((Math.random()*370)+35);
			sprite.setPosition(randomx, randomy);
			points++;
			Jumper.score.setText('Gold Nuggets Collected: ' + points);
			}
		});
	});
	
	return sprite;
}

function makeDroppable() {
	var sprite = new lime.Sprite().setSize(150, 150).setFill('assets/basket.png');
	sprite.showDropHighlight = function(){
    this.runAction(new lime.animation.FadeTo(.6).setDuration(.3));
	};
	sprite.hideDropHighlight = function(){
    this.runAction(new lime.animation.FadeTo(1).setDuration(.1));
	};
  
	return sprite; 
}