function Obstacle (game) {
  this.game = game;
  //this.x = [this.game.canvas.width / this.game.howManyObstacles] TIENE QUE SER UN ARRAY DE POSICIONES
  this.x = this.game.canvas.width - 300;
  this.y = this.game.canvas.height - 50;
  //  this.y = this.game.canvas.height - this.height;
  this.width = 100;
  this.height = 50;
  this.blueColor = "#0000ff";
}
Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = this.blueColor;
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
}
Obstacle.prototype.moveForward = function() {
  this.x -= 10; // si este valor es menor que background.x el fondo y el obstaculo daran una sensacion de perspectiva
}