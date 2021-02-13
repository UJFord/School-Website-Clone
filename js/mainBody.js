//state values
let isMobile = window.innerWidth < 800;
//menu states
let pcMenu = true;
let mobileMenu = false;


// MENU //
//all menu elements
let menuElmnts = document.querySelectorAll('.menu-lmnt');
//menu button
let menuBtn = document.getElementById('menu-button');
//toggle menu
menuBtn.addEventListener('click', toggleMenu, false);
function toggleMenu(){
	for(let i = 0 ; i < menuElmnts.length ; i++){
		menuElmnts[i].classList.toggle('openMenu')
	}
	pcMenu = !pcMenu;
	mobileMenu = !mobileMenu;
	
	//close student nav
	if(!pcMenu && !isMobile){
		document.querySelector('#student-nav .arrow').classList.remove('openStudentNav');
		document.querySelector('#nav-list').classList.remove('openStudentNav');
	}
	
}

//open student nav list
let navBtn = document.querySelector('#student-nav');
navBtn.addEventListener('click',()=>{
	// when menu is not minimized on pc
	if(!pcMenu && !isMobile){
		for(let i = 0 ; i < menuElmnts.length ; i++){
			menuElmnts[i].classList.remove('openMenu')
		}
		pcMenu = !pcMenu;
	}
	document.querySelector('#student-nav .arrow').classList.toggle('openStudentNav');
	document.querySelector('#nav-list').classList.toggle('openStudentNav');
} ,false)

//resize menu every window resize
window.addEventListener("resize", resizing);
resizing();	//resize on start

// Computing nav height
function resizing(){
	isMobile = window.innerWidth < 800;
	//viewport height
	let windowH = window.innerHeight;
	//get menu and main
	let menuH = document.querySelector('#menu-main-container');
	let mainH = document.querySelector('#in-main-container');
	// set
	let hght =  windowH - 40 + 'px';
	menuH.style.height = hght;
	mainH.style.height = hght;
	mainH.style.top = '-' + hght;
}


// toggling profile
//get profile elements
let profElmnts = document.querySelectorAll('.profile-lmnt');
//profile toggle button
let profBtn = document.querySelector('#profile-button');

//onlick 
profBtn.addEventListener('click', openProfile,false);
function openProfile(){
	for (let i = 0; i < profElmnts.length; i++) {
		profElmnts[i].classList.toggle('openProfile')
	}
	console.log('clixked')
	console.log(profElmnts)
}