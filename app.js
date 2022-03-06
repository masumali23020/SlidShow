const slidShow__element = document.querySelectorAll(".slidShow__elemenr")


let counter = 1;

setInterval(() =>{
    counter++
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(counter > slidShow__element.length){
   slidShow__element[0].classList.add("current");
   counter = 1

    }else{
        currentElement.nextElementSibling.classList.add("current")
    }



},2000)