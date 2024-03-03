class QNA {
    constructor() {
        this.lazyLoad();
        this.fadeInOnScroll();
        this.handlePopup();
    }

    lazyLoad() {
        $(".lazy").Lazy({
            afterLoad: function(element) {
                element.addClass("loaded");
            },
        });
    }

    fadeInOnScroll() {
        $(window).scroll(() => {
            $('.fadein').each(function() {
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 100) {
                    $(this).addClass('active');
                }
            });
        });
    }

    handlePopup() {
        $(".popup img:nth-child(3)").click(function() {
            $(".togglepopup").fadeToggle("slow");
        });
  }
  
}
export default QNA

