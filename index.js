const slideURlOne = "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const slideURlTwo = "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const slideURlThree = "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const slideURlFour = "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const slideImages = [slideURlOne, slideURlTwo, slideURlThree, slideURlFour];
const slideImage = document.getElementById("img");

const slide = document.querySelector(".slide");
const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let counter = 0;

slideImage.src = slideImages[0];

nextButton.addEventListener("click", ()=>{
    nextController();
});

previousButton.addEventListener("click", ()=>{
   previousController();
});

window.addEventListener("keydown", (event)=>{
    if(event.key == "ArrowRight"){
        nextController();
    }
});


window.addEventListener("keydown", (event)=>{
    if(event.key == "ArrowLeft"){
        previousController();
    }
});

const previousController = ()=>{
    counter--;
    if(counter < 0){
        counter = slideImages.length - 1;
        slideImage.src = slideImages[counter];
        
    }else{
        slideImage.src = slideImages[counter];

    }
}

const nextController = ()=>{
    counter++;
    if(counter >= slideImages.length){
        slideImage.src = slideImages[0];
        counter = 0;
    }else{
        slideImage.src = slideImages[counter];
    }
}
