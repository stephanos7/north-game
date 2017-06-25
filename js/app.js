//Level Constructor fn
function Level(size){
    this.size = size;
    this.maze = this.generateMaze(this.levelSize);

    //populate html with maze boxes
    var n = 0;
    for(var a = 0; a < this.size; a++){
        for(var b = 0; b < this.size; b++){
            n ++;
            $('.container').append($('<div>').addClass("box").css("order", n));
        }
    }
}

//Level Constructor Prototypical Functions
Level.prototype.generateMaze = function(arraySize){
    var order = 0;
    var array =[];
    for(var x = 0; x < this.size; x++){
      array.push([]);
        for(var y = 0; y < this.size; y++){
            order ++;
            array[x].push({objectOrder: order, top: 1, bottom: 1, left: 1, right : 1, visited: " "});
        }
    }
    return array;
}

Level.prototype.depthFirstSearch = function(){
    for(var x = 0; x < this.size; this.maze[x++]){
        for(var y = 0; y < this.size; this.maze[x][y++]){
           do{
               console.log("passing through " + this.maze[x][y].objectOrder);
               this.maze[x][y].visited = true;
           }while(this.maze[x][y+1] === false || this.maze[x+1][y] === false);
        }
    }
}

 
//JQUERY
$(document).ready(function() {
    
level = new Level(10);
console.log(level.maze);
    console.log(level.depthFirstSearch());
            
            
            
});

