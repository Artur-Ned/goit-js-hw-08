const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
   
};

player.on('timeupdate', onPlay);

