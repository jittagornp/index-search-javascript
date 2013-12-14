(function($) {

//    $('.ns-plugin-search-scroll').jScrollPane({
//        showArrows: false,
//        maintainPosition: true,
//        stickToBottom: false,
//        stickToRight: false,
//        clickOnTrack: true,
//        autoReinitialise: true,
//        autoReinitialiseDelay: 0,
//        verticalDragMinHeight: 0,
//        verticalDragMaxHeight: 99999,
//        horizontalDragMinWidth: 0,
//        horizontalDragMaxWidth: 99999,
//        animateScroll: true,
//        animateDuration: 500,
//        animateEase: 'linear',
//        hijackInternalLinks: false,
//        verticalGutter: 0,
//        horizontalGutter: 0,
//        mouseWheelSpeed: 0,
//        arrowButtonSpeed: 0,
//        arrowRepeatFreq: 50,
//        arrowScrollOnHover: false,
//        trackClickSpeed: 0,
//        trackClickRepeatFreq: 70,
//        verticalArrowPositions: 'split',
//        horizontalArrowPositions: 'split',
//        enableKeyboardNavigation: true,
//        hideFocus: false,
//        keyboardSpeed: 0,
//        initialDelay: 0,
//        speed: 50,
//        scrollPagePercent: 0.8
//    }).on('mousewheel', function(event) {
//        event.preventDefault();
//    });
//
//    $(window).on('resize', function() {
//        var jsp = $('.ns-plugin-search-scroll').data('jsp');
//        if (jsp) {
//            jsp.reinitialise();
//        }
//    });


    $(function() {
        var SLIDE_SPEED = 300;
        var $body = $('body');
        var $slideSearch = $('.ns-plugin-slide-search');
        var $searchButton = $('.ns-plugin-search-button');
        $searchButton.click(function() {
            if (!$slideSearch.hasClass('expand')) {
                $slideSearch.animate({
                    marginLeft: 0
                }, SLIDE_SPEED, function() {
                    $slideSearch.addClass('expand');
                });

                $body.animate({
                    marginLeft: $slideSearch.width()
                }, SLIDE_SPEED);
            } else {
                $slideSearch.animate({
                    marginLeft: -$slideSearch.width()
                }, SLIDE_SPEED, function() {
                    $slideSearch.removeClass('expand');
                });

                $body.animate({
                    marginLeft: 0
                }, SLIDE_SPEED);
            }
        });
    });

})(jQuery);