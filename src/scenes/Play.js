class Play extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        // load assets here
        this.load.spritesheet("slime", "./assets/slime.png", {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 1});
        this.load.image("card", "./assets/card.png");
    }

    create() {

        // place enemy slime
        this.slime = this.add.sprite(game.config.width / 2, game.config.height / 2, "slime");

        // slime anim
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("slime", {start: 0, end: 1}),
            frameRate: 8,
            repeat: -1
        });

        this.slime.setScale(1.5);
        this.slime.anims.play("idle");

        // place card
        this.card = this.add.sprite(game.config.width / 2, game.config.height - 23, "card");

        this.card.setScale(1.5);
    }

    update() {
        
    }
}