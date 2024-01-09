import { DataUser } from "./mockDATA/user.js";
import { ProductPageService } from "./services/Product.js";
import { fakeProducts } from "./mockData/natural.js";
$(document).ready(function () {
  $(".lazy").Lazy({
    afterLoad: function (element) {
      element.addClass("loaded");
    },
  });

  $(".tab-slider-gallery .owl-carousel").owlCarousel({
    responsiveClass: true,
    autoplay: true,
    navText: "",
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1054: {
        items: 1,
      },
      1200: {
        items: 1,

        loop: false,
      },
    },
  });
  $(".latestupdate > .owl-carousel ").owlCarousel({
    responsiveClass: true,
    navText: [
      "<div class='nav-btn prev-slide'><img src='/assets/images/HomePage/left arrow.png' /></div>",
      "<div class='nav-btn next-slide'><img src='/assets/images/HomePage/right arrow.png' /></div>",
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 2,
      },
      700: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1400: {
        items: 4,

        loop: false,
      },
    },
  });
  $(".container-tabs .card-body").click(function () {
    let totalItem = $(".container-slider-image .owl-carousel .owl-item").length;

    let position = $(this).index();
    if (position >= 0 && position < totalItem) {
      $(".container-slider-image .owl-carousel .owl-item").trigger(
        "to.owl.carousel",
        position
      );
    } else {
      console.error("Invalid index", position);
    }
  });
  var pagination = $("#myRange");
  var container = $(".feedback > .container > .card-user");
  var itemsPerPage = 6;

  // Function to display the items for the selected page
  function displayItems() {
    // Clear the container
    container.empty();

    // Get the selected page from the range input
    var selectedPage = parseInt(pagination.val());
    // Calculate the start and end indices for the current page

    var displayedItems = ProductPageService.getItems(
      selectedPage - 1,
      itemsPerPage,
      DataUser
    );
    if (displayedItems.length > 0) {
      displayedItems.forEach(function (item, index) {
        var itemElement = $("<div>")
          .addClass("text-center col-xs-4 col-sm-6 col-md-12 mx-auto my-4")
          .css("width", "400px")
          .hide();

        // Create the elements for the item (e.g., image, username, rating, review)
        let imgElement = $("<img>")
          .addClass("card-img-top banner fade-in")
          .attr("src", item.imgSrc);

        imgElement.on("load", function () {
          imgElement.addClass("loaded");
          imgElement.attr("alt", "Card image");
        });

        // Trigger the image loading

        var usernameElement = $("<h4>")
          .addClass("card-title my-4 fw-bold fst-italic")
          .text(item.username);

        var ratingElement = $("<div>").addClass("rating-stars text-center");
        for (let i = 0; i < item.rating; i++) {
          $("<i>")
            .addClass(`fa fa-star yellow fa-fw my-4`)
            .appendTo(ratingElement);
          if (i < item.rating && i > 2) {
            $("<i>").addClass(`yellow`);
          }
        }

        var reviewElement = $("<p>").addClass("card-text").text(item.review);

        // Append the elements to the item
        itemElement.append(
          imgElement,
          usernameElement,
          ratingElement,
          reviewElement
        );

        // Append the item to the container
        container.append(itemElement);
      });
    } else {
      container.append("No user exist");
    }
    // Loop through the items and create the elements

    // Show the items with a fadeIn effect
    container.children().fadeIn();
  }

  displayItems();

  $("rating-stars .fa-star").click(function () {
    alert("hello");
    $(this).toggleClass("yellow");
    $(this).prevAll(".fa-star").addClass("yellow");
    $(this).nextAll(".fa-star").removeClass("yellow");
  });
  // Add an event listener to the pagination range input
  pagination.on("input", function () {
    displayItems();
  });
  const getProductData = (product) => {
    return `
    <div class="card-content col-xl-4 col-lg-3 my-4 mx-xl-3 card-purple click " data-product-id="${product.id}" style="cursor:pointer">
        <p class="card-title green-category my-4">${product.category}</p>
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img class="card-img-top bottom lazy fade-in" src=${product.imageUrl}
/>
            <div class="card-body">
                <div class="my-4">
                    <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title}</h5>
                    <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title1}</h5>
                    <p class="purple-text">${product.description}</p>
                </div>
                <a href="#" class="btn w-100 py-2  px-4 btn-purple d-flex align-items-center justify-content-between click">
                    <p class="mb-0 h5 fst-italic fw-bold">${product.price}đ</p>
                    <p class="mb-0 h6 fst-italic ">Tìm hiểu thêm</p>
                </a>
            </div>
        </div>
    </div>
`;
  };
  const renderProductCards = () => {
    let container = $(".productlist-container");
    let content = "";
    fakeProducts.map((product) => {
      const cardHtml = getProductData(product);
      content += cardHtml;
      container
        .html(content)
        .promise()
        .done(function () {
          $(".card-img-top").addClass("loaded");
        });
    });
  };

  renderProductCards();
});
