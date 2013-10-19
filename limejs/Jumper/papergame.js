Jumper.game2 = function(){
	var scene = new lime.Scene();
	
	var layer = new lime.Layer().setPosition(0,0).setAnchorPoint(0,0);
	scene.appendChild(layer);
	
	var background = new lime.Sprite().setFill('assets/goldfield2.jpg').setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0);
	layer.appendChild(background);
	
	var paper = new lime.Sprite().setFill('assets/paper.png').setSize(125,50).setPosition(100,100).setAnchorPoint(0.5,0.5);
	layer.appendChild(paper);
	
	var panel = new lime.Sprite().setFill('assets/score box.png').setSize(500,50).setPosition(512,700).setAnchorPoint(.5,0);
	layer.appendChild(panel);
	
	var inst = new lime.Label().setPosition(512, 710).setAnchorPoint(0.5,0).setText('Click on the piece of paper!').setFontSize(24).setFontWeight('bold');
	layer.appendChild(inst);
	
	goog.events.listen(paper,['mousedown','touchstart'],function(e){
	
	layer.removeChild(panel);
	layer.removeChild(inst);
	
    clearInterval(animation);
	wind_sound.pause();
	var scale = new lime.animation.Spawn(
		new lime.animation.ScaleTo(2),
		new lime.animation.MoveTo(512,384),
		new lime.animation.RotateTo(0)
    );
	
	setTimeout(function(){
	layer.removeChild(paper);
	var paper1 = new lime.Sprite().setFill('assets/grclue.png').setSize(500,200).setPosition(512,384).setAnchorPoint(0.5,0.5);
	layer.appendChild(paper1);
	//put next scene transition here
	
	},1000);
	
	paper.runAction(scale);
	
	});
	
	wind_sound = new Audio('assets/wind.mp3'); 
	wind_sound.play();
	
	wind_sound.addEventListener('ended', function(){
	wind_sound.play();
	})
	
	
	Jumper.director.replaceScene(scene);
	
	randomx = Math.floor((Math.random()*386)+575);
	randomy = Math.floor((Math.random()*600)+25);
	var move = new lime.animation.MoveTo(randomx, randomy);
	paper.runAction(move);
	
	side = 0;
	
	var animation = setInterval(function(){
		if (side == 0) {
			randomx = Math.floor((Math.random()*386)+63);
			randomy = Math.floor((Math.random()*600)+25);
			var move = new lime.animation.Spawn(
				new lime.animation.MoveTo(randomx, randomy).setDuration(1),
				new lime.animation.RotateBy(45)
			);
			paper.runAction(move);
			side = 1;
		}
		else {
			randomx = Math.floor((Math.random()*386)+575);
			randomy = Math.floor((Math.random()*600)+25);
			var move = new lime.animation.Spawn(
				new lime.animation.MoveTo(randomx, randomy).setDuration(1),
				new lime.animation.RotateBy(-90)
			);
			paper.runAction(move);
			side = 0;
		}
	}
	,1000);
	
}