let currentImage = 1;

// Get All Elements
const slides = document.getElementsByClassName("slide");
const dots = document.querySelectorAll(".circles [class*='circle']");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

slideShow(currentImage);


leftArrow.addEventListener("click", () => {
	changeSlide(-1);
});

rightArrow.addEventListener("click", () => {
	changeSlide(1);
});

function changeSlide(n) {
	slideShow(currentImage += n);
}

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		slideShow(currentImage = i + 1);
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.replace("fa-solid", "fa-regular");
		}
		dot.classList.add("fa-solid");
	});
});

function slideShow(n) {

	if (n < 1) { currentImage = slides.length; };
	if (n > slides.length) { currentImage = 1; };

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[currentImage - 1].style.display = "block";
}

