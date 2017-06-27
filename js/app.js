//Constructor of each new level
function Level(size){
    this.size = size;
    this.maze = this.generateMaze(this.levelSize);
    this.startPosition = this.randomStartPosition(size);
    this.unvisitedLedger = [];
    this.setUpLedgerOfAlgorithmVisits();
    this.visitedLedger = [];
    
    
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
            array[x].push({objectOrder: order, top: 1, right : 1, visited: false});
        }
    }
    return array;
}

//Takes the default "visited status" generated by the level's constructor and imprints it's value in a ledger holding all cell visit statuses within the maze
Level.prototype.setUpLedgerOfAlgorithmVisits = function(){
        for(var x = 0; x < this.size; this.maze[x++]){
                for(var y = 0; y < this.size; this.maze[x][y++]){
                    this.unvisitedLedger.push(this.maze[x][y].visited);
                }
        }
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
               console.log("this div's border top value: " + this.maze[x][y].top + " and it's right value: " + this.maze[x][y].right + " whether visited : " + this.maze[x][y].visited);
               
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

    
function checkIfVisited(){
    for(var x = 0; x < level.size; level.maze[x++]){
                for(var y = 0; y < level.size; level.maze[x][y++]){
                    //return level.maze[x][y].visited;
                    console.log("this has been visited: " + level.maze[x][y].visited + " " + level.maze[x][y].objectOrder);
                }
        } 
}





//function to randomly move
function runThroughMatrix(){
    //record visited cells
    
        //add the start cell to visited
        level.visitedLedger.push([hero.start[0], hero.start[1]]);
        //remove the start cell from unvisited
        level.unvisitedLedger.pop();
      
    
    
    //while something
    
        console.log(visitNeighbour(level.visitedLedger[level.visitedLedger.length - 1]));
    
      //interact with specific object
            

            

                //console.log(visitNeighbour(visited[visited.length-1]));
                    //}
}


    
//function to randomise neighbour   
function visitNeighbour(lastPosition){
    switch(Math.ceil(Math.random()*4)){
        case 1: 
        console.log("case 1 to go up");
        return visitUp(lastPosition);
        
           
        case 2:
        console.log("case 2 to go down");
        return visitDown(lastPosition);
           
        case 3:
        console.log("case 3 to go left");
        return visitLeft(lastPosition);
        
        case 4:
        console.log("case 4 to go right");
        return visitRight(lastPosition);
        }
}

   
//functions to visit a neighbour
function visitUp(position){
    position[0] = position[0] - 1;
    console.log("new position :" + position);
    return position;
}
    
function visitDown(position){
    position[0] = position[0] + 1;
    console.log("new position :" + position);
    return position;
}
    
function visitLeft(position){
    position[1] = position[1] - 1;
    console.log("new position :" + position);
    return position;
}
    
function visitRight(position){
    position[1] = position[1] + 1;
    console.log("new position :" + position);
    return position;
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

    console.log("start position: " + level.startPosition);
    
    //console.log("this is the hero's position!: " + visitNeighbour());
        
    //console.log("checking if visited : ..");
    
    level.maze[5][5].visited = true;
    
    level.setUpLedgerOfAlgorithmVisits();
    
    runThroughMatrix();  
    
    console.log("logging the unvisited...");
    
    console.log(level.unvisitedLedger);  
    
    console.log("logging the visited...");
    
    console.log(level.visitedLedger);  
    
    
    
//End JQuery    
});

