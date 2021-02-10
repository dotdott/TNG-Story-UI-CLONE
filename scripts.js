window.onload = () => {
    const mainImg = document.querySelector('.slide-gallery img');

    let i = 1;    
    function setImage() { 
        if (i < 4){
            i++;
        } else if (i >= 4){
            i = 1;
        }
        let src = `./images/slides/img${i}.jpg`;
        mainImg.src = src;
    }
    let autoSlide = setInterval(setImage, 7000);    


    const nextImg = document.querySelector('.fa-arrow-right');
    const previousImg = document.querySelector('.fa-arrow-left');

    nextImg.addEventListener('click', () => {
        clearInterval(autoSlide);
        setImage();
        autoSlide = setInterval(setImage, 7000);
    });

    previousImg.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(setImage, 7000);
        i--;
        if(i < 1){
            i = 4;
        } 
        let src = `./images/slides/img${i}.jpg`;
        mainImg.src = src;
    });
};