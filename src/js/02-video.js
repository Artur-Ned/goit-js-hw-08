import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

      player.on('play', function () {
        console.log('played the video!');
      });

      player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
   
};

player.on('timeupdate', throttle(onPlay, 1000));
 


const time = localStorage.getItem("videoplayer-current-time") ?? 0;

player.setCurrentTime(time) 

/**
 * git add .
git commit -m "description"
git push
 */