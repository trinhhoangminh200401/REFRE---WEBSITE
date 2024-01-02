// export const questionnaire = {
//   favoriteScents: {
//     question: "Ba mùi hương yêu thích nhất của bạn:",
//     answers: [
//       "Hương gỗ, mùi đất",
//       "Hương vani, hổ phách",
//       "Hương kẹo ngọt",
//       "Hương hoa nồng nàn",
//       "Hương thơm xạ hương",
//       "Hương cây cỏ thực vật",
//       "Hương trái cây",
//       "Hương hoa nhẹ nhàng, tinh tế",
//       "Hương cam quýt nồng nàn",
//     ],
//     maxSelection: 3,
//   },
//   leastFavoriteScents: {
//     question: "Ba mùi hương bạn không thích:",
//     answers: [
//       "Hương gỗ, mùi đất",
//       "Hương vani, hổ phách",
//       "Hương kẹo ngọt",
//       "Hương hoa nồng nàn",
//       "Hương thơm xạ hương",
//       "Hương cây cỏ thực vật",
//       "Hương trái cây",
//       "Hương hoa nhẹ nhàng, tinh tế",
//       "Hương cam quýt nồng nàn",
//     ],
//     maxSelection: 3,
//   },
//   scentFrequency: {
//     question: "Bạn thường xuyên ngát hương khi nào:",
//     answers: ["Đi học, đi làm", "Hẹn hò, đi chơi"],
//     maxSelection: 1,
//   },
//   personalStyle: {
//     question: "Miêu tả phong cách cá nhân của bạn trong một từ:",
//     answers: [
//       "Vintage nhẹ nhàng",
//       "Preppy cá tính",
//       "Minimalism tối giản",
//       "Sporty năng động",
//     ],
//     maxSelection: 1,
//   },
//   scentExperience: {
//     question: "Bạn muốn mùi hương mang lại cảm giác như thế nào:",
//     answers: ["Sang trọng quyến rũ", "Tươi mới lạc quan", "Dịu dàng tinh khôi"],
//     maxSelection: 1,
//   },
// };
export const questionnaireData = [
  {
    question: "Ba mùi hương yêu thích nhất của bạn:",
    answers: [
      {
        text: "Hương gỗ, mùi đất",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic1.png",
      },
      {
        text: "Hương vani, hổ phách",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic2.png",
      },
      {
        text: "Hương kẹo ngọt",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic3.png",
      },
      {
        text: "Hương hoa thơm nồng",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic4.png",
      },
      {
        text: "Hương thơm xạ hương",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic5.png",
      },
      {
        text: "Hương thơm thực vật ",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic6.png",
      },
      {
        text: "Hương hoa trái cây",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic7.png",
      },
      {
        text: "Hương thơm hoa nhẹ nhàng tinh tế",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic8.png",
      },
      {
        text: "Hương cây cỏ thực vật",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau1_Pic9.png",
      },
      // Add more answers as needed
    ],
  
    maxSelection: 3,
  },
 
  {
    question: "Bạn thuộc tuýp người",
    answers: [
      
      "Hướng ngoại năng động", 
      "Hướng nội sâu lắng",
      "Hướng nội part-time"
    
    ],
    maxSelection: 1,
  },
  
  {
    question: "Bạn thường xuyên ngát hương khi nào:",
    answers: [
     "Đi học, đi làm",
     "Hẹn hò, đi chơi"
    ],
    maxSelection: 1,
  },
  {
    question: "Miêu tả phong cách cá nhân của bạn trong một từ:",
    answers: [
      {
        text: "Vintage nhẹ nhàng",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau4_Pic1.png",
      },
      {
        text: "Preppy cá tính",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau4_Pic2.png",
      },
      {
        text: "Minimalism tối giản",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau4_Pic3.png",
      },
      {
        text: "Sporty năng động",
        image: "/assets/images/Quiz/Trang Trac Nghiem/Cau4_Pic4.png",
      },
     
    ],
    maxSelection: 1,
  },
  {
    question: "Bạn muốn mùi hương mang lại cảm giác như thế nào:",
    answers: ["Sang trọng quyến rũ", "Tưới mới lạc quan", "Dịu dàng tinh khôi"],
    maxSelection: 1,
  },
  
];