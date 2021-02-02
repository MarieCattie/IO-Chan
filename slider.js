var slider = document.querySelectorAll('#slider .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);

function nextSlide() {
	slider[currentSlide].className = 'slide';

	currentSlide = (currentSlide+1)%slider.length;
	slider[currentSlide].className = 'slide showing';
}
