import FightScene from './scenes/FightScene.js'
var alexaClient;
Alexa.create({version: '1.1'})
     .then((args) => {
         const {
             alexa,
             message
         } = args;
        alexaClient = alexa;
        document.getElementById('debugElement').innerHTML = 'Alexa is ready :)';
     })
     .catch(error => {
        document.getElementById('debugElement').innerHTML = 'Alexa not ready :(';
     });

let fightScene = new FightScene({rightChar:'Lillith', leftChar:'Randell'});
var newHeight = window.innerHeight 
var newWidth = window.innerWidth
var config = {
    type: Phaser.AUTO,
    parent: 'powers',
    width: newWidth,
    height: newHeight,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

var game = new Phaser.Game(config);
game.scene.add('FightScene', fightScene);
game.scene.start('FightScene');


/*
  scene.input.on('pointerdown', 
  (pointer)=> { console.log('woot');
    circle.setPosition( pointer.x, pointer.y );}
  );
*/
