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

        $('.more').css({
            color: 'var(--white)'
        });

    });

    // //////////////////////////////
    // NAVBAR - MOUSE OUT          //
    // //////////////////////////////    
    $('.nav-link').mouseleave(function() {

        gsap.to( '.submenu', {
            display: 'none',
            duration: 0.3
        });
        
        $('.more').css({
            color: 'var(--red)'
        });
    });


    // //////////////////////////////
    // MOBILE NAV                  //
    // ////////////////////////////// 
    $('.menu-button').on('click', function() {

        if ( $(this).hasClass('opened') ) {

            gsap.to( '.navbar-mobile--overlay', {
                display: 'none',
                ease: 'easeOutExpo',
            });

        } else {

            gsap.to( '.navbar-mobile--overlay', {
                display: 'block',
                ease: 'easeOutExpo',
            });

        }

    });

    $('.close-overlay').on('click', function() {
        gsap.to( '.navbar-mobile--overlay', {
            display: 'none',
            ease: 'easeOutExpo',
        });
    });

    // //////////////////////////////
    // MOBILE NAV - SUBMENU        //
    // //////////////////////////////
    $('.has-mobile-dropdown').click(function(e) {
        // e.preventDefault();
        var title = $(this).attr('data-title');

        if ( $(this).hasClass('opened-sub') ) {

            var nearest = $(this).find('.mobile-submenu');
    
            $(this).find('.more').text('+');
            $(this).removeClass('opened-sub');

            gsap.to( $(nearest), {
                height: '0px',
                duration: 0.6,
                margin: '0 0 0 0',
                ease: 'easeOutExpo',
            });

        } else {

            var nearest = $(this).find('.mobile-submenu');
            $(this).find('.more').text('-');
            $(this).addClass('opened-sub');

            gsap.to( $(nearest), {
                height: '100%',
                duration: 0.6,
                margin: '20px 0 10px 0',
                ease: 'easeOutExpo',
            });

        }

    });

    // //////////////////////////////
    // CART                        //
    // //////////////////////////////
    $('.cart-nav-opener').on('click', function() {
        $('body').addClass('js-my-cart-open');
    });
    $('.cart-drawer--close').on('mousedown', function() {
        $('body').removeClass('js-my-cart-open');
    });

    // //////////////////////////////
    // THEME MODE                  //
    // //////////////////////////////
    $('.theme-mode').on('click', function() {
        if ( localStorage.getItem("theme") == 'dark' ) {
            localStorage.setItem("theme", "lite");
            $('body').attr('data-theme', localStorage.getItem("theme"));
        } else {
            localStorage.setItem("theme", "dark");
            $('body').attr('data-theme', localStorage.getItem("theme"));
        }
    });

    // //////////////////////////////
    // COLLECTION - SHOW FILTERS   //
    // //////////////////////////////
    $('.filter-trigger').on('click', function() {
        if ( $('.sorting-wrapper').hasClass('opened') ) {
            
            gsap.to('.sorting-wrapper', {
                height: '0px',
            });
            $('.filter-icon').show();
            $('.close-filters').hide();

            $('.sorting-wrapper').removeClass('opened');

        } else {

            $('.sorting-wrapper').addClass('opened');

            gsap.to('.sorting-wrapper', {
                height: 'auto',
            });
            
            $('.filter-icon').hide();
            $('.close-filters').show();
            
        }
    });

    // //////////////////////////////
    // COLLECTION - SHOW SEARCH    //
    // //////////////////////////////
    $('.search-trigger').on('click', function() {
        if ( $('.search-wrapper').hasClass('opened') ) {
            $('.search-wrapper').removeClass('opened');

            gsap.to('.search-wrapper', {
                height: '0px',
            });
            $('.close-search').hide();
            $('.search-icon').show();
        } else {
            $('.search-wrapper').addClass('opened');

            gsap.to('.search-wrapper', {
                height: 'auto',
            });
            gsap.to('.search-title > svg', {
                rotateY: '180deg',
                duration: 0.3,
                onComplete: function() {
                    $('.close-search').show();
                    $('.search-icon').hide();
                }
            });
        }
    });

})(jQuery);