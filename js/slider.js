const owl = $('.owl-carousel');
  owl.owlCarousel({
    center: true, 
    loop: true,
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive : {
    640 : {
        items: 3,
        startPosition: 1,
    },
    850 : {
        items: 3,
        startPosition: 1,
    },
    1200 : {
      items: 3,
      startPosition: 1,
      margin: 30,
    }
}
  });
  $('.slider__btn--prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

  $('.slider__btn--next').click(function() {
      owl.trigger('next.owl.carousel');
})
 
 