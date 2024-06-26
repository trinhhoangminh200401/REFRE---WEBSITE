import { DataUser } from "../mockDATA/user.js";
import { NewItems } from "../mockData/news.js";
import { NewsPageService } from "../services/News.js";
import { cutString } from "../utils/cutString.js";

// $(document).ready(function () {
//   function fadeInOnScroll() {
//     $(".fadein").each(function () {
//       var position = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > position - windowHeight + 100) {
//         $(this).addClass("active");
//       }
//     });
//   }

//   // Call the function on document ready and scroll
//   fadeInOnScroll();
//   $(window).scroll(function () {
//     fadeInOnScroll();
//   });
//   $(".lazy").Lazy({
//     afterLoad: function (element) {
//       element.addClass("loaded");
//     },
//   });
//   $(".owl-carousel ").owlCarousel({
//     responsiveClass: true,
//     navText: [
//       "<div class='nav-btn prev-slide'><img src='/assets/images/HomePage/left arrow.png' /></div>",
//       "<div class='nav-btn next-slide'><img src='/assets/images/HomePage/right arrow.png' /></div>",
//     ],
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       650: {
//         items: 2,
//       },
//       700: {
//         items: 2,
//       },
//       1024: {
//         items: 3,
//       },
//       1400: {
//         items: 4,
//       },
//     },
//   });

//   $(".owl-carousel").find(".owl-nav").removeClass("disabled");
//   $(".owl-carousel").on("changed.owl.carousel", function (event) {
//     $(this).find(".owl-nav").removeClass("disabled");
//   });

//   // Define the fake data

//   var pagination = $("#myRange");
//   var container = $(".feedback > .container > .card-user");
//   var itemsPerPage = 4;

//   // Function to display the items for the selected page
//   function displayItems() {
//     // Clear the container
//     container.empty();

//     // Get the selected page from the range input
//     var selectedPage = parseInt(pagination.val());
//     // Calculate the start and end indices for the current page

//     var displayedItems = NewsPageService.getItems(
//       selectedPage - 1,
//       itemsPerPage,
//       DataUser,
//     );
//     if (displayedItems.length > 0) {
//       displayedItems.forEach(function (item, index) {
//         var itemElement = $("<div>")
//           .addClass(
//             "text-center col-xs-4 col-sm-6 col-md-12 col-xl-6 mx-auto my-4",
//           )
//           .css("width", "500px")
//           .hide();

//         // Create the elements for the item (e.g., image, username, rating, review)
//         let imgElement = $("<img>")
//           .addClass("card-img-top banner fade-in")
//           .attr("src", item.imgSrc);

//         imgElement.on("load", function () {
//           imgElement.addClass("loaded");
//           imgElement.attr("alt", "Card image");
//         });

//         // Trigger the image loading

//         var usernameElement = $("<h4>")
//           .addClass("card-title my-4 fw-bold fst-italic")
//           .text(item.username);

//         var ratingElement = $("<div>").addClass("rating-stars text-center");
//         for (let i = 0; i < item.rating; i++) {
//           $("<i>")
//             .addClass(`fa fa-star yellow fa-fw my-4`)
//             .appendTo(ratingElement);
//           if (i < item.rating && i > 2) {
//             $("<i>").addClass(`yellow `);
//           }
//         }

//         var reviewElement = $("<p>").addClass("card-text").text(item.review);

//         // Append the elements to the item
//         itemElement.append(
//           imgElement,
//           usernameElement,
//           ratingElement,
//           reviewElement,
//         );

//         // Append the item to the container
//         container.append(itemElement);
//       });
//     } else {
//       container.append("No user exist");
//     }
//     // Loop through the items and create the elements

//     // Show the items with a fadeIn effect
//     container.children().fadeIn();
//   }

//   displayItems();

//   $("rating-stars .fa-star").click(function () {
//     alert("hello");
//     $(this).toggleClass("yellow");
//     $(this).prevAll(".fa-star").addClass("yellow");
//     $(this).nextAll(".fa-star").removeClass("yellow");
//   });
//   // Add an event listener to the pagination range input
//   pagination.on("input", function () {
//     displayItems();
//   });
//   let container__Item = $(".pagination");
//   container__Item.pagination({
//     dataSource: NewItems,
//     pageSize: 4,
//     callback: function (data) {
//       var dataHtml = "";
//       $.each(data, function (index, item) {
//         dataHtml += ` 
//                     <div class="card d-flex flex-row">
//                     <div class='imagediv'>                 
//                       <img
//                         src=${item.img}
//                         class="card-img-top" alt="...">
//                         </div>
//                     <div class="card-body d-flex flex-column  justify-content-between ">
//                         <h5 class="card-title">${item.title}</h5>
//                         <p class="card-text my-4">${cutString(
//                           item.description,
//                           120,
//                         )}</p>
//                         <a href=${
//                           item.showContent.URL
//                             ? item.showContent.URL
//                             : `/NewDetail.html?newid=${item.id}`
//                         } class="btn btn-primary">Xem tiếp</a>
//                     </div>
//                     </div>
// `;
//       });

//       $(".data-container").html(dataHtml);
//     },
//   });

//   $(".popup img:nth-child(3)").click(function () {
//     $(".togglepopup").fadeToggle("slow");
//   });
// });
class News {
  constructor() {}

  handleLazyLoading() {
    $(".lazy").Lazy({
      afterLoad: function (element) {
        element.addClass("loaded");
      },
    })
  }
  initializeCarousel() {
    $(".News .product .owl-carousel").owlCarousel({
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
 displayItems() {
   var pagination = $("#myRange");
   console.log(pagination)
    var container = $(".News > .feedback > .container > .card-user");
    var itemsPerPage = 4;

    container.empty();

    var selectedPage = parseInt(pagination.val());
    console.log(selectedPage)
    var displayedItems = NewsPageService.getItems(
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

        imgElement.on("load", function () {-
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
  handleRenderList ()
  {
      let container__Item = $(".pagination");
  container__Item.pagination({
    dataSource: NewItems,
    pageSize: 4,
    callback: function (data) {
      var dataHtml = "";
      $.each(data, function (index, item) {
        dataHtml += ` 
                    <div class="card d-flex flex-row">
                    <div class='imagediv'>                 
                      <img
                        src=${item.img}
                        class="card-img-top" alt="...">
                        </div>
                    <div class="card-body d-flex flex-column  justify-content-between ">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text my-4">${cutString(
                          item.description,
                          120,
                        )}</p>
                        <a href=${
                          item.showContent.URL
                            ? item.showContent.URL
                            : `/NewDetail.html?newid=${item.id}`
                        } class="btn btn-primary">Xem tiếp</a>
                    </div>
                    </div>
`;
      });

      $(".data-container").html(dataHtml);
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

  handlePagination() {
    var pagination = $("#myRange");
    pagination.on("input", () => this.displayItems());
  }

  handlePopUp() {
    $(".popup img:nth-child(3)").click(function () {
      $(".togglepopup").fadeToggle("slow");
    });
  }
  initialize ()
  {
    this.handleLazyLoading()
    
    this.initializeCarousel();
    this.handleRenderList();
    this.fadeInOnScroll();
    $(window).scroll(() => this.fadeInOnScroll());
    this.displayItems();
    this.handleRatingClick();
    this.handlePagination();
    this.handlePopUp()
  }
}
export default News
