var rightCharName;
var leftCharName;
class FightScene extends Phaser.Scene {
    
    constructor(args){
        rightCharName = args.rightChar;
        leftCharName = args.leftChar;
        super({key: 'FightScene'});
    }
    preload(){
        var arrayVideo = ['streets','sky']
        var pickOne = arrayVideo[Math.floor(Math.random()*arrayVideo.length)]
        this.load.video('background', '/assets/'+pickOne+'.mp4');
        this.load.multiatlas(leftCharName, 'assets/'+leftCharName+'.json', 'assets');
        this.load.multiatlas(rightCharName, 'assets/'+rightCharName+'.json', 'assets');
    }
    
    create(){
        var leftChar;
        var rightChar;
        var newHeight = window.innerHeight 
        var newWidth = window.innerWidth
        let background = this.add.video(0,0,'background');
        background.setOrigin(0,0);
        background.displayHeight = this.sys.game.config.height;
        background.displayWidth = this.sys.game.config.width;
        background.play(true)
    leftChar = this.add.sprite(newWidth/6, newHeight/2, leftCharName, leftCharName+'Idle_000.png');
    leftChar.setScale(0.9, 0.9);
    rightChar = this.add.sprite(newWidth/1.2, newHeight/2,rightCharName, rightCharName+'Idle2_000.png');
    rightChar.setScale(0.9, 0.9);
    rightChar.scaleX = -1;
    var frameNames = this.anims.generateFrameNames(leftCharName, {
                     start: 0, end: 19, zeroPad: 3,
                     prefix: leftCharName+'Idle_', suffix: '.png'
                 });
    var frameNames2 = this.anims.generateFrameNames(rightCharName, {
        start: 0, end: 19, zeroPad: 3,
        prefix: rightCharName+'Idle_', suffix: '.png'
        });           
    this.anims.create({ key: 'animation', frames: frameNames, frameRate: 8, repeat: -1 });
    this.anims.create({ key: 'animation2', frames: frameNames2, frameRate: 8, repeat: -1 });
    leftChar.anims.play('animation');
    rightChar.anims.play('animation2');
    }

}
export default FightScene;