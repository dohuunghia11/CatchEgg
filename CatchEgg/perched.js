let perched = function (game) {
    this.game = game;

    let self = this;

    this.draw = function () {
        self.game.context.drawImage(
            self.game.resource.perched.img,
            20,
            100,
        );
        self.game.context.drawImage(
            self.game.resource.perched.img,
            420,
            100,
        );
        self.game.context.drawImage(
            self.game.resource.perched.img,
            820,
            100,
        );
    }
};