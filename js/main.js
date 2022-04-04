// Current Slide Variable
let currentSlide = 1;

// Get All Elements
const slides = document.getElementsByClassName("slide");
const dots = document.querySelectorAll(".circles [class*='circle']");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

// Call Function To Show First Slide
slideShow(currentSlide);

// Left Arrow On Click Function
leftArrow.addEventListener("click", () => {
	changeSlide(-1);
});

// Right Arrow On Click Function
rightArrow.addEventListener("click", () => {
	changeSlide(1);
});

// Arrows Function
function changeSlide(n) {
	slideShow(currentSlide += n);
}

// Dots Function
dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		slideShow(currentSlide = i + 1);
		dots[i].classList.replace("fa-solid", "fa-regular");
		dots[currentSlide - 1].classList.add("fa-solid");
	});
});

// Slide Show Function
function slideShow(n) {
	// Reset Variable
	if (n < 1) { currentSlide = slides.length; };
	if (n > slides.length) { currentSlide = 1; };

	// Make All Slides Display None
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	// Show Current Slide
	slides[currentSlide - 1].style.display = "block";

	// Adjust Dots
	dots.forEach((dot, i) => {
		dots[i].classList.replace("fa-solid", "fa-regular");
		dots[currentSlide - 1].classList.add("fa-solid");
	});
}

