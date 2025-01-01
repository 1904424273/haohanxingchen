const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
const greeting1 = document.getElementById('greeting1');
const greeting2 = document.getElementById('greeting2');
const message = document.getElementById('message');
const textContent = document.getElementById('text-content');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numStars = 300;
const stars = [];

// 星星构造函数
function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.5;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
        ctx.fill();
    };

    this.update = function() {
        this.opacity += (Math.random() - 0.5) * 0.2;
        this.opacity = Math.max(0.2, Math.min(1, this.opacity));
    };
}

// 生成星星
for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

// 动画循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制和更新星星
    for (let i = 0; i < numStars; i++) {
        stars[i].draw();
        stars[i].update();
    }

    requestAnimationFrame(animate);
}

animate();

// 文字切换
setTimeout(() => {
    greeting1.classList.add('hidden');
    greeting2.classList.add('hidden');

    setTimeout(() => {
        message.style.opacity = 1;
       textContent.textContent = "星星乖乖\n2024虽然过去\n但是2025已经到达\n希望我们在2025\n你的本命蛇年里\n更加向上，健康平安\n所念皆可得\n愿我们的未来万丈光芒\n爱你！";
    }, 1000);
}, 3000);

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