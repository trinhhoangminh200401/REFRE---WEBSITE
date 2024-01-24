$(document).ready(function (){
    $(".lazy").Lazy({
        afterLoad: function (element) {
          element.addClass("loaded");
        },
      });
      function fadeInOnScroll() {
        $('.fadein').each(function () {
           
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
              
                $(this).addClass('active');
            }
            
        });
    }
    function rightInScroll(){
      $('.rightin').each(function () {
           
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          
            $(this).addClass('active');
        }
        
    });
    }
        
    // Call the function on document ready and scroll
    // fadeInOnScroll();
    $(window).scroll(function () {
        rightInScroll()
        fadeInOnScroll();
    });
    $(".popup img:nth-child(3)").click(function() {
      $(".togglepopup").fadeToggle("slow");
  
    });
    // Add a click event to the dropdown button to handle clicking and prevent default link behavior
    $(".navbar-nav__item .dropdown-btn").click(function (e)
    {
      e.preventDefault();

      // Toggle the visibility of the dropdown
      $(this).next(".dropdownmenu, .sub-dropdown-content").fadeToggle(300); // You can adjust the duration (300ms in this case)
    });


  });
  
  