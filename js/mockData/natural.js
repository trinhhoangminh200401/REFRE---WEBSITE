function generateFakeProduct(
    id,
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
      contentdiv: contentdiv
    };
  }
  export const fakeProducts = [
    generateFakeProduct(
      1,
      "DẠNG LĂN",
      "ROSEMARY",
      "HƯƠNG THẢO",
      "Dạng lăn truyền thống hương Hương Thảo thanh dịu thư giãn giúp giấc ngủ ngon.",
      "62.000",
      "./assets/images/Natural/Rosemary/roll_rosemary_side.png",
      "./assets/images/Product/Products/Whitening/Deluxe/roll_deluxe_side.png",
      "/assets/images/Product/Products/Whitening/Deluxe/roll_deluxe_front.png",
      "/assets/images/Product/Products/Whitening/Deluxe/rollon_right_deluxe.png",[
          {
              subtitle:"Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:",
              content:["Khử mùi suốt 24H*","Giảm tiết mồ hôi suốt 48H*.","Không cồn, không Paraben, không gây vàng áo.","Không gây kích ứng**.","Lưu hương suốt cả ngày."]
          }
          ,{
              subtitle:"Cảm nhận 3 tầng hương say đắm trong tình yêu",
              content:["Tầng hương đầu: Hoa Hồng Bulgary tinh tế hòa quyện thanh tao rõ nét từ Hoa Diên Vĩ."]
          }
      ]
    ),
    generateFakeProduct(
      2,
      "Dạng lăn",
      "ROSA MAGNOLIA",
      "HƯƠNG HỒNG MỘC LAN",
      "Dạng lăn truyền thống hương Hồng Mộc Lan tươi mát, thư thái, giúp xua tan căng thẳng mệt mỏi.",
      "62.000",
      "./assets/images/Product/Products/Natural/Rosa_Magnolia/roll_rose_magnolia.png",
      "./assets/images/Whitening/In_Love/roll_inlove_side.png",
      "./assets/images/Whitening/In_Love/roll_inlove_front.png",
      "./assets/images/Whitening/In_Love/rollon_right_inlove.png",
      [{
          subtitle:"Cảm nhận 3 tầng hương say đắm trong tình yêu:",
          content:["Tầng hương đầu: Hoa Hồng Bulgary tinh tế hòa quyện thanh tao rõ nét từ Hoa Diên Vĩ.","Tầng hương giữa: Xạ Hương quyến rũ len lỏi cùng những cảm xúc ấn tượng từ Huệ Trắng, Hoa Cam.","Tầng hương cuối: Vani ẩn chứa sự sang trọng điểm xuyến nhẹ nhàng của hương Cây Cỏ."]
      }]
      ),
    generateFakeProduct(
      3,
      "Dạng lăn",
      "WOODY",
      "HƯƠNG GỖ",
      "Dạng lăn truyền thống hương Gỗ ấm áp, nồng nàn giải tỏa căng thẳng cho tinh thần luôn thư giãn.",
      "62.000",
      "./assets/images/Natural/Woody/roll_woody_side.png",
      "./assets/images/Whitening/Sophis/roll_sophis_side.png",
      "./assets/images/Whitening/Sophis/roll_sophis_front.png",
      "./assets/images/Whitening/Sophis/rollon_right_sophis.png"
      ,[{
          subtitle:"Cảm nhận 3 tầng mang nét thanh nhã đầy tinh tế",
          content:["Tầng hương đầu: Cam thanh nhẹ mọng nước ôm lấy các lấy các nét hương trái cây mềm mại của Táo, Vải.","Tầng hương giữa:  Hoa Nhài, Hoa Ly, Hoa Diên Vĩ nồng nàng đầy mê hoặc.","Tầng hương cuối: Gỗ Đàn Hương và Cây Bách ngọt ngào mang tính ấm, tạo cảm giác sảng khoái tươi mát."]
      }]
    ),
    generateFakeProduct(
      4,
      "Dạng xịt",
      "ROSA Magnolia",
      " HƯƠNG HỒNG MỘC LAN",
      "Mùi hương Hồng Mộc Lan tươi mát cùng dạng xịt tiện lợi giúp giảm căng thẳng, mệt mỏi.",
      "62.000",
      "./assets/images/Natural/Rosa_Magnolia/spray_rosamagnolia_side.png",
      "./assets/images/Whitening/Deluxe/spray_deluxe_ front.png",
      "./assets/images/BackCard/Whitening/deluxe_backcard.png",
      "./assets/images/BackCard/Mặt sau/Refree-2023-BCinfo3.jpg",
      [
          {
              subtitle:"Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:",
              content:["Khử mùi suốt 24H*","Giảm tiết mồ hôi suốt 48H*.","Không cồn, không Paraben, không gây vàng áo.","Không gây kích ứng**.","Lưu hương suốt cả ngày."]
          }
          ,{
              subtitle:"Cảm nhận 3 tầng hương say đắm trong tình yêu",
              content:["Tầng hương đầu: Hoa Hồng Bulgary tinh tế hòa quyện thanh tao rõ nét từ Hoa Diên Vĩ."]
          }
      ]
      
    ),
    generateFakeProduct(
      5,
      "Dạng xịt",
      "IN LOVE",
      "HƯƠNG TÌNH YÊU",
      "Dạng xịt: Cảm nhận 3 tầng huơng say đắm trong tình yêu.",
      "62.000",
      "./assets/images/Whitening/In_Love/spray_inlove_side.png",
      "./assets/images/Whitening/In_Love/spray_inlove_ front.png",
      "./assets/images/BackCard/Whitening/inlove_backcard.png",
      "./assets/images/BackCard/Mặt sau/Refree-2023-BCinfo7.jpg",
      [{
          subtitle:"Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:"
          ,content:["Khử mùi suốt 24H*.","Giảm tiết mồ hôi suốt 48H*.","Không cồn, không Paraben, không gây vàng áo","Không gây kích ứng**.","Lưu hương suốt cả ngày"]
      },
      {
          subtitle:"Cảm nhận 3 tầng hương say đắm trong tình yêu"
          ,content:["Tầng hương đầu: Hoa Hồng Bulgary tinh tế hòa quyện thanh tao rõ nét từ Hoa Diên Vĩ.","Tầng hương giữa: Xạ Hương quyến rũ len lỏi cùng những cảm xúc ấn tượng từ Huệ Trắng, Hoa Cam.","Không cồn, không Paraben, không gây vàng áo","Tầng hương cuối: Vani ẩn chứa sự sang trọng điểm xuyến nhẹ nhàng của hương Cây Cỏ."]
      },
  ]
    ),
    generateFakeProduct(
      6,
      "Dạng xịt",
      "SOPHIS",
      "HƯƠNG THANH NHÃ",
      "Dạng xịt: Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.",
      59000,
      "./assets/images/Whitening/Sophis/spray_sophis_side.png",
      "./assets/images/Whitening/Sophis/spray_sophis_ front.png",
      "./assets/images/BackCard/Whitening/sophis_backcard.png",
      "./assets/images/BackCard/Mặt sau/Refree-2023-BCinfo8.jpg",
      [{
          subtitle:"Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:        ",
          content:["Khử mùi suốt 24H*","Giảm tiết mồ hôi suốt 48H*.","Không cồn, không Paraben, không gây vàng áo","Không gây kích ứng**.","Lưu hương suốt cả ngày."]
      },{
          subtitle:" Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.",
          content :["Tầng hương đầu: Cam thanh nhẹ mọng nước ôm lấy các nét hương trái cây mềm mại của Táo, Vải.","Tầng hương giữa:  Hoa Nhài, Hoa Ly, Hoa Diên Vĩ nồng nàng đầy mê hoặc","Tầng hương cuối: Gỗ Đàn Hương và Cây Bách ngọt ngào mang tính ấm, tạo cảm giác sảng khoái tươi mát."]
      }
  ]
    ),
    generateFakeProduct(
      7,
      "Dạng xịt",
      "SWEETIE",
      "HƯƠNG NGỌT NGÀO",
      "Dạng xịt: Cảm nhận 3 tầng hương điểm nét ngọt ngào.",
      59000,
      "./assets/images/Whitening/Sweetie/spray_sweetie_side.png",
      "./assets/images/Whitening/Sweetie/spray_sweetie_ front.png",
      "./assets/images/BackCard/Whitening/sweeties_backcard.png",
      "./assets/images/BackCard/Mặt sau/Refree-2023-BCinfo9.jpg",
    
          [{
              subtitle:"Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:        ",
              content:["Khử mùi suốt 24H*","Giảm tiết mồ hôi suốt 48H*.","Không cồn, không Paraben, không gây vàng áo","Không gây kích ứng**.","Lưu hương suốt cả ngày."]
          },{
              subtitle:" Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.",
              content :["Tầng hương đầu: Mận, Cam mát lạnh, trong vắt tràn ngập dư vị ngọt lãng mạn của Cây Hồi.","Tầng hương giữa: Hạnh Nhân, Hoa Ly, Hoa Violet ngọt bùi như hóa thành chiếc khăn len mềm mại.","Tầng hương cuối: Gỗ Đàn Hương, Xạ Hương, Hổ Phách trở nên ngọt ngào, quyến rũ mãnh liệt hơn."]
          }
      ]
      
    ),
    generateFakeProduct(
      8,
      "Dạng lăn",
      "BABY POWDER",
      "HƯƠNG PHẤN THƠM",
      "Dạng lăn: Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.",
      59000,
      "./assets/images/Whitening/Baby_Powder/roll_babypower_side.png",
      "./assets/images/Whitening/Baby_Powder/roll_babypower_side.png",
      "./assets/images/Whitening/Baby_Powder/roll_babypowder_front.png",
      "./assets/images/Whitening/Baby_Powder/rollon_right_babypowder.png",
    
      [
          {
              subtitle:"Cảm nhận 3 tầng của sự ngay thơ trong trẻo            ",
              content :["Tầng hương đầu: Cam Bergamot cay nồng nhấn nhá chút ấm áp của Ngọc Lan Tây.","Tầng hương giữa:  Hoa Hồng, Đinh Hương, Linh Lan nhấn chìm vào khu vườn đầy hoa gần gũi.","Tầng hương cuối: Hoa Vòi Voi, Đào, Xạ Hương, Đậu Tonka để lại dư âm ngọt ngào, tinh thiết nhưng kém phần thu hút."]
          }
      ]
    ),
    generateFakeProduct(
      9,
      "Dạng xịt",
      "BABY POWDER",
      "HƯƠNG PHẤN THƠM",
      "Dạng xịt: Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.",
      59000,
      "./assets/images/Whitening/Baby_Powder/spray_babypower_side.png",
      "./assets/images/Whitening/Baby_Powder/spray_babypower_ front.png",
      "./assets/images/BackCard/Whitening/babypowder_backcard.png",
      "./assets/images/BackCard/Mặt sau/Refree-2023-BCinfo5.jpg",
    
      [
          {
              subtitle:"Dạng xịt tiện lợi tránh vi khuẩn quay trở lại vào trong cùng công thức mới đột phá giúp:        ",
              content:["Khử mùi suốt 24H*","Giảm tiết mồ hôi suốt 48H*.","Không cồn, không Paraben, không gây vàng áo","Không gây kích ứng**.","Lưu hương suốt cả ngày."]
          },{
              subtitle:" Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.",
              content :["Tầng hương đầu: Cam Bergamot cay nồng nhấn nhá chút ấm áp của Ngọc Lan Tây.","Tầng hương giữa:  Hoa Hồng, Đinh Hương, Linh Lan nhấn chìm vào khu vườn đầy hoa gần gũi.","Tầng hương cuối: Hoa Vòi Voi, Đào, Xạ Hương, Đậu Tonka để lại dư âm ngọt ngào, tinh thiết nhưng kém phần thu hút."]
          }
      ]
    ),
    generateFakeProduct(
      10,
      "Dạng lăn",
      "SWEETIE",
      "HƯƠNG NGỌT NGÀO",
      "Dạng lăn: Cảm nhận 3 tầng hương điểm nét ngọt ngào.",
      59000,
      "./assets/images/Whitening/Sweetie/roll_sweetie_side.png",
      "./assets/images/Whitening/Sweetie/roll_sweetie_side.png",
      "./assets/images/Whitening/Sweetie/roll_sweetie_front.png",
      "./assets/images/Whitening/Sweetie/rollon_right_sweetie.png",
   
      [
          {
              subtitle:" Cảm nhận 3 tầng hương điểm nét ngọt ngào.",
              content :["Tầng hương đầu: Mận, Cam mát lạnh, trong vắt tràn ngập dư vị ngọt lãng mạn của Cây Hồi.","Tầng hương giữa: Hạnh Nhân, Hoa Ly, Hoa Violet ngọt bùi như hóa thành chiếc khăn len mềm mại.","Tầng hương cuối: Gỗ Đàn Hương, Xạ Hương, Hổ Phách trở nên ngọt ngào, quyến rũ mãnh liệt hơn."]
          }
      ]
    ),
  ];
  
  export const fakeProductsJSON = JSON.stringify(fakeProducts, null, 2);
  