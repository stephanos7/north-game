//Constructor of each new level object
function Level(size){
    this.size = size;
    this.totalCells = size * size;
    this.currentPos;
    this.matrix = [];
    this.arrayOfFns =[this.rotateRight, this.rotateLeft, this.rotate180left, this.rotate180right];
    this.position = (size - 1) * size;
    this.rightBorder = [];
    this.leftBorder = [];
    this.topBorder = [];
    this.bottomBorder = [];
    this.secretPath = [56,48,40,32,33,41,49,50,58,59,51,43,35,34,26,25,17,18,19,27,28,20,12,13,21,29,37,36,44,45,46,54,55,47,39,31,23,22,14,6,5,4,3,2,10,9,8];
    this.directionsToBreakWalls = [];
    this.winningPosition = 8;
    this.won = false;
    this.levelTime = size * size;
    
//Populate html with maze cells
    var order = -1;
    for(var x = 0; x < this.size; x++){
        for(var y = 0; y < this.size; y++){
            order++
                $(".container").append($("<div>").addClass("box").attr("data-row-", x).attr("data-col", y).attr("order", order).text(order));
                        this.matrix.push({order : order, top: 1, right: 1, secretPath: ""});
                        }
                
        }


    
        this.reDraw();
        this.assignControlsToKeys();   
        this.applyBorderRight(size);
        this.applyBorderLeft(size);
        this.applyBorderTop(size);
        this.applyBorderBottom(size);
        this.defineWalls(this.matrix, this.secretPath);
        this.breakWalls(this.secretPath);
        this.drawStandingWalls(this.matrix);
        this.drawLeftBoundaryWalls(this.leftBorder, this.matrix);
        this.drawBottomBoundaryWalls(this.bottomBorder, this.matrix);
//this.timerAnimation();
    
//this.orchestration(this.randomiseMovements(this.arrayOfFns));
//this.randomiseMovements(this.arrayOfFns);
//this.orchestration(this.arrayOfFns);

setInterval(function(){ level.orchestration(level.arrayOfFns); }, 5000);
    
}

//Prototypical Functions of each level

Level.prototype.timerAnimation = function(){
    console.log('im running every 5 secs');
    this.orchestration(this.arrayOfFns);
    this.intervalID = setInterval(this.timerAnimation.bind(this), 5000);
}

Level.prototype.winningCollision = function(){
    if(this.position == this.winningPosition){
        alert("you won!");
        this.won = true;
        console.log(this.won);
    }
}

Level.prototype.applyBorderRight = function(size){
    this.rightBorder.push(size - 1);
    var counter = 0;
    for(var x = 2; x < size+1; x++){
        counter ++;
        this.rightBorder.push(((size -1) * x) + counter);
    }
}

Level.prototype.applyBorderLeft = function(size){
    this.leftBorder.push(size - size);
    for(var x = 1; x < size; x++){
        this.leftBorder.push(size * x);
    }
}

Level.prototype.applyBorderTop = function(size){
    for(var x = 0; x < size; x++){
        this.topBorder.push(x);
    }
}

Level.prototype.applyBorderBottom = function(size){
    for(var x = 0; x < size; x++){
        this.bottomBorder.push((size * (size-1)) + x);
    }
}

Level.prototype.defineWalls = function(mazeArray, rightPathNumbers){
    mazeArray.forEach(function(element){
        if(rightPathNumbers.indexOf(element.order) != -1){
            element.secretPath = true;
            }else{
            element.secretPath = false;
            }

    })
    
}

Level.prototype.breakWalls = function(righPathNumbers){
    for(var x = 0; x < righPathNumbers.length; x++){
     switch(righPathNumbers[x] - righPathNumbers[x+1]){
         case 8:
            this.matrix[righPathNumbers[x]].top = 0;
             break;
         case -8: 
             this.matrix[righPathNumbers[x + 1]].top = 0;
             break;
         case -1: 
             this.matrix[righPathNumbers[x]].right = 0;
             break;
         case 1:
             this.matrix[righPathNumbers[x + 1]].right = 0;
             break;
                                                     } 
        }
    }

Level.prototype.drawStandingWalls = function(mazeArray){
        mazeArray.forEach(function(element){
            var make = $("[order=" +  element.order + "]");
        if(element.top === 1){
            $(make).addClass("top-border");
        }if(element.right === 1){
            $(make).addClass("right-border");
        }
        
    })
}

Level.prototype.drawLeftBoundaryWalls = function(borderArray, mazeArray){
        borderArray.forEach(function(element){
        var make = $("[order=" +  mazeArray[element].order + "]");
        $(make).addClass("left-border");        
    })
}

Level.prototype.drawBottomBoundaryWalls = function(borderArray, mazeArray){
        borderArray.forEach(function(element){
        var make = $("[order=" +  mazeArray[element].order + "]");
        $(make).addClass("bottom-border");        
    })
}

Level.prototype.reDraw = function(){
    var make = $("[order=" +  this.position + "]");
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
                                };

Level.prototype.rotateLeft = function(){
    $('#board').animate({  borderSpacing: -90 }, 
                        {  step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                                },
                                duration:'slow'
                                },'linear');
                                };

Level.prototype.rotate180left = function(){
    $('#board').animate({  borderSpacing: -180 }, 
                        {  step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                                },
                                duration:'slow'
                                },'linear');
                                };

Level.prototype.rotate180right = function(){
    $('#board').animate({  borderSpacing: 180 }, 
                        {  step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                                },
                                duration:'slow'
                                },'linear');
                                };

Level.prototype.randomiseMovements = function(array){
    
};

Level.prototype.orchestration = function(arr) {
    var ranNum = Math.floor(Math.random()*arr.length); 
    console.log(ranNum);
    var choice = arr[ranNum];
    choice();
};

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
    if(this.leftBorder.indexOf(this.position) == -1 && this.matrix[this.position - 1].right === 0){
    this.position -= 1;
            console.log(level.position);
    this.reDraw();
    this.winningCollision();
    }else{
    console.log("hit");
    }

}

Level.prototype.goRight = function() {
    if(this.rightBorder.indexOf(this.position) == -1  && this.matrix[this.position].right === 0){
    this.position += 1;
            console.log(level.position);
    this.reDraw();    
    this.winningCollision();
    }else{
    console.log("hit");
    }
}

Level.prototype.goUp = function() {
    if(this.topBorder.indexOf(this.position) == -1 && this.matrix[this.position].top === 0){
    this.position -= 8;
        console.log(level.position);
    this.winningCollision();
    this.reDraw();
    }else{
    console.log("hit");
    }


}

Level.prototype.goDown = function() {
    if(this.bottomBorder.indexOf(this.position) == -1 && this.matrix[this.position + 8].top === 0){
    this.position += 8; 
            console.log(level.position);
    this.winningCollision();
    this.reDraw();
    }else{
    console.log("hit");
    }

}

//========RUN THINGS HERE==========//

$(document).ready(function() {
    
    level = new Level(8);
    
    console.log(level.matrix);

  
});