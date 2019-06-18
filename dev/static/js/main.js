svg4everybody({});

        // Initialize Slidebars
        var controller = new slidebars();
        controller.init();

        // Toggle Slidebars
        $( '.toggle-id-1' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-1' );
        });

               // Toggle Slidebars
        $( '.toggle-id-2' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-2' );
        });
                // Toggle Slidebars
        $( '.toggle-id-3' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-3' );
        });


var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#audi button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Пауза";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Видео остановлено";
  }
});

$('.trigger').on('click', function() {
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
    return false;
});
$('.head').on('click', function (){
    $('.modal-wrapper').removeClass('open');
})

var closeButton = document.querySelector("#click-to-close");
    audi = document.getElementById("audi");

closeButton.addEventListener("click", function() {
   audi.classList.toggle("click-close");
});

