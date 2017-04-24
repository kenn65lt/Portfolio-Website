// Test
// alert("kenn");
var affixElement = '.navbar-default';
var hidePage = '#hideSlide';
// $(affixElement).affix({
//   offset: {
//     // Distance of between element and top page
//     top: function () {
//       return (this.top = $(affixElement).offset().top)
//     }
//   }
// });


$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -103
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});