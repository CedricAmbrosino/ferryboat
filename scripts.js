const lake = document.querySelector('.lake');
const boat = document.querySelector('.lake_boat');
const lakeTitle = document.querySelector('.lake_title');
const theme = document.querySelectorAll('.theme');
const nav = document.getElementById('nav');

let dim = window.innerWidth/2  - ((window.innerWidth*55/100)/2);
let posMax = (window.innerWidth*55/100) + dim - (window.innerWidth*55/100)*10/100;
let posMin = dim + (window.innerWidth*55/100)*5/100;

window.addEventListener('resize', reportWindowSize => {
	dim = window.innerWidth/2  - ((window.innerWidth*55/100)/2);
	posMax = (window.innerWidth*55/100) + dim - (window.innerWidth*55/100)*10/100;
	posMin = dim + (window.innerWidth*55/100)*2/100;
});

lake.addEventListener('mousemove', (e) => {
	if(e.x <= posMin){
		boat.style.left = 0 + '%';
		boat.style.transform = "rotateY(0deg)";
		boat.style.animationDirection= "left";		
	}else if(e.x <= posMax){
		boat.style.left = (e.x -dim) + 'px';
	}else{
		boat.style.left = 90 + '%';
		boat.style.transform = "rotateY(180deg)";
		boat.style.animationDirection= "left";
	}
});


theme.forEach((item) => {
	item.addEventListener('click', (e) => {
		switch(e.target.classList[1]){
			case 'dark': 
				document.body.classList.add('themeBodyDark');
				document.body.classList.remove('themeBodyLight');
				boat.classList.add('theme_boat_dark');
				boat.classList.remove('theme_boat_light');
				lake.classList.add('themeLakeDark');
				lake.classList.remove('themeLakeLight');
				lakeTitle.style.color= "white";
				lakeTitle.style.backgroundColor= "black";
			break;
			case 'light': 
				document.body.classList.remove('themeBodyDark');
				document.body.classList.add('themeBodyLight');
				boat.classList.remove('theme_boat_dark');
				boat.classList.add('theme_boat_light');
				lake.classList.remove('themeLakeDark');
				lake.classList.add('themeLakeLight');
				lakeTitle.style.color= "black";
				lakeTitle.style.backgroundColor= "white";
			break;
			default:
				null;
		}
	});
});

document.body.addEventListener('mousemove', (e) => {
	if(e.y <= 70 ){
		nav.style.visibility= "visible";
	}else{
		nav.style.visibility= "hidden"; 
	}
});




