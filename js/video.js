var originalRatio;
var video = $('.intro iframe');

// Resize Video
function resizeTopVideo() {
    var browserwidth  = $(window).width(),
        browserheight = $(window).height(),
        browserCutoff = 185,
        height,
        width;

    if ((browserheight/browserwidth) > originalRatio){
        height = browserheight+browserCutoff;
        video.height(height);
        width = (browserheight+browserCutoff) / originalRatio;
        video.width(width);
    } else {
        width = browserwidth + (browserCutoff * originalRatio);
        video.width(width);
        height = (browserwidth + browserCutoff) * originalRatio;
        video.height(height);
    }

    // Center the video
    setTimeout(function(){
        if($(window).width() > 479) {
            // default
            $(".intro iframe").width(browserwidth);
            $(".intro iframe").height(browserheight);
        } else {
            $(".intro iframe").width(browserwidth);
            if ($('body').length > 0) {
                $(".intro iframe").height(browserheight);
            } else {
                $(".intro iframe").height(browserheight/3*2);
            }
        }

        video.css('left', (browserwidth - width)/2);
        video.css('top', (browserheight - height)/2);
    }, 10);
}

// function triggerResize() {

//   // otherwise the dom isn't ready yet :(
//   setTimeout(function() {

//     var video = $(".intro iframe").first();
//     originalRatio = video.height() / video.width();

//     resizeTopVideo();

//   }, 10);

//   $(window).resize(function() {
//     resizeTopVideo();
//   });

// }

// // Global functions
// $(document).ready(function(){

//     if (!Modernizr.touch){
//         resizeTopVideo();
//         triggerResize();
//     }
//     else {
//         var originalWidth = $('.intro iframe').width();
//         var originalHeight = $('.intro iframe').height();

//         $('.intro iframe').attr('width', '100%');

//         var currentWidth = $('.intro iframe').width();
//         var adjustedHeight = originalHeight/originalWidth*currentWidth;

//         $('.intro iframe').attr('height', adjustedHeight);
//         $('.intro').height(adjustedHeight);
//     }
// });

// Expanded view
// $(document).ready(function() {

//     $('.play-intro').click(function(e){

//         if($(this).hasClass('active')) {

//             $('nav').fadeIn();
//             $('.intro').height('inherit');
//             topImageSize();

//             $('.play-intro').removeClass('active').text('Expand video');

//         }
//         else {

//             $('nav').fadeOut();
//             var windowHeight = $(window).height();
//             $('.fullscreen').height(windowHeight);

//             $('.play-fullscreen').addClass('active').text('Close expanded video');

//         }

//         e.preventDefault();

//     });

// });