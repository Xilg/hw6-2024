var video = document.querySelector("video"); 
console.log("script initiated");
function getVid(){
	video = document.querySelector("video");
	console.log("video found");
	console.log(video)
}

function playVid() { 
	console.log("Play Video");
	video.play();
} 

function pauseVid() { 
	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * 0.8;
	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	if (video.ended) {
		video.load();
		video.play();
		playbackRate = 1;
	}
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted");
	}
}

function changeVolume() {
	console.log(volumeSlider.value);
	var slider_val = document.querySelector('#volume').innerHTML; 
	slider_val = volumeSlider.value;
	video.volume = slider_val / 100;
	document.querySelector('#volume').innerHTML = slider_val + '%';
}
	
function gray() { 
	video.classList.add("oldSchool");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("oldSchool");
	console.log("In color");
}