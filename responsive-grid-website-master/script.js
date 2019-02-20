var video = document.querySelector(".video");
var bar = document.querySelector(".barcolor");
var playbtn = document.getElementById("play-pause");



function togglePlayPause() {
  if(video.paused){
    playbtn.className="pause";
    video.play();
  }
  else {
    playbtn.className="play";
    video.pause();
  }
}

playbtn.onclick = function() {
  togglePlayPause();
};

video.addEventListener("timeupdate",function(){
  var barposition= video.currentTime/ video.duration;
  bar.style.width=barposition*100+"%";

  if(video.ended){
    playbtn.className='play';
  }
});
