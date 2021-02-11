window.onload = () => {
    const mainImg = document.querySelector('.slide-gallery img');

    let i = 1;    
    function setImage() { 
        if (i < 4){
            i++;
        } else if (i >= 4){
            i = 1;
        }
        let src;
        if (window.matchMedia("(max-width: 1050px)").matches) {
            src = `./images/slides/img${i}-mobile.webp`;
          } else {
            src = `./images/slides/img${i}.jpg`;
          }

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

window.onscroll = function () {
    const navbar = document.querySelector('.row-two');
    const column1 = document.querySelector('.column-one svg');
    const column2_text = document.querySelectorAll('.column-two a');
    const column2_mask = document.querySelector('.cls-2-mask');
    
    if(window.scrollY !== 0){
        navbar.style.background = '#fff';
        navbar.style.color = '#000';
        column1.style.fill = '#000';
        column2_mask.style.fill = '#000';
        
        column2_text.forEach(e => {
            e.style.color = '#000';
        })
    } else {
        navbar.style.background = 'none';
        navbar.style.color = '#fff';
        column1.style.fill = '#fff';
        column2_mask.style.fill = '#fff';
        
        column2_text.forEach(e => {
            e.style.color = '#fff';
        })
    }
}

function menuModal() {
    const menu = document.querySelector('.menu');
    const modal = document.querySelector('.modal');
    menu.addEventListener('click', () => {
        modal.style.display = 'block';
        modal.focus();
    });
    
    const closeModal = document.querySelector('.close-btn');
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('keydown', e => {
        if(e.key === 'Escape'){
            modal.style.display = 'none';
        };
    });
};
menuModal();

function displayFooterContent() {
    const institutional = document.querySelector('.institutional');    
        institutional.addEventListener('click', () => displayContent('institutional'));     

    const help = document.querySelector('.help');
        help.addEventListener('click', () => displayContent('help'));

    const account = document.querySelector('.user-account');
        account.addEventListener('click', () => displayContent('user-account'));

    const contact = document.querySelector('.contact-us');
        contact.addEventListener('click', () => displayContent('contact-us'));

    const social = document.querySelector('.social-media');
        social.addEventListener('click', () => displayContent('social-media'));
}
displayFooterContent();

function displayContent(div){
    const contents = document.querySelectorAll(`.${div} a`);
        
    contents.forEach(content => {
        content.style.display = 'block';
    });

    if(div === 'contact-us') {
        document.querySelector('.contact-us p').style.display = 'block';
        document.querySelector('.contact-us .tel').style.display = 'block';
    };
    if (div === 'social-media'){
       const icons = document.querySelectorAll('.footer-row-one i')
        icons.forEach(icon => {
            icon.style.display = 'block';
        });
    };
};