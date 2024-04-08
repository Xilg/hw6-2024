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
        video.playbackRate -= 0.25; // Slow down playback rate by 0.25
    });

    fasterButton.addEventListener('click', function () {
        video.playbackRate += 0.25; // Speed up playback rate by 0.25
    });

    skipButton.addEventListener('click', function () {
        video.currentTime += 10; // Skip ahead 10 seconds
    });

    volumeSlider.addEventListener('input', function () {
        video.volume = volumeSlider.value / 100; // Adjust volume based on slider value
        document.getElementById('volume').innerText = volumeSlider.value + "%";
    });

    muteButton.addEventListener('click', function () {
        if (video.volume === 0) {
            video.volume = volumeSlider.value / 100;
            volumeSlider.value = video.volume * 100;
            muteButton.textContent = "Mute";
        } else {
            video.volume = 0;
            volumeSlider.value = 0;
            muteButton.textContent = "Unmute";
        }
        document.getElementById('volume').innerText = volumeSlider.value + "%";
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
