//Constructor of the Hero Object
function Hero(dimension){
    
 
}



//Constructor of each new level
function Level(size){
    this.size = size;
    this.totalCells = size * size;
    this.currentPos;
    this.matrix = [];
    this.arrayOfFns =[this.rotateRight,this.rotateLeft];
    this.position = (size - 1) * size;
    this.rightBorder = [];
    
    
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

    
this.reDraw();
this.assignControlsToKeys();    

    
}
Level.prototype.applyBorderRight = function(size){
    this.rightBorder.push(size - 1);
    var counter = 0;
    for(var x = 2; x < size+1; x++){
        counter ++;
        this.rightBorder.push(((size -1) * x) + counter);
    }
    console.log(this.rightBorder);
}

//Prototypical Functions of the level
Level.prototype.timer = function(){

}

Level.prototype.reDraw = function(){
    var make = $("[order=" +  this.position + "]");
    console.log("what i give to redraw " + make);
    $('.red').remove();
    $(make).append($("<div>").addClass("red"));
    //split append give it to constr
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

Level.prototype.assignControlsToKeys = function() {
  $(document).on('keydown', function(e) {
    switch (e.keyCode) {
      case 38: // arrow up
        this.goUp();
        break;
      case 40: // arrow down
        this.goDown();
        break;
      case 37: // arrow left
        this.goLeft();
        break;
      case 39: // arrow right
        this.goRight();
        break;
            /*
      case 80: // p pause
        if (this.intervalId) {
          this.stop();
        } else {
          this.start();
        }
        break;*/
    }
  }.bind(this));
}





Level.prototype.goLeft = function() {
    console.log("going left", level.position);
    level.position -= 1;
    this.reDraw();


}

Level.prototype.goRight = function() {
    console.log("going right", level.position);
    level.position += 1;
    this.reDraw();

}

Level.prototype.goUp = function() {
    console.log("going up", level.position);
    level.position -= 8;
    this.reDraw();


}

Level.prototype.goDown = function() {
    console.log("going down", level.position);
    level.position += 8; 
    this.reDraw();

}

//========RUN THINGS HERE==========//
$(document).ready(function() {
    level = new Level(8);
        hero = new Hero(8);
    
    level.applyBorderRight(8);

     
    
    //level.timer();
    //level.orchestration(level.randomiseMovements(level.arrayOfFns));

   //checks
    
    /*level.reDraw();
    
        level.goUp();
        console.log(level.position);

        level.reDraw();
    
            level.goUp();
            console.log(level.position);

            level.reDraw();

                level.goUp();
                console.log(level.position);

                level.reDraw();

    //level.rotateRight();
    //level.rotateLeft();    
*/    
});