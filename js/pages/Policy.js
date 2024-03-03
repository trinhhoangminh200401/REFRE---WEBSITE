class Policy {
    constructor() {
        this.lazyLoad();
        this.fadeInOnScroll();
        this.rightInScroll();
        this.handlePopup();
        this.handleDropdown();
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

    rightInScroll() {
        $(window).scroll(() => {
            $('.rightin').each(function() {
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

    handleDropdown() {
        $(".navbar-nav__item .dropdown-btn").click(function(e) {
            e.preventDefault();
            $(this).next(".dropdownmenu, .sub-dropdown-content").fadeToggle(300);
        });
    }
}
export default Policy