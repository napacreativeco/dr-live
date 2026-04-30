(function($) {


    // // //////////////////////////////
    // // CURRENT ARTISTS             //
    // // //////////////////////////////
    // $.fn.extend({
    //     scrollRight: function (val) {
    //         if (val === undefined) {
    //             return this[0].scrollWidth - (this[0].scrollLeft + this[0].clientWidth) + 1;
    //         }
    //         return this.scrollLeft(this[0].scrollWidth - this[0].clientWidth - val);
    //     }
    // });
    // var left = $('.current-artists--list').scrollLeft();
    // var right = $('.current-artists--list').scrollRight();
    // var amountToScroll = window.innerWidth - 30;
    // var containerWidth = $('.current-artists--list').css('width');

    // // //////////////////////////////
    // // CURRENT ARTISTS - PREV      //
    // // //////////////////////////////
    // $('.prev').on('click', function() {

    //     if (left < 0) {
    //         left = 0;
    //     } else {
    //         left = left - amountToScroll;
    //     }

    //     $('.current-artists--list').scrollLeft(left);
    // }); 

    // // //////////////////////////////
    // // CURRENT ARTISTS - NEXT      //
    // // //////////////////////////////
    // $('.next').on('click', function() {

    //     if (left >= right ) {
   
    //     } else {
    //         left = left + amountToScroll;
    //         $('.current-artists--list').scrollLeft(left);
    //     }
        
    // }); 


})(jQuery);


(function () {
  function initCurrentArtistsSlider() {
    const list = document.querySelector('.current-artists--list');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    if (!list || !prev || !next) return;

    const getScrollAmount = () => window.innerWidth - 30;

    function updateButtons() {
      const maxScrollLeft = list.scrollWidth - list.clientWidth;

      prev.disabled = list.scrollLeft <= 0;
      next.disabled = list.scrollLeft >= maxScrollLeft - 1;
    }

    prev.addEventListener('click', function () {
      list.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
      });
    });

    next.addEventListener('click', function () {
      list.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
      });
    });

    list.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);

    updateButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCurrentArtistsSlider);
  } else {
    initCurrentArtistsSlider();
  }

  document.addEventListener('shopify:section:load', initCurrentArtistsSlider);
})();