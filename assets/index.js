(function($) {

    // //////////////////////////////
    // ANNOUNCEMENT BAR - CLOSE    //
    // //////////////////////////////
    $('.close-announcement-icon').on('click', function() {
        $('#announcement-bar').css({
            display: 'none'
        });

        $('main').css({
            paddingTop: 'var(--nav-height)'
        });

        $('#hero-swiper').css({
            height: 'calc(100vh - var(--nav-height))'
        });

    });
    
    // //////////////////////////////
    // MARQUEE - CLOSE             //
    // //////////////////////////////
    $('.close-marquee-icon').on('click', function() {
        $('#announcement-bar--marquee').css({
            display: 'none'
        });
    });

    // //////////////////////////////
    // NAVBAR - MOUSE IN           //
    // //////////////////////////////
    $('.has-dropdown').mouseenter(function() {
        
        var title = $(this).attr('data-title');

        $('[data-menu="'+ title +'"]').css({
            display: 'flex',
            opacity: 1,
            transition: 'all 0.3s ease-in-out'
        });

        $('.more').css({
            color: 'var(--white)'
        });

        $('.no-dropdown').on('mouseenter', function() {

            $('.submenu').css({
                display: 'none',
                transition: 'all 0.3s ease-in-out'
            });
            
        });

    });

    // //////////////////////////////
    // NAVBAR - MOUSE OUT          //
    // //////////////////////////////    
    $('#navbar').mouseleave(function() {

        $('.submenu').css({
            display: 'none',
            transition: 'all 0.3s ease-in-out'
        });
        
        $('.more').css({
            color: 'var(--red)'
        });
    });

    // //////////////////////////////
    // COLLECTION - SHOW SEARCH    //
    // //////////////////////////////
    $('.search-icon').on('click', function() {
        $('.search-form-component').css({
            width: 'auto'
        });

        $(this).css({
            display: 'none'
        });
    });

    $('.search-component-close').on('click', function() {
        $('.search-form-component').css({
            width: '0px'
        });

        $('.search-icon').css({
            display: 'block'
        })
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
            
            $('.sorting-wrapper').css({
                height: '0px'
            });

            $('.filter-icon').show();
            $('.close-filters').hide();

            $('.sorting-wrapper').removeClass('opened');

        } else {

            $('.sorting-wrapper').addClass('opened');

            $('.sorting-wrapper').css({
                height: '100%'
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

            $('.search-wrapper').css({
                height: '0px'
            });

            $('.close-search').hide();
            $('.search-icon').show();

        } else {
            $('.search-wrapper').addClass('opened');

            $('.search-wrapper').css({
                height: '100%'
            });

            $('.search-title > svg').css({
                transform: 'rotate(180deg)'
            }, function() {
                $('.close-search').show();
                $('.search-icon').hide();
            });

        }
    });


    // //////////////////////////////
    // MODULE - CURRENT ARTISTS    //
    // //////////////////////////////
    var left = $('.current-artists--list').scrollLeft();

    $('.next').on('click', function() {
        left = left + 200;
        $('.current-artists--list').scrollLeft(left);
    }); 

    $('.prev').on('click', function() {
        left = left - 200;
        $('.current-artists--list').scrollLeft(left);
    }); 



})(jQuery);