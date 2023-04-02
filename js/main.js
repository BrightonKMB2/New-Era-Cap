var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors

var pic = document.querySelector('#main-shoe');
var navy = document.querySelector('.navy');
var black = document.querySelector('.black');
var white = document.querySelector('.white');
var scarlet = document.querySelector('.scarlet');
var olive = document.querySelector('.olive');
var woodland = document.querySelector('.woodland');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [
	
	{	
		src: "images/products/NE Origin Navy.jpg"
	},
	{
		src: "images/products/NE Origin Black.jpg"
	},
	{
		src: "images/products/NE Origin White.jpg"
	},
	{
		src: "images/products/NE Origin Scarlet.jpg"
	},
	{
		src: "images/products/NE Origin Olive.jpg"
	},
	{
		src: "images/products/NE Origin Woodland.jpg"
	}
]

// Change Color
navy.addEventListener("click", function() {
	pic.src = info[0].src;
})
black.addEventListener("click", function() {
	pic.src = info[1].src;
})
white.addEventListener("click", function() {
	pic.src = info[2].src;
})
scarlet.addEventListener("click", function() {
	pic.src = info[3].src;
})
olive.addEventListener("click", function() {
	pic.src = info[4].src;
})
woodland.addEventListener("click", function() {
	pic.src = info[5].src;
})

// Active Color
function color() {
    colors.forEach(c => c.classList.remove("active"));
    this.classList.add("active");
}
colors.forEach(c => c.addEventListener("click", color))