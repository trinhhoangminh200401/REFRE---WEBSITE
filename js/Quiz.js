import { questionnaireData } from "./mockData/quiz.js";
import { SessionStorage } from "./utils/storage.js";
let newQuestionnaire = [];

$(document).ready(function () {
  const result_data = $(".render-result");
  $(".lazy").Lazy({
    afterLoad: function (element) {
      element.addClass("loaded");
    },
  });

  const errorElement = $("<span>").addClass("error-message");
  function saveQuestionnaireState() {
    SessionStorage.setSessionStorage(
      "questionnaireState",
      JSON.stringify(newQuestionnaire)
    );
  }

  function loadQuestionnaireState() {
    const storedState = SessionStorage.getSessionStorage("questionnaireState");
    if (storedState) {
      newQuestionnaire = JSON.parse(storedState);

      // Set initial state of checkboxes based on loaded data
      $(".image-checkbox").each(function () {
        const $checkbox = $(this).find('input[type="checkbox"]');
        const index = $checkbox.attr("name").split("-")[1];
        const selectedItem = $checkbox.val();

        if (
          newQuestionnaire.some(
            (q) => q.index === index && q.answers.includes(selectedItem)
          )
        ) {
          $(this).addClass("image-checkbox-checked");
          $checkbox.prop("checked", true);
        }
        else if (newQuestionnaire.some((q) => q.index === index && q.answers.length <= 0)) {
          const currentQuestionnaireState = JSON.parse(sessionStorage.getItem("questionnaireState"));
      
          const filteredQuestionnaire = currentQuestionnaireState.filter(
              (item) => !(item.index === index && item.answers.length <= 0)
          );
      
          SessionStorage.setSessionStorage("questionnaireState", JSON.stringify(filteredQuestionnaire));
      }
        else {
          $(this).removeClass("image-checkbox-checked");
          $checkbox.prop("checked", false);
        }
      });
    }
  }

  function validateSelection(
    selectedItem,
    existingQuestion,
    maxSelection,
    index
  ) {
    if (!selectedItem) {
      errorElement.text("Please select an answer for the question.");
      $(
        `.cardContent__item.cardContent__item-${index} > .error-container`
      ).append(errorElement);

      // Auto remove the error message after 5 seconds (adjust the timeout as needed)
      setTimeout(() => {
        errorElement.remove();
      }, 5000);

      return "Missing selection";
    }

    const elementOfList = existingQuestion
      ? existingQuestion.answers.length
      : 0;

    if (
      elementOfList >= maxSelection &&
      !existingQuestion.answers.includes(selectedItem)
    ) {
      errorElement.text(`Please select exactly ${maxSelection} answer(s).`);
      $(
        `.cardContent__item.cardContent__item-${index} > .error-container`
      ).append(errorElement);

      // Auto remove the error message after 5 seconds (adjust the timeout as needed)
      setTimeout(() => {
        errorElement.remove();
      }, 5000);

      return "Maximum selection reached";
    }

    return null;
  }
  function handleResponse(index, selectedItem) {
    const maxSelection = questionnaireData[index].maxSelection;
    let existingQuestionIndex = newQuestionnaire.findIndex(
      (question) => question.index === index
    );

    const validationError = validateSelection(
      selectedItem,
      newQuestionnaire[existingQuestionIndex],
      maxSelection,
      index
    );

    if (validationError) {
      return validationError;
    }

    let updatedQuestionnaire = cloneArray(newQuestionnaire);

    if (existingQuestionIndex === -1) {
      const newQuestion = {
        index,
        question:  questionnaireData[index].question ,
        maxSelection:questionnaireData[index].maxSelection,
        answers: [], // Initialize answers as an empty array
      };
      updatedQuestionnaire.push(newQuestion);
      existingQuestionIndex = updatedQuestionnaire.length - 1;
    }

    const answers = updatedQuestionnaire[existingQuestionIndex].answers;
    const isItemSelected = answers.includes(selectedItem);
    console.log(typeof selectedItem);
    if (isItemSelected) {
      updatedQuestionnaire[existingQuestionIndex].answers = answers.filter(
        (item) => item !== selectedItem
      );
    } else {
      if (answers.length < maxSelection) {
        updatedQuestionnaire[existingQuestionIndex].answers.push(selectedItem);
      }
    }

    newQuestionnaire = updatedQuestionnaire;
    saveQuestionnaireState();
  }

  function renderData() {
    const questionnaireContainer = $("#questionnaire-container");
    const containerCard = $("<div>")
      .addClass("container-card my-4")
      .attr("id", "container-card");
    const containerCardContent = $("<div>").addClass("container cardContent");

    questionnaireContainer.append(containerCard.append(containerCardContent));

    questionnaireData.forEach((question, index) => {
      const cardItem = $("<div>").addClass(
        `cardContent__item cardContent__item-${index}`
      );
      const questionWord = $("<div>").addClass(
        "question-word d-flex align-items-center"
      );
      const errorContainer = $("<div>").addClass("error-container");

      // Check if the question has an image
      if (
        question?.answers &&
        question?.answers[0] &&
        question?.answers[0].image
      ) {
        // If there is an image, render this structure
        const titleShadow = $("<div>").addClass(
          "card-content__item__title-shadow"
        );
        const cardTitle = $("<div>")
          .addClass("card-content__item__title")
          .append(
            $("<h2>")
              .addClass("title")
              .text(`0${index + 1}`)
          );
        const questionText = $("<span>").text(question.question);

        questionWord.append(titleShadow.append(cardTitle), questionText);
        cardItem.append(questionWord);

        const card = $("<div>").addClass("card mb-3");
        const flexContainer = $("<div>").addClass(
          " d-xl-flex flex-wrap w-75 justify-content-xl-center   mx-auto "
        );

        question.answers.forEach((item, itemIndex) => {
          //  console.log('item',item)
          const checkboxLabel = $("<label>").addClass("image-checkbox");
          const checkbox = $("<input>").attr({
            type: "checkbox",
            name: `answer-${index}`,
            value: item.text, ////  note
          });
          const checkboxImage = $("<img>")
            .addClass("img-responsive")
            .attr("src", item.image);
          const checkboxContent = $("<p>").addClass("content").text(item.text);

          checkboxLabel.append(
            checkbox,
            checkboxImage,
            $("<i>").addClass("fa fa-check hidden"),
            checkboxContent
          );

          flexContainer.append(
            $("<div>").addClass("nopad text-center").append(checkboxLabel)
          );
        });

        card.append(flexContainer);
        cardItem.append(card, errorContainer);
      } else {
        // If there is no image, render this structure
        const titleShadow = $("<div>").addClass(
          "card-content__item__title-shadow"
        );
        const cardTitle = $("<div>")
          .addClass("card-content__item__title")
          .append(
            $("<h2>")
              .addClass("title")
              .text(`0${index + 1}`)
          );
        const questionText = $("<span>").text(question.question);

        questionWord.append(titleShadow.append(cardTitle), questionText);
        cardItem.append(questionWord);

        const card = $("<div>").addClass("card mb-3");
        const flexContainer = $("<div>").addClass(
          "justify-content-center d-xl-flex flex-wrap w-100  mx-auto"
        );

        question.answers.forEach((item, itemIndex) => {
          const checkboxLabel = $("<label>").addClass("image-checkbox");
          const checkbox = $("<input>").attr({
            type: "checkbox",
            name: `answer-${index}`,
            value: item,
          });

          const checkboxText = $("<span>").text(item);

          checkboxLabel.append(checkbox, checkboxText);

          flexContainer.append(
            $("<div>")
              .addClass("nopadText text-center my-4 mx-3")
              .append(checkboxLabel)
          );
        });

        card.append(flexContainer);
        cardItem.append(card);
      }
      containerCardContent.append(cardItem);
    });
  }

  // Call the function to render the data
  renderData();

  // ... (existing code)
  //-------------------------- this code isn't working
  // Set initial state of checkboxes
  // $(".image-checkbox").each(function () {
  //   const $checkbox = $(this).find('input[type="checkbox"]');
  //   const index = $checkbox.attr("name").split("-")[1];
  //   const selectedItem = $checkbox.val();

  //   if (newQuestionnaire.some((q) => q.index === index && q.answers.includes(selectedItem))) {
  //     $(this).addClass("image-checkbox-checked");
  //   } else {
  //     $(this).removeClass("image-checkbox-checked");
  //   }
  // });

  // // ... (rest of your existing code)

  $(".image-checkbox").on("change", function (e) {
    const $checkbox = $(this).find('input[type="checkbox"]');
    const index = $checkbox.attr("name").split("-")[1];
    const selectedItem = $checkbox.val();

    const selectedCheckboxesLength = $(
      `.cardContent__item.cardContent__item-${index} input[type="checkbox"]:checked`
    );
    const unselectedCheckboxes = $(
      `.cardContent__item.cardContent__item-${index} input[type="checkbox"]:not(:checked)`
    );
    const maxSelection = questionnaireData[index].maxSelection;

    if (
      $checkbox.prop("checked") &&
      selectedCheckboxesLength.length > maxSelection
    ) {
      // If the checkbox is being checked and the maxSelection limit is reached, prevent further selection
      $(this).removeClass("image-checkbox-checked");
      $checkbox.prop("checked", false);
      unselectedCheckboxes.prop("disabled", true);
    } else if (
      !$checkbox.prop("checked") &&
      selectedCheckboxesLength.length >= maxSelection
    ) {
      // If the checkbox is being unchecked and the maxSelection limit is reached, allow unchecking
      $(this).removeClass("image-checkbox-checked");
      unselectedCheckboxes.prop("disabled", false);
    } else {
      // Otherwise, toggle the checked state and handle the response
      $(this).toggleClass("image-checkbox-checked", $checkbox.prop("checked"));
      unselectedCheckboxes.prop("disabled", false);

      handleResponse(index, selectedItem);
      saveQuestionnaireState();
      loadQuestionnaireState()
    }
  });

  function handleSubmit() {
    $(".custom-spinner-container").show();

    $(".cardContent__item > .error-message").remove();
    
    newQuestionnaire.forEach((question) => {
      const maxSelection = question.maxSelection;
      const selectedAnswers = question.answers.length;
      if (selectedAnswers !== maxSelection) {
        errorElement.text(`Please select exactly ${maxSelection} answers.`);
        $(`.cardContent__item.cardContent__item-${question.index}`).append(
          errorElement
        );
      } else {
        errorElement.text(``);
      }
    });

    newQuestionnaire.forEach((question) => {
      const maxSelection = question.maxSelection;
      question.answers.forEach((selectedItem) => {
        const existingQuestion = newQuestionnaire.find(
          (q) => q.index === question.index
        );
        const validationError = validateSelection(
          selectedItem,
          existingQuestion,
          maxSelection,
          question.index
        );
        if (validationError) {
          console.log(validationError);
        }
      });
    });
    loadQuestionnaireState()



    setTimeout(() => {
      $(".custom-spinner-container").hide();
      let announce = $("<p>").addClass("white-color py-5");
      let imageError =
        '<img src=" https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" width="350" height="200" class="mx-auto"   />';
      if ($(".white-color").length === 0) {
        result_data.append(announce, imageError);

        if (
          newQuestionnaire.length <= 0 ||
          newQuestionnaire.length !== questionnaireData.length
        ) {
          console.log(newQuestionnaire.index)
          announce.text("BẠN VUI LÒNG TRẢ LỜI ĐẦY ĐỦ ");
          $(".return-result").empty()
        } else {
          let returnResult = $(".return-result");
          let merge = [];
          console.log(newQuestionnaire)
          const answerschoice = newQuestionnaire.map((item) => {
            $(".render-result_content").hide();
            return (merge = [...merge, ...item.answers]);
          });
          // if (!resultAppended) {
          //   for (let j = 0; j < merge.length; j++) {
          //     console.log(merge[j]);
          //     console.log(merge[j] == "Hương hoa trái cây" && merge[j] =="Hương kẹo ngọt")
          //     // if (
          //     //   item.answers[j] === "Hương hoa trái cây" ||
          //     //   item.answers[j] === "Hương kẹo ngọt" ||
          //     //   item.answers[j] === "Hương hoa thơm nồng" ||
          //     //   (item.answers[j] === "Hướng nội sâu lắng" || item.answers[j] === "Hướng nội part-time") ||
          //     //   (item.answers[j] === "Đi học, đi làm" || item.answers[j] === "Hẹn hò,đi chơi") ||
          //     //   (item.answers[j] === "Vintage nhẹ nhàng" || item.answers[j] === "Minimalism tối giản") ||
          //     //   item.answers[j] === "Tưới mới lạc quan"
          //     // ) {
          //     //   // Append your HTML content
          //     //   let returnResult = $(".return-result");

          //     //   // Set the flag to true
          //     //   resultAppended = true;

          //     //   // Break the loop after the first match
          //     //   break;
          //     // }
          //   }
          // }

          let allConditionsMet = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương hoa trái cây" ||
              item === "Hương gỗ, mùi đất" ||
              item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
              item === "Hướng nội sâu lắng" ||
              item === "Đi học, đi làm" ||
              item === "Minimalism tối giản" ||
              item === "Tưới mới lạc quan"
          );
          let allConditionsMet1 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương cây cỏ thực vật" ||
              item === "Hương gỗ, mùi đất" ||
              item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
              item === "Hướng ngoại năng động" ||
              item === "Hướng nội part-time" ||
              item === "Đi học, đi làm" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Preppy cá tính" ||
              item === "Sporty năng động" ||
              item === "Tưới mới lạc quan" ||
              item === "Dịu dàng tinh khôi"
          );
          let allConditionsMet2 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương cây cỏ thực vật" ||
              item === "Hương gỗ, mùi đất" ||
              item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
              item === "Hướng ngoại năng động" ||
              item === "Hướng nội sâu lắng" ||
              item === "Đi học, đi làm" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Sporty năng động" ||
              item === "Tưới mới lạc quan"
          );
          let allConditionsMet3 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương cây cỏ thực vật" ||
              item === "Hương gỗ, mùi đất" ||
              item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
              item === "Hướng ngoại năng động" ||
              item === "Hướng nội part-time" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Sporty năng động" ||
              item === "Minimalism tối giản" ||
              item === "Tưới mới lạc quan" ||
              item === "Dịu dàng tinh khôi"
          );
          let allConditionsMet4 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương hoa trái cây" ||
              item === "Hương kẹo ngọt" ||
              item === "Hương hoa thơm nồng" ||
              item === "Hướng nội sâu lắng" ||
              item === "Hướng nội part-time" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Đi học, đi làm" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Minimalism tối giản" ||
              item === "Tưới mới lạc quan"
          );
          let allConditionsMet5 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương hoa trái cây" ||
              item === "Hương gỗ, mùi đất" ||
              (item === "Hương thơm hoa nhẹ nhàng tinh tế") |
                (item === "Hướng nội sâu lắng") ||
              item === "Hướng ngoại năng động" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Sporty năng động" ||
              item === "Minimalism tối giản" ||
              item === "Tưới mới lạc quan" ||
              item === "Sang trọng quyến rũ"
          );
          let allConditionsMet6 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương vani, hổ phách" ||
              item === "Hương hoa trái cây" ||
              item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
              item === "Hướng ngoại năng động" ||
              item === "Hướng nội part-time" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Sporty năng động" ||
              item === "Minimalism tối giản" ||
              item === "Sang trọng quyến rũ"
          );
          let allConditionsMet7 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương kẹo ngọt" ||
              item === "Hương thơm xạ hương" ||
              item === "Hương hoa trái cây" ||
              item === "Hướng ngoại năng động" ||
              item === "Hướng nội part-time" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Sporty năng động" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Tưới mới lạc quan" ||
              item === "Dịu dàng tinh khôi"
          );
          let allConditionsMet8 = answerschoice[answerschoice.length - 1].every(
            (item) =>
              item === "Hương vani, hổ phách" ||
              item === "Hương thơm xạ hương" ||
              item === "Hương cây cỏ thực vật" ||
              item === "Hướng ngoại năng động" ||
              item === "Hướng nội part-time" ||
              item === "Hẹn hò, đi chơi" ||
              item === "Vintage nhẹ nhàng" ||
              item === "Preppy cá tính" ||
              item === "Minimalism tối giản" ||
              item === "Sang trọng quyến rũ"
          );
         let allCondition9 = answerschoice[answerschoice.length-1].some(
          (item) =>
          // item === "Hương vani, hổ phách" ||
          // item === "Hương thơm xạ hương" ||
          // item === "Hương cây cỏ thực vật" ||
          // item === "Hương kẹo ngọt" ||
          // item === "Hương hoa thơm nồng"||
          // item === "Hương thơm thực vật " ||
          // item === "Hương hoa trái cây" ||
          // item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
          // item ===  "Hương cây cỏ thực vật" 
          // item === 
            item === "Hẹn hò, đi chơi"
          )
          let allCondition10 = answerschoice[answerschoice.length-1].some(
            (item) =>
            // item === "Hương vani, hổ phách" ||
            // item === "Hương thơm xạ hương" ||
            // item === "Hương cây cỏ thực vật" ||
            // item === "Hương kẹo ngọt" ||
            // item === "Hương hoa thơm nồng"||
            // item === "Hương thơm thực vật " ||
            // item === "Hương hoa trái cây" ||
            // item === "Hương thơm hoa nhẹ nhàng tinh tế" ||
            // item ===  "Hương cây cỏ thực vật" 
            // item === 
              item === "Đi học, đi làm"
            )
          console.log("thg green tea", allConditionsMet);

          console.log("thg rosa", allConditionsMet1);
          console.log("thg rosemary", allConditionsMet2);
          console.log("thg woody", allConditionsMet3);
          console.log("thg babypowder", allConditionsMet4);
          console.log("thg sophis", allConditionsMet5);
          console.log("thg deluxe", allConditionsMet6);
          console.log("thg sweetie", allConditionsMet7);
          console.log("thg love", allConditionsMet8);
          console.log("thg else ",allCondition9)
          if (allConditionsMet) {
            returnResult.html(`<div class ="headline my-3">
                  <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Headline.png" />
                </div>
                <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
                  <h4>Mùi hương hoàn hảo</h4>
                  <h4>dành cho bạn là</h4>
                  <h5>Thuần khiết - sảng khoái</h5>
                  <p> Bạn thích sự ấm áp của những tia nắng mặt trời chan hòa và hít thở không khí trong lành vào sáng sớm. Tươi mát và thuần khiết của hương trà xanh từ Refre Natural Green Tea chính là chân ái mang lại cho bạn cảm giác nhẹ nhàng, thư thái và tràn đầy năng lượng để bắt đầu một ngày mới</p>
                </div>
                <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
                  <div class="col-12 col-xl-3 ">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Pic1.png" />
                  </div>
                  <div class="col-12 col-xl-3">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Pic2.png" />
                  </div>
                  <div class="col-12 col-xl-3">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Pic3.png" />
                  </div>
                </div>
                
                





                
                `);
          } else if (allConditionsMet1) {
            returnResult.html(`<div class ="headline my-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_RosaMagnolia_Headline.png" />
          </div>
          <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
            <h4>Mùi hương hoàn hảo</h4>
            <h4>dành cho bạn là</h4>
            <h5> Thanh thoát - Quyến rũ
            </h5>
            <p> Có thể không sở hữu vẻ đẹp sắc sảo nhưng bạn rất luôn biết cách xuất hiện cùng vẻ ngoài chỉnh chu, lộng lẫy nhất có thể khiến người xung quanh phải ngưỡng mộ. Ở bạn pha trộn chút dễ thương và kiêu sa khó cưỡng. Vì thế, Refre Natural Rosa Magnolia với sự nở rộ của  Hồng Mộc Lan giữa mùa xuân chính là mùi hương thể hiện trọn vẹn đặc trưng ấy dành cho bạn. 
            </p>
          </div>
          <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
            <div class="col-12 col-xl-3 ">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_RosaMagnolia_Pic1.png" />
            </div>
            <div class="col-12 col-xl-3">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_RosaMagnolia_Pic2.png" />
            </div>
            <div class="col-12 col-xl-3">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_RosaMagnolia_Pic3.png" />
            </div>
          </div>`);
          } else if (allConditionsMet2) {
            returnResult.html(`<div class ="headline my-3">
                      <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Rosemary_Headline.png" />
                    </div>
                    <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
                      <h4>Mùi hương hoàn hảo</h4>
                      <h4>dành cho bạn là</h4>
                      <h5>Thanh dịu - Nhẹ nhàng  </h5>
                      <p> Bạn như bé mèo  u xinh đẹp, khoan khoái lăn xuống giường, từ tốn chuẩn bị một ngày mới tràn trề năng lượng. Không cần trang điểm cầu kì, chỉ với áo quần tươm tắt, bạn luôn ánh lên nét đẹp bởi sự thoải mái, khỏe khoắn, tự do. Refre Natural Rosemary chính là tinh thần dành cho bạn. 
                      </p>
                    </div>
                    <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
                      <div class="col-12 col-xl-3 ">
                        <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Rosemary_Pic1.png" />
                      </div>
                      <div class="col-12 col-xl-3">
                        <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Rosemary_Pic2.png" />
                      </div>
                      <div class="col-12 col-xl-3">
                        <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Rosemary_Pic3.png" />
                      </div>
                    </div>`);
          } else if (allConditionsMet3) {
            returnResult.html(`<div class ="headline my-3">
                  <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Woody_Headline.png" />
                </div>
                <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
                  <h4>Mùi hương hoàn hảo</h4>
                  <h4>dành cho bạn là</h4>
                  <h5>Ngọt ngào - Ấm áp </h5>
                  <p> Bạn là người có được niềm vui từ những hành động tử tế nhỏ nhặt rất đỗi đời thường. Bạn luôn lan tỏa sự yêu thương tới những người xung quanh. Vậy thì một mùi hương ngọt ngào và ấm áp từ Refre Natural Woody đích thị là sự miêu tả hoàn hảo nhất dành cho bạn. 

                  </p>
                </div>
                <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
                  <div class="col-12 col-xl-3 ">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Woody_Pic1.png" />
                  </div>
                  <div class="col-12 col-xl-3">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Woody_Pic2.png" />
                  </div>
                  <div class="col-12 col-xl-3">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Woody_Pic3.png" />
                  </div>
                </div>`);
          } else if (allConditionsMet4) {
            returnResult.html(`<div class ="headline my-3">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_BabyPowder_Headline.png" />
            </div>
            <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
              <h4>Mùi hương hoàn hảo</h4>
              <h4>dành cho bạn là</h4>
              <h5>Nhẹ nhàng – Tinh tế
              </h5>
              <p> Duyên dáng, nhẹ nhàng là tính từ ánh lên nét đẹp của bạn. Đối với bạn, điều quan trọng nhất của mùi hương là để lại ấn tượng tinh tế nhưng lâu dài. Refre Whitening Perfume Baby Powder là lựa chọn dành cho bạn với 3 tầng hương từ Cam Bergamot, Ngọc Lan Tây dịu lành, phảng phất sự lôi cuốn khó cưỡng của Hoa Hồng và Linh Lan ở tầng hương giữa. Cuối cùng, kết thúc bằng sự đáng yêu nhưng không kém phần gợi cảm cùng chút hương phấn từ Đậu TonKa và Hoa Vòi Voi.

              </p>
            </div>
            <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
              <div class="col-12 col-xl-3 ">
                <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_BabyPowder_Pic1.png" />
              </div>
              <div class="col-12 col-xl-3">
                <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_BabyPowder_Pic2.png" />
              </div>
              <div class="col-12 col-xl-3">
                <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_BabyPowder_Pic3.png" />
              </div>
            </div>`);
          } else if (allConditionsMet5) {
            returnResult.html(`<div class ="headline my-3">
          <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sophis_Headline.png" />
        </div>
        <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
          <h4>Mùi hương hoàn hảo</h4>
          <h4>dành cho bạn là</h4>
          <h5>Trang nhã - tinh tế
          </h5>
          <p>
          Trưởng thành và nữ tính chính là tính từ dành cho riêng bạn. Sự thanh tao và nhã nhặn toát lên từ chính bạn chính là lợi thế đặc trưng giúp bạn trở nên thu hút. Vậy nên, Refre Natural Sophis là tạo tác dành cho riêng bạn. Hòa quyện 3 tầng hương thanh mát từ Táo và Vải đan xen cùng Hoa Ly và Diên Vĩ đầy  tinh tế. Kết thúc cùng khí chất lôi cuốn riêng biệt từ nốt hương Bách và Xạ Hương giúp bạn ghi điểm nơi mọi ánh nhìn.

          </p>
        </div>
        <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
          <div class="col-12 col-xl-3 ">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sophis_Pic1.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sophis_Pic2.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sophis_Pic3.png" />
          </div>
        </div>`);
          } else if (allConditionsMet6) {
            returnResult.html(`<div class ="headline my-3">
          <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Headline.png" />
        </div>
        <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
          <h4>Mùi hương hoàn hảo</h4>
          <h4>dành cho bạn là</h4>
          <h5>Sang trọng – Tán tỉnh
          </h5>
          <p>Bạn là fan của những mùi hương nước hoa classic? Phong cách bạn theo đuổi là sang trọng, tinh tế? Vậy thì đừng ngần ngại chọn ngay cho mình Refre Whitening Perfume Deluxe với 3 tầng hương từ Quả Cam tươi mát xen kẽ hương hoa Hồng, Violet và hoa Cam kiêu kỳ, cuối cùng hạ gục những người xung quanh với Hoắc Hương đan xen một chút Vani ẩn chứa sự sang trọng, lôi cuốn lạ thường.

          </p>
        </div>
        <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
          <div class="col-12 col-xl-3 ">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Pic1.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Pic2.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Pic3.png" />
          </div>
        </div>`);
          } else if (allConditionsMet7) {
            returnResult.html(`<div class ="headline my-3">
          <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sweetie_Headline.png" />
        </div>
        <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
          <h4>Mùi hương hoàn hảo</h4>
          <h4>dành cho bạn là</h4>
          <h5>Ngọt ngào – Nồng thắm
          </h5>
          <p> Bạn nổi bật với tính cách ngọt ngào, độc đáo và thú vị. Bạn có thể là một người mê phong cách thời trang tối giản nhưng không hề đơn điệu, thiếu sang trọng. Refre Whitening Perfume Sweetie là lựa chọn dành cho bạn với 3 tầng hương dịu ngọt từ Quả Cam và Mận hài hòa cùng chút nồng ấm của Hạnh Nhân, Hoa Ly và Vani. Cuối cùng, kết thúc bằng ánh nhìn gây thương nhớ với Xạ Hương cùng Hổ Phách kinh điển qua mọi nơi bạn đến.

          </p>
        </div>
        <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
          <div class="col-12 col-xl-3 ">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sweetie_Pic1.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sweetie_Pic2.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Sweetie_Pic3.png" />
          </div>
        </div>`);
          } else if (allConditionsMet8) {
            returnResult.html(`<div class ="headline my-3">
          <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_InLove_Headline.png" />
        </div>
        <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
          <h4>Mùi hương hoàn hảo</h4>
          <h4>dành cho bạn là</h4>
          <h5>Lãng mạn - Lôi cuốn
          </h5>
          <p> Bạn là một người cảm xúc, yêu thích sự lãng mạn,  mong muốn thể hiện sự nữ tính cùng vẻ đẹp lôi cuốn của mình đến người xung quanh. Vậy thì Refre Whitening Perfume In Love là mùi hương hoàn hảo cho riêng bạn. Mang đến 3 tầng hương như bản nhạc lãng mạn từ hoa Hồng Bulgary và Diên Vĩ sang trọng, theo ngay sau đó sự kết hợp giữa nốt xạ hương và Huệ Trắng vừa nữ tính vừa mạnh mẽ đưa âm hưởng lên cao trào và rồi kết thúc bằng sự ngọt ngào đắm say của hương Vani cùng cây cỏ.
          </p>
        </div>
        <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
          <div class="col-12 col-xl-3 ">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_InLove_Pic1.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_InLove_Pic2.png" />
          </div>
          <div class="col-12 col-xl-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_InLove_Pic3.png" />
          </div>
        </div>`);
          } 
          else if(allCondition9){
            returnResult.html(`<div class ="headline my-3">
            <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Headline.png" />
          </div>
          <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
            <h4>Mùi hương hoàn hảo</h4>
            <h4>dành cho bạn là</h4>
            <h5>Sang trọng – Tán tỉnh
            </h5>
            <p>Bạn là fan của những mùi hương nước hoa classic? Phong cách bạn theo đuổi là sang trọng, tinh tế? Vậy thì đừng ngần ngại chọn ngay cho mình Refre Whitening Perfume Deluxe với 3 tầng hương từ Quả Cam tươi mát xen kẽ hương hoa Hồng, Violet và hoa Cam kiêu kỳ, cuối cùng hạ gục những người xung quanh với Hoắc Hương đan xen một chút Vani ẩn chứa sự sang trọng, lôi cuốn lạ thường.
  
            </p>
          </div>
          <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
            <div class="col-12 col-xl-3 ">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Pic1.png" />
            </div>
            <div class="col-12 col-xl-3">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Pic2.png" />
            </div>
            <div class="col-12 col-xl-3">
              <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_Deluxe_Pic3.png" />
            </div>
          </div>`);
          }else if(allCondition10){
            returnResult.html(`
            
            <div class ="headline my-3">
                  <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Headline.png" />
                </div>
                <div class="container-content container d-flex flex-column align-items-center my-4 justify-content-center">
                  <h4>Mùi hương hoàn hảo</h4>
                  <h4>dành cho bạn là</h4>
                  <h5>Thuần khiết - sảng khoái</h5>
                  <p> Bạn thích sự ấm áp của những tia nắng mặt trời chan hòa và hít thở không khí trong lành vào sáng sớm. Tươi mát và thuần khiết của hương trà xanh từ Refre Natural Green Tea chính là chân ái mang lại cho bạn cảm giác nhẹ nhàng, thư thái và tràn đầy năng lượng để bắt đầu một ngày mới</p>
                </div>
                <div class="image-container container justify-content-center  flex-xl-row flex-sm-column  row">
                  <div class="col-12 col-xl-3 ">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Pic1.png" />
                  </div>
                  <div class="col-12 col-xl-3">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Pic2.png" />
                  </div>
                  <div class="col-12 col-xl-3">
                    <img src="/assets/images/Quiz/Trang Trac Nghiem/Answer_GreenTea_Pic3.png" />
                  </div>
                </div>
            `)
          }
      else{
        return "No information"
      }
        }
      }
      setTimeout(() => {
        result_data.empty();
      }, 3000);
    }, 2000);
    saveQuestionnaireState();
  }

  $("#handlesubmit").on("click", handleSubmit);
  loadQuestionnaireState();

  function cloneArray(arr) {
    return arr.map((obj) => ({ ...obj }));
  }
  $(".popup img:nth-child(3)").click(function() {
    $(".togglepopup").fadeToggle("slow");

  });
});
