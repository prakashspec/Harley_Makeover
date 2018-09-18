var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameContainer');
var Main = {
   music:null,
   shutterOn:[true],
    hitArray:[0,0,0,0],
    hitArray2:[0,0,0,0],
    hitArray3:[0,0,0,0],
	applyCount1:[[-1],[-1],[-1],[-1],[0],[0],[0],[0]],
};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
    game.stage.backgroundColor = '#b8175f';
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.stage.disableVisiblilityChange = true;
    game.renderer.renderSession.roundPixels = true;

    game.scale.setResizeCallback(this.gameResized, this);

    game.load.image('loading', 'assets/prebar.png');
    // game.load.image('prelogo', 'assets/prebg_logo.png');
    game.load.image('barover', 'assets/barover.png');
         
    game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
      var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
      manager.setUserScale(scale, scale, 0, 0);
      game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
            game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
   this.progress = game.add.text(game.world.centerX,500,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
			
            
      
             
             game.load.crossOrigin='*';
             game.load.audio('music', 'assets/music.mp3');
             game.load.image('mainbg', 'assets/mainbg.png');
             
             game.load.image('door1', 'assets/door1.png');
             game.load.image('door2', 'assets/door2.png');
             game.load.image('soundicon', 'assets/soundicon.png');
             game.load.image('playbtn', 'assets/playbtn.png');
             game.load.spritesheet('morebtn', 'assets/morebtn.png',113,153,20);
             game.load.image('donebtn', 'assets/donebtn.png');
             game.load.image('resetbtn', 'assets/resetbtn.png');
			 game.load.image('introbg', 'assets/introbg.png');
			 game.load.image('hand', 'assets/hand.png');
			 game.load.image('intro0', 'assets/intro0.png');
			 game.load.image('intro1', 'assets/intro1.png');
			 game.load.image('intro2', 'assets/intro2.png');
			 game.load.image('intro3', 'assets/intro3.png');
			 game.load.image('intro4', 'assets/intro4.png');
			 game.load.image('introtxt1', 'assets/introtxt1.png');
			 game.load.image('introtxt2', 'assets/introtxt2.png');
			 game.load.image('introtxt3', 'assets/introtxt3.png');
			 game.load.spritesheet('effects', 'assets/effects.png',141,134);
			 game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);
             game.load.image('mirrorBg', 'assets/mirror_bg.png');
             game.load.image('mirrorTop', 'assets/mirrortop.png');
             game.load.image('bg2', 'assets/bg2.png');
             game.load.image('bg3', 'assets/bg3.png');
             game.load.image('smallBottle', 'assets/smallBottle.png');
             game.load.image('smallBottleCap', 'assets/smallBottleCap.png');
			 game.load.image('bigBottle', 'assets/bigBottle.png');
             game.load.image('bigBottleCap', 'assets/bigBottleCap.png');
             game.load.image('remover', 'assets/remover.png');
             game.load.image('tissueBox', 'assets/tissueBox.png');
             game.load.image('budBox', 'assets/budBox.png');
             game.load.image('qHair', 'assets/qHair.png');
             game.load.image('qbody', 'assets/qbody.png');
             game.load.image('eye1', 'assets/eye1.png');
             game.load.image('eye1_1', 'assets/eye1_1.png');
             game.load.image('eye2', 'assets/eye2.png');
             game.load.image('eye3', 'assets/eye3.png');
             game.load.image('eye3_1', 'assets/eye3_1.png');
             game.load.image('towel', 'assets/towel.png');
             game.load.image('makeup1', 'assets/makeup1.png');
             game.load.image('makeup2', 'assets/makeup2.png');
             game.load.image('makeup3', 'assets/makeup3.png');
             game.load.image('meter', 'assets/meter.png');
             game.load.image('meterfill', 'assets/meterfill.png');
             game.load.image('meterCap', 'assets/meterCap.png');
             game.load.image('bud', 'assets/bud.png');
             game.load.image('tool1', 'assets/tool1.png');
             game.load.image('tool2', 'assets/tool2.png');
             game.load.image('tool4', 'assets/tool4.png');
             game.load.image('tool5', 'assets/tool5.png');
             game.load.image('brush', 'assets/brush.png');
             game.load.image('facemask1', 'assets/facemask1.png');
             game.load.image('facemask2', 'assets/facemask2.png');
             game.load.image('bigbrush', 'assets/bigbrush.png');
             game.load.image('hairbody', 'assets/hairbody.png');
             game.load.image('hairdress', 'assets/hairdress.png');
             game.load.image('icon1', 'assets/icon1.png');
             game.load.image('icon2', 'assets/icon2.png');
             game.load.image('icon3', 'assets/icon3.png');
             game.load.image('icon4', 'assets/icon4.png');
             game.load.image('shell', 'assets/shell.png');
			 for(var i=0; i<=5; i++){
			game.load.image('fdress'+i, 'assets/fdress'+i+'.png');	 
			game.load.image('tdress'+i, 'assets/tdress'+i+'.png');	 
			game.load.image('bdress'+i, 'assets/bdress'+i+'.png');	 
			game.load.image('cdress'+i, 'assets/cdress'+i+'.png');	 
				 
			 }
			 for(var i=6; i<=9; i++){
				 game.load.image('tdress'+i, 'assets/tdress'+i+'.png');	 
			game.load.image('bdress'+i, 'assets/bdress'+i+'.png');
			 }
             for(var i=0; i<=6; i++){
				game.load.image('acc'+i, 'assets/acc'+i+'.png'); 
			 }
             game.load.image('gfulldress1', 'assets/gfulldress1.png');
             game.load.image('body', 'assets/body.png');
             game.load.image('hair', 'assets/hair.png');
             game.load.image('shellbar1', 'assets/shellbar1.png');
             game.load.image('shellbar2', 'assets/shellbar2.png');
             game.load.image('gacc0', 'assets/gacc0.png');
             game.load.image('gacc1', 'assets/gacc1.png');
             game.load.image('gacc2', 'assets/gacc2.png');
             game.load.image('shower_brush', 'assets/shower_brush.png');
             game.load.image('hairDressBar', 'assets/hairDressBar.png');
             game.load.image('hairbubble', 'assets/hairbubble.png');
             game.load.image('arrow', 'assets/arrow.png');
             game.load.image('finalIcon', 'assets/finalIcon.png');
             game.load.image('thumbnail1', 'assets/thumbnail1.png');
             game.load.image('thumbnail2', 'assets/thumbnail2.png');
             game.load.image('savebtn', 'assets/savebtn.png');
			 
			 
			 
             game.load.spritesheet('qface', 'assets/qface.png',297,367,3);
             game.load.spritesheet('qLip', 'assets/qLip.png',82,26,3);
             game.load.spritesheet('star', 'assets/star.png',426,452,13);
             game.load.spritesheet('shower', 'assets/shower.png',505,801,13);
             game.load.spritesheet('hairstyle', 'assets/hairstyle.png',353,371,5);
             game.load.spritesheet('gfulldress', 'assets/gfulldress.png',165,264,6);
             game.load.spritesheet('gshoe', 'assets/gshoe.png',55,75,4);
             game.load.spritesheet('gtdress', 'assets/gtdress.png',132,151,6);
             game.load.spritesheet('gtdress2', 'assets/gtdress2.png',131,181,4);
             game.load.spritesheet('gbdress', 'assets/gbdress.png',135,253,6);
             game.load.spritesheet('gbdress2', 'assets/gbdress2.png',116,261,4);
             game.load.spritesheet('gcdress', 'assets/gcdress.png',135,164,6);
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
bringCircle:function(){
      game.add.tween(this.circle1.scale).to({x:25, y:25}, 3000, 'Linear', true);
      game.add.tween(this.circle1).to({alpha:0}, 3000, 'Linear', true);
      game.add.tween(this.circle2.scale).to({x:25, y:25}, 3000, 'Linear', true, 1000);
      game.add.tween(this.circle2).to({alpha:0}, 3000, 'Linear', true, 1000);
      game.add.tween(this.circle3.scale).to({x:25, y:25}, 3000, 'Linear', true, 2000);
      game.add.tween(this.circle3).to({alpha:0}, 3000, 'Linear', true, 2000).onComplete.add(this.resetCircel, this);   
   },
resetCircel:function(){
   this.circle1.scale.setTo(0);
   this.circle2.scale.setTo(0);
   this.circle3.scale.setTo(0);
   this.circle1.alpha = 1;
   this.circle2.alpha = 1;
   this.circle3.alpha = 1;
   this.bringCircle();
},
iconOver2:function(items){
   items.scale.setTo(1.05);
   },
iconOver:function(items){
   items.scale.setTo(2.3);
   },
iconOut:function(items){
   items.scale.setTo(1);
   },
iconUp:function(items){
   
   },
iconUp2:function(items){
   //AAAAAA
   game.state.start('title');
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
				game.state.start('title');
			   
            }
   },
   openLink:function(){
      
   }
}


Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
			
			
			
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'mainbg');
	  this.levelGroup.add(this.bg);
	  
			
		
			
			
		 
	  
	     this.playbtn = game.add.sprite(730,540,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
		 
		 
	  
	  this.musicButton = game.add.sprite(740,67,"soundicon");
	  this.musicButton.anchor.setTo(0.5);
      this.musicButton.scale.setTo(0.5);
      this.musicButton.inputEnabled = true
      this.musicButton.input.useHandCursor = true;
      this.musicButton.events.onInputUp.add(this.changemusic, this);
      this.musicButton.events.onInputOver.add(this.btnOver, this);
      this.musicButton.events.onInputOut.add(this.btnOut, this);
         
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
  
        },

changemusic:function()
         {
            if (!game.sound.mute) {
               game.sound.mute = true;
            }else{
               game.sound.mute = false;
            };
         },
btnOver:function(items){
	items.scale.setTo(0.55);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
	items.scale.setTo(0.5);
   },   
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
	game.state.start('intro'); 
}
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
		
			
			
			
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'introbg');
	  this.levelGroup.add(this.bg);
	  
	  this.intro1 = game.add.sprite(-202.65,-186.75,'intro1');
	  this.intro1.anchor.setTo(0.5);
	  this.levelGroup.add(this.intro1);
	  
	  this.intro2 = game.add.sprite(960.6,-153,'intro2');
	  this.intro2.anchor.setTo(0.5);
	  this.levelGroup.add(this.intro2);
	  
	  this.intro3 = game.add.sprite(-243.15,651.5,'intro3');
	  this.intro3.anchor.setTo(0.5);
	  this.levelGroup.add(this.intro3);
	  
	  this.intro4 = game.add.sprite(900.35,819.25,'intro4');
	  this.intro4.anchor.setTo(0.5);
	  this.levelGroup.add(this.intro4);
	  
	  
	  
	  
	  this.introtxt1 = game.add.sprite(340,150,'introtxt1');
	  this.introtxt1.anchor.setTo(0.5);
	  this.levelGroup.add(this.introtxt1);
	  
	  this.introtxt2 = game.add.sprite(420,510,'introtxt2');
	  this.introtxt2.anchor.setTo(0.5);
	  this.levelGroup.add(this.introtxt2);
	  
	  this.introtxt3 = game.add.sprite(500,240,'introtxt3');
	  this.introtxt3.anchor.setTo(0.5);
	  this.levelGroup.add(this.introtxt3);
	  
	  this.introtxt1.scale.setTo(0);
	  this.introtxt2.scale.setTo(0);
	  this.introtxt3.scale.setTo(0);
	  
	     this.playbtn = game.add.sprite(725,530,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
		 
	  this.musicButton = game.add.sprite(740,67,"soundicon");
	  this.musicButton.anchor.setTo(0.5);
      this.musicButton.scale.setTo(0.5);
      this.musicButton.inputEnabled = true
      this.musicButton.input.useHandCursor = true;
      this.musicButton.events.onInputUp.add(this.changemusic, this);
      this.musicButton.events.onInputOver.add(this.btnOver, this);
      this.musicButton.events.onInputOut.add(this.btnOut, this);
	  
	  
	  
	  
	  
	  if(Main.shutterOn[0])
	  {
		  this.door2 = game.add.sprite(327,-2,"door2");
	      this.door1 = game.add.sprite(0,-3,"door1");
		  game.add.tween(this.door1).to({x:-700},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:801},1000,"Linear",true).onComplete.add(function(){
		  this.startAni();
		  },this)
	  }
	  
	  
	  // this.door1.anchor.setTo(0.5);
	  
	},
startAni:function(){
	
		
		
		
		game.add.tween(this.introtxt1.scale).to({x:1,y:1}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
		game.add.tween(this.introtxt2.scale).to({x:1,y:1}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
		game.add.tween(this.introtxt3.scale).to({x:1,y:1}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
			game.add.tween(this.playbtn.scale).to({x:0.5,y:0.5}, 2000, Phaser.Easing.Quadratic.Out, true);
			
			
		},this)	
			
			
		},this)	
			
			
		},this)
		
	
		
	
		
	
		
	
},
changemusic:function()
         {
            if (!game.sound.mute) {
               game.sound.mute = true;
            }else{
               game.sound.mute = false;
            };
         },
btnOver:function(items){
	items.scale.setTo(0.55);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
	items.scale.setTo(0.5);
   },   
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
	if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:0},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:327},1000,"Linear",true).onComplete.add(function(){
			  game.state.start('makeUpRemove'); 
			  
		  },this);
	  }
	
}
}

Main.makeUpRemove = function(){}

Main.makeUpRemove.prototype = {
    create:function(){
			
			
			game.physics.startSystem(Phaser.Physics.ARCADE);
			
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'mirrorBg');
      this.mTop = game.add.sprite(0,0,'mirrorTop');
	  
	  this.toolGroup = game.add.group();
	  this.smallB = game.add.sprite(287.50,514.50,'smallBottle');
	  this.smallB.anchor.setTo(0.5);
	  this.smallBC = game.add.sprite(287,470,'smallBottleCap');
	  this.smallBC.anchor.setTo(0.5);
	  this.remover = game.add.sprite(603.15,539.55,'remover');
	  this.remover.anchor.setTo(0.5);
	  this.bigB = game.add.sprite(143,507,'bigBottle');
	  this.bigB.anchor.setTo(0.5);
	  this.bigBC = game.add.sprite(144.50,445.5,'bigBottleCap');
	  this.bigBC.anchor.setTo(0.5);
	  this.bigB2 = game.add.sprite(143,507,'bigBottle');
	  this.bigB2.anchor.setTo(0.5);
	  this.bigBC2 = game.add.sprite(144.50,445.5,'bigBottleCap');
	  this.bigBC2.anchor.setTo(0.5);
	  this.tissueBox = game.add.sprite(454.5,530,'tissueBox');
	  this.tissueBox.anchor.setTo(0.5);
	  this.budBox = game.add.sprite(703.5,519.5,'budBox');
	  this.budBox.anchor.setTo(0.5);
	  
	  this.bigB2.alpha = 0;
	  this.bigBC2.alpha = 0;
	  
	  this.towel = game.add.sprite(950,650,'towel');
	  this.towel.anchor.setTo(0.5);
	  this.towel.scale.setTo(0.5);
	  
	  this.bud = game.add.sprite(950,650,'bud');
	  this.bud.anchor.setTo(0.5);
	  this.bud.scale.setTo(0.8);
	  
	  
	  // this.smallB.y = 400;
	  // this.smallBC.y = 358;
	  // this.smallBC.x = 230;
	  // this.smallBC.y = 330;
	  // this.smallBC.angle = -100;
	  
	  
	  
	  
	  
	  
	  this.toolGroup.add(this.towel);
	  this.toolGroup.add(this.bud);
	  
	  this.toolGroup.add(this.bigB);
	  this.toolGroup.add(this.bigBC);
	  this.toolGroup.add(this.bigB2);
	  this.toolGroup.add(this.bigBC2);
	  this.toolGroup.add(this.remover);
	  this.toolGroup.add(this.tissueBox);
	  this.toolGroup.add(this.budBox);
	  
	  this.toolGroup.add(this.smallB);
	  this.toolGroup.add(this.smallBC);
	  
	  
	  
	  this.girlGroup = game.add.group();
	  this.body = game.add.sprite(426,476.5,'qbody');
	  this.body.anchor.setTo(0.5);
	  this.hair = game.add.sprite(403,216,'qHair');
	  this.hair.anchor.setTo(0.5);
	  this.face = game.add.sprite(426.5,238.5,'qface');
	  this.face.anchor.setTo(0.5);
	  this.face2 = game.add.sprite(426.5,238.5,'qface');
	  this.face2.anchor.setTo(0.5);
	  this.face2.frame = 1;
	  this.makeup1 = game.add.sprite(392.5,308.5,'makeup1');
	  this.makeup1.anchor.setTo(0.5);
	  this.makeup1.id = 1;
	  
	  
	  
	  
	  this.makeup2 = game.add.sprite(511.5,310.5,'makeup2');
	  this.makeup2.anchor.setTo(0.5);
	  this.makeup2.id = 2;
	 
	  
	  this.makeup3 = game.add.sprite(445.5,373.5,'makeup3');
	  this.makeup3.anchor.setTo(0.5);
	  this.makeup3.id = 3;
	 
	  
	  this.makeup4 = game.add.sprite(446.5,269,'eye1');
	  this.makeup4.anchor.setTo(0.5);
	   this.makeup5 = game.add.sprite(446.5,269,'eye1_1');
	  this.makeup5.anchor.setTo(0.5);
	  this.makeup7 = game.add.sprite(446.5,269,'eye2');
	  this.makeup7.anchor.setTo(0.5);
	  
	  
	  
	  this.makeup6 = game.add.sprite(453,372,'qLip');
	  this.makeup6.anchor.setTo(0.5);
	  this.makeup8 = game.add.sprite(453,372,'qLip');
	  this.makeup8.anchor.setTo(0.5);
	  this.makeup8.frame = 1;
	  
	  this.dummy4 = game.add.graphics(350,250);
      this.dummy4.beginFill(0xFF0000, 0);
      this.dummy4.drawRect(0, 0, 80, 50);
      this.dummy4.endFill();
      this.dummy4.id = 4;
	  
	  this.dummy5 = game.add.graphics(480,250);
      this.dummy5.beginFill(0xFF0000, 0);
      this.dummy5.drawRect(0, 0, 65, 50);
      this.dummy5.endFill();
      this.dummy5.id = 5;
	  
	  this.dummy6 = game.add.graphics(415,352);
      this.dummy6.beginFill(0xFF0000, 0);
      this.dummy6.drawRect(0, 0, 75, 35);
      this.dummy6.endFill();
      this.dummy6.id = 6;
	  
	  
	  this.dummy7 = game.add.graphics(350,150);
      this.dummy7.beginFill(0xFF0000, 0);
      this.dummy7.drawRect(0, 0, 200, 80);
      this.dummy7.endFill();
      this.dummy7.id = 7;
	  
	  this.dummy8 = game.add.graphics(320,240);
      this.dummy8.beginFill(0xFF0000, 0);
      this.dummy8.drawRect(0, 0, 230, 80);
      this.dummy8.endFill();
      this.dummy8.id = 8;
	  
	  this.dummy9 = game.add.graphics(320,330);
      this.dummy9.beginFill(0xFF0000, 0);
      this.dummy9.drawRect(0, 0, 230, 80);
      this.dummy9.endFill();
      this.dummy9.id = 9;
	  
	  
	  this.girlGroup.add(this.body);
	  this.girlGroup.add(this.face2);
	  this.girlGroup.add(this.face);
	  this.girlGroup.add(this.makeup1);
	  this.girlGroup.add(this.makeup2);
	  this.girlGroup.add(this.makeup3);
	  this.girlGroup.add(this.makeup7); 
	  this.girlGroup.add(this.makeup8); 
	  this.girlGroup.add(this.makeup4);
	  this.girlGroup.add(this.makeup5);
	  this.girlGroup.add(this.makeup6);
	  
	  this.girlGroup.add(this.hair);
	  
	  this.toweldrag = false;
	  this.buddrag = false;
	  this.removerdrag = false;
	  this.makeup1R = false;
	  this.makeup2R = false;
	  this.makeup3R = false;
	  
	  
	  
	  
	  
	 
	 
	 
	 
	 
	 
	  
	  this.tissueBox.inputEnabled = true;
      this.tissueBox.input.useHandCursor = true;
      this.tissueBox.events.onInputUp.add(this.pickBox, this);
	  
      this.levelGroup.add(this.bg);
	  this.levelGroup.add(this.girlGroup);
      this.levelGroup.add(this.mTop);
       this.levelGroup.add(this.toolGroup);
	   
	   
	   
       
	   
	this.count = 0;
	
	     this.playbtn = game.add.sprite(725,530,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
		 
		 
		 this.musicButton = game.add.sprite(740,67,"soundicon");
	  this.musicButton.anchor.setTo(0.5);
      this.musicButton.scale.setTo(0.5);
      this.musicButton.inputEnabled = true
      this.musicButton.input.useHandCursor = true;
      this.musicButton.events.onInputUp.add(this.changemusic, this);
      this.musicButton.events.onInputOver.add(this.btnOver, this);
      this.musicButton.events.onInputOut.add(this.btnOut, this);
	  
	  
		 this.hand = game.add.sprite(420,420,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	   
         this.meterGroup = game.add.group();
         this.meter = game.add.sprite(50,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(48,290,'meterCap');
         this.meterBg.anchor.setTo(0.5);
         this.meterBg.scale.setTo(1.1);
         this.meterFill = game.add.sprite(49,400,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         
         
         this.meterGroup.add(this.meter);
		 this.meterGroup.add(this.meterFill);
		 this.meterGroup.add(this.meterBg);
         this.mask = game.add.graphics(20, 515);//280-515
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.5;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.meterGroup.x = -250;
         this.meterGroup.y = -130;
         //this.meterGroup.angle = 90;
         // this.meterGroup.scale.setTo(0.8);
         //this.meterGroup.visible = false;
        
		this.alhaCount1 = 1;
		this.alhaCount2 = 1;
		this.alhaCount3 = 1;
		
		this.alhaCount4 = 1;
		this.alhaCount5 = 1;
		this.alhaCount6 = 1;
		this.alhaCount7 = 1;
		
		this.tempCount0 = 0;
		this.tempCount = 0;
		
		
		this.door2 = game.add.sprite(327,-2,"door2");
		this.door1 = game.add.sprite(0,-3,"door1");
		
		if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:-700},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:801},1000,"Linear",true);
	  }
		
		
		
            
},
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 3;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
hitSprite:function(evt){
	
	
	
	
		if(this['makeup'+evt.id].alpha>0){
			this['alhaCount'+evt.id] -= 0.05;
		this['makeup'+evt.id].alpha =this['alhaCount'+evt.id].toFixed(2);
		this.mask.y -=  3.91;
		// console.log(this['makeup1'].alpha);
		}
		else
		{
			this.count++;
			this['makeup'+evt.id].inputEnabled = false;
			this.tempCount0++;
		}
		
		if(this.tempCount0 >= 2)
		{
			this.tempCount0 = -1;
			this.hand.kill();
		this.hand = game.add.sprite(330,370,'hand');
         this.hand.anchor.setTo(0.5);
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		this.makeup3.inputEnabled = true;
	  this.makeup3.events.onInputOver.add(this.hitSprite, this);
		}
		
		if(this.count>=3)
		{
		
		this.toweldrag = false;
		this.towel.x = -500;
		this.towel.y = -500;		
		this.starAni();
		}
		
		
	
	
	
	
},
hitSprite2:function(evt){
	
	
	
	
		if(this['makeup'+evt.id].alpha>0){
			
			this['alhaCount'+evt.id] -= 0.05;
		this['makeup'+evt.id].alpha =this['alhaCount'+evt.id].toFixed(2);
		this.mask.y -=  3.91;
		
		}
		else
		{
			this.count++;
			this['dummy'+evt.id].inputEnabled = false;
			this.tempCount++;
		}
		if(this.tempCount >= 2)
		{
		this.tempCount = -1;
		this.hand.kill();
		this.hand = game.add.sprite(350,370,'hand');
         this.hand.anchor.setTo(0.5);
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		this.dummy6.inputEnabled = true;
		this.dummy6.events.onInputOver.add(this.hitSprite2, this);
		}
		
		
		if(this.count>=6)
		{
			
		this.buddrag = false;
		this.bud.x = -500;
		this.bud.y = -500;		
		this.starAni();
		}
		
		
	
	
	
	
},
hitSprite3:function(evt){
	
	
	
	
		if(this.face.alpha>0){
			
			this['alhaCount7'] -= 0.02;
		this.face.alpha =this['alhaCount7'].toFixed(2);
		this.mask.y -=  4.7;
		
		}
		else
		{
			this.count++;
			this.dummy7.inputEnabled = false;
			this.dummy8.inputEnabled = false;
			this.dummy9.inputEnabled = false;
		}
		
		if(this.count>=7)
		{
			
		this.removerdrag = false;
		this.remover.x = -500;
		this.remover.y = -500;		
		this.starAni();
		}
		
		
	
	
	
	
},
starAni:function(){
	
this.start = game.add.sprite(game.world.centerX,game.world.centerY,'star'); 
   this.start.anchor.setTo(0.5);
   this.start.scale.setTo(2);
   this.start.animations.add('starBlast').onComplete.add(this.removeGlitter, this);	
this.start.animations.play('starBlast', 10, false);	
game.add.tween(this.meterGroup).to({x:-250}, 100, "Linear", true).onComplete.add(function(){
	switch(this.count)
	{
		
		case 3:
		this.makeup1.alpha = 0;
		this.makeup2.alpha = 0;
		this.makeup3.alpha = 0;
		this.bigB.alpha = 0;
		this.bigBC.alpha = 0;
		this.bigB2.alpha = 1;
		this.bigBC2.alpha = 1;
		this.mask.y = 515;
		this.budBox.inputEnabled = true;
        this.budBox.input.useHandCursor = true;
        this.budBox.events.onInputUp.add(this.pickBud, this);
		
		this.hand.kill();
		this.hand = game.add.sprite(700,400,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		 
		 
		
		break;
		case 6:
		this.remover.inputEnabled = true;
        this.remover.input.useHandCursor = true;
        this.remover.events.onInputUp.add(this.pickRemover, this);
		
		this.hand.kill();
		this.hand = game.add.sprite(600,420,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	    break;
		case 7:
		this.mask.y = 515;
		this.hand.kill();
		game.add.tween(this.playbtn.scale).to({x:0.5,y:0.5}, 2000, Phaser.Easing.Quadratic.Out, true);
	    break;
	}
	
},this)	
},
btnOver:function(items){
   items.scale.setTo(0.55);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.setTo(0.5);
   },
removeGlitter:function(evt){
      evt.kill(); 
},
pickBox:function(){
	 this.tissueBox.inputEnabled = false;
	 this.towel.x = 350;
	 this.towel.y = 380;
	 
 	 this.bigB.inputEnabled = true;
      this.bigB.input.useHandCursor = true;
      this.bigB.events.onInputUp.add(this.pickbigB, this);
	 
	 this.hand.kill();
	 this.hand = game.add.sprite(140,350,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	 
	
},
pickbigB:function(){
	this.bigB.inputEnabled = false;
	this.hand.kill();
	game.add.tween(this.bigB).to({x:240,y:390}, 700, "Linear", true);
	 game.add.tween(this.bigBC).to({x:250,y:330}, 700, "Linear", true).onComplete.add(function(){
		 game.add.tween(this.bigBC).to({angle:-25,x:220,y:270}, 700, "Linear", true);
		 game.add.tween(this.bigB).to({angle:90,y:350}, 700, "Linear", true).onComplete.add(function(){
			 game.add.tween(this.bigB).to({angle:0,x:240,y:390}, 700, "Linear", true);
	         game.add.tween(this.bigBC).to({angle:0,x:240,y:330}, 700, "Linear", true).onComplete.add(function(){
	game.add.tween(this.bigB).to({x:143,y:507}, 700, "Linear", true);
	game.add.tween(this.bigBC).to({x:144.50,y:445.5}, 700, "Linear", true).onComplete.add(function(){
		
		
		
		 this.towel.angle = 80;
		 
		game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
			
			
	     this.hand = game.add.sprite(330,350,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = -45;
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
			
			this.toweldrag = true;
		 this.makeup1R = true;
	  this.makeup2R = true;
	  this.makeup3R = true;
	  
	  this.makeup1.inputEnabled = true;
	  this.makeup1.events.onInputOver.add(this.hitSprite, this);
	   this.makeup2.inputEnabled = true;
	  this.makeup2.events.onInputOver.add(this.hitSprite, this);
	   
			
		},this) 
	 },this)
				 
			 },this)
			 
		 },this)
		 
	 },this)/**/
	
},
pickBud:function(){
	this.budBox.inputEnabled = false;
	this.bud.x = 289;
	this.bud.y = 290;
	
	  this.smallB.inputEnabled = true;
      this.smallB.input.useHandCursor = true;
      this.smallB.events.onInputUp.add(this.pickSmallB, this);
	  
	  this.hand.kill();
		this.hand = game.add.sprite(280,380,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	
},
pickSmallB:function(){
	this.smallB.inputEnabled = false;
	this.hand.kill();
	
	game.add.tween(this.smallB).to({y:400}, 700, "Linear", true);
	  game.add.tween(this.smallBC).to({y:358}, 700, "Linear", true).onComplete.add(function(){
		game.add.tween(this.smallBC).to({x:230,y:330,angle:-100}, 700, "Linear", true).onComplete.add(function(){
			game.add.tween(this.bud).to({y:340}, 700, "Linear", true).onComplete.add(function(){
			game.add.tween(this.bud).to({y:290}, 700, "Linear", true).onComplete.add(function(){
				game.add.tween(this.bud).to({y:340}, 700, "Linear", true).onComplete.add(function(){
				game.add.tween(this.bud).to({y:290}, 700, "Linear", true).onComplete.add(function(){
					game.add.tween(this.smallBC).to({angle:0,x:287,y:358}, 700, "Linear", true).onComplete.add(function(){
						game.add.tween(this.smallB).to({y:514.50}, 700, "Linear", true);
						game.add.tween(this.smallBC).to({y:470}, 700, "Linear", true).onComplete.add(function(){
							
							game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
							
							this.buddrag = true;
							
							
							this.hand = game.add.sprite(330,350,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = -45;
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
							
							this.dummy4.inputEnabled = true;
							this.dummy4.events.onInputOver.add(this.hitSprite2, this);
							this.dummy5.inputEnabled = true;
							this.dummy5.events.onInputOver.add(this.hitSprite2, this);
							
							},this)
						},this)
						
					},this)
					
				},this)	
					
				},this)
			},this)	
			},this)
			
		},this)  
	  },this)
	
},
pickRemover:function(){
	this.remover.inputEnabled = false;
	this.remover.x = 327;
	this.remover.y = 375;
	
	this.mask.y = 515;
	 
 	 this.bigB2.inputEnabled = true;
      this.bigB2.input.useHandCursor = true;
      this.bigB2.events.onInputUp.add(this.pickbigB2, this);
	  
	  
	  this.hand.kill();
	 this.hand = game.add.sprite(140,350,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	
},
pickbigB2:function(){
	this.bigB.inputEnabled = false;
	 this.hand.kill();
	game.add.tween(this.bigB2).to({x:240,y:390}, 700, "Linear", true);
	 game.add.tween(this.bigBC2).to({x:250,y:330}, 700, "Linear", true).onComplete.add(function(){
		 game.add.tween(this.bigBC2).to({angle:-25,x:220,y:270}, 700, "Linear", true);
		 game.add.tween(this.bigB2).to({angle:90,y:350}, 700, "Linear", true).onComplete.add(function(){
			 game.add.tween(this.bigB2).to({angle:0,x:240,y:390}, 700, "Linear", true);
	         game.add.tween(this.bigBC2).to({angle:0,x:240,y:330}, 700, "Linear", true).onComplete.add(function(){
	game.add.tween(this.bigB2).to({x:143,y:507}, 700, "Linear", true);
	game.add.tween(this.bigBC2).to({x:144.50,y:445.5}, 700, "Linear", true).onComplete.add(function(){
		 
		 
		game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
			
			this.removerdrag = true;
		 
	  
		this.dummy7.inputEnabled = true;
		this.dummy7.events.onInputOver.add(this.hitSprite3, this);
		this.dummy8.inputEnabled = true;
		this.dummy8.events.onInputOver.add(this.hitSprite3, this);
		this.dummy9.inputEnabled = true;
		this.dummy9.events.onInputOver.add(this.hitSprite3, this);
		
		
		this.hand = game.add.sprite(280,380,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = -45;
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
			
		},this) 
	 },this)
				 
			 },this)
			 
		 },this)
		 
	 },this)/**/
	
},
enterRoom:function(){
	if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:0},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:327},1000,"Linear",true).onComplete.add(function(){
			  game.state.start('makeUpLevel');
			  
		  },this);
	  }
   
},
update:function(){
	
	if (this.toweldrag ) {
      this.towel.x = game.input.activePointer.x-0;
      this.towel.y = game.input.activePointer.y+50;
       }
	   
	   if (this.buddrag ) {
      this.bud.x = game.input.activePointer.x-0;
      this.bud.y = game.input.activePointer.y+50;
       }
	   
	   if(this.removerdrag)
	   {
		this.remover.x = game.input.activePointer.x+5;
		this.remover.y = game.input.activePointer.y+10;   
	   }
	   
	  
	   
	   
	
},
checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

},
}

Main.makeUpLevel = function(){}

Main.makeUpLevel.prototype = {
    create:function(){
      
			
			game.physics.startSystem(Phaser.Physics.ARCADE);
			
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'mirrorBg');
      this.mTop = game.add.sprite(0,0,'mirrorTop');
	  
	  this.toolGroup = game.add.group();
	  this.girlGroup = game.add.group();
	  
	  this.tool1 = game.add.sprite(99,535,'tool1');
	  this.tool1.anchor.setTo(0.5);
	  this.tool2 = game.add.sprite(261.5,553,'tool2');
	  this.tool2.anchor.setTo(0.5);
	  this.tool3 = game.add.sprite(449,533.5,'tissueBox');
	  this.tool3.anchor.setTo(0.5);
	  this.tool4 = game.add.sprite(617,532.5,'tool4');
	  this.tool4.anchor.setTo(0.5);
	  this.tool5 = game.add.sprite(723,513,'tool5');
	  this.tool5.anchor.setTo(0.5);
	  
	  this.tool5_1 = game.add.sprite(723,513,'tool5');
	  this.tool5_1.anchor.setTo(0.5);
	  this.tool5_1.alpha = 1;
	  
	  this.brush = game.add.sprite(850,600,'brush');
	  this.brush.anchor.setTo(0.5);
	  this.brush.angle = 150;
	  this.brush.scale.setTo(0.8);
	  
	  
	  this.shower = game.add.sprite(1050,600,'shower');
	  this.shower.anchor.setTo(0.5);
	  this.shower.animations.add('showerAni').onComplete.add(this.removeGlitter, this);
      this.shower.animations.play('showerAni', 30, true);
	  // this.shower.scale.setTo(0.8);
	  
	  this.towel = game.add.sprite(850,600,'towel');
	  this.towel.anchor.setTo(0.5);
	  this.towel.scale.setTo(0.5);
	  this.towel.angle = 80;
	  
	  this.remover = game.add.sprite(850,600,'remover');
	  this.remover.anchor.setTo(0.5);
	  
	  this.toolGroup.add(this.tool1);
	  this.toolGroup.add(this.tool2);
	  this.toolGroup.add(this.tool3);
	  this.toolGroup.add(this.tool4);
	  this.toolGroup.add(this.tool5);
	  
	  this.body = game.add.sprite(426,476.5,'qbody');
	  this.body.anchor.setTo(0.5);
	  this.hair = game.add.sprite(403,216,'qHair');
	  this.hair.anchor.setTo(0.5);
	  this.face = game.add.sprite(426.5,238.5,'qface');
	  this.face.anchor.setTo(0.5);
	  this.face.frame = 1;
	  this.face2 = game.add.sprite(426.5,238.5,'qface');
	  this.face2.anchor.setTo(0.5);
	  this.face2.frame = 2;
	  this.eye = game.add.sprite(446.5,269,'eye2');
	  this.eye.anchor.setTo(0.5);
	  this.eye3_10 = game.add.sprite(446.5,269,'eye3');
	  this.eye3_10.anchor.setTo(0.5);
	  this.eye3_11 = game.add.sprite(446.5,269,'eye3_1');
	  this.eye3_11.anchor.setTo(0.5);
	  this.eye3_10.alpha = 0;
	  this.eye3_11.alpha = 0;
	  this.lip = game.add.sprite(453,372,'qLip');
	  this.lip.anchor.setTo(0.5);
	  this.lip.frame = 1;
	  this.fMask1 = game.add.sprite(438,283.5,'facemask1');
	  this.fMask1.anchor.setTo(0.5);
	  this.fMask1.alpha = 0;
	  this.fMask2 = game.add.sprite(438,283.5,'facemask2');
	  this.fMask2.anchor.setTo(0.5);
	  this.fMask2.alpha = 0;
	  this.qLip = game.add.sprite(453,372,'qLip');
	  this.qLip.anchor.setTo(0.5);
	  this.qLip.frame = 2;
	  this.qLip.alpha = 0;
	  
	  this.girlGroup.add(this.body);
	  this.girlGroup.add(this.face2);
	  this.girlGroup.add(this.face);
	  this.girlGroup.add(this.fMask1);
	  this.girlGroup.add(this.fMask2);
	  this.girlGroup.add(this.eye);
	  this.girlGroup.add(this.eye3_10);
	  this.girlGroup.add(this.eye3_11);
	  this.girlGroup.add(this.qLip);
	  this.girlGroup.add(this.lip);
	  this.girlGroup.add(this.hair);
	  
	  
	  
      this.levelGroup.add(this.bg);
	  this.levelGroup.add(this.girlGroup);
      this.levelGroup.add(this.mTop);
       this.levelGroup.add(this.toolGroup);
	   
	  this.dummy1 = game.add.graphics(350,150);
      this.dummy1.beginFill(0xFF0000, 0);
      this.dummy1.drawRect(0, 0, 200, 80);
      this.dummy1.endFill();
	  
	  this.dummy2 = game.add.graphics(320,240);
      this.dummy2.beginFill(0xFF0000, 0);
      this.dummy2.drawRect(0, 0, 230, 80);
      this.dummy2.endFill();
	  
	  this.dummy3 = game.add.graphics(320,330);
      this.dummy3.beginFill(0xFF0000, 0);
      this.dummy3.drawRect(0, 0, 230, 80);
      this.dummy3.endFill();
	  
	  
	  this.dummy4 = game.add.graphics(350,150);
      this.dummy4.beginFill(0xFF0000, 0);
      this.dummy4.drawRect(0, 0, 200, 80);
      this.dummy4.endFill();
	  
	  this.dummy5 = game.add.graphics(320,240);
      this.dummy5.beginFill(0xFF0000, 0);
      this.dummy5.drawRect(0, 0, 230, 80);
      this.dummy5.endFill();
	  
	  this.dummy6 = game.add.graphics(320,330);
      this.dummy6.beginFill(0xFF0000, 0);
      this.dummy6.drawRect(0, 0, 230, 80);
      this.dummy6.endFill();
	  
	  this.dummy7 = game.add.graphics(350,150);
      this.dummy7.beginFill(0xFF0000, 0);
      this.dummy7.drawRect(0, 0, 200, 80);
      this.dummy7.endFill();
	  
	  this.dummy8 = game.add.graphics(320,240);
      this.dummy8.beginFill(0xFF0000, 0);
      this.dummy8.drawRect(0, 0, 230, 80);
      this.dummy8.endFill();
	  
	  this.dummy9 = game.add.graphics(320,330);
      this.dummy9.beginFill(0xFF0000, 0);
      this.dummy9.drawRect(0, 0, 230, 80);
      this.dummy9.endFill();
	  
	  this.dummy10 = game.add.graphics(350,250);
      this.dummy10.beginFill(0xFF0000, 0);
	  this.dummy10.id = 10;
      this.dummy10.drawRect(0, 0, 80, 50);
      this.dummy10.endFill();
	  
	  this.dummy11 = game.add.graphics(480,250);
      this.dummy11.beginFill(0xFF0000, 0);
	  this.dummy11.id = 11;
      this.dummy11.drawRect(0, 0, 65, 50);
      this.dummy11.endFill();
	  
	  this.dummy12 = game.add.graphics(320,330);
      this.dummy12.beginFill(0xFF0000, 0);
      this.dummy12.drawRect(0, 0, 230, 80);
      this.dummy12.endFill();
	  
	  this.dummy13 = game.add.graphics(415,352);
      this.dummy13.beginFill(0xFF0000, 0);
      this.dummy13.drawRect(0, 0, 75, 35);
      this.dummy13.endFill();
           	   
	  this.tool1.inputEnabled = true;
      this.tool1.input.useHandCursor = true;
      this.tool1.events.onInputUp.add(this.pickTool1, this);	  
	   
      this.count = 0;
      this.brushDrag = false;
	  this.showerDrag = false;
	  this.toweldrag = false;
	  this.removerDrag = false;
	  this.stickDrag = false;
	  this.alhaCount1 = 0;
	  this.alhaCount2 = 1;
	  
	  this.alhaCount10 = 0;
	  this.alhaCount11 = 0;
	  
	     this.hand = game.add.sprite(90,425,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	  
	  this.playbtn = game.add.sprite(725,530,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
		 
		 
		 this.musicButton = game.add.sprite(740,67,"soundicon");
	  this.musicButton.anchor.setTo(0.5);
      this.musicButton.scale.setTo(0.5);
      this.musicButton.inputEnabled = true
      this.musicButton.input.useHandCursor = true;
      this.musicButton.events.onInputUp.add(this.changemusic, this);
      this.musicButton.events.onInputOver.add(this.btnOver, this);
      this.musicButton.events.onInputOut.add(this.btnOut, this);
	   
         this.meterGroup = game.add.group();
         this.meter = game.add.sprite(50,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(48,290,'meterCap');
         this.meterBg.anchor.setTo(0.5);
         this.meterBg.scale.setTo(1.1);
         this.meterFill = game.add.sprite(49,400,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         
         
         this.meterGroup.add(this.meter);
		 this.meterGroup.add(this.meterFill);
		 this.meterGroup.add(this.meterBg);
         this.mask = game.add.graphics(20, 515);//280-515
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.5;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.meterGroup.x = -250;
         this.meterGroup.y = -130;
         
		 this.door2 = game.add.sprite(327,-2,"door2");
         this.door1 = game.add.sprite(0,-3,"door1");
		 
		 if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:-700},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:801},1000,"Linear",true);
	  }
            
        },
changemusic:function()
{
if (!game.sound.mute) {
   game.sound.mute = true;
}else{
   game.sound.mute = false;
};
},
pickTool1:function(){
	
	this.tool1.inputEnabled = false;
	
	this.dummy1.inputEnabled = true;
	this.dummy1.events.onInputOver.add(this.hitSprite, this);
	
	this.dummy2.inputEnabled = true;
	this.dummy2.events.onInputOver.add(this.hitSprite, this);
	this.dummy3.inputEnabled = true;
	this.dummy3.events.onInputOver.add(this.hitSprite, this);
	
	game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
	this.brushDrag = true;	
	
	this.hand.kill();
	this.hand = game.add.sprite(280,380,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = -45;
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	
	},this)
	
},
pickTool2:function(){
	this.tool2.inputEnabled = false;
	this.tool2.alpha = 0;
	this.alhaCount1 = 0;
	this.mask.y = 515;
	this.dummy4.inputEnabled = true;
	this.dummy4.events.onInputOver.add(this.hitSprite2, this);
	this.dummy5.inputEnabled = true;
	this.dummy5.events.onInputOver.add(this.hitSprite2, this);
	this.dummy6.inputEnabled = true;
	this.dummy6.events.onInputOver.add(this.hitSprite2, this);
	
	game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
	this.showerDrag = true;	
	
	this.hand.kill();
	this.hand = game.add.sprite(280,380,'hand');
    this.hand.anchor.setTo(0.5);
	this.hand.angle = -45;
	this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
	this.handTween.yoyo(true);
	},this)
	
},
pickTool3:function(){
	this.tool3.inputEnabled = false;
	this.alhaCount1 = 1;
	this.mask.y = 515;
	this.dummy7.inputEnabled = true;
	this.dummy7.events.onInputOver.add(this.hitSprite3, this);
	this.dummy8.inputEnabled = true;
	this.dummy8.events.onInputOver.add(this.hitSprite3, this);
	this.dummy9.inputEnabled = true;
	this.dummy9.events.onInputOver.add(this.hitSprite3, this);
	
	game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
	this.toweldrag = true;	
	
	this.hand.kill();
	this.hand = game.add.sprite(280,380,'hand');
    this.hand.anchor.setTo(0.5);
	this.hand.angle = -45;
	this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
	this.handTween.yoyo(true);
	},this)
	
},
pickTool4:function(){
	this.tool4.inputEnabled = false;
	this.alhaCount1 = 1;
	this.mask.y = 515;
	this.dummy10.inputEnabled = true;
	this.dummy10.events.onInputOver.add(this.hitSprite4, this);
	this.dummy11.inputEnabled = true;
	this.dummy11.events.onInputOver.add(this.hitSprite4, this);
	// this.dummy12.inputEnabled = true;
	// this.dummy12.events.onInputOver.add(this.hitSprite4, this);
	
	game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
	this.removerDrag = true;	
	
	
	this.hand.kill();
	 this.hand = game.add.sprite(330,350,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = -45;
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20,y:this.hand.y-5},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	},this)
	
},
pickTool5:function(){
	this.tool5.inputEnabled = false;
	this.tool5.alpha = 0;
	this.tool5_1.alpha = 1;
	this.alhaCount1 = 0;
	this.mask.y = 515;
	this.dummy13.inputEnabled = true;
	this.dummy13.events.onInputOver.add(this.hitSprite5, this);
	
	
	game.add.tween(this.meterGroup).to({x:50}, 100, "Linear", true).onComplete.add(function(){
	this.stickDrag = true;	
	
	this.hand.kill();
	 this.hand = game.add.sprite(350,370,'hand');
         this.hand.anchor.setTo(0.5);
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	},this)
	
},
hitSprite:function(){
	if(this.fMask1.alpha<1){
			
			this['alhaCount1'] += 0.02;
			
		this.fMask1.alpha = this['alhaCount1'].toFixed(2);
		
		this.mask.y -=  4.7;
		
		}
		else
		{
			this.count++;
			this.dummy1.inputEnabled = false;
			this.dummy2.inputEnabled = false;
			this.dummy3.inputEnabled = false;
			this.dummy1.kill();
			this.dummy2.kill();
			this.dummy3.kill();
		}
		
		if(this.count>=1)
		{
			
		this.brushDrag = false;
		this.brush.x = -500;
		this.brush.y = -500;		
		this.starAni();
		}
	
},
hitSprite2:function(){
	if(this.fMask2.alpha<1){
			
			this['alhaCount1'] += 0.02;
			this['alhaCount2'] -= 0.02;
			
		this.fMask2.alpha = this['alhaCount1'].toFixed(2);
		this.fMask1.alpha = this['alhaCount2'].toFixed(2);
		
		this.mask.y -=  4.7;
		
		}
		else
		{
			this.count++;
			this.dummy4.inputEnabled = false;
			this.dummy5.inputEnabled = false;
			this.dummy6.inputEnabled = false;
			this.dummy4.kill();
			this.dummy5.kill();
			this.dummy6.kill();
		}
		
		if(this.count>=2)
		{
			
		this.showerDrag = false;
		this.shower.x = -500;
		this.shower.y = -500;		
		this.starAni();
		}
	
},
hitSprite3:function(){
	if(this.fMask2.alpha>0){
			
			this['alhaCount1'] -= 0.02;
			
		this.fMask2.alpha = this['alhaCount1'].toFixed(2);
		
		this.mask.y -=  4.7;
		
		}
		else
		{
			
			this.count++;
			this.face.alpha = 0;
			this.dummy7.inputEnabled = false;
			this.dummy8.inputEnabled = false;
			this.dummy9.inputEnabled = false;
			this.dummy7.kill();
			this.dummy8.kill();
			this.dummy9.kill();
		}
		
		if(this.count>=3)
		{
			
		this.toweldrag = false;
		this.towel.x = -500;
		this.towel.y = -500;		
		this.starAni();
		}
	
},
hitSprite4:function(evt){
	
	if(this['eye3_'+evt.id].alpha<1){
			
			this['alhaCount'+evt.id] += 0.05;
			
		this['eye3_'+evt.id].alpha = this['alhaCount'+evt.id].toFixed(2);
		
		this.mask.y -=  5.875;
		
		}
		else
		{
			this.count++;
			this['dummy'+evt.id].inputEnabled = false;
			this.dummy12.inputEnabled = false;
			this['dummy'+evt.id].kill();
			this.dummy12.kill();
		}
		
		if(this.count>=5)
		{
			
		this.removerDrag = false;
		this.remover.x = -500;
		this.remover.y = -500;		
		this.starAni();
		}
	
},
hitSprite5:function(){
	if(this.qLip.alpha<1){
			
			this['alhaCount1'] += 0.05;
			
		this.qLip.alpha = this['alhaCount1'].toFixed(2);
		
		this.mask.y -=  11.75;
		
		}
		else
		{
			this.count++;
			this.dummy13.inputEnabled = false;
			this.dummy13.kill();
		}
		
		if(this.count>=6)
		{
			
		this.stickDrag = false;
		this.tool5_1.x = 723;
		this.tool5_1.y = 513;		
		this.starAni();
		}
	
},
starAni:function(){
	
this.start = game.add.sprite(game.world.centerX,game.world.centerY,'star'); 
   this.start.anchor.setTo(0.5);
   this.start.scale.setTo(2);
   this.start.animations.add('starBlast').onComplete.add(this.removeGlitter, this);	
this.start.animations.play('starBlast', 10, false);	
game.add.tween(this.meterGroup).to({x:-250}, 100, "Linear", true).onComplete.add(function(){
	switch(this.count)
	{
		
		case 1:
		this.mask.y = 515;
		this.tool2.inputEnabled = true;
		this.tool2.input.useHandCursor = true;
		this.tool2.events.onInputUp.add(this.pickTool2, this);
		
		this.hand.kill();
		this.hand = game.add.sprite(250,460,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		
		break;
		case 2:
		this.mask.y = 515;
		this.tool2.alpha = 1;
		this.tool3.inputEnabled = true;
		this.tool3.input.useHandCursor = true;
		this.tool3.events.onInputUp.add(this.pickTool3, this);
		
		this.hand.kill();
		this.hand = game.add.sprite(440,410,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	    break;
		case 3:
		this.tool4.inputEnabled = true;
		this.tool4.input.useHandCursor = true;
		this.tool4.events.onInputUp.add(this.pickTool4, this);
		
		this.hand.kill();
		this.hand = game.add.sprite(600,410,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	    break;
		case 5:
		this.tool5.inputEnabled = true;
		this.tool5.input.useHandCursor = true;
		this.tool5.events.onInputUp.add(this.pickTool5, this);
		
		this.hand.kill();
		this.hand = game.add.sprite(720,380,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	    break;
		case 6:
		this.hand.kill();
		game.add.tween(this.playbtn.scale).to({x:0.5,y:0.5}, 2000, Phaser.Easing.Quadratic.Out, true);
		break;
	}
	
},this)	
},

btnOver:function(items){
   items.scale.setTo(0.55);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.setTo(0.5);
   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
	if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:0},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:327},1000,"Linear",true).onComplete.add(function(){
			  game.state.start('hairDressLevel');
			  
		  },this);
	  }
   
},
update:function(){
	
	if(this.brushDrag)
	   {
		this.brush.x = game.input.activePointer.x+60;
		this.brush.y = game.input.activePointer.y-50;   
	   }
	   
	   if(this.showerDrag)
	   {
		this.shower.x = game.input.activePointer.x+100;
		this.shower.y = game.input.activePointer.y+300;   
	   }
	   
	if (this.toweldrag ) {
      this.towel.x = game.input.activePointer.x-0;
      this.towel.y = game.input.activePointer.y+50;
       }  
	   
	   if(this.removerDrag)
	   {
		this.remover.x = game.input.activePointer.x+5;
		this.remover.y = game.input.activePointer.y+10;   
	   }
	   
	   if(this.stickDrag)
	   {
		this.tool5_1.x = game.input.activePointer.x+5;
		this.tool5_1.y = game.input.activePointer.y+60;   
	   }
	
},
}

Main.hairDressLevel = function(){}

Main.hairDressLevel.prototype = {
    create:function(){
      
			
			
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'bg2');
      
	  this.hairbody = game.add.sprite(416.5,340.55,'hairbody');
	  this.hairbody.anchor.setTo(0.5);
	  
	  this.hairdress = game.add.sprite(413.5,431.55,'hairdress');
	  this.hairdress.anchor.setTo(0.5);
	  
	  this.hair = game.add.sprite(398.5,218.5,'hairstyle');
	  this.hair.anchor.setTo(0.5);
	  this.hair.frame = 0;
	  
	  
	  this.hair1 = game.add.sprite(398.5,218.5,'hairstyle');
	  this.hair1.anchor.setTo(0.5);
	  this.hair1.frame = 1;
	  this.hair1.alpha = 0;
	  
	  this.hair2 = game.add.sprite(398.5,218.5,'hairstyle');
	  this.hair2.anchor.setTo(0.5);
	  this.hair2.frame = 2;
	  this.hair2.alpha = 0;
	  
	  this.hair3 = game.add.sprite(398.5,218.5,'hairstyle');
	  this.hair3.anchor.setTo(0.5);
	  this.hair3.frame = 3;
	  this.hair3.alpha = 0;
	  
	  this.hair4 = game.add.sprite(398.5,218.5,'hairstyle');
	  this.hair4.anchor.setTo(0.5);
	  this.hair4.frame = 4;
	  this.hair4.alpha = 0;
	  
	  
	  this.bigbrush = game.add.sprite(202,548.5,'bigbrush');
	  this.bigbrush.anchor.setTo(0.5);
	  this.bigbrush.inputEnabled = true;
      this.bigbrush.input.useHandCursor = true;
      this.bigbrush.events.onInputUp.add(this.pickBrush, this);
	  
	  this.bigbrush2 = game.add.sprite(202,548.5,'bigbrush');
	  this.bigbrush2.anchor.setTo(0.5);
	  this.bigbrush2.visible = false;
	  
	  this.stand = game.add.sprite(400,574.5,'hairDressBar');
	  this.stand.anchor.setTo(0.5);
	  
	   this.smallB = game.add.sprite(350.05,514.50,'smallBottle');
	   this.smallB.anchor.setTo(0.5);
	   this.smallBC = game.add.sprite(350,470,'smallBottleCap');
	   this.smallBC.anchor.setTo(0.5);
	   
	   this.tool2 = game.add.sprite(680,553,'tool2');
	   this.tool2.anchor.setTo(0.5);
	   
	   
	   
	   
	   this.hairbubble = game.add.sprite(401,174.5,'hairbubble');
	   this.hairbubble.anchor.setTo(0.5);
	   this.hairbubble.alpha = 0;
	   
	  this.showerBrush = game.add.sprite(494.5,556,'shower_brush');
	   this.showerBrush.anchor.setTo(0.5);
	   
	   this.shower = game.add.sprite(1050,600,'shower');
	  this.shower.anchor.setTo(0.5);
	  this.shower.animations.add('showerAni').onComplete.add(this.removeGlitter, this);
      this.shower.animations.play('showerAni', 30, true);
	  
	  this.dummy1 = game.add.graphics(230,20);
      this.dummy1.beginFill(0xFF0000, 0);
      this.dummy1.drawRect(0, 0, 150, 80);
      this.dummy1.endFill();
      this.dummy1.id = 1;
	  
	  
	  this.dummy2 = game.add.graphics(230,110);
      this.dummy2.beginFill(0xFF0000, 0);
      this.dummy2.drawRect(0, 0, 150, 80);
      this.dummy2.endFill();
      this.dummy2.id = 2;
	  
	  this.dummy3 = game.add.graphics(230,200);
      this.dummy3.beginFill(0xFF0000, 0);
      this.dummy3.drawRect(0, 0, 150, 80);
      this.dummy3.endFill();
      this.dummy3.id = 3;
	  
	  
	  
	  this.dummy4 = game.add.graphics(430,20);
      this.dummy4.beginFill(0xFF0000, 0);
      this.dummy4.drawRect(0, 0, 150, 80);
      this.dummy4.endFill();
      this.dummy4.id = 4;
	  
	  
	  this.dummy5 = game.add.graphics(430,110);
      this.dummy5.beginFill(0xFF0000, 0);
      this.dummy5.drawRect(0, 0, 150, 80);
      this.dummy5.endFill();
      this.dummy5.id = 5;
	  
	  this.dummy6 = game.add.graphics(430,200);
      this.dummy6.beginFill(0xFF0000, 0);
      this.dummy6.drawRect(0, 0, 150, 80);
      this.dummy6.endFill();
      this.dummy6.id = 6;
	  
	  this.dummy7 = game.add.graphics(300,100);
      this.dummy7.beginFill(0xFF0000, 0);
      this.dummy7.drawRect(0, 0, 80, 180);
      this.dummy7.endFill();
      this.dummy7.id = 7;
	  
	  this.dummy8 = game.add.graphics(350,50);
      this.dummy8.beginFill(0xFF0000, 0);
      this.dummy8.drawRect(0, 0, 140, 80);
      this.dummy8.endFill();
      this.dummy8.id = 8;
	  
	  this.dummy9 = game.add.graphics(435,100);
      this.dummy9.beginFill(0xFF0000, 0);
      this.dummy9.drawRect(0, 0, 80, 180);
      this.dummy9.endFill();
      this.dummy9.id = 9;
	  
	  this.dummy10 = game.add.graphics(300,100);
      this.dummy10.beginFill(0xFF0000, 0);
      this.dummy10.drawRect(0, 0, 80, 180);
      this.dummy10.endFill();
      this.dummy10.id = 10;
	  
	  this.dummy11 = game.add.graphics(350,50);
      this.dummy11.beginFill(0xFF0000, 0);
      this.dummy11.drawRect(0, 0, 140, 80);
      this.dummy11.endFill();
      this.dummy11.id = 11;
	  
	  this.dummy12 = game.add.graphics(435,100);
      this.dummy12.beginFill(0xFF0000, 0);
      this.dummy12.drawRect(0, 0, 80, 180);
      this.dummy12.endFill();
      this.dummy12.id = 12;
	  
	  this.dummy13 = game.add.graphics(300,100);
      this.dummy13.beginFill(0xFF0000, 0);
      this.dummy13.drawRect(0, 0, 80, 180);
      this.dummy13.endFill();
	  
	  this.dummy14 = game.add.graphics(350,50);
      this.dummy14.beginFill(0xFF0000, 0);
      this.dummy14.drawRect(0, 0, 140, 80);
      this.dummy14.endFill();
	  
	  this.dummy15 = game.add.graphics(435,100);
      this.dummy15.beginFill(0xFF0000, 0);
      this.dummy15.drawRect(0, 0, 80, 180);
      this.dummy15.endFill();
         
      this.levelGroup.add(this.bg); 
	  this.levelGroup.add(this.hairbody);
	  this.levelGroup.add(this.hairdress);
	  this.levelGroup.add(this.hair);
	  this.levelGroup.add(this.hair1);
	  this.levelGroup.add(this.hair2);
	  this.levelGroup.add(this.hair3);
	  this.levelGroup.add(this.hair4);
	  this.levelGroup.add(this.stand);
	  this.levelGroup.add(this.bigbrush);
	  this.levelGroup.add(this.bigbrush2);

        
		
		

this.circl1Cliked = false;	  
this.circl2Cliked = false;	  
this.circl3Cliked = false;	  
this.brushDrag = false;	
this.alhaCount1 = 0;
this.alhaCount2 = 1;
this.alhaCount3 = 0;
this.alhaCount4 = 1;
this.alhaCount5 = 0;
this.alhaCount6 = 1;
this.alhaCount7 = 0;
this.alhaCount8 = 1;
this.alhaCount9 = 1;
this.alhaCount10 = 0;
this.count = 0;



         this.meterGroup = game.add.group();
         this.meter = game.add.sprite(50,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(48,290,'meterCap');
         this.meterBg.anchor.setTo(0.5);
         this.meterBg.scale.setTo(1.1);
         this.meterFill = game.add.sprite(49,400,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         
         
         this.meterGroup.add(this.meter);
		 this.meterGroup.add(this.meterFill);
		 this.meterGroup.add(this.meterBg);
         this.mask = game.add.graphics(20, 515);//280-515
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.5;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.meterGroup.x = -250;
         this.meterGroup.y = -130;
		 
		 
		 this.hand = game.add.sprite(200,450,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		 
         this.playbtn = game.add.sprite(725,530,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);  
		 
		 this.musicButton = game.add.sprite(740,67,"soundicon");
	  this.musicButton.anchor.setTo(0.5);
      this.musicButton.scale.setTo(0.5);
      this.musicButton.inputEnabled = true
      this.musicButton.input.useHandCursor = true;
      this.musicButton.events.onInputUp.add(this.changemusic, this);
      this.musicButton.events.onInputOver.add(this.btnOver, this);
      this.musicButton.events.onInputOut.add(this.btnOut, this);
	  
	  this.sooDrag = false;
	  this.waterShower = false;
	  
		 this.door2 = game.add.sprite(327,-2,"door2");
		this.door1 = game.add.sprite(0,-3,"door1");
		
		if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:-700},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:801},1000,"Linear",true);
	  }
		 
        },
changemusic:function()
{
if (!game.sound.mute) {
   game.sound.mute = true;
}else{
   game.sound.mute = false;
};
},
pickBrush:function(){
	this.bigbrush.inputEnabled = false;
	
	
	this.brushDrag = true;	
	  this.dummy1.inputEnabled = true;
	  this.dummy1.events.onInputOver.add(this.hitSprite2, this);
	  this.dummy2.inputEnabled = true;
	  this.dummy2.events.onInputOver.add(this.hitSprite2, this);
	  this.dummy3.inputEnabled = true;
	  this.dummy3.events.onInputOver.add(this.hitSprite2, this);
	  
	  this.hand.kill();
	  this.hand = game.add.sprite(200,30,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 45;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+100},1000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	
},
pickSmallB:function(){
	this.hand.kill();
	this.smallB.inputEnabled = false;
	game.add.tween(this.smallB).to({y:60}, 700, "Linear", true);
	  game.add.tween(this.smallBC).to({y:18}, 700, "Linear", true).onComplete.add(function(){
		  game.add.tween(this.smallBC).to({x:260,y:8,angle:-100}, 700, "Linear", true).onComplete.add(function(){
			game.add.tween(this.smallB).to({angle:90}, 700, "Linear", true).onComplete.add(function(){
				game.add.tween(this.smallBC).to({angle:0,y:18,x:350}, 700, "Linear", true);
				game.add.tween(this.smallB).to({angle:0}, 700, "Linear", true).onComplete.add(function(){
				game.add.tween(this.smallB).to({y:514.50}, 700, "Linear", true);
				game.add.tween(this.smallBC).to({y:470}, 700, "Linear", true).onComplete.add(function(){
				this.hand = game.add.sprite(490,440,'hand');
                this.hand.anchor.setTo(0.5);
		        this.hand.angle = 90;
		        this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
				this.handTween.yoyo(true);	
					
					
			this.showerBrush.inputEnabled = true;
      this.showerBrush.input.useHandCursor = true;
      this.showerBrush.events.onInputUp.add(this.pickSooBrush, this);
			
			},this)
			},this)
				
			},this)  
			  
		  },this)
		  
	  },this)
},
pickSooBrush:function(){
	this.hand.kill();
	this.hand = game.add.sprite(230,180,'hand');
    this.hand.anchor.setTo(0.5);
	this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20},2000,"Linear",true,0,-1);
	this.handTween.yoyo(true);	
	
	
	this.showerBrush.inputEnabled = false;
	this.sooDrag = true;
	
	  this.dummy7.inputEnabled = true;
	  this.dummy7.events.onInputOver.add(this.hitSprite4, this);
	  this.dummy8.inputEnabled = true;
	  this.dummy8.events.onInputOver.add(this.hitSprite4, this);
	  this.dummy9.inputEnabled = true;
	  this.dummy9.events.onInputOver.add(this.hitSprite4, this);
},
pickShower:function(){
	this.hand.kill();
	this.hand = game.add.sprite(230,180,'hand');
    this.hand.anchor.setTo(0.5);
	this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20},2000,"Linear",true,0,-1);
	this.handTween.yoyo(true);
	this.waterShower = true;
	this.tool2.visible = false;
	this.tool2.inputEnabled = false;
	
	this.dummy10.inputEnabled = true;
	this.dummy10.events.onInputOver.add(this.hitSprite5, this);
	this.dummy11.inputEnabled = true;
	this.dummy11.events.onInputOver.add(this.hitSprite5, this);
	this.dummy12.inputEnabled = true;
	this.dummy12.events.onInputOver.add(this.hitSprite5, this);
},
pickBrush2:function(){
	this.bigbrush2.inputEnabled = false;
	
	
	this.brushDrag = true;	
	  this.dummy13.inputEnabled = true;
	  this.dummy13.events.onInputOver.add(this.hitSprite6, this);
	  this.dummy14.inputEnabled = true;
	  this.dummy14.events.onInputOver.add(this.hitSprite6, this);
	  this.dummy15.inputEnabled = true;
	  this.dummy15.events.onInputOver.add(this.hitSprite6, this);
	  
	  this.hand.kill();
	  this.hand = game.add.sprite(230,180,'hand');
         this.hand.anchor.setTo(0.5);
		 // this.hand.angle = 45;
		 this.handTween = game.add.tween(this.hand).to({x:this.hand.x+20},1000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
	
},
hitSprite2:function(){
	if(this.hair1.alpha<1){
			
			this['alhaCount1'] += 0.02;
			this['alhaCount2'] -= 0.02;
			
		this.hair1.alpha = this['alhaCount1'].toFixed(2);
		this.hair.alpha = this['alhaCount2'].toFixed(2);
		// this.mask.y -=  4.7;
		
		}
		else
		{
			this.count++;
			this.dummy1.inputEnabled = false;
			this.dummy2.inputEnabled = false;
			this.dummy3.inputEnabled = false;
			this.dummy1.kill();
			this.dummy2.kill();
			this.dummy3.kill();
		}
		
		
		if(this.count>=1)
		{
		this.starAni();
		}
},
hitSprite3:function(sprite1, sprite2){
	
	if(this.hair2.alpha<1){
			
			this['alhaCount3'] += 0.02;
			this['alhaCount4'] -= 0.02;
			
		this.hair2.alpha = this['alhaCount3'].toFixed(2);
		this.hair1.alpha = this['alhaCount4'].toFixed(2);
		// this.mask.y -=  4.7;
		
		}
		else
		{
			this.count++;
			this.dummy4.inputEnabled = false;
			this.dummy5.inputEnabled = false;
			this.dummy6.inputEnabled = false;
			this.dummy4.kill();
			this.dummy5.kill();
			this.dummy6.kill();
		}
		
		
		if(this.count>=2)
		{
		this.starAni();
		}
	
},
hitSprite4:function(sprite1, sprite2){
	if(this.hairbubble.alpha<1){
			
			this['alhaCount7'] += 0.02;
			
		this.hairbubble.alpha = this['alhaCount7'].toFixed(2);
		
		}
		else
		{
			this.count++;
			this.dummy7.inputEnabled = false;
			this.dummy8.inputEnabled = false;
			this.dummy9.inputEnabled = false;
			this.dummy7.kill();
			this.dummy8.kill();
			this.dummy9.kill();
		}
		
		
		if(this.count>=3)
		{
		this.starAni();
		}
	
},
hitSprite5:function(sprite1, sprite2){
	if(this.hairbubble.alpha>0){
			
			this['alhaCount8'] -= 0.02;
			
		this.hairbubble.alpha = this['alhaCount8'].toFixed(2);
		
		}
		else
		{
			this.count++;
			this.dummy10.inputEnabled = false;
			this.dummy11.inputEnabled = false;
			this.dummy12.inputEnabled = false;
			this.dummy10.kill();
			this.dummy11.kill();
			this.dummy12.kill();
		}
		
		
		if(this.count>=4)
		{
		this.starAni();
		}
	
},
hitSprite6:function(sprite1, sprite2){
	
	if(this.hair4.alpha<1){
			
			this['alhaCount9'] -= 0.02;
			this['alhaCount10'] += 0.02;
			
		this.hair3.alpha = this['alhaCount9'].toFixed(2);
		this.hair4.alpha = this['alhaCount10'].toFixed(2);
		
		}
		else
		{
			this.count++;
			this.dummy13.inputEnabled = false;
			this.dummy14.inputEnabled = false;
			this.dummy15.inputEnabled = false;
			this.dummy13.kill();
			this.dummy14.kill();
			this.dummy15.kill();
			
		}
		
		
		if(this.count>=5)
		{
		this.starAni();
		}
	
},
starAni:function(){
	
this.start = game.add.sprite(game.world.centerX,game.world.centerY,'star'); 
   this.start.anchor.setTo(0.5);
   this.start.scale.setTo(2);
   this.start.animations.add('starBlast').onComplete.add(this.removeGlitter, this);	
this.start.animations.play('starBlast', 10, false);	
game.add.tween(this.meterGroup).to({x:-250}, 100, "Linear", true).onComplete.add(function(){
	switch(this.count)
	{
		
		case 1:
		this.hand.kill();
	  this.hand = game.add.sprite(580,30,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = -35;
		 this.hand.scale.x = -1;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+150},1000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		
	  this.dummy4.inputEnabled = true;
	  this.dummy4.events.onInputOver.add(this.hitSprite3, this);
	  this.dummy5.inputEnabled = true;
	  this.dummy5.events.onInputOver.add(this.hitSprite3, this);
	  this.dummy6.inputEnabled = true;
	  this.dummy6.events.onInputOver.add(this.hitSprite3, this);
		break;
		case 2:
		this.brushDrag = false;
		this.bigbrush.x = 202;
		this.bigbrush.y = 548.5;
		
		this.bigbrush2.x = 202;
		this.bigbrush2.y = 548.5;
		this.hand.kill();
	  this.hand = game.add.sprite(350,370,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},1000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		
	   this.smallB.inputEnabled = true;
      this.smallB.input.useHandCursor = true;
      this.smallB.events.onInputUp.add(this.pickSmallB, this);
	    break;
		case 3:
		this.sooDrag = false;
		this.showerBrush.x = 494.5;
		this.showerBrush.y = 556;
		
		this.hand.kill();
	     this.hand = game.add.sprite(680,460,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},1000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		 
		 this.tool2.inputEnabled = true;
      this.tool2.input.useHandCursor = true;
      this.tool2.events.onInputUp.add(this.pickShower, this);
	    break;
		case 4:
		this.waterShower = false;
		this.tool2.visible = true;
		
		this.hair1.kill();
		this.hair2.kill();
		
		this.shower.x = 1050;
		this.shower.y = 600;
		
		this.hand.kill();
	     this.hand = game.add.sprite(200,450,'hand');
         this.hand.anchor.setTo(0.5);
		 this.hand.angle = 90;
		 this.handTween = game.add.tween(this.hand).to({y:this.hand.y+20},2000,"Linear",true,0,-1);
		 this.handTween.yoyo(true);
		 
		 this.hair3.alpha = 1;
		 
		 this.bigbrush.visible = true;
		 this.bigbrush2.visible = true;
		 
		 this.bigbrush2.inputEnabled = true;
      this.bigbrush2.input.useHandCursor = true;
      this.bigbrush2.events.onInputUp.add(this.pickBrush2, this);
	    break;
		case 5:
		this.hair4.alpha = 1;
		this.brushDrag = false;
		this.bigbrush.x = 202;
		this.bigbrush.y = 548.5;
		
		this.bigbrush2.x = 202;
		this.bigbrush2.y = 548.5;
		this.hand.kill();
		
		game.add.tween(this.playbtn.scale).to({x:0.5,y:0.5}, 2000, Phaser.Easing.Quadratic.Out, true);
		break;
		
	}
	
},this)	
},
btnOver:function(items){
   items.scale.setTo(0.55);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.setTo(0.5);
   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
	if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:0},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:327},1000,"Linear",true).onComplete.add(function(){
			  game.state.start('dressUpLevel');
			  
		  },this);
	  }
   
},
update:function(){

if(this.brushDrag){
   
   this.bigbrush.x = game.input.activePointer.x-50;
   this.bigbrush.y = game.input.activePointer.y;
   
   this.bigbrush2.x = game.input.activePointer.x-50;
   this.bigbrush2.y = game.input.activePointer.y;
}
if(this.sooDrag){
   
   this.showerBrush.x = game.input.activePointer.x;
   this.showerBrush.y = game.input.activePointer.y+5;
}

if(this.waterShower)
{
	this.shower.x = game.input.activePointer.x+100;
		this.shower.y = game.input.activePointer.y+300;
	
}

},
}

Main.dressUpLevel = function(){}

Main.dressUpLevel.prototype = {
    create:function(){

			
			
			
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'bg3');
	  
	  
	  this.iconGroup = game.add.group();
      this.icon1 = game.add.sprite(159.95,528.05,'icon1');
      this.icon1.anchor.setTo(0.5);
	  this.iconGroup.add(this.icon1);
	  this.icon2 = game.add.sprite(254.15,528.05,'icon2');
      this.icon2.anchor.setTo(0.5);
	  this.iconGroup.add(this.icon2);
	  this.icon3 = game.add.sprite(350.15,528.05,'icon3');
      this.icon3.anchor.setTo(0.5);
	  this.iconGroup.add(this.icon3);
	  this.icon4 = game.add.sprite(448.05,528.05,'icon4');
      this.icon4.anchor.setTo(0.5);
	  this.iconGroup.add(this.icon4);
	  
	  for(var i=1; i<=4; i++)
	  {
	  this['icon'+i].id = i;
	  this['icon'+i].inputEnabled = true;
	  this['icon'+i].input.useHandCursor = true;
      this['icon'+i].input.pixelPerfectClick = true;
	  this['icon'+i].events.onInputOver.add(this.btnOver2, this);
	  this['icon'+i].events.onInputOut.add(this.btnOut2, this);
      this['icon'+i].events.onInputUp.add(this.changeShell, this);  
	  }
	  
	  this.shell = game.add.sprite(242,319,'shell');
      this.shell.anchor.setTo(0.5);
	  
	  this.shellGroup1 = game.add.group();
	  this.fdress0 = game.add.sprite(101,272.5,'fdress0');
      this.fdress0.anchor.setTo(0.5);
	  this.fdress1 = game.add.sprite(146,262,'fdress1');
      this.fdress1.anchor.setTo(0.5);
	  this.fdress2 = game.add.sprite(214,289.5,'fdress2');
      this.fdress2.anchor.setTo(0.5);
	  this.fdress3 = game.add.sprite(268,278.5,'fdress3');
      this.fdress3.anchor.setTo(0.5);
	  this.fdress4 = game.add.sprite(328.45,270.45,'fdress4');
      this.fdress4.anchor.setTo(0.5);
	  this.fdress5 = game.add.sprite(404,280.5,'fdress5');
      this.fdress5.anchor.setTo(0.5);
	  
	  
	  
	  for(var i=0; i<=5; i++){
	  this['fdress'+i].inputEnabled = true;
	  this['fdress'+i].id = i;
	  this['fdress'+i].name = 0;
      this['fdress'+i].input.useHandCursor = true;
      this['fdress'+i].input.pixelPerfectClick = true;
      this['fdress'+i].events.onInputUp.add(this.changeFullDress, this);
	  this.shellGroup1.add(this['fdress'+i]);
	  }
	  this.shellGroup1.visible = true;
	  
	  
	  
	  this.shellGroup2 = game.add.group();
	  this.tdress0 = game.add.sprite(85.5,196.5,'tdress0');
      this.tdress0.anchor.setTo(0.5);
	  this.tdress1 = game.add.sprite(143,207.5,'tdress1');
      this.tdress1.anchor.setTo(0.5);
	  this.tdress2 = game.add.sprite(201.5,218,'tdress2');
      this.tdress2.anchor.setTo(0.5);
	  this.tdress3 = game.add.sprite(254,202.5,'tdress3');
      this.tdress3.anchor.setTo(0.5);
	  this.tdress4 = game.add.sprite(315,207.5,'tdress4');
      this.tdress4.anchor.setTo(0.5);
	  this.tdress5 = game.add.sprite(391,218,'tdress5');
      this.tdress5.anchor.setTo(0.5);
	  
	  
	  this.bdress0 = game.add.sprite(89.5,397,'bdress0');
      this.bdress0.anchor.setTo(0.5);
	  this.bdress1 = game.add.sprite(151.5,397,'bdress1');
      this.bdress1.anchor.setTo(0.5);
	  this.bdress2 = game.add.sprite(202.5,351.5,'bdress2');
      this.bdress2.anchor.setTo(0.5);
	  this.bdress3 = game.add.sprite(263,360.5,'bdress3');
      this.bdress3.anchor.setTo(0.5);
	  this.bdress4 = game.add.sprite(329,359,'bdress4');
      this.bdress4.anchor.setTo(0.5);
	  this.bdress5 = game.add.sprite(395,358.5,'bdress5');
      this.bdress5.anchor.setTo(0.5);
	  
	  this.shellbar1 = game.add.sprite(239.5,295,'shellbar1');
      this.shellbar1.anchor.setTo(0.5);
	  
	  for(var i=0; i<=5; i++){
	  this['tdress'+i].inputEnabled = true;
	  this['tdress'+i].id = i;
	  this['tdress'+i].name = 1;
	  this['tdress'+i].set = 1;
      this['tdress'+i].input.useHandCursor = true;
      this['tdress'+i].input.pixelPerfectClick = true;
      this['tdress'+i].events.onInputUp.add(this.changeTop, this);
	  this.shellGroup2.add(this['tdress'+i]);
	 
	  }
	  this.shellGroup2.add(this.shellbar1);
	  for(var i=0; i<=5; i++){
	  
	  this['bdress'+i].inputEnabled = true;
	  this['bdress'+i].id = i;
	  this['bdress'+i].name = 2;
	  this['bdress'+i].set = 1;
      this['bdress'+i].input.useHandCursor = true;
      this['bdress'+i].input.pixelPerfectClick = true;
      this['bdress'+i].events.onInputUp.add(this.changeBottom, this);
	  this.shellGroup2.add(this['bdress'+i]);
	  }
	  this.forward = game.add.sprite(280,100,'arrow');
      this.forward.anchor.setTo(0.5);
      this.forward.scale.setTo(0.5);
	  this.forward.inputEnabled = true
      this.forward.input.useHandCursor = true;
	   this.forward.events.onInputUp.add(this.moveFront, this);
      this.forward.events.onInputOver.add(this.btnOver, this);
      this.forward.events.onInputOut.add(this.btnOut, this);
	  this.forTween = game.add.tween(this.forward.scale).to({x:0.55,y:0.55},1000,"Linear",true,0,-1);
      this.forTween.yoyo(true);
	  
	  this.shellGroup2.add(this.forward);
	  
	  
	  this.shellGroup2.visible = false;
	  
	  
	  this.shellGroup5 = game.add.group();
	  this.tdress6 = game.add.sprite(102,215.5,'tdress6');
      this.tdress6.anchor.setTo(0.5);
	  this.tdress7 = game.add.sprite(162,195.5,'tdress7');
      this.tdress7.anchor.setTo(0.5);
	  this.tdress8 = game.add.sprite(232,219.5,'tdress8');
      this.tdress8.anchor.setTo(0.5);
	  this.tdress9 = game.add.sprite(303,218.5,'tdress9');
      this.tdress9.anchor.setTo(0.5);
	  
	  
	  this.bdress6 = game.add.sprite(96,400,'bdress6');
      this.bdress6.anchor.setTo(0.5);
	  this.bdress7 = game.add.sprite(168,363,'bdress7');
      this.bdress7.anchor.setTo(0.5);
	  this.bdress8 = game.add.sprite(236,348,'bdress8');
      this.bdress8.anchor.setTo(0.5);
	  this.bdress9 = game.add.sprite(316,398,'bdress9');
      this.bdress9.anchor.setTo(0.5);
	  
	  this.shellbar1 = game.add.sprite(239.5,295,'shellbar1');
      this.shellbar1.anchor.setTo(0.5);
	  this.dressCount = 0;
	  for(var i=6; i<=9; i++){
	  this['tdress'+i].inputEnabled = true;
	  this['tdress'+i].id = this.dressCount;
	  this['tdress'+i].name = 1;
	  this['tdress'+i].set = 2;
      this['tdress'+i].input.useHandCursor = true;
      this['tdress'+i].input.pixelPerfectClick = true;
      this['tdress'+i].events.onInputUp.add(this.changeTop, this);
	  this.shellGroup5.add(this['tdress'+i]);
	  this.dressCount++;
	 
	  }
	  this.shellGroup5.add(this.shellbar1);
	  this.dressCount = 0;
	  for(var i=6; i<=9; i++){
	  
	  this['bdress'+i].inputEnabled = true;
	  this['bdress'+i].id = this.dressCount;
	  this['bdress'+i].name = 2;
	  this['bdress'+i].set = 2;
      this['bdress'+i].input.useHandCursor = true;
      this['bdress'+i].input.pixelPerfectClick = true;
      this['bdress'+i].events.onInputUp.add(this.changeBottom, this);
	  this.shellGroup5.add(this['bdress'+i]);
	  this.dressCount++;
	  }
	  this.backward = game.add.sprite(180,100,'arrow');
      this.backward.anchor.setTo(0.5);
	  this.backward.angle = -180;
      this.backward.scale.setTo(0.5);
	  this.backward.inputEnabled = true
      this.backward.input.useHandCursor = true;
	   this.backward.events.onInputUp.add(this.moveBack, this);
      this.backward.events.onInputOver.add(this.btnOver, this);
      this.backward.events.onInputOut.add(this.btnOut, this);
      
	  this.backTween = game.add.tween(this.backward.scale).to({x:0.55,y:0.55},500,"Linear",true,0,-1);
      this.backTween.yoyo(true);
	  
	  this.shellGroup5.add(this.backward);
	  this.shellGroup5.visible = false;
	  
	  
	  
	  
	  this.shellGroup3 = game.add.group();
	  this.cdress0 = game.add.sprite(96,227.5,'cdress0');
      this.cdress0.anchor.setTo(0.5);
	  this.cdress1 = game.add.sprite(141,227.5,'cdress1');
      this.cdress1.anchor.setTo(0.5);
	  this.cdress2 = game.add.sprite(199,227.5,'cdress2');
      this.cdress2.anchor.setTo(0.5);
	  this.cdress3 = game.add.sprite(251.5,227.5,'cdress3');
      this.cdress3.anchor.setTo(0.5);
	  this.cdress4 = game.add.sprite(310,227.5,'cdress4');
      this.cdress4.anchor.setTo(0.5);
	  this.cdress5 = game.add.sprite(377,227.5,'cdress5');
      this.cdress5.anchor.setTo(0.5);
	  
	  
	  for(var i=0; i<=5; i++){
	  this['cdress'+i].inputEnabled = true;
	  this['cdress'+i].id = i;
	  this['cdress'+i].name = 3;
      this['cdress'+i].input.useHandCursor = true;
      this['cdress'+i].input.pixelPerfectClick = true;
      this['cdress'+i].events.onInputUp.add(this.changeCoat, this);
	  this.shellGroup3.add(this['cdress'+i]);
	  }
	  this.shellGroup3.visible = false;
	  
	  this.shellGroup4 = game.add.group();
	  this.acc0 = game.add.sprite(109,225.5,'acc0');
      this.acc0.anchor.setTo(0.5);
	  this.acc1 = game.add.sprite(193,229.5,'acc1');
      this.acc1.anchor.setTo(0.5);
	  this.acc2 = game.add.sprite(279.5,233.5,'acc2');
      this.acc2.anchor.setTo(0.5);
	  this.acc3 = game.add.sprite(364,244.5,'acc3');
      this.acc3.anchor.setTo(0.5);
	  this.acc4 = game.add.sprite(114.5,353,'acc4');
      this.acc4.anchor.setTo(0.5);
	  this.acc5 = game.add.sprite(237,352,'acc5');
      this.acc5.anchor.setTo(0.5);
	  this.acc6 = game.add.sprite(364,342,'acc6');
      this.acc6.anchor.setTo(0.5);
	  this.shellbar2 = game.add.sprite(236,316.5,'shellbar2');
      this.shellbar2.anchor.setTo(0.5);
	  
	  for(var i=0; i<=3; i++){
	  this['acc'+i].inputEnabled = true;
	  this['acc'+i].id = i;
	  this['acc'+i].name = 4;
      this['acc'+i].input.useHandCursor = true;
      this['acc'+i].input.pixelPerfectClick = true;
      this['acc'+i].events.onInputUp.add(this.changeShoe, this);
	  }
	  
	  
	  this.acc4.inputEnabled = true;
	  this.acc4.id = 0;
	  this.acc4.name = 5;
      this.acc4.input.useHandCursor = true;
      this.acc4.events.onInputUp.add(this.changeAcc, this);
	  
	  this.acc5.inputEnabled = true;
	  this.acc5.id = 1;
	  this.acc5.name = 5;
      this.acc5.input.useHandCursor = true;
      this.acc5.input.pixelPerfectClick = true;
      this.acc5.events.onInputUp.add(this.changeAcc, this);
	  
	  this.acc6.inputEnabled = true;
	  this.acc6.id = 2;
	  this.acc6.name = 5;
      this.acc6.input.useHandCursor = true;
      this.acc6.input.pixelPerfectClick = true;
      this.acc6.events.onInputUp.add(this.changeAcc, this);
	  
	  
	  this.shellGroup4.add(this.shellbar2);
	  this.shellGroup4.add(this.acc0);
	  this.shellGroup4.add(this.acc1);
	  this.shellGroup4.add(this.acc2);
	  this.shellGroup4.add(this.acc3);
	  this.shellGroup4.add(this.acc4);
	  this.shellGroup4.add(this.acc5);
	  this.shellGroup4.add(this.acc6);
	  this.shellGroup4.visible = false;
	  
	  this.girlGroup = game.add.group();
	  
	  this.body = game.add.sprite(601.5,283.5,'body');
      this.body.anchor.setTo(0.5);
	  this.hair = game.add.sprite(619,116.5,'hair');
      this.hair.anchor.setTo(0.5);
	  
	  this.fullDressGroup = game.add.group();
	  // this.gfulldress = game.add.sprite(602,278,'gfulldress1');
      // this.gfulldress.anchor.setTo(0.5);
	  // this.fullDressGroup.add(this.gfulldress);
	  
	  
	  this.topDressGroup = game.add.group();
	  // this.gtdress = game.add.sprite(598,210.5,'gtdress');
      // this.gtdress.anchor.setTo(0.5);
	  // this.topDressGroup.add(this.gtdress);
	  
	  this.bottomDressGroup = game.add.group();
	  // this.gbdress = game.add.sprite(603.5,359.5,'gbdress');
      // this.gbdress.anchor.setTo(0.5);
	  // this.bottomDressGroup.add(this.gbdress);
	  
	  this.overDressGroup = game.add.group();
	  // this.gcdress = game.add.sprite(598.5,209,'gcdress');
      // this.gcdress.anchor.setTo(0.5);
	  // this.overDressGroup.add(this.gcdress);
	  
	  this.shoeGroup = game.add.group();
	  // this.gshoe = game.add.sprite(598.5,513.5,'gshoe');
      // this.gshoe.anchor.setTo(0.5);
	  // this.shoeGroup.add(this.gshoe);
	  
	  this.accGroup = game.add.group();
	  this.gacc0 = game.add.sprite(600.5,82.5,'gacc0');
      this.gacc0.anchor.setTo(0.5);
	  this.accGroup.add(this.gacc0);
	  
	  this.gacc1 = game.add.sprite(558,292,'gacc1');
      this.gacc1.anchor.setTo(0.5);
	  this.accGroup.add(this.gacc1);
	  
	  this.gacc2 = game.add.sprite(646,350,'gacc2');
      this.gacc2.anchor.setTo(0.5);
	  this.accGroup.add(this.gacc2);
	  
	  this.gacc0.alpha = 0;
	  this.gacc1.alpha = 0;
	  this.gacc2.alpha = 0;
	  
	  
	  this.girlGroup.add(this.body);
	  
	  this.girlGroup.add(this.fullDressGroup);
	  
	  this.girlGroup.add(this.bottomDressGroup);
	  this.girlGroup.add(this.topDressGroup);
	  this.girlGroup.add(this.overDressGroup);
	  this.girlGroup.add(this.shoeGroup);
	  this.girlGroup.add(this.accGroup);
	  this.girlGroup.add(this.hair);
	  
      this.levelGroup.add(this.bg);  
      this.levelGroup.add(this.shell);  
	  
      this.levelGroup.add(this.shellGroup1);  
      this.levelGroup.add(this.shellGroup2);  
      this.levelGroup.add(this.shellGroup3);  
      this.levelGroup.add(this.shellGroup4);  
      this.levelGroup.add(this.shellGroup5);  
      this.levelGroup.add(this.iconGroup);  
      this.levelGroup.add(this.girlGroup);
	  
	  this.removeCoat = 100;
	  
	  
	  this.musicButton = game.add.sprite(740,67,"soundicon");
	  this.musicButton.anchor.setTo(0.5);
      this.musicButton.scale.setTo(0.5);
      this.musicButton.inputEnabled = true
      this.musicButton.input.useHandCursor = true;
      this.musicButton.events.onInputUp.add(this.changemusic, this);
      this.musicButton.events.onInputOver.add(this.btnOver, this);
      this.musicButton.events.onInputOut.add(this.btnOut, this);
	  
		 this.donebtn = game.add.sprite(735,540,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0.5);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
		 
		 // this.girlGroup.alpha = 0;
		 
		this.door2 = game.add.sprite(327,-2,"door2");
		this.door1 = game.add.sprite(0,-3,"door1");
		
		if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:-700},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:801},1000,"Linear",true);
	  }
  
        },
moveBack:function(){
	this.shellGroup2.visible = true;
	this.shellGroup5.visible = false;
	
},
moveFront:function(){
	this.shellGroup5.visible = true;
	this.shellGroup2.visible = false;
	
},
changeShell:function(evt){
	for(var i=1; i<=5; i++)
	  {
		  this['shellGroup'+i].visible = false;
	  }
	  this['shellGroup'+evt.id].visible = true;
},
changeFullDress:function(evt){	
Main.applyCount1[0][0] = evt.id;
Main.applyCount1[1][0] = -1;
Main.applyCount1[2][0] = -1;

this.topDressGroup.removeAll();
this.bottomDressGroup.removeAll();

	this.fullDressGroup.removeAll();
	if(Main.applyCount1[0][0]>-1)
	{
	  this.gfulldress = game.add.sprite(600,262,'gfulldress');
      this.gfulldress.anchor.setTo(0.5);
	  this.gfulldress.frame = evt.id;
	  this.fullDressGroup.add(this.gfulldress);
	}
	
	
	
	
},
changeTop:function(evt){	
Main.applyCount1[0][0] = -1;
Main.applyCount1[1][0] = evt.id;

	this.fullDressGroup.removeAll();
	
	
	this.topDressGroup.removeAll();
	if(evt.set == 1){
	if(Main.applyCount1[1][0]>-1)
	{
	  this.gtdress = game.add.sprite(598,210.5,'gtdress');
      this.gtdress.anchor.setTo(0.5);
	  this.gtdress.frame = evt.id;
	  this.topDressGroup.add(this.gtdress);
	}
	}
	else
	{
	if(Main.applyCount1[1][0]>-1)
	{
	  this.gtdress = game.add.sprite(594.5,221.5,'gtdress2');
      this.gtdress.anchor.setTo(0.5);
	  this.gtdress.frame = evt.id;
	  this.topDressGroup.add(this.gtdress);
	}	
	}
	
	
},
changeBottom:function(evt){	
Main.applyCount1[0][0] = -1;
Main.applyCount1[2][0] = evt.id;

	this.fullDressGroup.removeAll();
	
	
	this.bottomDressGroup.removeAll();
	if(evt.set == 1){
	if(Main.applyCount1[2][0]>-1)
	{
	  this.gbdress = game.add.sprite(603.5,359.5,'gbdress');
      this.gbdress.anchor.setTo(0.5);
	  this.gbdress.frame = evt.id;
	  this.bottomDressGroup.add(this.gbdress);
	}
	}
	else{
this.gbdress = game.add.sprite(604,361.5,'gbdress2');
      this.gbdress.anchor.setTo(0.5);
	  this.gbdress.frame = evt.id;
	  this.bottomDressGroup.add(this.gbdress);
	}
	
	
},
changeCoat:function(evt){	
this.removeCoat = Main.applyCount1[3][0];
Main.applyCount1[3][0] = evt.id;

	
	
	this.overDressGroup.removeAll();
	if(Main.applyCount1[3][0]>-1)
	{
	  this.gcdress = game.add.sprite(598.5,209,'gcdress');
      this.gcdress.anchor.setTo(0.5);
	  this.gcdress.frame = evt.id;
	  this.overDressGroup.add(this.gcdress);
	}
	if(this.removeCoat == Main.applyCount1[3][0])
	{
		this.overDressGroup.removeAll();
		Main.applyCount1[3][0] = -1;
	}
	
},
changeShoe:function(evt){	
Main.applyCount1[4][0] = evt.id;

	
	
	this.shoeGroup.removeAll();
	if(Main.applyCount1[4][0]>-1)
	{
	  this.gshoe = game.add.sprite(598.5,513.5,'gshoe');
      this.gshoe.anchor.setTo(0.5);
	  this.gshoe.frame = evt.id;
	  this.shoeGroup.add(this.gshoe);
	}
	
	
},
changeAcc:function(evt){	
if(this['gacc'+evt.id].alpha == 0)
{
	this['gacc'+evt.id].alpha = 1;
	Main.applyCount1[evt.name][0] = 1;
}
else
{
	this['gacc'+evt.id].alpha = 0;
	Main.applyCount1[evt.name][0] = 0;
}
	
},
changemusic:function()
{
if (!game.sound.mute) {
   game.sound.mute = true;
}else{
   game.sound.mute = false;
};
},
btnOver:function(items){
	items.scale.setTo(0.55);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
	items.scale.setTo(0.5);
   },   
btnOver2:function(items){
	items.scale.setTo(1.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut2:function(items){
	items.scale.setTo(1);
   }, 
btnOver3:function(items){
	items.scale.setTo(0.75);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut3:function(items){
	items.scale.setTo(0.7);
   },    
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
	if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:0},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:327},1000,"Linear",true).onComplete.add(function(){
			  this.shell.visible = false;
			  this.shellGroup1.visible = false;
			  this.shellGroup2.visible = false;
			  this.shellGroup3.visible = false;
			  this.shellGroup4.visible = false;
			  this.shellGroup5.visible = false;
			  this.iconGroup.visible = false;
			  
			  this.donebtn.visible = false;
			  
			  this.finalIcon = game.add.sprite(640,280,'finalIcon');
         this.finalIcon.anchor.setTo(0.5);
         this.finalIcon.scale.setTo(0.8);
		this.levelGroup.add(this.finalIcon);	  
			  
		 this.resetbtn = game.add.sprite(550,540,'resetbtn');
         this.resetbtn.anchor.setTo(0.5);
         this.resetbtn.scale.setTo(0.5);
         this.resetbtn.inputEnabled = true;
         this.resetbtn.input.useHandCursor = true;
         this.resetbtn.events.onInputUp.add(this.resetGame, this);
         this.resetbtn.events.onInputOver.add(this.btnOver, this);
         this.resetbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.resetbtn);
		 
		 
		 this.savebtn = game.add.sprite(250,340,'savebtn');
         this.savebtn.anchor.setTo(0.5);
         this.savebtn.scale.setTo(0.7);
         this.savebtn.inputEnabled = true;
         this.savebtn.input.useHandCursor = true;
         this.savebtn.events.onInputUp.add(this.saveImage, this);
         this.savebtn.events.onInputOver.add(this.btnOver3, this);
         this.savebtn.events.onInputOut.add(this.btnOut3, this);
         this.levelGroup.add(this.savebtn);
		 
		  
		  this.girlGroup.x = -200;
			  
			  game.add.tween(this.door1).to({x:-700},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:801},1000,"Linear",true).onComplete.add(function(){
			  
			  
			  
		  
		  
		 
			  },this)
		  },this);
	  }
},
saveImage:function(){
	captureScreen()
},
resetGame:function(){
	hitArray = [0,0,0,0];
    hitArray2 = [0,0,0,0];
    hitArray3 = [0,0,0,0];
	applyCount1 = [[-1],[-1],[-1],[-1],[0],[0],[0],[0]];

if(Main.shutterOn[0])
	  {
		  game.add.tween(this.door1).to({x:0},1000,"Linear",true);
		  game.add.tween(this.door2).to({x:327},1000,"Linear",true).onComplete.add(function(){
			  game.state.start('title'); 
			  
		  },this);
	  }	
},

}

function captureScreen()
	{ 
		tocanvas($("canvas"), {
			onrendered: function (canvas) {
				saveAs(canvas.toDataURL(), 'Harley Quinn First Day Of School Makeover.png');				
			}
		});
		
	}
function extractBorder(element) {
		// Extracts element border.
		var border = {
			rect: element.getBoundingClientRect(),
			width: parseFloat(element.style.borderWidth),
			style: element.style.borderStyle,
			color: element.style.borderColor,
			original: element.style.border,
			element: element
		};
		// Clears original border.
		element.style.borderColor = "transparent";		
		return border;
	}
	
function extractBorders(element) {
	var borders = [];	
	// Extracts the rect from the element itself.
	if (element.style.border) {
		borders.push(extractBorder(element));
	}
	
	// Extracts rect from children.
	$(element).find("*").each(function(index, child) {
		if (child.style.border) {
			borders.push(extractBorder(child));
		}
	});
	
	return borders;
}

function drawBorder(canvas, border, parentRect) {
	
	
	// Retrieves context.
	var ctx = canvas.getContext("2d");
	
	 ////////console.log(border.style)
	// Checks border style.
	if (border.style === "dashed") {
		ctx.setLineDash([3]);
	} else if (border.style === "dotted") {
		ctx.setLineDash([border.width]);
	}
	
	// Calculates border edges.
	var left = border.rect.left + 0.5 - parentRect.left;
	var right = border.rect.right - 0.5 - parentRect.left;
	var top = border.rect.top + 0.5 - parentRect.top;
	var bottom = border.rect.bottom - 0.5 - parentRect.top;
	
	// Draws border.
	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(right, top);
	ctx.lineTo(right, bottom);
	ctx.lineTo(left, bottom);
	ctx.lineTo(left, top);
	ctx.strokeStyle = border.color;
	ctx.lineWidth = border.width;
	//ctx.stroke();
	
	// Restores element original border.
	//border.element.style.border = border.original;
}

function tocanvas(element, options) {
	// Extracts parent relative position.
	var parentRect = element[0].getBoundingClientRect();
	  
	// Extracts elements borders.
	var borders = extractBorders(element[0]);
	
	// Keeps original onrendered option.
	var onrendered = options.onrendered;
	
	// Intercepts onrendered callback.
	options.onrendered = function(canvas) {
		// Draws borders.
		for (var i = 0; i < borders.length; i++) drawBorder(canvas, borders[i], parentRect);
		
		// Calls original callback.
		if (onrendered) onrendered(canvas);
	}
	
	// Calls html2canvas.
		
	html2canvas($("canvas"), options);
}
function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
function openLink0()
{

}
function openLink1()
{

}
function openLink2()
{

}
function openLinkLogo()
{

}
function openLinkTransition()
{

}
function openLinkEnd(){
	
}
function openLink()
{

}
function updateLogoFlash()
{

	
}
game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('makeUpRemove', Main.makeUpRemove);
game.state.add('makeUpLevel', Main.makeUpLevel);
game.state.add('dressUpLevel', Main.dressUpLevel);
game.state.add('hairDressLevel', Main.hairDressLevel);


game.state.start('boot');