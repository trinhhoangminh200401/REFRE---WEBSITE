import { questionnaireData } from "./mockData/quiz.js";

let newQuestionnaire = [];

$(document).ready(function () {
  const result_data = $(".render-result");
  $(".lazy").Lazy({
    afterLoad: function (element) {
      element.addClass("loaded");
    },
  });

  const errorElement = $("<span>").addClass("error-message");

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
        question: { ...questionnaireData[index] },
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
          " d-xl-flex flex-wrap w-50 mx-auto"
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
    }
  });

  function handleSubmit() {
    $(".custom-spinner-container").show();

    $(".cardContent__item > .error-message").remove();

    newQuestionnaire.forEach((question) => {
      const maxSelection = question.question.maxSelection;
      const selectedAnswers = question.answers.length;
      console.log(maxSelection);
      console.log(selectedAnswers);
      if (selectedAnswers !== maxSelection) {
        console.log("hello");
        errorElement.text(`Please select exactly ${maxSelection} answers.`);
        $(`.cardContent__item.cardContent__item-${question.index}`).append(
          errorElement
        );
      } else {
        errorElement.text(``);
      }
    });

    newQuestionnaire.forEach((question) => {
      const maxSelection = question.question.maxSelection;
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
    let announcementAppended = false;
    setTimeout(() => {
      $(".custom-spinner-container").hide();
      let annouce = $("<p>").addClass("white-color");
      console.log(annouce.length);

      if (!announcementAppended) {
        //  console.log(announcementAppended)
        result_data.append(annouce);
        if (
          newQuestionnaire.length <= 0 ||
          newQuestionnaire.length != questionnaireData.length
        ) {
          console.log("lỗi");

          annouce.text("yêu chọn câu trả lời đầy đủ");
          
        } else {
          newQuestionnaire.map((item, index) => {
            $(".render-result").hide();
   
            for (let j = 0; j < item.answers.length; j++) {
              if (
                item.answers[j] ==
                  ("Hương hoa trái cây" &&
                    "Hương kẹo ngọt" &&
                    "Hương hoa thơm nồng") &&
                ("Hướng nội sâu lắng" || "Hướng nội part time")
                 && ("Đi học, Đi làm" || "Hẹn hò,đi chơi") && ("Vintage nhẹ nhàng" || "Minimalism tối giản") && "Tưới mới lạc quan"
                ) {
                console.log("hello");
              }
            }
          });
        }

        announcementAppended = true; // Set the flag to indicate that the announcement has been appended
      }
    }, 2000);
  }

  $("#handlesubmit").on("click", handleSubmit);

  function cloneArray(arr) {
    return arr.map((obj) => ({ ...obj }));
  }
});
