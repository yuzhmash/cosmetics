let zhopaka = 'вам есть';

// console.log (zhopaka);
  
// let answear = prompt('вам есть 29?');
// console.log(answear);

// let anser = confirm('вам есть 29?');
// console.log(answear);

// console.log(65346273765626756230-87625635237+'add');

// if (23 + 23 == 23+23) {
//     console.log('да')
// } else {
//     console.log('нет')
// }

// let answer = confirm('вам есть 29?');
// if (answer) {
//     console.log('заходи')
// } else {
//     console.log('уходи')
// }

// let i = 0;
// while (i < 9) {
//   prompt( i );
//   i++;
// }

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'Офис закрыт.' );
// }

// let hour = 12,
// isWeekend = true,
// isVacation = false;

// if (hour < 10 || hour > 18) {
//   console.log( 'Офис закрыт.' ); // это выходной
// } else if (hour < 1 && hour > 2) {
//   console.log('заходи')
// } else {
//   console.log('стоп')
// }



// let obey = 07




// // let gaga = `va vad?`;

// // console.log(gaga);

// // gaga = 74;

// // console.log(gaga);

// // let vad = prompt('Сколько мне лет?', 89);
// // console.log(vad);
 
// let isChecked = true,
// isClose = true;

// // console.log(isChecked && isClose)

// console.log(isChecked || isClose)

// if (99-76 == 23+23) {
//   console.log("true")
// } else {
//   console.log('false')
// }

// let vad = prompt('Сколько мне лет?', 51);
// if (vad) {
//   console.log("96")
// } else {
//   console.log("69")
// };

// for (let i = 1; i < 9; i++) {
//   console.log(i)
// }

// function logging(a, b) {
//   console.log( a - b)
// }

// logging(89, 67)




$(document).ready(function(){
  $('.carousel__sliders').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog-item__content_active');
    });
    $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
  });
  $('.button_mini').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
  });
  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  function validateForms(form){
    $(form).validate( {
      rules:{
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "пожалуйста введите свой номер телефон",
        email: {
          required: "Пожалуйста введите свой email",
          email: "Неправильно введен email"
        }
      }
    });
  };
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+380 (99) 999-99 99");

  $('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    };
    $.ajax({
      type: "POST",
      URL: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1500) {
      $('.pageup').fadeIn('slow');
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function(){
    const _href = $(this).attr('href');
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});

// $(document).ready(function(){
//   $('.carousell__tesla').slick({
//     arrows: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: true,
//   });
// });


// function toggleSlide(item) {
//   $(item).each(function(i){
//     $(this).on('click', function(e){
//       e.preventDefault();
//       $('.catalog-item__content').eq(i).toggleSlide('.catalog-item__content_active');
//       $('.catalog-item__list').eq(i).toggleSlide('.catalog-item__list_active');
//     })
//   });
// };

// toggleSlide('.catalog-item__link');
// toggleSlide('.catalog-item__back');


