import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time')



player.on('timeupdate', throttle(onTimePlay, 1000));

function onTimePlay (timeupdate){
    localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
};

player.setCurrentTime(savedTime)

