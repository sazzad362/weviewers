/*=============================*/
/*  Youtube Video Player
/*=============================*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube Iframe Api Ready
// =================================
function onYouTubeIframeAPIReady(playerId) {
    player = new YT.Player('player', {
        videoId: 'taJ60kskkns',
        playerVars: {
            color: '#ffffff',
            controls: 0,
            disablekb: 1,
            showin: 0,
            rel:0
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange
        }
    });

    var player, timeUpdateInterval;
    var done = false;

    /* Play Button Action
    =================================*/
    $('#play_btn').click(function(){
      player.loadVideoById({
        // 'videoId': 'yC8SPG2LwSA',
        'videoId': 'taJ60kskkns',
       'startSeconds': 1,
       'endSeconds': 30
     })
      player.playVideo();
      $(this).remove();
      $('#stop_btn').show();
    })

    /* Stop Button Action
    =================================*/
    $('#stop_btn').click(function(){
      player.stopVideo();
    })

    /* Youtube initialize
    =================================*/
    function initialize(){
        var time_update_interval;
        updateTimerDisplay();

        clearInterval(time_update_interval);
        time_update_interval = setInterval(function () {
            updateTimerDisplay();
        }, 1000)
    }

    function updateTimerDisplay(){
        $('#current-time').text( formatTime( player.getCurrentTime()) );
    }
    function formatTime(time){
        time = Math.round(time);
        var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ":" + seconds;
    }

    /* Youtube Player State Change
    =================================*/
    function onPlayerStateChange(event) {
      if (event.data == 0) {
        $('#play_btn, #stop_btn').remove();
        $('.video_area').addClass('show_overlay');
        $('#next_btn').show();
      }
    }
}