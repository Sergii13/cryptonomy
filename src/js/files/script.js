// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

window.addEventListener("DOMContentLoaded", () => {
  const closeBanner = document.querySelector(".header__top-close");
  if (closeBanner) {
    closeBanner.addEventListener("click", (e) => {
      e.preventDefault();
      closeBanner.closest(".header").classList.add("close-banner");
    });
  }
});

let videoBlock = document.querySelectorAll(".video");
for (let i = 0; i < videoBlock.length; i++) {
  let btn = videoBlock[i].querySelector(".video__btn");
  let videoThumb = videoBlock[i].querySelector(".video__image-prev");
  let videoIframe = videoBlock[i].querySelector(".video__iframe");
  btn.addEventListener("click", function () {
    let iframe = videoBlock[i].querySelector(".video-iframe");
    let videoSrc = videoBlock[i].getAttribute("data-video");
    let player = new YT.Player(videoIframe, {
      videoId: "" + videoSrc + "",
      playerVars: {
        rel: "0",
      },
      events: {
        onReady: onPlayerReady,
      },
    });
    videoBlock[i].classList.add("active");
  });
  const onPlayerReady = function (event) {
    event.target.playVideo();
    if (videoBlock[i].getElementsByTagName("iframe")[0]) {
      videoThumb.remove();
    }
  };
}
