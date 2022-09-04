
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(function(data) {
    // data is an object containing properties specific to that event
    // console.log('data:', data.seconds);

    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds); 
    // console.log(LOCALSTORAGE_KEY);
}, 1000));


const checkedTimeVideo = localStorage.getItem(LOCALSTORAGE_KEY);
// console.log('checkedTimeVideo: ', checkedTimeVideo.value)

player.setCurrentTime(checkedTimeVideo).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});