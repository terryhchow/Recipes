const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children)
// console.log(dots)

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width
console.log(slideWidth)

//arrange slides one next to one another
slides[0].style.left = 0;
slides[1].style.left = '100px';
//click left
//click right
//move via slide indicator

