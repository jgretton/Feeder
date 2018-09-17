let sliderImages = document.querySelectorAll('.slider__wrapper'),
    leftArrow = document.querySelector('.arrow--left'),
    rightArrow = document.querySelector('.arrow--right'),
    current = 0;

    //clears all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

//initialises slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'flex';
}

//show previous slide
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'flex';
    current--;
}

//left arrow click
leftArrow.addEventListener('click', function(){
    if( current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

//show next slide
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'flex';
    current++;
}

rightArrow.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
})


startSlide();
