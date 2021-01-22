function NineSquared() {
  this.moveCount = 0;
  this.bestScore = 100000;
}

NineSquared.prototype.play = function() {
  this.grid = ['X','X','X','X','X','X','X','X','X']
};

NineSquared.prototype.random = function() {
  this.grid[(Math.ceil(Math.random() * 9) - 1)] = "O"
  this.grid[(Math.ceil(Math.random() * 9) - 1)] = "O"
  this.grid[(Math.ceil(Math.random() * 9) - 1)] = "O"
  this.grid[(Math.ceil(Math.random() * 9) - 1)] = "O"
  this.grid[(Math.ceil(Math.random() * 9) - 1)] = "O"
};

NineSquared.prototype.start = function() {
  this.reset()
};
NineSquared.prototype.go = function(pos) {
  this.move(pos)
};


NineSquared.prototype.reset = function() {
  this.grid = ['X','X','X','X','X','X','X','X','X']
  this.random()
};

NineSquared.prototype.isOver = function() {
  return (this.grid.join() === ['O','O','O','O','O','O','O','O','O'].join())
};

NineSquared.prototype.move = function(position) {
  if(!this.isOver()){
  if(position === 0){
    this.grid[0] = (this.grid[0] === "X" ? "O" : "X")
    this.grid[1] = (this.grid[1] === "X" ? "O" : "X")
    this.grid[3] = (this.grid[3] === "X" ? "O" : "X")
  }
  if(position === 1){
    this.grid[0] = (this.grid[0] === "X" ? "O" : "X")
    this.grid[1] = (this.grid[1] === "X" ? "O" : "X")
    this.grid[2] = (this.grid[2] === "X" ? "O" : "X")
    this.grid[4] = (this.grid[4] === "X" ? "O" : "X")
  }
  if(position === 2){
    this.grid[1] = (this.grid[1] === "X" ? "O" : "X")
    this.grid[2] = (this.grid[2] === "X" ? "O" : "X")
    this.grid[5] = (this.grid[5] === "X" ? "O" : "X")
  }
  if(position === 3){
    this.grid[3] = (this.grid[3] === "X" ? "O" : "X")
    this.grid[4] = (this.grid[4] === "X" ? "O" : "X")
  }
  if(position === 4){
    this.grid[4] = (this.grid[4] === "X" ? "O" : "X")
    this.grid[1] = (this.grid[1] === "X" ? "O" : "X")
    this.grid[7] = (this.grid[7] === "X" ? "O" : "X")
  }
  if(position === 5){
    this.grid[4] = (this.grid[4] === "X" ? "O" : "X")
    this.grid[5] = (this.grid[5] === "X" ? "O" : "X")
  }
  if(position === 6){
    this.grid[3] = (this.grid[3] === "X" ? "O" : "X")
    this.grid[6] = (this.grid[6] === "X" ? "O" : "X")
    this.grid[7] = (this.grid[7] === "X" ? "O" : "X")
  }
  if(position === 7){
    this.grid[4] = (this.grid[4] === "X" ? "O" : "X")
    this.grid[6] = (this.grid[6] === "X" ? "O" : "X")
    this.grid[7] = (this.grid[7] === "X" ? "O" : "X")
    this.grid[8] = (this.grid[8] === "X" ? "O" : "X")
  }
  if(position === 8){
    this.grid[8] = (this.grid[8] === "X" ? "O" : "X")
    this.grid[7] = (this.grid[7] === "X" ? "O" : "X")
    this.grid[5] = (this.grid[5] === "X" ? "O" : "X")
  }
  this.moveCount = this.moveCount + 1;
  if(this.isOver()){
    if(this.bestScore > this.moveCount){
      this.bestScore = this.moveCount
    }
  }
  }
};
