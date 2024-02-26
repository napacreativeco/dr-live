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
    // NAVBAR - SHOW SEARCH        //
    // //////////////////////////////
    $('.search-icon-nav').on('click', function() {
        $('.search-form-component-nav').css({
            width: 'auto'
        });

        $('.search-icon-nav').css({
            display: 'none'
        });
    });

    $('.search-component-close').on('click', function() {
        $('.search-form-component-nav').css({
            width: '0px'
        });

        $('.search-icon-nav').css({
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

    // //////////////////////////////
    // MOBILE NAV - CLOSE          //
    // ////////////////////////////// 
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
    // CURRENT ARTISTS             //
    // //////////////////////////////
    $.fn.extend({
        scrollRight: function (val) {
            if (val === undefined) {
                return this[0].scrollWidth - (this[0].scrollLeft + this[0].clientWidth) + 1;
            }
            return this.scrollLeft(this[0].scrollWidth - this[0].clientWidth - val);
        }
    });
    var left = $('.current-artists--list').scrollLeft();
    var right = $('.current-artists--list').scrollRight();
    var amountToScroll = window.innerWidth - 30;
    var containerWidth = $('.current-artists--list').css('width');

    // //////////////////////////////
    // CURRENT ARTISTS - PREV      //
    // //////////////////////////////
    $('.prev').on('click', function() {

        if (left < 0) {
            left = 0;
        } else {
            left = left - amountToScroll;
        }

        $('.current-artists--list').scrollLeft(left);
    }); 

    // //////////////////////////////
    // CURRENT ARTISTS - NEXT      //
    // //////////////////////////////
    $('.next').on('click', function() {

        if (left >= right ) {
   
        } else {
            left = left + amountToScroll;
            $('.current-artists--list').scrollLeft(left);
        }
        
    }); 


})(jQuery);