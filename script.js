

  $('.slider').slick({
  	 	arrows:true,
  		dots:true,
  		dotsClass:'slick-dots',
      cssEase: 'ease-out',
  		  nextArrow: '<img class="nextArrow arrows" src="image/right.png">',
      	prevArrow: '<img class="prevArrow arrows" src="image/left.png">',
        responsive:[
        {
      breakpoint: 420,
      settings: {
          dots:false,

      }
    }
        ]
  });
 
   $('.block-date').slick({
  	 	arrows: true,
  		dots :false,
  		infinite: false,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		nextArrow: '<img class="next_Arrow arrowsTwo" src="image/rightrecent.png">',
      prevArrow: '<img class="prev_Arrow arrowsTwo" src="image/leftrecent.png">',
        responsive: [
    {
      breakpoint: 1251,
      settings: {
        
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 615,
      settings: {
        
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    

     
    ]

    


  });
 

let buttons = document.querySelectorAll('.link_work');

buttons.forEach(function(button, index, buttons){
	button.addEventListener('click', function(e) {
		buttons[index].classList.toggle('link--activ')
	})
});


let burger = document.querySelector('.burger');
let nav = document.querySelector('.menu_media');
let line =  document.querySelector('.burger_menu_lines');


burger.addEventListener('click', function () {
  nav.style.display = 'flex';
  nav.classList.toggle('menu__active');
  
  console.log(event)
jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".menu__active");
        var menu = $(".menu_media");
         // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            //block.hide(); // если условия выполняются - скрываем наш элемент 
            block.hide( )
            menu.removeClass('menu__active')
        }
    });
});

})






