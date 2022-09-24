(() => {

    const refs = {
        nextBtn: document.querySelector('[slider-next-btn]'),
        prevBtn: document.querySelector('[slider-prev-btn]'),
        images: [image1 = document.querySelector('[slider-image-1]',),
                 image2 = document.querySelector('[slider-image-2]'),
                 image3 = document.querySelector('[slider-image-3]'),]
    }

    let actualImageIndex = 0;
    const lastImageIndex = refs.images.length - 1;
    
    const nextBtnFunction = () => {
        refs.images[actualImageIndex].classList.add('is-invisible');
        actualImageIndex++;
        if (actualImageIndex > lastImageIndex) { actualImageIndex = 0; }
        refs.images[actualImageIndex].classList.remove('is-invisible');
    };

    const autoSlide = () => {
        nextBtnFunction();
        setTimeout(autoSlide, 5000);
    };autoSlide();
  
    refs.nextBtn.addEventListener('click', nextBtnFunction);

    refs.prevBtn.addEventListener('click', () => {
        refs.images[actualImageIndex].classList.add('is-invisible');
        refs.images[actualImageIndex].classList.add('is-faded');
        actualImageIndex--;
        if (actualImageIndex < 0){ actualImageIndex = lastImageIndex; }
        refs.images[actualImageIndex].classList.remove('is-invisible');
    })

})();