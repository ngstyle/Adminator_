
$(function () {



    // const EVENT = document.createEvent('UIEvents');
    // window.EVENT = EVENT;
    // EVENT.initUIEvent('resize', true, false, window, 0);
    //
    //
    // window.addEventListener('load', () => {
    //     /**
    //      * Trigger window resize event after page load
    //      * for recalculation of masonry layout.
    //      */
    //     window.dispatchEvent(EVENT);
    // });
    //
    // // ------------------------------------------------------
    // // @External Links
    // // ------------------------------------------------------
    //
    // // Open external links in new window
    // $('a')
    //     .filter('[href^="http"], [href^="//"]')
    //     .not(`[href*="${window.location.host}"]`)
    //     .attr('rel', 'noopener noreferrer')
    //     .attr('target', '_blank');
    //
    // // ------------------------------------------------------
    // // @Resize Trigger
    // // ------------------------------------------------------
    //
    // // Trigger resize on any element click
    // document.addEventListener('click', () => {
    //     window.dispatchEvent(window.EVENT);
    // });


    const scrollables = $('.scrollable');
    if (scrollables.length > 0) {
        scrollables.each((index, el) => {
            new PerfectScrollbar(el);
        });
    }

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

$('.search-toggle').click(function (e) {
    $('.search-box, .search-input').toggleClass('active');
    $('.search-input input').focus();
    e.preventDefault();
});


$('.sidebar-toggle').click(function(e) {
    $('.app').toggleClass('is-collapsed');
    e.preventDefault();
});

$('#sidebar-toggle').click(function (e) {
    e.preventDefault();

    // setTimeout(function () {
    //     window.dispatchEvent(window.EVENT);
    // }, 300);
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


