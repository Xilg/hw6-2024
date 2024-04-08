document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('player1');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var slowerButton = document.getElementById('slower');
    var fasterButton = document.getElementById('faster');
    var skipButton = document.getElementById('skip');
    var volumeSlider = document.getElementById('slider');
    var muteButton = document.getElementById('mute');
	var vintageButton = document.getElementById('vintage');
	var originalButton = document.getElementById('orig');

    playButton.addEventListener('click', function () {
        video.play();
    });

    pauseButton.addEventListener('click', function () {
        video.pause();
    });

    slowerButton.addEventListener('click', function () {
        video.playbackRate -= 0.1;
		console.log("Speed is " + video.playbackRate);
    });

    fasterButton.addEventListener('click', function () {
        video.playbackRate += 0.1;
		console.log("Speed is " + video.playbackRate);
    });

    skipButton.addEventListener('click', function () {
        	// skip 10 seconds
		video.currentTime = video.currentTime + 10;
		if (video.ended) {
			// reset playback
			video.load();
			video.play();
			// reset speed
			playbackRate = 1;
		}
		console.log("Current location is " + video.currentTime);
    });

    volumeSlider.addEventListener('input', function () {
        video.volume = volumeSlider.value / 100; // Adjust volume based on slider value
        document.getElementById('volume').innerText = volumeSlider.value + "%";
    });

    muteButton.addEventListener('click', function () {
		if (video.muted) {
			video.muted = false;
			document.getElementById('mute').innerText = "Mute";
			console.log("Unmuted");
		}
		else {
			video.muted = true;
			document.getElementById('mute').innerText = "Unmute";
			console.log("Muted");
		}
    });

	vintageButton.addEventListener('click', function () {
        video.classList.add("oldSchool");
		console.log("In grayscale");
    });

	originalButton.addEventListener('click', function () {
        video.classList.remove("oldSchool");
		console.log("In color");
    });
});
