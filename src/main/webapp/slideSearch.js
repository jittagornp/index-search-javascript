(function() {

    $('.ns-plugin-slide-search').jScrollPane({
        showArrows: false,
        maintainPosition: true,
        stickToBottom: false,
        stickToRight: false,
        clickOnTrack: true,
        autoReinitialise: true,
        autoReinitialiseDelay: 0,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        animateScroll: true,
        animateDuration: 500,
        animateEase: 'linear',
        hijackInternalLinks: false,
        verticalGutter: 0,
        horizontalGutter: 0,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: 'split',
        horizontalArrowPositions: 'split',
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 0,
        speed: 50,
        scrollPagePercent: 0.8
    }).binding('mousewheel', function(event) {
        event.preventDefault();
    });

    $(window).on('resize', function() {
        var jsp = $('.ns-plugin-slide-search').data('jsp');
        if (jsp) {
            jsp.reinitialise();
        }
    });

})();