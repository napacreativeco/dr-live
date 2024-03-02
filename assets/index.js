(function($) {


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