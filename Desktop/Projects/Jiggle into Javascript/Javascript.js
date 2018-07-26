//Setting event listener for button1 to "click" and assigning relevant function.

document.getElementById("button1").addEventListener("click", growFunction)

//If else statment to either grow  box or return box to original size.

function growFunction() {
    if (document.getElementById("box").style.height === "150px"){
    document.getElementById("box").style.height= "250px";
    document.getElementById("box").style.width= "250px"
    } else {
        document.getElementById("box").style.height="150px"
        document.getElementById("box").style.width="150px"
    }
}

//Setting event listener for button2 to "click" and assigning relevant function.

document.getElementById("button2").addEventListener("click", colorFunction)


//If else statements to rotate through list of colors.

function colorFunction() {
    if (document.getElementById("box").style.backgroundColor === "orange") {
        document.getElementById("box").style.backgroundColor= "blue";
    } else if (document.getElementById("box").style.backgroundColor=== "blue" ) {
        document.getElementById("box").style.backgroundColor= "red"
    } else if (document.getElementById("box").style.backgroundColor=== "red") {
        document.getElementById("box").style.backgroundColor= "green"
    } else if (document.getElementById("box").style.backgroundColor=== "green") {
        document.getElementById("box").style.backgroundColor= "orange"
    }
}

//Setting event listener for button3 to "click" and assiging relevant function.

document.getElementById("button3").addEventListener("click", opacityFunction)

//Fading and increasing opacity. Trying an array format.
function opacityFunction(){

//Creating Fade effect.

var op = 1; //initial opacity

if (document.getElementById("box").style.display='block'){
var timer = setInterval(function () {
    if (op <= 0.1){
        clearInterval(timer);
        document.getElementById("box").style.display= 'none';
    }
    document.getElementById("box").style.opacity = op
    document.getElementById("box").style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
} else {
//Not sure how to get it to fade back in with the same button.
var op = 0.1
document.getElementById("box").style.display= 'block';
var timer = setInterval(function() {
    if (op >= 1){
        clearinverval(timer);  
    }
    document.getElementById("box").style.opacity = op
    document.getElementById("box").style.display = 'alpha(opacity=' + op * 100 + ')';
    op += op * 0.1;
}, 10);
    }

//Making the Reset Button

document.getElementById("button4").addEventListener("click", resetFunction)

//The reset Function.

function resetFunction() {
    document.getElementById("box").style.display = 'block'
    document.getElementById("box").style.opacity = "1"
    document.getElementById("box").style.height = "150px"
    document.getElementById("box").style.width = "150px"
    document.getElementById("box").style.backgroundColor = "orange"
}

} 



  