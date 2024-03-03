class About {
  constructor() {
  }

  initLazyLoading() {
    $(".lazy").Lazy({
      afterLoad: function (element) {
        element.addClass("loaded");
      },
    });
  }

  fadeInOnScrollForAbout() {
    $(".fadein").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  }

  rightInScrollForNew() {
    $(".rightin").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  }

  handleScrollAllWindow() {
    
    $(window).scroll(function () {
      this.rightInScrollForNew();
      this.fadeInOnScrollForAbout();
    }.bind(this));
  }

  handlePopUp() {
    $(".popup img:nth-child(3)").click(function () {
      $(".togglepopup").fadeToggle("slow");
    });
  }

  init() {
    this.initLazyLoading();
    this. handleScrollAllWindow();
    this.handlePopUp();
  }
}

export default About;
