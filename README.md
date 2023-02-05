<!--Image Slide-->
# Image Slider

<br>

<p>This project contains a simple image slider. In this image slider you can use two controller button or arrow key to nevigate through 4 different slides.</p>

<br>

### Used Technologies :

    1. HTML
    2. CSS
    3. JavaScript

<br>

### Code snippets:

<br>

- HTML: 

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Slider</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
      <section id="slider">
          <div class="slide">
              <img  id="img" src="" alt="">
          </div>
          <div class="controller-button">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
            
          </div>
      </section>

  <script src="./index.js"></script>
</html>
```

<br>

<br>


- CSS: 

```CSS
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#slider{
  width: 100%;
  height: 100%;
  position: relative;
}
.slide{
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}
.slide > img{
  width: 100%;
  max-height: 100vh;
}
#prev, #next{
  width: 50px;
  height: 20px;
  font-size: 4rem;
  background-color: transparent;
  border: none;
  color: rgb(255, 222, 8);
  position: absolute;
  top: 50%;
  cursor: pointer;
}
#prev{
  left: 10px;
}
#next{
  right: 10px;
}

```

<br>

<br>

- JavaScript : 

```JavaScript
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


```

<br>


This project is &copy; copyrighted by "Shihab Hasan". Educational uses only.