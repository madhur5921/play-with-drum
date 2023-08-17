for(var i = 0; i < document.querySelectorAll(".drum").length; i++){// we form the loop so that each button can have the action event

    document.querySelectorAll(".drum")[i].addEventListener("click" , audio);//we have call the click event listener & link it to the clicked function with the button
    
    }

//creating function that will play the audio after button is clicked

function audio(){

    var button_inner_html = this.innerHTML;//will sore the current button value which is click

    switch (button_inner_html) {
        
        case "Tom1"://if the user click the button which has inner html value Tom 1 then this case will run.
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();//it will play the tom1 audio
            break;
        
        case "Tom2":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "Tom3":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "Tom4":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "Snare":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        case "Crash":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "Kick":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            alert("The Instrument is not availaible");
    }

    button_animation(button_inner_html);
    
}

//creating a function to add animation to buttons when click

function button_animation(current_key){//the current key value will give the key which is pressed or clicked(innerhtml of the buttons)

var current_button = document.querySelector("." +current_key);// this will select the specific button of the current_key.

current_button.classList.add("pressed");//we have add the class to the buttons which have the animation properties in it.

setTimeout(function remove_animation(){//function to remove animation
    current_button.classList.remove("pressed")//first parameter removes the animation class i.e pressed class from the current button after 100ms i.e 1 sec which is the 2nd parameter
} , 150); // so this function has 2 parameteres one is the function for removing the animation & other is the time  
}



