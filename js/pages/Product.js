import { DataUser } from "../mockDATA/user.js";
import { ProductPageService } from "../services/Product.js";
import { fakeProducts as natural } from "../mockData/natural.js";
import { fakeProducts as whitening } from "../mockData/whitening.js";
import { removeDiacritics } from "../utils/removeDiacritics.js";
// $(document).ready(function ()
// {

//   $('.productList').hide();

//   // Show the default tab (Whitening)
//   $('#tabs-2').show();

//   $('.button-tab-action a').on('click', function (e)
//   {
//     e.preventDefault();

//     // Hide all tab content
//     $('.productList').hide();

//     // Show the clicked tab content
//     var targetTabId = $(this).attr('href');
//     $(targetTabId).show();
//   });

//   $(".lazy").Lazy({
//     afterLoad: function (element)
//     {
//       element.addClass("loaded");
//     },
//   });

//   $(".tab-slider-gallery .owl-carousel").owlCarousel({
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
//   $(".latestupdate > .owl-carousel ").owlCarousel({
//     responsiveClass: true,
//     navText: [
//       "<div class='nav-btn prev-slide'><img src='/assets/images/HomePage/left arrow.png' /></div>",
//       "<div class='nav-btn next-slide'><img src='/assets/images/HomePage/right arrow.png' /></div>",
//     ],
//     loop:true,
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
//   $(".container-tabs .card-body").click(function ()
//   {
//     let totalItem = $(".container-slider-image .owl-carousel .owl-item").length;

//     let position = $(this).index();
//     if (position >= 0 && position < totalItem)
//     {
//       $(".container-slider-image .owl-carousel .owl-item").trigger(
//         "to.owl.carousel",
//         position
//       );
//     } else
//     {
//       console.error("Invalid index", position);
//     }
//   });
//   var pagination = $("#myRange");
//   var container = $(".feedback > .container > .card-user");
//   var itemsPerPage = 4;

//   // Function to display the items for the selected page
//   function displayItems ()
//   {
//     // Clear the container
//     container.empty();

//     // Get the selected page from the range input
//     var selectedPage = parseInt(pagination.val());
//     // Calculate the start and end indices for the current page

//     var displayedItems = ProductPageService.getItems(selectedPage - 1, itemsPerPage, DataUser);
//     if (displayedItems.length > 0)
//     {
//       displayedItems.forEach(function (item, index)
//       {
//         var itemElement = $("<div>")
//           .addClass("text-center col-xs-4 col-sm-6 col-md-12 col-xl-6 mx-auto my-4")
//           .css("width", "500px")
//           .hide();

//         // Create the elements for the item (e.g., image, username, rating, review)
//         let imgElement = $("<img>")
//           .addClass("card-img-top banner fade-in")
//           .attr("src", item.imgSrc);

//         imgElement.on("load", function ()
//         {
//           imgElement.addClass("loaded");
//           imgElement.attr("alt", "Card image");

//         });

//         // Trigger the image loading

//         var usernameElement = $("<h4>")
//           .addClass("card-title my-4 fw-bold fst-italic")
//           .text(item.username);

//         var ratingElement = $("<div>").addClass("rating-stars text-center");
//         for (let i = 0; i < item.rating; i++)
//         {
//           $("<i>")
//             .addClass(`fa fa-star yellow fa-fw my-4`)
//             .appendTo(ratingElement)
//           if (i < item.rating && i > 2)
//           {

//             $("<i>")
//               .addClass(`yellow`)

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
//     }

//     else
//     {

//       container.append("No user exist")
//     }
//     // Loop through the items and create the elements

//     // Show the items with a fadeIn effect
//     container.children().fadeIn();

//   }

//   displayItems();

//   $("rating-stars .fa-star").click(function ()
//   {
//     alert("hello");
//     $(this).toggleClass("yellow");
//     $(this).prevAll(".fa-star").addClass("yellow");
//     $(this).nextAll(".fa-star").removeClass("yellow");
//   });
//   // Add an event listener to the pagination range input
//   pagination.on("input", function ()
//   {

//     displayItems();
//   });
//   const productlistNatural = $('.productNatural')
//   const productListWhitening = $('.productWhitening')
//   const getProductDataNatural = (product) =>
//   {
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
//                     <p class="mb-0 h6 fst-italic fw-bold ">Tìm hiểu thêm</p>
//                 </a>
//             </div>
//         </div>
//     </div>
// `;
//   };


//   const getProductDataWhitening = (product) =>
//   {
//     return `
//   <div class="card-content col-xl-4 col-lg-3 my-4 mx-xl-3 card-purple click " data-product-id="${product.id}" style="cursor:pointer">
//       <p class="card-title purple-category my-4">${product.category}</p>
//       <div class="d-flex flex-column align-items-center justify-content-center">
//         <img class="card-img-top bottom lazy fade-in" src=${product.imageUrl}
// />
//           <div class="card-body">
//               <div class="my-4">
//                   <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title}</h5>
//                   <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title1}</h5>
//                   <p class="purple-text">${product.description}</p>
//               </div>
//               <a href="#" class="btn w-100 py-2  px-4 btn-purple d-flex align-items-center justify-content-between click">
//                   <p class="mb-0 h5 fst-italic">${product.price}đ</p>
//                   <p class="mb-0 h6 fst-italic fw-bold">Tìm hiểu thêm</p>
//               </a>
//           </div>
//       </div>
//   </div>
// `;
//   }
//   const renderProductCards = () =>
//   {
//     let contentNatural = "";
//     let contentWhitening = ""
//     natural.map((product) =>
//     {
//       const cardNatural = getProductDataNatural(product);
//       contentNatural += cardNatural;
//       productlistNatural
//         .html(contentNatural)
//         .promise()
//         .done(function ()
//         {
//           $(".card-img-top").addClass("loaded");
//         });
//     });
//     whitening.map((whiteningItem) =>
//     {
//       const cardWhitening = getProductDataWhitening(whiteningItem);
//       contentWhitening += cardWhitening;
//       productListWhitening
//         .html(contentWhitening)
//         .promise()
//         .done(function ()
//         {
//           $(".card-img-top").addClass("loaded");
//         });
//     });
//   };
//   renderProductCards();

//   const handleSearch = (searchValue) =>
//   {
//     const searchLowerCase = searchValue.toLowerCase();

//     const filteredNatural = natural.filter((product) =>
//     {
//       return (
//         removeDiacritics(product.title.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(product.title1.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(product.description.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(product.category.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(product.type.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase)

//       )

//     });

//     const filteredWhitening = whitening.filter((whiteningItem) =>
//     {
//       return (
//         removeDiacritics(whiteningItem.title.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(whiteningItem.title1.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(whiteningItem.description.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase) ||
//         removeDiacritics(whiteningItem.category.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase)
//       ) ||
//         removeDiacritics(whiteningItem.type.toLowerCase())
//           .replace(/\s/g, "")
//           .includes(searchLowerCase)

//     });

//     // Render filtered products using specific rendering functions
//     renderFilteredProducts(filteredNatural, getProductDataNatural, productlistNatural);
//     renderFilteredProducts(filteredWhitening, getProductDataWhitening, productListWhitening);

//     // Show/hide tabs based on search results
//     // if (filteredNatural.length > 0) {
//     //   $('#tabs-1').show();
//     // } else {
//     //   $('#tabs-1').hide();
//     // }

//     // if (filteredWhitening.length > 0) {
//     //   $('#tabs-2').show();
//     // } else {
//     //   $('#tabs-2').hide();
//     // }
//     const showNaturalTab = filteredNatural.length > 0;
//     const showWhiteningTab = filteredWhitening.length > 0;

//     $('#tabs-2').toggle(showWhiteningTab);
//     $('#tabs-1').toggle(showNaturalTab);

//     const targetTabId = showWhiteningTab ? '#tabs-2' : '#tabs-1 ';

//     $(targetTabId).show();



//     const productlistcontent = $(".container-tab");
//     $("html, body").animate(
//       {
//         scrollTop: productlistcontent.offset().top,
//       },
//       500
//     );
//   };

//   const renderFilteredProducts = (filteredProducts, renderFunction, container) =>
//   {
//     let content = "";

//     filteredProducts.forEach((product) =>
//     {
//       const cardHtml = renderFunction(product);
//       content += cardHtml;
//     });

//     container.html(content).promise()
//       .done(function ()
//       {
//         $(".card-img-top").addClass("loaded");
//       });;
//   };


//   // $("#inputGroupFileAddon04").on("click", function ()
//   // {
//   //   const searchValue = removeDiacritics($(".form-control").val());
//   //   handleSearch(searchValue);
//   // });

//   $("#inputGroupFileAddon04").on("click", function (event)
//   {
//     event.preventDefault(); // Prevent the default click behavior
//     const searchValue = removeDiacritics($(".form-control").val().toLowerCase().replace(/\s/g, ""));
//     handleSearch(searchValue);
//   });


//   $(".form-control").on("keypress", function (event)
//   {
//     if (event.key === "Enter")
//     {
//       event.preventDefault(); // Prevent the default form submission behavior
//       const searchValue = removeDiacritics($(".form-control").val().toLowerCase().replace(/\s/g, "")
//       );
//       handleSearch(searchValue)
//     }
//   });

//   // Initial rendering of all products

//   // $(document).on("click", ".click", function ()
//   // {
//   //   if ($(this).parent().hasClass('productNatural'))
//   //   {
//   //     const productId = $(this).closest(".card-content").data("product-id");
//   //     let urlNatural = ""
//   //     if (window.location.hostname === 'localhost')
//   //     {
//   //       urlNatural = `http://localhost:5000/Natural.html?id=${productId}`;
//   //     } else
//   //     {
//   //       urlNatural = `https://gilded-sunflower-1080d8.netlify.app/natural?id=${productId}`;
//   //     }
//   //     // window.location.href = urlNatural
//   //   }
//   //   else if ($(this).parent().hasClass('productWhitening'))
//   //   {
//   //     const productId = $(this).closest(".card-content").data("product-id");

//   //     let urlWhitening = ""
//   //     if (window.location.hostname === 'localhost')
//   //     {
//   //       urlWhitening = `http://localhost:5000/whitening.html?id=${productId}`;
//   //     } else
//   //     {
//   //       urlWhitening = `https://gilded-sunflower-1080d8.netlify.app/whitening?id=${productId}`;
//   //     }
//   //     // window.location.href = urlWhitening

//   //   }

//   // })
//   $('.button-tab-action').on('click', 'a', function(event) {
//         event.preventDefault();
//     $('.button-tab-action a').removeClass('active');
//           console.log("hello")
//         $(this).addClass('active');
//         $('.tab-content').hide();
//         const targetTabId = $(this).attr('href');
//         $(targetTabId).show();        // Your tab switching logic here
//     });

//   $(".popup img:nth-child(3)").click(function ()
//   {
//     $(".togglepopup").fadeToggle("slow");

//   });
// });
class Product
{
  constructor ()
  {
    const self = this
    $(document).on("click", ".click", function ()
    {
      self.handleClickElement($(this));
    });
  }

  initializeCarousel ()
  {
    $(".Product .product .owl-carousel").owlCarousel({
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
    $(".owl-carousel").on("changed.owl.carousel", function (event)
    {
      $(this).find(".owl-nav").removeClass("disabled");
    });
  }

  initializeLazyLoading ()
  {
    $(".lazy").Lazy({
      afterLoad: function (element)
      {
        element.addClass("loaded");
      },
    });
  }

  fadeInOnScroll ()
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

  displayItems ()
  {
    var pagination = $("#myRange");
    var container = $(".Product > .feedback > .container > .card-user");
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
  RenderGetProductData (product, categoryClass)
  {
    return `
    <div class="card-content col-xl-4 col-lg-3 my-4 mx-xl-3 card-purple click" data-product-id="${product.id}" style="cursor:pointer;">
        <p class="card-title ${categoryClass} my-4">${product.category}</p>
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img class="card-img-top bottom lazy fade-in" src="${product.imageUrl}" />
            <div class="card-body">
                <div class="my-4">
                    <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title}</h5>
                    <h5 class="card-title fst-italic h5 text-uppercase purple-text">${product.title1}</h5>
                    <p class="purple-text">${product.description}</p>
                </div>
                <a href="#" class="btn w-100 py-2 px-4 btn-purple d-flex align-items-center justify-content-between click">
                    <p class="mb-0 h5 fst-italic fw-bold">${product.price}đ</p>
                    <p class="mb-0 h6 fst-italic fw-bold">Tìm hiểu thêm</p>
                </a>
            </div>
        </div>
    </div>`;

  }
  renderProducts = (products, categoryClass, productListElement) =>
  {
    const productCards = products.map(product => this.RenderGetProductData(product, categoryClass)).join('');
    productListElement.html(productCards).promise().done(function ()
    {
      $(".card-img-top").addClass("loaded");
    });
  };
  matchesSearch (item, searchLowerCase)
  {
    const searchableFields = ['title', 'title1', 'description', 'category', 'type'];
    return searchableFields.some((field) =>
    {
      return removeDiacritics(item[field].toLowerCase().replace(/\s/g, "")).includes(searchLowerCase)
    }
    );
  }
  handleSearchProduct ()
  {
    const self = this

    $("#inputGroupFileAddon04").on("click", function (event)
    {

      let searchValue = $(".form-control").val();
      const searchLowerCase = removeDiacritics(searchValue.toLowerCase().replace(/\s/g, ""));
      const filteredProducts = {
        natural: natural.filter(product => self.matchesSearch(product, searchLowerCase)),
        whitening: whitening.filter(whiteningItem => self.matchesSearch(whiteningItem, searchLowerCase))
      };
      event.preventDefault();
      self.renderFilteredProducts(filteredProducts);

    });

    $(".form-control").on("keypress", function (event)
    {
      if (event.key === "Enter")
      {
      let searchValue = $(".form-control").val();

        event.preventDefault();
        const searchLowerCase = removeDiacritics(searchValue.toLowerCase().replace(/\s/g, ""));
        const filteredProducts = {
          natural: natural.filter(product => self.matchesSearch(product, searchLowerCase)),
          whitening: whitening.filter(whiteningItem => self.matchesSearch(whiteningItem, searchLowerCase))
        };
        self.renderFilteredProducts(filteredProducts);

      }
    });
  }
  renderAllProducts ()
  {
    const filteredProducts = {
      natural: natural,
      whitening: whitening
    };
    this.renderFilteredProducts(filteredProducts);
  }

  renderFilteredProducts = (filteredProducts) =>
  {
    const productlistNatural = $('.productNatural')
    const productListWhitening = $('.productWhitening')

    const showNaturalTab = filteredProducts.natural.length > 0;
    const showWhiteningTab = filteredProducts.whitening.length > 0;

    $('#tabs-1').toggle(showNaturalTab);
    $('#tabs-2').toggle(showWhiteningTab);

    // $('.productList ').hide();

    const targetTabId = showWhiteningTab ? '#tabs-2' : '#tabs-1';
    $('.productList').not(targetTabId).hide();

    $(targetTabId).show();
    console.log(filteredProducts)
    this.renderProducts(filteredProducts.natural, 'green-category', productlistNatural);
    this.renderProducts(filteredProducts.whitening, 'purple-category', productListWhitening);

    const productlistcontent = $(".container-tab");
    $("html, body").animate({
      scrollTop: productlistcontent.offset().top
    }, 500);

    $('.button-tab-action').on('click', 'a', function (event)
    {
      event.preventDefault();
      $('.button-tab-action a').removeClass('active');
      $(this).addClass('active');
      const targetTabId = $(this).attr('href');
      $('.productList').not(targetTabId).hide();
      $(targetTabId).show();


    });

  };
  handleClickElement ($clickedElement)
  {
    const $parent = $clickedElement.parent();
    const productId = $clickedElement.closest(".card-content").data("product-id");
    let url = "";

    if ($parent.hasClass('productNatural'))
    {
      url = this.getUrlForProduct("Natural", productId);
    } else if ($parent.hasClass('productWhitening'))
    {
      url = this.getUrlForProduct("Whitening", productId);
    }

    if (url)
    {
      window.location.href = url;
    }
  }
  getUrlForProduct (productType, productId)
  {
    let baseUrl = "";
    if (window.location.hostname === 'localhost')
    {
      baseUrl = `http://localhost:5000/`;
    } else
    {
      baseUrl = `https://gilded-sunflower-1080d8.netlify.app/`;
    }
    return `${baseUrl}${productType.toLowerCase()}.html?id=${productId}`;
  }





  initialize ()
  {
    this.initializeCarousel();
    this.initializeLazyLoading();
    this.fadeInOnScroll();
    $(window).scroll(() => this.fadeInOnScroll());
    this.displayItems();
    this.handleRatingClick();
    this.handlePagination();
    this.handleSearchProduct()
    this.handlePopUp();
    this.renderAllProducts();


  }
}
export default Product