$(document).ready(function(){
    $(".product .owl-carousel").owlCarousel({

        responsiveClass:true,
        navText:["<div class='nav-btn prev-slide'><img src='/assets/images/left arrow.png' /></div>","<div class='nav-btn next-slide'><img src='/assets/images/right arrow.png' /></div>"],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
              
            },
            600:{
                items:1,
             
            },
            700:{
                items:1,
               
            },
            900:{
                items:1,
               
            },
            1054:{
                items:2,
              
            },
            1200:{
                items:2,
           
                loop:false
            }
        }
    })	

    $(".owl-carousel ").owlCarousel({
        responsiveClass:true,
        navText:["<div class='nav-btn prev-slide'><img src='/assets/images/left arrow.png' /></div>","<div class='nav-btn next-slide'><img src='/assets/images/right arrow.png' /></div>"],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
              
            },
            600:{
                items:2,
             
            },
            700:{
                items:2,
               
            },
            1024:{
                items:3,
              
            },
            1400:{
                items:4,
           
                loop:false
            }
        }
    })	
   
   
     $(".lazy").Lazy({
        afterLoad: function(element) {
            element.addClass("loaded");
        }
    });
    
    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });
    $('.fa-star').click(function() {

   
        $(this).toggleClass('yellow');
        $(this).prevAll('.fa-star').addClass('yellow');
        $(this).nextAll('.fa-star').removeClass('yellow');
      });
   // Define the fake data
  var fakeData = [
    {
      imgSrc: "./assets/images/pic 1.png",
      username: "USER 1",
      rating: 5,
      review: "Mình đã trải nghiệm qua các dòng hương, đều có hương thơm dịu nhẹ, khử mùi cực đỉnh."
    },
    {
      imgSrc: "./assets/images/pic 2.png",
      username: "USER 2",
      rating: 5,
      review: "Mùi khá thơm nha, dịu nhẹ nhưng nhẹ nhàng nhất vẫn là mùi thanh nhã, rất phù hợp cho các bạn học sinh, sinh viên. Sẽ tiếp tục ủng hộ Refre ^.^"
    },
    {
      imgSrc: "./assets/images/pic 3.png",
      username: "USER 3",
      rating: 5,
      review: "Bữa đi siêu thị test được hương chai màu tím hồng á, không biết sao về đặt nhầm hương Mộc Lan nhưng cũng ưng mùi này lắm."
    },
    {
      imgSrc: "./assets/images/pic 4.png",
      username: "USER 4",
      rating: 5,
      review: "Refre màu xanh e thấy xài mùi hơi bị nồng, còn chai xịt màu hồng thì rất oke nhẹ nhàng nhất."
    },
    {
      imgSrc: "./assets/images/pic 5.png",
      username: "USER 5",
      rating: 5,
      review: "Refre đỉnh thiệc nha :v"
    },
    {
      imgSrc: "./assets/images/pic 6.png",
      username: "USER 6",
      rating: 5,
      review: "Refre đúng kiểu chân ái luông :))"
    },
    {
        imgSrc: "./assets/images/pic 6.png",
        username: "USER 6",
        rating: 5,
        review: "Refre đúng kiểu chân ái luông :))"
      },
      
   
  ];

//   var pagination = $("#myRange");
//   var container = $(".feedback>.card-user");
//   var itemsPerPage = 6;

//   // Function to display the items for the selected page
//   function displayItems() {
//     // Clear the container
//     container.empty();

//     // Get the selected page from the range input
//     var selectedPage = parseInt(pagination.val());

//     // Calculate the start and end indices for the current page
//     var startIndex = (selectedPage - 1) * itemsPerPage;
//     var endIndex = Math.min(startIndex + itemsPerPage, fakeData.length);

//     // Loop through the items and create the elements
//     $.each(fakeData.slice(startIndex, endIndex), function(index, item) {
//       var itemElement = $("<div>")
//         .addClass("text-center col-xs-4 col-sm-6 col-md-12 mx-auto my-4")
//         .css("width", "400px")
//         .hide();

//       // Create the elements for the item (e.g., image, username, rating, review)
//       var imgElement = $("<img>")
//         .addClass("card-img-top lazy banner fade-in")
//         .attr("data-src", item.imgSrc)
//         .attr("alt", "Card image");

//       var usernameElement = $("<h4>")
//         .addClass("card-title my-2 fw-bold fst-italic")
//         .text(item.username);

//       var ratingElement = $("<div>")
//         .addClass("rating-stars text-center");
//       for (var i = 0; i < item.rating; i++) {
//         $("<i>")
//           .addClass("fa fa-star fa-fw")
//           .appendTo(ratingElement);
//       }

//       var reviewElement = $("<p>")
//         .addClass("card-text")
//         .text(item.review);

//       // Append the elements to the item
//       itemElement.append(imgElement, usernameElement, ratingElement, reviewElement);

//       // Append the item to the container
//       container.append(itemElement);
//     });

//     // Show the items with a fadeIn effect
//     container.children().fadeIn();
//   }

//   // Add an event listener to the pagination range input
//   pagination.on("input", function() {
//     displayItems();
//   });

//   // Display the initial set of items
//   displayItems();

//   // Add event listeners for previous and next buttons
//   $("#previous").on("click", function() {
//     var currentPage = parseInt(pagination.val());
//     if (currentPage > 1) {
//       pagination.val(currentPage - 1);
//       displayItems();
//     }
//   });

//   $("#next").on("click", function() {
//     var currentPage = parseInt(pagination.val());
//     if (currentPage < parseInt(pagination.attr("max"))) {
//       pagination.val(currentPage + 1);
//       displayItems();
//     }
//   });
//   $.each(fakeData, function(index, item) {
//     var itemElement = $("<div>")
//       .addClass("text-center col-xs-4 col-sm-6 col-md-12 mx-auto my-4")
//       .css("width", "400px")
//       .hide(); 

   
//     var imgElement = $("<img>")
//       .addClass("card-img-top lazy banner fade-in")
//       .attr("data-src", item.imgSrc)
//       .attr("alt", "Card image");

    
//     var usernameElement = $("<h4>")
//       .addClass("card-title my-2 fw-bold fst-italic")
//       .text(item.username);

   
//     var ratingElement = $("<div>")
//       .addClass("rating-stars text-center");
//     for (var i = 0; i < item.rating; i++) {
//       $("<i>")
//         .addClass("fa fa-star fa-fw")
//         .appendTo(ratingElement);
//     }

   
//     var reviewElement = $("<p>")
//       .addClass("card-text")
//       .text(item.review);

   
//     itemElement.append(imgElement, usernameElement, ratingElement, reviewElement);

   
//     container.append(itemElement);
//     console.log(container)
//   });

  
//   $(".slider").on("input", function() {
//     var value = parseInt($(this).val());
//     console.log(container)

//     container.children().hide();

   
//     var startIndex = (value - 1) * 1;
//     var endIndex = startIndex + 6;

    
//     var visibleItems = fakeData.slice(startIndex, endIndex);

    
//     $.each(visibleItems, function(index, item) {
//       container.children().eq(startIndex + index).show();
//     });
// });
  });