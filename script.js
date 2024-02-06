var btnLanjut = document.getElementById("nexts");
var btnKembali = document.getElementById("next");
var awal = document.getElementById("habede");
var audio = document.getElementById("audio");
var btnAudio = document.getElementById("btn-audio");
var audioPlay = false;

btnLanjut.addEventListener("click", () => {
  awal.classList.toggle("hidden-habede");
  if (!audioPlay) {
    audio.play();
    audioPlay = !audioPlay;
    btnAudio.classList.toggle("animasi");
  }
});

btnKembali.addEventListener("click", () => {
  awal.classList.toggle("hidden-habede");
});

btnAudio.addEventListener("click", () => {
  if (audioPlay) {
    audio.pause();
    audioPlay = !audioPlay;
    btnAudio.classList.toggle("animasi");
  } else {
    audio.play();
    audioPlay = !audioPlay;
    btnAudio.classList.toggle("animasi");
  }
});
