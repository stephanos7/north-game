//Level Constructor fn
function Level(size){
    this.size = size;
    this.maze = this.generateMaze(this.levelSize);
    
    //populate html with maze boxes
    for(var a = 0; a < this.size; a++){
        for(var b = 0; b < this.size; b++){
            $('.container').append($('<div>').addClass("box"));
        }
    }
    
    
}


//Level Constructor Prototypical Functions


Level.prototype.generateMaze = function(arraySize){
    var array =[];
    for(var x = 0; x < this.size; x++){
      array.push([]);
        for(var y = 0; y < this.size; y++){
            array[x].push({name: 1111});
        }
    }
    return array;
}



 
//JQUERY
$(document).ready(function() {
    
level = new Level(10);
console.log(level.maze);
            
            
            
});

