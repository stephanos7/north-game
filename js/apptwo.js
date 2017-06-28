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
    this.timer();

}


//Prototypical Functions of the level

Level.prototype.timer = function(){
    var gameTimer = setInterval(function(){
    console.log("I'm done");},
                                10000);
    console.log("i've started");
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
    console.log("i'm running! " + randomNumber);
    (fnToRun)();
}


//========RUN THINGS HERE==========//
$(document).ready(function() {
    
    level = new Level(10);
    level.orchestration(level.randomiseMovements(level.arrayOfFns));
    //level.rotateRight();
    //level.rotateLeft();    
    
    });