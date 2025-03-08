
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");

    // Vị trí ngẫu nhiên theo chiều ngang
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Kích thước ngẫu nhiên
    const size = Math.random() * 30 + 20; // 20px - 50px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    document.body.appendChild(heart);

    // Tạo hiệu ứng rơi
    const animationDuration = Math.random() * 5000 + 4000; // 4s - 9s
    heart.animate(
        [
            { transform: `translateY(0px) rotate(${Math.random() * 40 - 20}deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0.5 }
        ],
        {
            duration: animationDuration,
            easing: "linear",
            iterations: 1
        }
    ).onfinish = () => heart.remove(); // Xóa trái tim sau khi rơi xong
}
setTimeout(() => {
  document.querySelector(".message").style.opacity = "1";
}, 3000); // 3000ms = 3 giây


// Tạo hiệu ứng trái tim rơi liên tục
setInterval(createFallingHeart, 300);
