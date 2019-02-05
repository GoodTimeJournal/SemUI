class Carousel {
    constructor(carouselConstrctr) {
        this.carouselConstrctr = carouselConstrctr;
        // console.log(this.carouselConstrctr);
        // this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.imageText = document.querySelectorAll('.numbertext');
        this.images = document.querySelectorAll('.carousel-img');
        // console.log(this.imageText);

        this.index = 0;
        // this.leftButton.addEventListener('click', () => this.cycleLeft());
        this.rightButton.addEventListener('click', () => this.cycleRight());
        this.imageText[0].style.display = 'block';
        this.images[0].style.display = 'block';

    }
    // methods
    cycleLeft() {
        // this.imageText[this.index].style.display = 'none';
        // this.images[this.index].style.display = 'none';
        // this.index === 0 ? this.index = this.imageText.length-1 : this.index--;
        // this.index === 0 ? this.index = this.images.length-1 : this.index--;
        // this.imageText[this.index].style.display = 'block';
        // this.images[this.index].style.display = 'block';
        // console.log(this.index);

    }
    cycleRight() {
        // this.imageText[this.index].style.display = 'none';
        // this.images[this.index].style.display = 'none';
        // this.index === this.imageText.length-1 ? this.index = 0 : this.index++;
        // this.index === this.images.length-1 ? this.index = 0 : this.index++;
        // this.imageText[this.index].style.display = 'block';
        // this.images[this.index].style.display = 'block';
        this.imageText[this.index].style.display = 'none';
        this.images[this.index].style.display = 'none';
        this.index === 0 ? this.index = this.imageText.length-1 : this.index--;
        this.index === 0 ? this.index = this.images.length-1 : this.index--;
        this.imageText[this.index].style.display = 'block';
        this.images[this.index].style.display = 'block';

    }
}

let carouselList = document.querySelectorAll('.carousel');
carouselList.forEach(eachImgItem => new Carousel(eachImgItem));
