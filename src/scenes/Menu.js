class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load menu assets
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '45px',
            color: '#8B0000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

    this.add.text(game.config.width/2, game.config.height/2, 'Welcome...', menuConfig).setOrigin(0.5);

    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.start("playGame");
        }
    }
}