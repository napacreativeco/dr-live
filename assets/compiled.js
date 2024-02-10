(function($) {

    // //////////////////////////////
    // NAVBAR - MOUSE IN           //
    // //////////////////////////////
    $('.has-dropdown').mouseenter(function() {
        
        var title = $(this).attr('data-title');

        gsap.to( $('[data-menu="'+ title +'"]'), {
            display: 'flex',
            opacity: 1,
            duration: 0.3

        });

    });

    // //////////////////////////////
    // NAVBAR - MOUSE OUT          //
    // //////////////////////////////    
    $('.nav-link').mouseleave(function($) {
        gsap.to( '.submenu', {
            display: 'none',
            duration: 0.3
        });
    });


    // //////////////////////////////
    // MOBILE NAV                  //
    // ////////////////////////////// 
    $('.menu-button').on('click', function() {

        if ( $(this).hasClass('opened') ) {

            gsap.to( '.navbar-mobile--dropdown', {
                height: '0px',
                duration: 0.6,
                ease: 'easeOutExpo',
            });
    
            $(this).text('Menu').removeClass('opened');

        } else {

            gsap.to( '.navbar-mobile--dropdown', {
                height: '100%',
                duration: 0.6,
                ease: 'easeOutExpo',
            });
            $(this).text('Close').addClass('opened');

        }

    });

    // //////////////////////////////
    // MOBILE NAV - SUBMENU        //
    // //////////////////////////////
    $('.has-mobile-dropdown').click(function(e) {
        e.preventDefault();

        var title = $(this).attr('data-title');

        gsap.to( $('[data-menu="'+ title +'"]'), {
            height: '100%',
            duration: 0.3
        });

        $(this).find('.more').css('transform', 'rotate(45deg)');

        $(this).addClass('opened');
    });

 


})(jQuery);