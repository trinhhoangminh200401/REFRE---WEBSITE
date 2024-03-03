import { DataUser } from "../mockDATA/user.js";
import { ProductPageService } from "../services/Product.js";
import { fakeProducts } from "../mockData/natural.js";
import { SessionStorage } from "../utils/storage.js";
import { removeDiacritics } from "../utils/removeDiacritics.js";
// $(document).ready(function () {
//   $(".lazy").Lazy({
//     afterLoad: function (element) {
//       element.addClass("loaded");
//     },
//   });

//   $(".tab-slider-gallery .owl-carousel").owlCarousel({
//     responsiveClass: true,
//     autoplay: true,
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
//   $(".latestupdate > .owl-carousel ").owlCarousel({
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
//   $(".container-tabs .card-body").click(function () {
//     let totalItem = $(".container-slider-image .owl-carousel .owl-item").length;

//     let position = $(this).index();
//     if (position >= 0 && position < totalItem) {
//       $(".container-slider-image .owl-carousel .owl-item").trigger(
//         "to.owl.carousel",
//         position
//       );
//     } else {
//       console.error("Invalid index", position);
//     }
//   });
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

//     var displayedItems = ProductPageService.getItems(
//       selectedPage - 1,
//       itemsPerPage,
//       DataUser
//     );
//     if (displayedItems.length > 0) {
//       displayedItems.forEach(function (item, index) {
//         var itemElement = $("<div>")
//           .addClass("text-center col-xs-4 col-sm-6 col-md-12 col-xl-6 mx-auto my-4")
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
//             $("<i>").addClass(`yellow`);
//           }
//         }

//         var reviewElement = $("<p>").addClass("card-text").text(item.review);

//         // Append the elements to the item
//         itemElement.append(
//           imgElement,
//           usernameElement,
//           ratingElement,
//           reviewElement
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
//   const getProductData = (product) => {
//     return `
//     <div class="card-content col-xl-4 col-lg-3 my-4 mx-xl-3 card-purple click " data-product-id="${product.id}" style="cursor:pointer">
//         <p class="card-title green-category my-4">${product.category}</p>
//         <div class="d-flex flex-column align-items-center justify-content-center">
//           <img class="card-img-top bottom lazy fade-in" src=${product.imageUrl}
// />
//             <div class="card-body">
//                 <div class="my-4">
//                     <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title}</h5>
//                     <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title1}</h5>
//                     <p class="purple-text">${product.description}</p>
//                 </div>
//                 <a href="#" class="btn w-100 py-2  px-4 btn-purple d-flex align-items-center justify-content-between click">
//                     <p class="mb-0 h5 fst-italic fw-bold">${product.price}đ</p>
//                     <p class="mb-0 h6 fst-italic fw-bold">Tìm hiểu thêm</p>
//                 </a>
//             </div>
//         </div>
//     </div>
// `;
//   };
//   const renderProductCards = (products) => {
//     let container = $(".productlist-container");
//     let content = "";
//   products.map((product) => {
//       const cardHtml = getProductData(product);
//       content += cardHtml;
//       container
//         .html(content)
//         .promise()
//         .done(function () {
//           $(".card-img-top").addClass("loaded");
//         });
//     });
//   }; 

//   renderProductCards(fakeProducts);

// $("#inputGroupFileAddon04").on("click", function (event) {
//   event.preventDefault(); // Prevent the default click behavior

//   handleSearch();
// });

// $(".form-control").on("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault(); // Prevent the default form submission behavior
//     handleSearch();
//   }
// });
//  const handleSearch=()=>{
//   const $formControl = $(".form-control");
//   const searchValue = removeDiacritics($formControl.val().toLowerCase().replace(/\s/g, ""));

//   const filteredProducts = fakeProducts.filter((product) => {
//       const match =
//           removeDiacritics(product.title.toLowerCase()).replace(/\s/g, "").includes(searchValue) ||
//           removeDiacritics(product.title1.toLowerCase()).replace(/\s/g, "").includes(searchValue) ||
//           removeDiacritics(product.description.toLowerCase()).replace(/\s/g, "").includes(searchValue) ||
//           removeDiacritics(product.category.toLowerCase()).replace(/\s/g, "").includes(searchValue);

//       // Log product properties for debugging
//       if (match) {
//           console.log("Matching Product:", product);
//       }

//       return match;
//   });

//   const $productlist = $(".productlist-container");
//   $("html, body").animate(
//       {
//           scrollTop: $productlist.offset().top,
//       },
//       500
//   );

//   renderProductCards(filteredProducts);
// };

//   function renderProductDetail(productDetails) {
//     return `
//   <div class="tab-slider-gallery row tabs my-5 p-2 mx-auto container d-flex justify-content-center">
//       <div class="row col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 container-tabs ">
//           <div class="card-body card-purpleDarkLinear col-3 col-md-3 col-lg-6 col-xl-12">
//               <img class="lazy fade-in loaded" src="${
//                 productDetails.imageList.image1
//               }" alt data-hash="0" />
//           </div>
//           <div class="card-body card-purpleNormalLinear my-2 col-3 col-md-3 col-lg-12 col-xl-12">
//               <img class="lazy fade-in loaded" src="${
//                 productDetails.imageList.image2
//               }" alt="" />
//           </div>
//           <div class="card-body card-purpleNormalLinear col-xl-12 col-md-3 col-lg-6 col-3">
//               <img alt="" class="lazy fade-in loaded" src="${
//                 productDetails.imageList.image3
//               }" />
//           </div>
//       </div>
//       <div class="col-xl-3 col-sm-12 col-lg-6 col-md-12 col-12 mx-3 container-slider-image">
//           <div class="owl-carousel owl-theme">

//           <img class="fade-in loaded" src="${
//             productDetails?.imageList.image1
//           }" alt />
//           <img class="fade-in loaded" src="${
//             productDetails?.imageList.image2
//           }" alt />
//           <img class="fade-in loaded" src="${
//             productDetails?.imageList.image3
//           }" alt />
//           </div>
//       </div>
//       <div class="col-lg-11 col-xl-4  bg-Natural description-containers">
//           <div class="description-containers_div m-auto">
//               <div class="description-containers_title">
//                   <h3 class="purpleDark">${productDetails.title}</h3>
//                   <h3 class="purpleDark my-4">${productDetails.title1}</h3>
//               </div>
//               <div class="description-containers_content">
//            ${productDetails.contentdiv
//              .map((item) => {
//                return `<div class="content-div">
//                   <p class="purpleDark">${item.subtitle}
//                   </p>
//                   <ul class="list  purpleDark">
//                     ${item?.content
//                       .map((item2) => `<li> ${item2}</li>`)
//                       .join("") }

//                   </ul>   

//               </div>`;
//              })
//              .join("")}



//               </div>
//               <div class="button-action d-flex w-100">
//                   <p href="#" class="price darkpink h5">${productDetails.price}đ</p>
//                   <a  class="btn normalgreen fw-bold h5">MUA NGAY</a>
//               </div>
//               <div class="readmore">
//              <div class="d-flex align-items-center m-auto justify-content-center flex-wrap">
//                 <a href =""><img src="/assets/images/Partner/Logo_Shopee.png" /> </a>
//                 <a href =""><img src="/assets/images/Partner/Logo_Hasaki.png" /> </a>
//                 <a href =""><img src="/assets/images/Partner/Logo_Lazada.png" /> </a>
//                 <a href =""><img src="/assets/images/Partner/Logo_Watsons.png" /> </a>
//                 <a href =""><img src="/assets/images/Partner/Logo_medicare.png" /> </a>
//                 <a href =""><img src="/assets/images/Partner/Logo_Gurdian.png" /> </a>

//             <div>
//                 </div>

//           </div>
//       </div>
//   </div>
// `;
//   }

//   function getProductIdFromUrl() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get("id");
//   }
//   function handlePageLoad() {
//     const productId = getProductIdFromUrl();

//     if (productId) {
//       // Product details may not be available in session storage after a reload
//       // Fetch product details based on productId (assuming fakeProducts is available globally)
//       const productDetails = fakeProducts.find(
//         (product) => product.id === parseInt(productId)
//       );
//       SessionStorage.setSessionStorage("productIdNatural", productId);

//       console.log(productDetails);
//       // Store product details in session storage
//       SessionStorage.setSessionStorage(
//         "productDetailNatural",
//         JSON.stringify(productDetails)
//       );

//       // Render product details
//       const container = $(".productContainer");
//       const renderProduct = renderProductDetail(productDetails);
//       container.html(renderProduct);

//       // Initialize Owl Carousel
//       container
//         .html(renderProduct)
//         .promise()
//         .done(function () {
//           $(".tab-slider-gallery  .owl-carousel").owlCarousel({
//             responsiveClass: true,
//             // autoplay: true,
//             navText: "",
//             autoplayTimeout: 3000,
//             responsive: {
//               0: {
//                 items: 1,
//               },
//               600: {
//                 items: 1,
//               },
//               700: {
//                 items: 1,
//               },
//               900: {
//                 items: 1,
//               },
//               1054: {
//                 items: 1,
//               },
//               1200: {
//                 items: 1,

//                 loop: false,
//               },
//             },
//           });
//         });
//       $(".container-tabs .card-body").click(function () {
//         let totalItem = $(
//           ".container-slider-image .owl-carousel .owl-item"
//         ).length;
//         let position = $(this).index();
//         console.log(position);
//         if (position >= 0 && position < totalItem) {
//           $(".container-slider-image .owl-carousel .owl-item").trigger(
//             "to.owl.carousel",
//             position
//           );
//         } else {
//           console.error("Invalid index", position);
//         }
//       });
//       $("html, body").animate(
//         {
//           scrollTop: container.offset().top,
//         },
//         500
//       );
//     } else {
//       console.error("no id valid!");
//     }
//   }

//   // Handle page load
//   handlePageLoad();
//   $(document).on("click", ".click", function (event) {
//     let productDetails;
//     let container = $(".productContainer");
//     event.preventDefault();

//     const productId = $(this).closest(".card-content").data("product-id");
//     SessionStorage.setSessionStorage("productIdNatural", productId);

//     const storedProductId = SessionStorage.getSessionStorage("productIdNatural");

//     console.log(window.location);
//     console.log(storedProductId);
//     if (storedProductId) {
//       productDetails = fakeProducts.find(
//         (product) => product.id === parseInt(storedProductId)
//       );

//       SessionStorage.setSessionStorage(
//         "productDetailNatural",
//         JSON.stringify(productDetails)
//       );
//       let url;

//       if (window.location.hostname === 'localhost') {
//         url = `http://localhost:5000/Natural.html?id=${productDetails.id}`;
//       } else {
//         url = `https://gilded-sunflower-1080d8.netlify.app/natural?id=${productDetails.id}`;
//       }

//       history.pushState({}, null, url);
//       const productIditem = SessionStorage.getSessionStorage("productDetailNatural");
//       console.log(JSON.parse(productIditem));
//       let renderProduct = renderProductDetail(JSON.parse(productIditem));

//       container
//         .html(renderProduct)
//         .promise()
//         .done(function () {
//           $(".tab-slider-gallery  .owl-carousel").owlCarousel({
//             responsiveClass: true,
//             // autoplay: true,
//             navText: "",
//             autoplayTimeout: 3000,
//             responsive: {
//               0: {
//                 items: 1,
//               },
//               600: {
//                 items: 1,
//               },
//               700: {
//                 items: 1,
//               },
//               900: {
//                 items: 1,
//               },
//               1054: {
//                 items: 1,
//               },
//               1200: {
//                 items: 1,

//                 loop: false,
//               },
//             },
//           });
//         });
//       $(".container-tabs .card-body").click(function () {
//         let totalItem = $(
//           ".container-slider-image .owl-carousel .owl-item"
//         ).length;
//         let position = $(this).index();
//         console.log(position);
//         if (position >= 0 && position < totalItem) {
//           $(".container-slider-image .owl-carousel .owl-item").trigger(
//             "to.owl.carousel",
//             position
//           );
//         } else {
//           console.error("Invalid index", position);
//         }
//       });
//       $("html, body").animate(
//         {
//           scrollTop: container.offset().top,
//         },
//         500
//       );
//     } else {
//       console.error("no id valid!");
//     }
//   });
//   $(".normalgreen").click(function ()
//   {
//     // Fade out "MUA NGAY" button and product price
//     $(".normalgreen, .price").fadeOut();

//     $(".readmore").fadeIn();
//   })
//   $(".popup img:nth-child(3)").click(function() {
//     $(".togglepopup").fadeToggle("slow");

//   });
// });
class Natural
{
  constructor ()
  {

  }
  handleLazyLoading ()
  {
    $(".lazy").Lazy({
      afterLoad: function (element)
      {
        element.addClass("loaded");
      },
    });
  }
  handleCarousel ()
  {
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
      loop: true,
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

        },
      },
    });
  }

  displayItems ()
  {
    console.log("hello")
    var pagination = $("#myRange");
    var container = $(".Natural > .feedback > .container > .card-user");
    var itemsPerPage = 4;

    container.empty();

    var selectedPage = parseInt(pagination.val());

    var displayedItems = ProductPageService.getItems(
      selectedPage - 1,
      itemsPerPage,
      DataUser
    );

    if (displayedItems.length > 0)
    {
      displayedItems.forEach(function (item, index)
      {
        var itemElement = $("<div>")
          .addClass("text-center col-xs-6 col-sm-6 col-md-12 col-xl-6 mx-auto my-4")
          .css("width", "500px")
          .hide();

        let imgElement = $("<img>")
          .addClass("card-img-top banner fade-in")
          .attr("src", item.imgSrc);

        imgElement.on("load", function ()
        {
          imgElement.addClass("loaded");
          imgElement.attr("alt", "Card image");
        });

        var usernameElement = $("<h4>")
          .addClass("card-title my-4 fw-bold fst-italic")
          .text(item.username);

        var ratingElement = $("<div>").addClass("rating-stars text-center");
        for (let i = 0; i < item.rating; i++)
        {
          $("<i>")
            .addClass(`fa fa-star yellow fa-fw my-4`)
            .appendTo(ratingElement);
          if (i < item.rating && i > 2)
          {
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
    } else
    {
      container.append("No user exist");
    }

    container.children().fadeIn();
  }

  handleRatingClick ()
  {
    $("rating-stars .fa-star").click(function ()
    {
      alert("hello");
      $(this).toggleClass("yellow");
      $(this).prevAll(".fa-star").addClass("yellow");
      $(this).nextAll(".fa-star").removeClass("yellow");
    });
  }

  handlePagination ()
  {
    var pagination = $("#myRange");
    pagination.on("input", () => this.displayItems());
  }

  handlePopUp ()
  {
    $(".popup img:nth-child(3)").click(function ()
    {
      $(".togglepopup").fadeToggle("slow");
    });
  }
  handleGetProductData (product)
  {
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
                     <p class="mb-0 h6 fst-italic fw-bold">Tìm hiểu thêm</p>
                 </a>
             </div>
         </div>
     </div>
 `;
  }
  renderProductCards = (products) =>
  {
    let container = $(".productlist-container");
    let content = "";
    products.map((product) =>
    {
      const cardHtml = this.handleGetProductData(product);
      content += cardHtml;
      container
        .html(content)
        .promise()
        .done(function ()
        {
          $(".card-img-top").addClass("loaded");
        });
    });
  };
  handleSearch ()
  {
    const $formControl = $(".form-control");
    const searchValue = removeDiacritics($formControl.val().toLowerCase().replace(/\s/g, ""));

    const filteredProducts = fakeProducts.filter((product) =>
    {
      const match =
        removeDiacritics(product.title.toLowerCase()).replace(/\s/g, "").includes(searchValue) ||
        removeDiacritics(product.title1.toLowerCase()).replace(/\s/g, "").includes(searchValue) ||
        removeDiacritics(product.description.toLowerCase()).replace(/\s/g, "").includes(searchValue) ||
        removeDiacritics(product.category.toLowerCase()).replace(/\s/g, "").includes(searchValue);

      // Log product properties for debugging
      if (match)
      {
        console.log("Matching Product:", product);
      }

      return match;
    });

    const $productlist = $(".productlist-container");
    $("html, body").animate(
      {
        scrollTop: $productlist.offset().top,
      },
      500
    );

    this.renderProductCards(filteredProducts);
  }
  handleInputSearch ()
  {
    $("#inputGroupFileAddon04").on("click", function (event)
    {
      event.preventDefault();

      this.handleSearch();
    }.bind(this))
$(".form-control").on("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    this.handleSearch();
  }
}.bind(this));
  }
  
  handleGetProductDetail (productDetails)
  {
    return `
  <div class="tab-slider-gallery row tabs my-5 p-2 mx-auto container d-flex justify-content-center">
      <div class="row col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 container-tabs ">
          <div class="card-body card-purpleDarkLinear col-3 col-md-3 col-lg-6 col-xl-12">
              <img class="lazy fade-in loaded" src="${productDetails.imageList.image1
      }" alt data-hash="0" />
          </div>
          <div class="card-body card-purpleNormalLinear my-2 col-3 col-md-3 col-lg-12 col-xl-12">
              <img class="lazy fade-in loaded" src="${productDetails.imageList.image2
      }" alt="" />
          </div>
          <div class="card-body card-purpleNormalLinear col-xl-12 col-md-3 col-lg-6 col-3">
              <img alt="" class="lazy fade-in loaded" src="${productDetails.imageList.image3
      }" />
          </div>
      </div>
      <div class="col-xl-3 col-sm-12 col-lg-6 col-md-12 col-12 mx-3 container-slider-image">
          <div class="owl-carousel owl-theme">
          
          <img class="fade-in loaded" src="${productDetails?.imageList.image1
      }" alt />
          <img class="fade-in loaded" src="${productDetails?.imageList.image2
      }" alt />
          <img class="fade-in loaded" src="${productDetails?.imageList.image3
      }" alt />
          </div>
      </div>
      <div class="col-lg-11 col-xl-4  bg-Natural description-containers">
          <div class="description-containers_div m-auto">
              <div class="description-containers_title">
                  <h3 class="purpleDark">${productDetails.title}</h3>
                  <h3 class="purpleDark my-4">${productDetails.title1}</h3>
              </div>
              <div class="description-containers_content">
           ${productDetails.contentdiv
        .map((item) =>
        {
          return `<div class="content-div">
                  <p class="purpleDark">${item.subtitle}
                  </p>
                  <ul class="list  purpleDark">
                    ${item?.content
              .map((item2) => `<li> ${item2}</li>`)
              .join("")}
                      
                  </ul>   
    
              </div>`;
        })
        .join("")}
            
            

              </div>
              <div class="button-action d-flex w-100">
                  <p href="#" class="price darkpink h5">${productDetails.price}đ</p>
                  <a  class="btn normalgreen fw-bold h5">MUA NGAY</a>
              </div>
              <div class="readmore">
             <div class="d-flex align-items-center m-auto justify-content-center flex-wrap">
                <a href =""><img src="/assets/images/Partner/Logo_Shopee.png" /> </a>
                <a href =""><img src="/assets/images/Partner/Logo_Hasaki.png" /> </a>
                <a href =""><img src="/assets/images/Partner/Logo_Lazada.png" /> </a>
                <a href =""><img src="/assets/images/Partner/Logo_Watsons.png" /> </a>
                <a href =""><img src="/assets/images/Partner/Logo_medicare.png" /> </a>
                <a href =""><img src="/assets/images/Partner/Logo_Gurdian.png" /> </a>

            <div>
                </div>

          </div>
      </div>
  </div>
`;

  }
  handleGetIdProuct ()
  {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }
  handleClick(event)
  {
      event.preventDefault(); // Ensure event is defined before calling preventDefault
    

    let productDetails;
    let container = $(".productContainer");

    const productId = $(event.target).closest(".card-content").data("product-id");
    SessionStorage.setSessionStorage("productIdNatural", productId);

    const storedProductId = SessionStorage.getSessionStorage("productIdNatural");

    if (storedProductId)
    {
      productDetails = fakeProducts.find(
        (product) => product.id === parseInt(storedProductId)
      );

      SessionStorage.setSessionStorage(
        "productDetailNatural",
        JSON.stringify(productDetails)
      );
      let url;

      if (window.location.hostname === 'localhost')
      {
        url = `http://localhost:5000/Natural.html?id=${productDetails?.id}`;
      } else
      {
        url = `https://gilded-sunflower-1080d8.netlify.app/natural?id=${productDetails?.id}`;
      }

      history.pushState({}, null, url);
      const productIditem = SessionStorage.getSessionStorage("productDetailNatural");
      let renderProduct = this.handleGetProductDetail(JSON.parse(productIditem));

      container
        .html(renderProduct)
        .promise()
        .done(function ()
        {
          $(".tab-slider-gallery  .owl-carousel").owlCarousel({
            responsiveClass: true,
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
        });
      $(".container-tabs .card-body").click(function ()
      {
        let totalItem = $(".container-slider-image .owl-carousel .owl-item").length;
        let position = $(this).index();
        if (position >= 0 && position < totalItem)
        {
          $(".container-slider-image .owl-carousel .owl-item").trigger(
            "to.owl.carousel",
            position
          );
        } else
        {
          console.error("Invalid index", position);
        }
      });
      $("html, body").animate(
        {
          scrollTop: container.offset().top,
        },
        500
      );
    } else
    {
      console.error("no id valid!");
    }
  }
  handleLoadPage ()
  {
  const productId = this.handleGetIdProuct();
  console.log(productId)
    if (productId) {
      const productDetails = fakeProducts.find(
        (product) => product.id === parseInt(productId)
      );
      SessionStorage.setSessionStorage("productIdNatural", productId);

      console.log(productDetails);
      SessionStorage.setSessionStorage(
        "productDetailNatural",
        JSON.stringify(productDetails)
      );

      // Render product details
      const container = $(".productContainer");
      const renderProduct = this.handleGetProductDetail(productDetails);
      container.html(renderProduct);
      container
        .html(renderProduct)
        .promise()
        .done(function () {
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
        });
      $(".container-tabs .card-body").click(function () {
        let totalItem = $(
          ".container-slider-image .owl-carousel .owl-item"
        ).length;
        let position = $(this).index();
        console.log(position);
        if (position >= 0 && position < totalItem) {
          $(".container-slider-image .owl-carousel .owl-item").trigger(
            "to.owl.carousel",
            position
          );
        } else {
          console.error("Invalid index", position);
        }
      });
      $("html, body").animate(
        {
          scrollTop: container.offset().top,
        },
        500
      );
    } else {
      console.error("no id valid!");
    }


  }

  initialize ()
  {
    this.handleLazyLoading()
    this.handleCarousel()
    this.displayItems()
    this.handlePagination()
    this.handleRatingClick()
    this.handlePopUp()
    this.renderProductCards(fakeProducts)
    this.handleInputSearch()
    $(document).on("click", ".click", this.handleClick.bind(this));
    this.handleLoadPage()
    $(".normalgreen").click(function ()
  {
    // Fade out "MUA NGAY" button and product price
    $(".normalgreen, .price").fadeOut();

    $(".readmore").fadeIn();
  })
  }

}
export default Natural
