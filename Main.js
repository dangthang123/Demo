// window.addEventListener("load", function(){
// const slider =document.querySelector(".slide-show");
// const sliderMain =document.querySelector(".slide-main");
// const sliderItem=document.querySelectorAll(".container-footer-top-list");
// const sliderDotItem=document.querySelectorAll(".slider-dot-item");
// const sliderItemWidth= sliderItem[0].offsetWidth;
//     // console.log("sliderItemWidth",sliderItemWidth);
// const sliderLenght=sliderItem.length;
// // sliderMain.style.width=`${sliderLenght * sliderItemWidth}px`;
//  let postionX=0;
//  let index=0;
 
    // [...sliderDotItem].forEach(item =>item.addEventListener("click",function(e){
    //     [...sliderDotItem].forEach(el=>el.classList.remove("active"));
    //     e.target.classList.add("active");
    //     const slideIndex=parseInt(e.target.dataset.index);
    //     index = slideIndex;
    //     postionX = -1 *(index * sliderItemWidth);
    //     console.log(index);
    //     sliderMain.style=`transform: translateX(${postionX }px)`;
        
//     }));

        

// });
// Bắt sự kiện Click vào Icon
$(document).ready(function(){
  $('#toggle-header-menu').click(function(){
      $('.header-menu ul').slideToggle();
  });

  $('#toggle-header-top').click(function(){
      $('.header-container-top-right-1').slideToggle();
  });
  $('#toggle-header-top').click(function(){
      $('.header-container-top-right-2').slideToggle();
  });
  $('#Cart').click(function(){
      $('.Cart-List').slideToggle();
  });
//   $('#Wish').click(function(){
//       $('.Wish-List').slideToggle();
//   });
  $('#search-btn').click(function(){
    $('#search-text').slideToggle();
});
//   End

// Bắt sự kiện Click vào khoảng trắng

  $("#toggle-header-menu").click(function(e){
    $(".header-menu ul").show();
     e.stopPropagation();
     $(".header-menu ul").click(function(e){
        e.stopPropagation();
    });
    
    $(document).click(function(){
        $(".header-menu ul").hide();
    });

});

//  $("#Wish").click(function(e){
//         $(".Wish-List").show();
//          e.stopPropagation();
//          $(".Wish-List").click(function(e){
//             e.stopPropagation();
//         });
        
//         $(document).click(function(){
//             $(".Wish-List").hide();
//         });
    
//     });
  
    
    $("#Cart").click(function(e){
        $(".Cart-List").show();
         e.stopPropagation();
         $(".Cart-List").click(function(e){
            e.stopPropagation();
        });
        
        $(document).click(function(){
            $(".Cart-List").hide();
        });
    });
    $("#search-btn").click(function(e){
        $("#search-text").show();
         e.stopPropagation();
         $("#search-text").click(function(e){
            e.stopPropagation();
        });
        
        $(document).click(function(){
            $("#search-text").hide();
        });
    });
    
//    END
});

    $(".slide-main").slick({
        nav: false,
                dots:true,
                nextArrow: false,
                arrows:false,
                autoplay: true,
                autoplaySpeed :1000,
                slidesToShow:3,
                slidesToScroll: 3,
                infinite:true,
                speed:1000,
                dotClass:'slick-dots',
            responsive: [
                    {
                      breakpoint: 769,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 427,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },

                
                  ]
                
    });
