//Constructor of each new level
function Level(size){
    this.size = size;
    this.maze = this.generateMaze(this.levelSize);
    this.startPosition = this.randomStartPosition(size);


    //populate html with maze boxes
    var n = 0;
    for(var a = 0; a < this.size; a++){
        for(var b = 0; b < this.size; b++){
            n ++;
            $('.container').append($('<div>').addClass("box").css("order", n));
        }
    }

}

//Constructor of Hero object moving through the maze
function Hero(){
    this.start = level.startPosition;
    this.currentPosition
}



//Level Constructor Prototypical Functions
//Dynamically generate maze
Level.prototype.generateMaze = function(arraySize){
    var totalCells = this.size * 2;
    var order = 0;
    var array =[];
    for(var x = 0; x < this.size; x++){
      array.push([]);
        for(var y = 0; y < this.size; y++){
            order ++;
            array[x].push({objectOrder: order, top: 1, right : 1, visited: " "});
        }
    }
    return array;
}


Level.prototype.defineWalls = function(){
    for(var x = 0; x < this.size; this.maze[x++]){
        for(var y = 0; y < this.size; this.maze[x][y++]){
            //while loop may not be necessary here. Algorithm visits all cells anyway via the loop.
            //find a way to loop though based on true visits
           //do{
               var random = Math.floor(Math.random()*2);
               if(random === 0){
                   this.maze[x][y].top = 0;
               }else{
                   this.maze[x][y].right = 0;
               }
               console.log("passing through " + this.maze[x][y].objectOrder);
               console.log("this div's border top value: " + this.maze[x][y].top + " and it's right value: " + this.maze[x][y].right);
               
               this.maze[x][y].visited = true;
           //}while(this.maze[x][y+1] === false && this.maze[x+1][y] === false);
        }
    }
}

//Randomising the initial position
Level.prototype.randomStartPosition = function(size){
    var array =[];
    while(array.length < 2){
    array.push(floorRandom(size));
    console.log(array);
    }
    return array;
}


//Randomisation with round down
function floorRandom(n){
   return Math.floor(Math.random() * n);
}


//Initialise JQUERY
$(document).ready(function() {
    
    //============RUN THINGS HERE=================================<<
    level = new Level(10);
    hero = new Hero();
    console.log(level.maze);
    console.log(level.defineWalls());

    $("p").on("click", function(e){

        console.log($(this).text());
    })

    console.log(level.startPosition);
    
    console.log("this is the hero's position!: " + visitRight(hero.start));

//function determining the neighbors
//function determineNeighbours(position){
    //Randomly select which way to go next
    
    switch(Math.ceil(Math.random()*4)){
        case 1: 
        console.log("1, run corresponding function");
        break;
           
        case 2:
        console.log("2, run corresponding function");
        break;
           
        case 3:
        console.log("3, run corresponding function");
        break;
        
        case 4:
        console.log("4, run corresponding function");
        break;
        }
        
//}

    
//function to randomise neighbour
    
//functions to visit a neighbour
function visitUp(position){
    position[0] = position[0] - 1;
    return position;
}
    
function visitDown(position){
    position[0] = position[0] + 1;
    return position;
}
    
function visitLeft(position){
    position[1] = position[1] - 1;
    return position;
}
    
function visitRight(position){
    position[1] = position[1] + 1;
    return position;
}

    
    
//End JQuery    
});

