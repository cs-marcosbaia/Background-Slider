let sliderImagens = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    // Clear all images
    function reset(){
        for(let i = 0; i < sliderImagens.lenght; i++){
            sliderImagens[i].style.display = 'none';
        }
    }

    // Init Slider
    function startSlide(){
        reset();
        sliderImagens[0].style.display = 'block';
    }

    // Show prev
    function slideLeft(){
        reset();
        sliderImagens[current - 1].style.display = 'block';
        current--;
    }

    // Show next
    function slideRight(){
        reset();
        sliderImagens[current + 1].style.display = 'block';
        current++;
    }

    // Left arrow click
    arrowLeft.addEventListener('click', function(){
        if(current === 0){
            current = sliderImages.lenght;
        }
            slideLeft();
    });

    // Right arrow click
        arrowRight.addEventListener('click', function(){
            if(current === sliderImages.lenght - 1){
                current = - 1;
            }
            slideRight();
        });

    starSlide();