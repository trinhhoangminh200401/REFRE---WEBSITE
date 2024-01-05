import { DataUser } from "./mockDATA/user.js";
import { ProductPageService } from "./services/Product.js";
import { fakeProducts,fakeProductsJSON } from "./mockData/whitening.js";

$(document).ready(function () {
  
  $(".lazy").Lazy({
    afterLoad: function (element) {
      element.addClass("loaded");
    },
  });

// $(".tab-slider-gallery  .owl-carousel").owlCarousel({
//     responsiveClass: true,
//     // autoplay: true,
//     navText: "",
//     autoplayTimeout: 3000,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       700: {
//         items: 1,
//       },
//       900: {
//         items: 1,
//       },
//       1054: {
//         items: 1,
//       },
//       1200: {
//         items: 1,

//         loop: false,
//       },
//     },
//   });
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
  
  var pagination = $("#myRange");
  var container = $(".feedback > .container > .card-user");
  var itemsPerPage = 6;
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
    <div class="card-content col-xl-4 col-lg-3 my-4 mx-xl-3 card-purple" data-product-id="${product.id}">
        <p class="card-title purple-category my-4">${product.category}</p>
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
                    <p class="mb-0 h5 fst-italic">${product.price}đ</p>
                    <p class="mb-0 h6 fst-italic ">Tìm hiểu thêm</p>
                </a>
            </div>
        </div>
    </div>
`;

  };
  const renderProductCards = (k) => {
    let container = $(".productlist-container");
    let content = "";
    fakeProducts.map((product) => {
        const cardHtml = getProductData(product)
      content += cardHtml;
      container.html(content).promise().done(function(){
        $('.card-img-top').addClass("loaded")
      })
      }
)

};


renderProductCards();

  let purpleDarkLinear =$('.card-purpleDarkLinear')
  let purpleNormalLinear =$('.card-purpleNormalLinear')
  let purpleNormalLinear2 =$('.card-purpleNormalLinear')
 let owlCarousel = $('.owl-carousel.owl-theme')
 let descriptionContainers_Div=$('.description-containers_div')
  function renderProductDetail(productDetails) {
    return `
  <div class="tab-slider-gallery row tabs my-5 p-2 mx-auto container d-flex justify-content-center">
      <div class="row col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 container-tabs ">
          <div class="card-body card-purpleDarkLinear col-3 col-md-3 col-lg-6 col-xl-12">
              <img class="lazy fade-in loaded" src="${productDetails.imageUrl}" alt data-hash="0" />
          </div>
          <div class="card-body card-purpleNormalLinear my-2 col-3 col-md-3 col-lg-12 col-xl-12">
              <img class="lazy fade-in loaded" src="${productDetails.imageUrl}" alt="" />
          </div>
          <div class="card-body card-purpleNormalLinear col-xl-12 col-md-3 col-lg-6 col-3">
              <img alt="" class="lazy fade-in loaded" src="${productDetails.imageUrl}" />
          </div>
      </div>
      <div class="col-xl-3 col-sm-12 col-lg-6 col-md-12 col-12 mx-3 container-slider-image">
          <div class="owl-carousel owl-theme">
          
          <img class="fade-in loaded" src="${productDetails?.imageUrl}" alt />
          <img class="fade-in loaded" src="${productDetails?.imageUrl}" alt />
          <img class="fade-in loaded" src="${productDetails?.imageUrl}" alt />
          </div>
      </div>
      <div class="col-lg-11 col-xl-4 bg-whiteNormal description-containers">
          <div class="description-containers_div m-auto">
              <div class="description-containers_title">
                  <h3 class="purpleDark">${productDetails.title}</h3>
                  <h3 class="purpleDark my-4">${productDetails.title1}</h3>
              </div>
              <div class="description-containers_content">
              <div class="content-div">
              <p class="purpleDark">Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:
              </p>
              <ul class="list  purpleDark">
                  <li>Khử mùi suốt 24H*.
                  </li>
                  <li>Giảm tiết mồ hôi suốt 48H*.</li>
                  <li>Không cồn, không Paraben, không gây vàng áo.</li>
                  <li>Không gây kích ứng**.</li>
                  <li>Lưu hương suốt cả ngày.</li>
              </ul>   

          </div>
          <div class="content-div">
              <p class="purpleDark">Cảm nhận 3 tầng hương tôn nét kiêu kỳ, sang trọng:
              </p>
              <ul class="list purpleDark">
                  <li>Tầng hương đầu: Cam Bergamot tươi mát hòa quyện cùng chút thanh dịu của quả Cam Mandarin.</li>
                  <li>Tầng hương giữa: hoa Nhài và hoa Linh Lan kiêu kỳ đua nhau tỏa hương.</li>
                  <li>Tầng hương cuối: Hoắc Hương đan xen một chút Vani ẩn chứa sự sang trọng, lôi cuốn lạ thường.</li>

              </ul>

          </div>


              </div>
              <div class="button-action d-flex w-100">
                  <p href="#" class="price darkpurple h5"></p>
                  <a href="#" class="btn normalpurple h5">MUA NGAY</a>
              </div>
          </div>
      </div>
  </div>
`;
  }
  function redirectTo404() {
    window.location.href = "/404";
}

$(document).on("click", ".click", function (event) {
  let productDetails;
  let container = $(".productContainer");
    event.preventDefault();

    // Extract the product ID from the clicked element
    const productId = $(this).closest(".card-content").data("product-id");

    productDetails = fakeProducts.find((product) => product.id === productId);
    let renderProduct =renderProductDetail(productDetails)
    console.log(renderProduct)
    if (productDetails) {
     container.html(renderProduct).promise().done(function () {
      $(".tab-slider-gallery  .owl-carousel").owlCarousel({
            responsiveClass: true,
            // autoplay: true,
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
     })
     $(".container-tabs .card-body").click(function () {
      let totalItem = $(".container-slider-image .owl-carousel .owl-item").length;
      let position = $(this).index();
      console.log(position)
      if (position >= 0 && position < totalItem) {
        $(".container-slider-image .owl-carousel .owl-item").trigger(
          "to.owl.carousel",
          position
        );
      } else {
        console.error("Invalid index", position);
      }
    });
     $('html, body').animate({
      scrollTop: container.offset().top
  }, 500); 
  
    }
    else {
      redirectTo404();
  }
  });
});
