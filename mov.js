<script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.js"></script>

<script>
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        create: function () {

            this.player = this.add.rectangle(
                400, 300, 50, 50, 0x00ff00
            );

            this.cursors = this.input.keyboard.createCursorKeys();
        },

        update: function () {

            if (this.cursors.left.isDown) {
                this.player.x -= 5;
            }

            if (this.cursors.right.isDown) {
                this.player.x += 5;
            }

            if (this.cursors.up.isDown) {
                this.player.y -= 5;
            }

            if (this.cursors.down.isDown) {
                this.player.y += 5;
            }

        }
    }
};

new Phaser.Game(config);
</script>
