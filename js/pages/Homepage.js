import { DataUser } from "../mockDATA/user.js";
import { HomePageService } from "../services/Homepage.js";
import { fakeProducts as whitenings } from "../mockData/whitening.js";
import { fakeProducts as naturals } from "../mockData/natural.js";

class HomePage {
  constructor() {}

  initializeCarousel() {
    $(".HomePage  .product .owl-carousel").owlCarousel({
      responsiveClass: true,
      navText: [
        "<div class='nav-btn prev-slide'><img src='./assets/images/HomePage/left arrow.png' /></div>",
        "<div class='nav-btn next-slide'><img src='./assets/images/HomePage/right arrow.png' /></div>",
      ],
      loop: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        650: { items: 1 },
        700: { items: 1 },
        900: { items: 1 },
        1054: { items: 2 },
        1400: { items: 2 },
      },
    });

    $(".owl-carousel ").owlCarousel({
      responsiveClass: true,
      navText: [
        "<div class='nav-btn prev-slide'><img src='/assets/images/HomePage/left arrow.png' /></div>",
        "<div class='nav-btn next-slide'><img src='/assets/images/HomePage/right arrow.png' /></div>",
      ],
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },
        650: { items: 2 },
        700: { items: 2 },
        1024: { items: 3 },
        1400: { items: 4 },
      },
    });

    $(".owl-carousel").find(".owl-nav").removeClass("disabled");
    $(".owl-carousel").on("changed.owl.carousel", function (event) {
      $(this).find(".owl-nav").removeClass("disabled");
    });
  }

  initializeLazyLoading() {
    $(".lazy").Lazy({
      afterLoad: function (element) {
        element.addClass("loaded");
      },
    });
  }

  fadeInOnScroll() {
    $(".fadein").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  }

  displayItems() {
    var pagination = $("#myRange");
    var container = $(".HomePage > .feedback > .container > .card-user");
    var itemsPerPage = 4;

    container.empty();

    var selectedPage = parseInt(pagination.val());

    var displayedItems = HomePageService.getItems(
      selectedPage - 1,
      itemsPerPage,
      DataUser
    );

    if (displayedItems.length > 0) {
      displayedItems.forEach(function (item, index) {
        var itemElement = $("<div>")
          .addClass("text-center col-xs-6 col-sm-6 col-md-12 col-xl-6 mx-auto my-4")
          .css("width", "500px")
          .hide();

        let imgElement = $("<img>")
          .addClass("card-img-top banner fade-in")
          .attr("src", item.imgSrc);

        imgElement.on("load", function () {
          imgElement.addClass("loaded");
          imgElement.attr("alt", "Card image");
        });

        var usernameElement = $("<h4>")
          .addClass("card-title my-4 fw-bold fst-italic")
          .text(item.username);

        var ratingElement = $("<div>").addClass("rating-stars text-center");
        for (let i = 0; i < item.rating; i++) {
          $("<i>")
            .addClass(`fa fa-star yellow fa-fw my-4`)
            .appendTo(ratingElement);
          if (i < item.rating && i > 2) {
            $("<i>").addClass(`yellow `);
          }
        }

        var reviewElement = $("<p>").addClass("card-text").text(item.review);

        itemElement.append(
          imgElement,
          usernameElement,
          ratingElement,
          reviewElement
        );

        container.append(itemElement);
      });
    } else {
      container.append("No user exist");
    }

    container.children().fadeIn();
  }

  handleRatingClick() {
    $("rating-stars .fa-star").click(function () {
      alert("hello");
      $(this).toggleClass("yellow");
      $(this).prevAll(".fa-star").addClass("yellow");
      $(this).nextAll(".fa-star").removeClass("yellow");
    });
  }

  handlePagination() {
    var pagination = $("#myRange");
    pagination.on("input", () => this.displayItems());
  }

  handlePopUp() {
    $(".popup img:nth-child(3)").click(function () {
      $(".togglepopup").fadeToggle("slow");
    });
  }

  initialize() {
    this.initializeCarousel();
    this.initializeLazyLoading();
    this.fadeInOnScroll();
    $(window).scroll(() => this.fadeInOnScroll());
    this.displayItems();
    this.handleRatingClick();
    this.handlePagination();
    this.handlePopUp();
  }
}

export default HomePage;
