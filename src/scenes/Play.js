class Play extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        // load assets here
        this.load.spritesheet("slime", "./assets/slime.png", {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 1});
        this.load.image("card", "./assets/card.png");

        // audio
        this.load.audio("hurt", "./assets/hurt.wav");
        this.load.audio("killed", "./assets/killed.wav");
    }

    create() {

        let hpConfig = {
            fontFamily: 'Impact',
            fontSize: '20px',
            color: '#8B0000',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // place enemy slime
        this.slime = this.add.sprite(game.config.width / 2, game.config.height / 2, "slime").setOrigin(0.0);

        // slime anim
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("slime", {start: 0, end: 1}),
            frameRate: 8,
            repeat: -1
        });
        this.slime.setScale(1.5);
        this.slime.anims.play("idle");

        // slime hp
        this.slime.hp = 20;
        this.hpBar = this.add.text(this.slime.x + 55, this.slime.y - 20, this.slime.hp, hpConfig).setOrigin(0.0);
        this.hpBar.gone = false;

        // place card
        this.card = this.add.sprite(game.config.width / 2, game.config.height - 23, "card").setInteractive();
        this.card.damage = 5;
        this.card.setScale(1.5);

        this.card.on("pointerdown", () => {
            this.slime.hp -= this.card.damage;
            this.sound.play("hurt");
        });
    }

    update() {

        // update the text
        if (this.hpBar.txt != this.slime.hp && !(this.hpBar.gone)) {
            this.hpBar.text = this.slime.hp;
            if (this.slime.hp <= 0) {
                // kill the enemy
                this.sound.play("killed");
                this.slime.destroy();

                // get rid of HP bar
                this.hpBar.gone = true;
                this.time.delayedCall(500, () => {
                    this.hpBar.destroy();
                }, null, this);
            }
        }
    }
}