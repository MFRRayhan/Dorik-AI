document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById('play-btn');
    const closeBtn = document.getElementById('close-btn');
    const videoPopup = document.getElementById('video-popup');
    const popupVideo = document.getElementById('popup-video');

    playBtn.addEventListener('click',  () => {
        videoPopup.style.display = 'flex';

        setTimeout(() => {
            popupVideo.currentTime = 0;
            popupVideo.play();
        }, 50);
    });

    closeBtn.addEventListener('click', () => {
        videoPopup.style.display = 'none';
        popupVideo.pause();
        popupVideo.currentTime = 0;
    })
})