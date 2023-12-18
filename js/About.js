$(document).ready(function (){
    $(".lazy").Lazy({
        afterLoad: function (element) {
          element.addClass("loaded");
        },
      });
});