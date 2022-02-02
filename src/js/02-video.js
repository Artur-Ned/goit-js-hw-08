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
 


const time = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(time) .then(function(seconds) {   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log("the time was less than 0 or greater than the videos duration"); 
            break;

        default:
            console.log("other error");
            break;
    }
});

/**
 * git add .
git commit -m "description"
git push
 */