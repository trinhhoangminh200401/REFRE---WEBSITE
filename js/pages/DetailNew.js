import { NewItems } from "../mockData/news.js";
class DetailNew 
{
  constructor ()
  {
    
  }
  LazyloadDetailNew= () =>
  {
  $(".lazy").Lazy({
    afterLoad: function (element)
    {
      element.addClass("loaded");
    },
  });   
  }
  fadeInOnScrollDetailNew=() =>
  {
      $(".fadein").each(function ()
    {
        var position = $(this).offset().top;
      
      var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log("position", position)
        console.log("scroll", scroll)
      if (scroll > position - windowHeight + 100)
      {

        $(this).addClass("active");
      }
    });
  }
  
handleWindowScroll=() =>
  {
  $(window).scroll(function ()
    {
    this.fadeInOnScrollDetailNew();
}.bind(this));
  }
  handleGetNewId= () =>
  {
     const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("newid");

  }
  handleRenderDetailNew= (NewDetail) =>
  {
   console.log(NewDetail)
    {
    return `<div class="content-container p-4 fadein">
              <h4  class="my-2 fw-bold purpleDark">${NewDetail?.title} </h1>
                <h6 class="fw-bold purpleDark ">${NewDetail?.description} </h6>
                <div class="contentdiv">
                  ${NewDetail.showContent?.contentdiv}
                </div>
         </div>`;
  };
  }
  handleLoadPage= () =>
    {
    const getIdForNew = this.handleGetNewId();

    if (getIdForNew)
    {
      const dataId = NewItems.find((news) => news.id == parseInt(getIdForNew));

      if (dataId)
      {
        document.title = dataId.title;

        $(".renderDetail").html(this.handleRenderDetailNew(dataId));
      } else
      {
        window.location.href = "/index.html";
      }
    } 
  }
  handlePopUp= () =>
  {
    $(".popup img:nth-child(3)").click(function ()
  {
    $(".togglepopup").fadeToggle("slow");
  });
  }
  inititiallize ()
  {
      this.LazyloadDetailNew()
       this.handleWindowScroll()
       this.handleLoadPage()
 }
}
export default DetailNew




 
  // function fadeInOnScroll ()
  // {
  //   $(".fadein").each(function ()
  //   {
  //     var position = $(this).offset().top;
  //     var scroll = $(window).scrollTop();
  //     var windowHeight = $(window).height();
  //     if (scroll > position - windowHeight + 100)
  //     {
  //       $(this).addClass("active");
  //     }
  //   });
  // }
  // $(window).scroll(function ()
  // {
  //   fadeInOnScroll();
  // });
  
  
