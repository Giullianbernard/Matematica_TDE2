<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Meu Jogo Phaser</title>

    <script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.js"></script>
</head>

<body>

<script>
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        create: function () {

            // Quadrado vermelho
            this.add.rectangle(
                200, 300,
                100, 100,
                0xff0000
            );

            // Texto
            this.add.text(
                300, 250,
                "Olá, Phaser!",
                {
                    fontSize: "32px",
                    color: "#ffffff"
                }
            );

            // Círculo verde
            this.add.circle(
                600, 300,
                50,
                0x00ff00
            );
        }
    }
};

new Phaser.Game(config);
</script>

</body>
</html>



