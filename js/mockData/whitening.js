function generateFakeProduct(id, category, title,title1, description, price, imageUrl,imageList) {
    return {
        id: id,
        category: category,
        title: title,
        title1:title1,
        description: description,
        price: price,
        imageUrl: imageUrl,
        imageList:imageList
        
    };
}
 export const fakeProducts = [

    generateFakeProduct(1, 'Dạng lăn', 'DELUXE', 'HƯƠNG SANG TRỌNG', 'Dạng lăn: Cảm nhận 3 tầng hương mang theo nét kiêu kỳ, sang trọng.', 59000, './assets/images/Product/Products/Whitening/Deluxe/roll_deluxe_side.png', []),
    generateFakeProduct(2, 'Dạng lăn', 'IN LOVE', 'HƯƠNG TÌNH YÊU', 'Dạng lăn: Cảm nhận 3 tầng hương say đắm trong tình yêu.', 59000, './assets/images/Whitening/In_Love/roll_inlove_side.png', []),
    generateFakeProduct(3, 'Dạng lăn', 'SOPHIS', 'HƯƠNG THANH NHÃ', 'Dạng lăn: Cảm nhận 3 tầng hương mang nét thanh nhã đầy tinh tế.', 59000, './assets/images/Whitening/Sophis/roll_sophis_side.png', []),
    generateFakeProduct(4, 'Dạng xịt', 'DELUXE', 'HƯƠNG SANG TRỌNG', 'Dạng xịt: Cảm nhận 3 tầng hương mang nét kiêu kỳ, sang trọng.', 59000, './assets/images/Whitening/Deluxe/spray_deluxe_side.png', []),
    generateFakeProduct(5, 'Dạng xịt', 'IN LOVE', 'HƯƠNG TÌNH YÊU', 'Dạng xịt: Cảm nhận 3 tầng huơng say đắm trong tình yêu.', 59000, './assets/images/Whitening/In_Love/spray_inlove_side.png', []),
    generateFakeProduct(6, 'Dạng xịt', 'SOPHIS', 'HƯƠNG THANH NHÃ', 'Dạng xịt: Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.', 59000, './assets/images/Whitening/Sophis/spray_sophis_side.png', []),
    generateFakeProduct(7, 'Dạng xịt', 'SWEETIE', 'HƯƠNG NGỌT NGÀO', 'Dạng xịt: Cảm nhận 3 tầng hương điểm nét ngọt ngào.', 59000, './assets/images/Whitening/Sweetie/spray_sweetie_side.png', []),
    generateFakeProduct(8, 'Dạng lăn', 'BABY POWDER', 'HƯƠNG PHẤN THƠM', 'Dạng lăn: Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.', 59000, './assets/images/Whitening/Baby_Powder/roll_babypower_side.png', []),
    generateFakeProduct(9, 'Dạng xịt', 'BABY POWDER', 'HƯƠNG PHẤN THƠM', 'Dạng xịt: Cảm nhận 3 tầng hương của sự ngây thơ và trong trẻo.', 59000, './assets/images/Whitening/Baby_Powder/spray_babypower_side.png', []),
    generateFakeProduct(10, 'Dạng lăn', 'SWEETIE', 'HƯƠNG NGỌT NGÀO', 'Dạng lăn: Cảm nhận 3 tầng hương điểm nét ngọt ngào.', 59000, './assets/images/Whitening/Sweetie/roll_sweetie_side.png', [])

 ]
  
export const fakeProductsJSON = JSON.stringify(fakeProducts, null, 2);

