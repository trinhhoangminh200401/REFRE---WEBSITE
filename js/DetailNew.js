import { NewItems } from "./mockData/news.js";
$(document).ready(function ()
{
  $(".lazy").Lazy({
    afterLoad: function (element)
    {
      element.addClass("loaded");
    },
  });
  function fadeInOnScroll ()
  {
    $(".fadein").each(function ()
    {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100)
      {
        $(this).addClass("active");
      }
    });
  }
  $(window).scroll(function ()
  {
    fadeInOnScroll();
  });
  $(".popup img:nth-child(3)").click(function ()
  {
    $(".togglepopup").fadeToggle("slow");
  });
  function getNewIdFromUrl ()
  {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("newid");
  }
  console.log(getNewIdFromUrl());

  const renderdetailNews = (NewDetail) =>
  {
    return `<div class="content-container p-4 fadein">
              <h4  class="my-2 fw-bold purpleDark">${NewDetail.title} </h1>
                <h6 class="fw-bold purpleDark ">${NewDetail.description} </h6>
                <div class="contentdiv">
                  ${NewDetail.showContent.contentdiv}
                </div>
         </div>`;
  };
  const handleLoad = () =>
  {
    const getIdForNew = getNewIdFromUrl();

    if (getIdForNew)
    {
      const dataId = NewItems.find((news) => news.id == parseInt(getIdForNew));

      if (dataId)
      {
        document.title = dataId.title;

        $(".renderDetail").html(renderdetailNews(dataId));
      } else
      {
        window.location.href = "/index.html";
      }
    } else
    {
      window.location.href = "/index.html";
    }
  };

  handleLoad();
});
