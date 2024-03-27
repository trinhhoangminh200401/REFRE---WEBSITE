function generateFakeProduct(
  id,
  type,
  category,
  title,
  title1,
  description,
  price,
  imageUrl,
  image1,
  image2,
  image3,
  contentdiv
) {
  return {
    id: id,
    type:type,
    category: category,
    title: title,
    title1: title1,
    description: description,
    price: price,
    imageUrl: imageUrl,
    imageList: {
      image1: image1,
      image2: image2,
      image3: image3,
    },
    contentdiv: contentdiv,
  };
}
export const fakeProducts = [
 
  generateFakeProduct(
    2,
    "natural",
    "Dạng lăn",
    "ROSA MAGNOLIA",
    "HƯƠNG HỒNG MỘC LAN",
    "Dạng lăn truyền thống hương Hồng Mộc Lan tươi mát, thư thái, giúp xua tan căng thẳng mệt mỏi.",
    "62.000",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/roll_rose_magnolia.png",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/roll_rose_magnolia.png",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/roll_rosa_magnolia_front.png",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/rollon_right_rosa_magnolia.png",
    [
      {
        subtitle:
          "Hương hồng mộc lan thanh thoát cùng các thành phần chiết xuất từ thiên nhiên giúp        ",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
     {
        subtitle:
        "Công dụng: "      
        ,content:[" Công thức có chứa thành phần chiết xuất từ thiên nhiên giúp khử mùi cơ thể suốt cả ngày và giảm tiết mồ hôi đến 48 giờ.*","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da."]
      },
    ]
  ),
   generateFakeProduct(
    4,
    "natural",
    "Dạng xịt",
    "ROSA Magnolia",
    " HƯƠNG HỒNG MỘC LAN",
    "Mùi hương Hồng Mộc Lan tươi mát cùng dạng xịt tiện lợi giúp giảm căng thẳng, mệt mỏi.",
    "62.000",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/spray_rosamagnolia_side.png",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/spray_rosamagnolia_side.png",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/rosemagnolia_backcard.png",
    "./assets/images/Product/Products/Natural/Rosa_Magnolia/Refree-2023-BCinfo2.jpg",
    [
      {
        subtitle:
          "Hương hồng mộc lan thanh thoát cùng dạng xịt tiện lợi giúp",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
      {
        subtitle:
        "Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da"      
        ,content:[]
      },
    ]
  ),
  generateFakeProduct(
    3,
    "natural",
    "Dạng lăn",
    "WOODY",
    "HƯƠNG GỖ",
    "Dạng lăn truyền thống hương Gỗ ấm áp, nồng nàn giải tỏa căng thẳng cho tinh thần luôn thư giãn.",
    "62.000",
    "./assets/images/Natural/Woody/roll_woody_side.png",
    "./assets/images/Natural/Woody/roll_woody_side.png",
    "./assets/images/Natural/Woody/roll_woody_front.png",
    "./assets/images/Natural/Woody/rollon_right_woody.png",
    [
      {
        subtitle:
          "Hương gỗ ấm áp cùng các thành phần chiết xuất từ thiên nhiên giúp         ",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
      {
        subtitle:
        "Công dụng: "      
        ,content:[" Công thức có chứa thành phần chiết xuất từ thiên nhiên giúp khử mùi cơ thể suốt cả ngày và giảm tiết mồ hôi đến 48 giờ.*","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da."]
      },
    ]
  ),
 
  generateFakeProduct(
    5,
    "natural",
    "Dạng xịt",
    "WOODY",
    "HƯƠNG GỖ",
    "Mùi Gỗ ngọt ngào và ấm áp cùng dạng xịt tiện lợi giúp thư giãn tinh thần, giải tỏa căng thẳng. ",
    "62.000",
    "./assets/images/Product/Products/Natural/Woody/spray_woody_side.png",
    "./assets/images/Product/Products/Natural/Woody/spray_woody_side.png",
    "./assets/images/Product/Products/Natural/Woody/woody_backcard.png",
    "./assets/images/Product/Products/Natural/Woody/Refree-2023-BCinfo4.jpg",
    [
      {
        subtitle:
          "Hương gỗ ấm áp cùng các thành phần chiết xuất từ thiên nhiên giúp: ",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
      {
        subtitle:
        "Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da"      
        ,content:[]
      },
    ]
  ),
  generateFakeProduct(
    7,
    "natural",
    "DẠNG LĂN",
    "ROSEMARY",
    "HƯƠNG THẢO",
    "Dạng lăn truyền thống hương Hương Thảo thanh dịu thư giãn giúp giấc ngủ ngon.",
    "62.000",
    "./assets/images/Natural/Rosemary/roll_rosemary_side.png",
    "./assets/images/Natural/Rosemary/roll_rosemary_side.png",
    "./assets/images/Natural/Rosemary/roll_rosemary_front.png",
    "./assets/images/Natural/Rosemary/rollon_right_rosemary.png",
    [
      {
        subtitle:
          "Hương hương thảo thanh dịu cùng các thành phần chiết xuất từ thiên nhiên giúp: ",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
      {
        subtitle:
        "Công dụng: "      
        ,content:[" Công thức có chứa thành phần chiết xuất từ thiên nhiên giúp khử mùi cơ thể suốt cả ngày và giảm tiết mồ hôi đến 48 giờ.*","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da."]
      },
    ]
  ),
  generateFakeProduct(
    8,
    "natural",
    "Dạng XỊT",
    "ROSEMARY",
    "HƯƠNG THẢO",
    "Hương Thảo thanh dịu cùng dạng xịt tiện lợi mang đến cảm giác thanh mát dễ chịu, thư thái tinh thần. ",
    "62.000",
    "./assets/images/Product/Products/Natural/Rosemary/spray_rosemary_side.png",
    "./assets/images/Product/Products/Natural/Rosemary/spray_rosemary_side.png",
    "./assets/images/Product/Products/Natural/Rosemary/rosemary_backcard.png",
    "./assets/images/Product/Products/Natural/Rosemary/Refree-2023-BCinfo3.jpg", 
    [
      {
        subtitle: "Hương hương thảo thanh dịu cùng dạng xịt tiện lợi giúp",
        content: [
          " Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
      {
        subtitle:
        "Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da"      
        ,content:[]
      },
    ]

  ),
  generateFakeProduct(
    1,
    "natural",
    "DẠNG LĂN",
    "GREEN TEA",
    "HƯƠNG TRÀ XANH",
    "Mùi hương Trà Xanh thuần khiết cùng dạng lăn tiện lợi mang lại cảm giác tươi mới, sảng khoái và tràn đầy năng lượng mỗi ngày.",
    "62.000",
    "./assets/images/Natural/Green_Tea/roll_greentea.png",
    "./assets/images/Natural/Green_Tea/roll_greentea.png",
    "./assets/images/Natural/Green_Tea/roll_greentea_front.png",
    "./assets/images/Natural/Green_Tea/rollon_right_greentea.png",
    [
      {
        subtitle: "Hương Trà Xanh thuần khiết cùng các thành phần chiết xuất từ thiên nhiên giúp ",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
     {
        subtitle: "Công dụng:"      
        ,content:[" Công thức có chứa thành phần chiết xuất từ thiên nhiên giúp khử mùi cơ thể suốt cả ngày và giảm tiết mồ hôi đến 48 giờ.*","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Chiết xuất Aloe Vera (Nha Đam) và Licorice (Cam Thảo) giúp dưỡng trắng da. ","Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da."]
      },
    ]
  ),
  generateFakeProduct(
    6,
    "natural",
    "Dạng xịt",
    "GREEN TEA",
    " HƯƠNG TRÀ XANH",
    "Mùi hương Trà Xanh thuần khiết cùng dạng xịt tiện lợi mang lại cảm giác tươi mới, sảng khoái và tràn đầy năng lượng mỗi ngày.",
    "62.000",
    "./assets/images/Product/Products/Natural/Green_Tea/spray_greentea_side.png",
    "./assets/images/Product/Products/Natural/Green_Tea/spray_greentea_side.png",
    "./assets/images/Product/Products/Natural/Green_Tea/greentea_backcard.png",
    "./assets/images/Product/Products/Natural/Green_Tea/Refree-2023-BCinfo.jpg",   [
      {
        subtitle:
          "Hương Trà Xanh thuần khiết cùng  dạng xịt tiện lợi giúp: ",
        content: [
          "Giảm tiết mồ hôi suốt 48 giờ.",
          "Khử mùi cơ thể suốt 24 giờ.",
          "Đặc biệt, KHÔNG GÂY Ố VÀNG.",
        ],
      },
      {
        subtitle:"Nếu các sản phẩm khử mùi khác có thể gây kích ứng hoặc thâm sạm vùng da dưới cánh tay, Refre Natural MỚI giúp khử mùi cơ thể và giảm tiết mồ hôi hiệu quả với thành phần chiết xuất từ thiên nhiên, thân thiện và an toàn cho da"      
        ,content:[]
      },
    ]
  ),
  
];

export const fakeProductsJSON = JSON.stringify(fakeProducts, null, 2);
