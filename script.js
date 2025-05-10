//to control snake in mobile and touch devices
$(document).ready(function() {
    $("#up").on("click touchstart", function() { moveSnake("up"); });
    $("#left").on("click touchstart", function() { moveSnake("left"); });
    $("#right").on("click touchstart", function() { moveSnake("right"); });
    $("#down").on("click touchstart", function() { moveSnake("down"); });

    function moveSnake(direction) {
        if ((direction === "left" && d === "right") ||
            (direction === "right" && d === "left") ||
            (direction === "up" && d === "down") ||
            (direction === "down" && d === "up")) {
            return; 
        }
        d = direction; 
        console.log("Snake moves " + direction);
    }
});

//color intensity chenge wen mouse hover
let originalBg = $("body").css("background");

// Resets to default or original CSS
$("#sun").on("mouseover", function() {
    $(this).css({"color":"#FFDD44"});
});
$("#sun").on("mouseout", function() {
    $(this).css({"color": "#B8860B"}); 
});
$("moon").css({"color": "#191970"}); 
$("#moon").on("mouseover", function() {
    $(this).css({"color":"#C6E2FF"});
})
$("#moon").on("mouseout", function() {
    $(this).css({"color": "#A4D8EF"}); 
});

// sun/moon 
$("#sun").on("click", function() {
    $("#sun").hide();
    $("#moon").show();
    $("body").css({"background":originalBg});
    $("#snakeTitle").css({"color":""});
    $("canvas").css("background-color" ,"#228B22");
    $(".control-btn").removeClass("control-dark-mode");
});

$("#moon").on("click", function() {
    $("#moon").hide();
    $("#sun").show();
    $("body").css({ "background": "#22293B" });
    $("#snakeTitle").css({"color":"#6C6D82"});
    $("canvas").css("background-color" ,"#101523");
    $(".control-btn").addClass("control-dark-mode");
});


$(document).ready(function() {
    $(".slide").css({ opacity: 0, position: "relative", left: "-50px" }) 
             .each(function(index) {
                 $(this).delay(index * 200).animate({ left: "0px", opacity: 1 }, 600);
             });
});

//to hide snacke game
$(document).ready(function() {
    $("#snakeGroup").hide();
});
//to redy to paly game
$("#btn1").on("click",function() {
    $(".container").fadeOut(400);
    $("#snakeGroup").fadeIn(1000);
    $("#myCanvas").css("display","block")}); 

$(document).ready(function(){
    $(".difficultyform"). css("display" ,"none" ).css({visibility:hide,left: "-300px" });
})

//to choose deficultyly
$("#btn2").on("click",function(){
    $(".difficultyform").css("display","block").animate({ left: "50%" }, 500); 
})
//to close dificulrtyl form
$("#fab-icon").on("click",function(){
    $(".difficultyform").animate({ left: "-33%" }, 500, function() {
        $(this).css("display", "none");
    });
});
//to whach help section
$("#btn3").on("click",function(){
    $(".helpsection").show()
    $(".helpsection").animate({ left:"50%"},500);   
})
//to close help section
$("#close-icon2").on("click",function(){
    $(".helpsection").fadeOut(400);
})
// Hide "down" by default, showing only "up"
$(document).ready(function() {
    $(".down").hide(); 
});
//slide up and down
$(".up").on("click", function() {
    $(this).hide();
    $(this).siblings(".down").show();
    $(this).closest(".paragraph").addClass("slidedown").slideDown();

    $(this).closest(".help").css({
        "borderBottom": "none",
        "backgroundColor": "#bfb4ac"
    });
    $(this).closest(".paragraph").find(".pag").show();
});

$(".down").on("click", function() {
    $(this).hide();
    $(this).siblings(".up").show();
    $(this).closest(".paragraph").removeClass("slidedown");
    $(this).closest(".paragraph").find(".pag").slideUp(); 
    $(this).closest(".help").css({
        "borderBottom":"3px solid gainsboro",
        "backgroundColor": "transparent"
    });
});


$("canvas").css("background-color" ,"#228B22");
const canvasn = document.getElementById("myCanvas");
const ctx = canvasn.getContext("2d");

//let our canvas  square 
let scale=20;
const rows=canvasn.height/scale;
const columns=canvasn.width/scale;

console.log(rows);
console.log(columns);
console.log(ctx);


//snacke body
let snacke=[];
snacke[0]={
    x: Math.floor(Math.random() * columns) * scale,
    y: Math.floor(Math.random() * rows) * scale   
};
//snacke food random genereter 
let food={
x:Math.floor(Math.random()*columns)*scale,
y:Math.floor(Math.random()*rows)*scale
}
//snacke direction
let d = "right";
document.onkeydown=direction;
//direction control by using key
function direction(event){
    let key=event.keyCode;
    if (key == 37 && d != "right") {
        d = "left";
    }
    else if (key == 38 && d != "down") {
        d = "up";
    }
    else if (key == 39 && d != "left") {
        d = "right";
    }
    else if (key == 40 && d != "up") {
        d = "down";
    }
    
}

//snacke position 
//call afunction eavry 500sec
//draw snacke
var playGame = setInterval(draw, 500);
var score=0;


function draw() {
    ctx.clearRect(0, 0, canvasn.width, canvasn.height);

    for (let i = 0; i < snacke.length; i++) {
        //Snake head Different style
        if (i === 0) {
            ctx.fillStyle = "#FF4500";  
            ctx.strokeStyle = "#8B0000"; 

            ctx.fillRect(snacke[i].x, snacke[i].y, scale, scale);
            ctx.strokeRect(snacke[i].x, snacke[i].y, scale, scale);

            ctx.fillStyle = "black";
            ctx.fillRect(snacke[i].x + scale * 0.2, snacke[i].y + scale * 0.3, scale * 0.2, scale * 0.2);
            ctx.fillRect(snacke[i].x + scale * 0.6, snacke[i].y + scale * 0.3, scale * 0.2, scale * 0.2);
        } else {
            ctx.fillStyle = "#FFD700"; 
            ctx.strokeStyle = "#006400"; 
            ctx.fillRect(snacke[i].x, snacke[i].y, scale, scale);
            ctx.strokeRect(snacke[i].x, snacke[i].y, scale, scale);
        }
    }



$("#btn1").on("click", function() {
    let selectedSpeed = $('input[name="speed"]:checked');
    // Stops the current interval
    if (selectedSpeed.length > 0) { 
        clearInterval(playGame); 
        let speed = parseInt(selectedSpeed.val()); 
        // Ensures speed is valid
        if (!isNaN(speed)) { 
            playGame = setInterval(draw, speed);
        }
    }
});

//creat snackefood
ctx.fillStyle="#FF4500";
ctx.strokeStyle="#FFD700";
ctx.fillRect(food.x,food.y, scale,scale);
ctx.strokeRect(food.x,food.y, scale,scale);

//old head potstion
let snackeX=snacke[0].x;
let snackeY=snacke[0].y;

//key direction
if (d == "right") snackeX += scale;
if (d == "left") snackeX -= scale;
if (d == "up") snackeY -= scale;  
if (d == "down") snackeY += scale;

//fix to restart after atending max width
if(snackeX>canvasn.width){
    snackeX=0;
}
if(snackeY>canvasn.height){
    snackeY=0;
}
if(snackeX<0){
    snackeX=canvasn.width;
}
if(snackeY<0){
    snackeY=canvasn.height;
}


if(food.x == snackeX && food.y == snackeY) {
    score++;
    food = {
        x: Math.floor(Math.random() * columns) * scale,
        y: Math.floor(Math.random() * rows) * scale
    };
    ctx.font = "30px SnakeBite";
    ctx.fillStyle = "#FFD700";
    ctx.fillText(score, 150, 26);   
    let EatSound = new Audio("sound/blue.mp3");
    EatSound.play();              
}
else {
    snacke.pop();
}


//new head
let newHead={
    x:snackeX,
    y:snackeY    
}

if (checkCollision(newHead)) {
    clearInterval(playGame); // Stop the game loop

    let gameOverSound = new Audio("sound/wrong.mp3");
    gameOverSound.play();

    $("#snakeTitle").addClass("gameovertitle").text("Game Over!").css({"color":"red"});
    $("canvas").css("background-color","red").fadeOut(500, function() {
        $(this).toggleClass("canvasgameover").fadeIn(500);
    });
    $("#score").text("score :"+score);
      console.log(score);
    return; // Exit function to prevent further updates
}

snacke.unshift(newHead);

}

// Check if the snake collides with itself
function checkCollision(newHead) {
    for (let i = 0; i < snacke.length; i++) {
        if (snacke[i].x === newHead.x && snacke[i].y === newHead.y) {
            return true; // Collision detected
        }
    }
    return false;
}



