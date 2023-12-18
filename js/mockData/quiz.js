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
        image: "path/to/image1.jpg",
      },
      {
        text: "Hương vani, hổ phách",
        image: "path/to/image2.jpg",
      },
      {
        text: "Hương kẹo ngọt",
        image: "path/to/image3.jpg",
      },
      {
        text: "Hương hoa nồng nàn",
        image: "path/to/image4.jpg",
      },
      {
        text: "Hương thơm xạ hương",
        image: "path/to/image5.jpg",
      },
      {
        text: "Hương cây cỏ thực vật",
        image: "path/to/image6.jpg",
      },
      // Add more answers as needed
    ],
    
    maxSelection: 3,
  },
  {
    question: "Ba mùi hương bạn không thích:",
    answers: [
      {
        text: "Hương gỗ, mùi đất",
        image: "path/to/image1.jpg",
      },
      {
        text: "Hương vani, hổ phách",
        image: "path/to/image2.jpg",
      },
      {
        text: "Hương kẹo ngọt",
        image: "path/to/image3.jpg",
      },
      {
        text: "Hương hoa nồng nàn",
        image: "path/to/image4.jpg",
      },
      {
        text: "Hương thơm xạ hương",
        image: "path/to/image5.jpg",
      },
      {
        text: "Hương cây cỏ thực vật",
        image: "path/to/image6.jpg",
      },
    ],
    maxSelection: 3,
  },
  {
    question: "Bạn thường xuyên ngát hương khi nào:",
    answers: ["Đi học, đi làm", "Hẹn hò, đi chơi"],
    maxSelection: 1,
  },
  {
    question: "Miêu tả phong cách cá nhân của bạn trong một từ:",
    answers: [
      "Vintage nhẹ nhàng",
      "Preppy cá tính",
      "Minimalism tối giản",
      "Sporty năng động",
    ],
    maxSelection: 1,
  },
  {
    question: "Bạn muốn mùi hương mang lại cảm giác như thế nào:",
    answers: ["Sang trọng quyến rũ", "Tươi mới lạc quan", "Dịu dàng tinh khôi"],
    maxSelection: 1,
  },
];
