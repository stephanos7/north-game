//Constructor of each new level
function Level(size){
    this.size = size;
    this.totalCells = size * size;
    this.currentPos;
    this.matrix = [];
    this.arrayOfFns =[this.rotateRight,this.rotateLeft];
    
//Populate html with maze cells
    var order = -1;
    for(var x = 0; x < this.size; x++){
        for(var y = 0; y < this.size; y++){
            order++
                $(".container").append($("<div>").addClass("box").attr("data-row-", x).attr("data-col", y).attr("order", order).text(order));
                        //var boderSelector = '[data-row=' + x + ']' + '[data-col=' + y + ']';
                            //this.matrix.push({row: x, col: y, path: true});
                               // $(this.boderSelector[0][y]).addClass("missing-border");
                        }
                
        }
    
}

//Constructor of the Hero Object
function Hero(size){
    
    this.position = size * (size - 1);
    this.targetPosition = $("[order=" +  this.position + "]").append("<div>");
    this.targetPosition.find(">:first-child").addClass("red");

    
}


//Prototypical Functions of the level
Level.prototype.timer = function(){

}


Level.prototype.rotateRight = function(){
    $('#board').animate({  borderSpacing: 90 }, 
                        {  step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                                },
                                duration:'slow'
                                },'linear');
                                }
Level.prototype.rotateLeft = function(){
    $('#board').animate({  borderSpacing: -90 }, 
                        {  step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                                },
                                duration:'slow'
                                },'linear');
                                }

Level.prototype.randomiseMovements = function(array){
    return array[Math.floor(Math.random()*array.length)];
}

Level.prototype.orchestration = function(randomNumber) {
    var fnToRun = randomNumber;
    (fnToRun)();
}


//Prototypical functions of the Hero
/*hero.prototype.addToBoard =  function(){
    var make = $("[order=" +  this.position + "]");
    $(make).addClass("red");
}
*/


//========RUN THINGS HERE==========//
$(document).ready(function() {
    
    level = new Level(8);
    hero = new Hero(8);
    //level.timer();
    level.orchestration(level.randomiseMovements(level.arrayOfFns));  
    console.log(hero.position);
    console.log(hero);


    //level.rotateRight();
    //level.rotateLeft();    
    
    });