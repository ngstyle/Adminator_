
$(function () {
    window.addEventListener('load', function () {
        let $s = $('.masonry');
        if ($s.length > 0) {
            $s.masonry({
                // options...
                itemSelector: '.masonry-item',
                columnWidth: '.masonry-sizer',
                percentPosition: true,
            });
        }
    });

});

$('.sidebar-toggle').click(function(e) {
    $('.app').toggleClass('is-collapsed');
    e.preventDefault();
});

$('#sidebar-toggle').click(function (e) {
    e.preventDefault();

    setTimeout(function () {
        window.dispatchEvent(window.EVENT);
    }, 300);
});


$(".sidebar .sidebar-menu li a").click(function (e) {
    const $this = $(this);

    if ($this.parent().hasClass('open')) {
        $this.parent().children('.dropdown-menu').slideUp(200, function () {
            $this.parent().removeClass('open');
        });
    } else {
        $this.parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);

        $this.parent().parent().children('li.open').children('a').removeClass('open');

        $this.parent().parent().children('li.open').removeClass('open');

        $this.parent().children('.dropdown-menu').slideDown(200, function () {
            $this.parent().addClass('open');
        });
    }
});


