var songs = [
  {
    songName: "love mashup music -1",
    url: "./songs/song-1.mp3",
    image: "./images/img-1.jpeg",
  },
  {
    songName: "love mashup music-2",
    url: "./songs/song-6.mp3",
    image: "./images/img-2.jpeg",
  },
  {
    songName: "jale-3",
    url: "./songs/song-3.mp3",
    image: "./images/img-3.jpeg",
  },
  {
    songName: "dgar music-main -4",
    url: "./songs/song-4.mp3",
    image: "./images/img-4.jpeg",
  },
];

var audio = new Audio();
var selecteSong = 0;
var imgdata = "";
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function allelems() {
  var clutter = "";
  songs.forEach((el, i) => {
    clutter += `<div class="songs" id="${i}">
    <img
      src="${el.image}"
      alt=""
    />
    <h2>${el.songName}</h2>
    <h3>3:56</h3>
  </div>`;
  });

  document.querySelector(".all-songs").innerHTML = clutter;

  audio.src = songs[selecteSong].url;
  document.querySelector("#left").innerHTML = `<img src="${imgdata}" alt="">`;
}
allelems();

document.querySelector(".all-songs").addEventListener("click", (ele) => {
  selecteSong = ele.target.id;
  imgdata = songs[ele.target.id].image;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  flag = 1;
  allelems();
  audio.play();
});

var flag = 0;
play.addEventListener("click", () => {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    allelems();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    allelems();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", () => {
  if (selecteSong < songs.length - 1) {
    selecteSong++;
    imgdata = songs[selecteSong].image;
    allelems();
    audio.play();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
  }
});
backward.addEventListener("click", () => {
  selecteSong;
  if (selecteSong > 0) {
    selecteSong--;
    imgdata = songs[selecteSong].image;

    allelems();
    audio.play();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
  }
});
