$(function () {
// // Initialize the SDK
// SC.initialize({
//   client_id: '02c15f57cfd443f8808de7bcc06af43a'
// });

    $('button.connect').click(connectCloud());

    $('ul.cloud li:eq(0)').click(function(e){
        e.preventDefault();
        $('ul.cloud li.active').removeClass('active');
        $(this).addClass('active');

        myMusic();
    });

    $('ul.cloud li:eq(1)').click(function(e) {
        e.preventDefault();
        $('ul.cloud li.active').removeClass('active');
        $(this).addClass('active');

        myStudio();
    });

    $('ul.cloud li:eq(2)').click(function(e) {
        e.preventDefault();
        $('ul.cloud li.active').removeClass('active');
        $(this).addClass('active');

        myCollection();
    });

    // $('ul.cloud li:eq(0)').click(myMusic());
    // $('ul.cloud li:eq(1)').click(myStudio());
    // $('ul.cloud li:eq(2)').click(myCollection());


//Show top menu bar
    $('.cloudy').click(function(e){
        e.preventDefault();
        if($('nav.top_cloud').hasClass('hide_cloud')) {
            showNav();
        } else {
            hideNav();
        }
    });

});


/* Toggle the top nav
----------------------*/
function showNav() {
    $("nav.top_cloud").removeClass('hide_cloud');
    $("nav.top_cloud").addClass('show_cloud');
}
function hideNav() {
    $("nav.top_cloud").removeClass('show_cloud');
    $("nav.top_cloud").addClass('hide_cloud');
}

/* Conect with SoundCloud
-------------------------*/

function connectCloud() {
    //
}
/* Loads tracks from soundcloud account
---------------------------------------*/
function myMusic() {
    console.log('callling');
    $("section.zen_place header").hide();
    $(".music").show();
    // SC.get('/me', function(me) {
    //     SC.isConnected(me);
    //      $('#username').html(me.username);
    //     });
}


/* Initialize the Sound Manager and allows to upload tracks
-----------------------------------------------------------*/
function myStudio() {
    $('.studio').show();
    // Initialize Upload Manager
}


/* Loads playlists from soundcloud
----------------------------------*/
function myCollection() {
    $('.collection').show();
}


/* Random music
---------------*/
function playSomeMusic() {
    //
}



