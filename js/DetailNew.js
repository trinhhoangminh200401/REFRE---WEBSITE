import { NewItems } from "./mockData/news.js";
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
    function getNewIdFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("newid");

    }
    console.log("hello")
    console.log(getNewIdFromUrl())

    const renderdetailNews=(NewDetail)=>{
         return `<div class="content-container p-4">
              <h4  class="my-2 fw-bold purpleDark">${NewDetail.title} </h1>
                <h6 class="fw-bold purpleDark ">${NewDetail.description} </h6>
                <div class="contentdiv">
                  ${NewDetail.showContent.contentdiv}
                </div>
         </div>`
    }

    const getIdForNew = getNewIdFromUrl()
    if(getNewIdFromUrl){
       let dataId = NewItems.find(news =>  news.id == parseInt(getIdForNew))
      $('.renderDetail').html(renderdetailNews(dataId))
    }
  });
  
  