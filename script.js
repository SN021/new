window.addEventListener('load', () => {
  Swal.fire({
    title: 'Do you want to play music in the background?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => {
    const audio = document.querySelector('.song');
    if (result.isConfirmed) {
      try {
        audio.play().then(() => {
          const pulse = document.createElement('div');
          pulse.className = 'music-indicator';
          document.body.appendChild(pulse);
        });
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; 
      }, 14000);  
      } catch (e) {
        console.warn("Playback failed:", e);
      }
    }
    animationTimeline();
  });
});

const animationTimeline = () => {
  console.log("Animation timeline triggered");
};

document.getElementById("surpriseBtn").addEventListener("click", () => {
  Swal.fire({
    title: "💘 Hi, Cutieeeee 💘",
    text: "Let's celebrate countless birthdays together! 🎉🎈",
    imageUrl: "img/bole.jpg",
    imageWidth: 300,
    imageHeight: 300,
    confirmButtonText: "Reveal Surprise 🎁",
    background: "#fff0f5",
  }).then(() => {
    Swal.fire({
      title: "🎁 Here's your surprise!",
      html: `<a href="https://openme.vercel.app/b/QmFieSBCYWxs" target="_blank" style="font-weight:bold; color:#e91e63;">Click here to open it!</a>`,
      icon: "success",
      confirmButtonText: "Aww 💖",
    });
  });
});

