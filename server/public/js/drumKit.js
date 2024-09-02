var lengthofBButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < lengthofBButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",buttonHandle);
}

function buttonHandle(){

    var innerHTML = this.innerHTML;
    makeSound(innerHTML);

    buttonAnimation(innerHTML);
}

document.addEventListener("keydown", function (){

    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("../assets/sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("../assets/sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("../assets/sounds/tom-3.mp3");
            audio.play();
            break;
            
        case "d":
            var audio = new Audio("../assets/sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("../assets/sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("../assets/sounds/crash.mp3");
            audio.play(); 
            break;

        case "l":
            var audio = new Audio("../assets/sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
};


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}