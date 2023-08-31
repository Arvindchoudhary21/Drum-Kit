

// document.querySelector(".set").addEventListener("click" , handleClick); 


// this method is also valid sab button ko use krne ke liye
var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofbuttons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick);

}


// this for detecting button press
function handleClick()
{
    // alert("i got clicked");
    // so isse sirf ek hi audio bajega bar bar so sab audio bajana hai so use switch statement okkkkk
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();


    // loop wala method hi better hai wo direct wala method me problem ho rha hai so loop wala hi use kro

    var buttoninnerHTLM = this.innerHTML;
    // yha se switch statement remove kr diya hai 
    makesound(buttoninnerHTLM);

    // for button animation
    buttonanimation(buttoninnerHTLM);

}



// this for detecting keyboard press
document.addEventListener("keydown" , function(evt) //event ke jagah par evt kuch bhi chalega
{
    makesound(evt.key); //yha se key send hoga makesound function me and fir sound play hoga

    // for button animation
    buttonanimation(evt.key);
});



function makesound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

        case "k":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

        case "l":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    
        default:
            console.log(buttoninnerHTLM);
            break; 
    }
}



// dekho so animation add krna hai to dekho css me ek .pressed attribute hai jisme box shadow and opacity change hoga agar
// wo class add krenge hum to so by using javascript wo class add krenge button me for short period of time and then remove kr denge
// jisse lagega ki button flash kr rha hai ok
function buttonanimation(currentkey)
{
    // . me current key add hoke ek class type chiz banayega jaise .d ya fir .a ye class hua kiuki html me class dekho defined hai
    var activebutton = document.querySelector("." + currentkey);

    // now ab class add ho jayega code me okkkkk ab thora time bad remove bhi krna and remove nhi krenge to ye property
    // os button par applied hi reh jayega so remove bhi krna hoga kuch sec bad
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
    
    
}











// so ye code se hoga ye ki website me jake koi bhi key press kroge to alert pop up show krega ok
// document.addEventListener("keydown" , function(){
//     alert("key is pressed");
// });


// // isse kon sa kye press ho rha hai wo chiz output hoga console me okkkkkk
// document.addEventListener("keydown" , function(event){
//     console.log(event);
// });