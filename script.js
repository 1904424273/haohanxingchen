const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const newYearVideo = document.getElementById('newYearVideo');
let isPlaying = false;
newYearVideo.muted = true;


musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.textContent = "播放音乐";
    } else {
        bgMusic.play();
        musicBtn.textContent = "暂停音乐";
    }
    isPlaying = !isPlaying;
});

newYearVideo.addEventListener('ended', function() {
    this.play();
  });