var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft = function(){
  if (this._miner.dir ===0){
    this._miner.dir=4;
  }
    this._miner.dir--;
};

Maze.prototype.turnRight = function(){
  if(this._miner.dir===3){
    this._miner.dir=0;
  } else {
    this._miner.dir++;
  }
};

Maze.prototype.isPathForward = function(){
  if(this._miner.dir===2){
    return true;
  }
  return false;
};

Maze.prototype.isPathLeft    = function(){
};

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;
