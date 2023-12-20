import { questionnaireData } from "./mockData/quiz.js";

let newQuestionnaire = [];

$(document).ready(function () {
 
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
    const elementOfList = existingQuestion
      ? existingQuestion.answers.length
      : 0;

    if (!selectedItem) {
      return "Please select an answer for the question.";
    }

    if (elementOfList >= maxSelection && !existingQuestion.answers.includes(selectedItem)) {
      if (!$(`.content.content-${index} > span`).length) {
        errorElement.text(`Please select exactly ${maxSelection} answer(s).`);
        $(`.content.content-${index}`).append(errorElement);
      }
      
      return "Maximum selection reached!";
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
      console.log(validationError);
      return;
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
      updatedQuestionnaire[existingQuestionIndex].answers = answers.filter((item) => item !== selectedItem);
    } else {
      if (answers.length < maxSelection) {
        updatedQuestionnaire[existingQuestionIndex].answers.push(selectedItem);
        
      }
    }
  
    newQuestionnaire = updatedQuestionnaire;
  }
  
  // function updateStyling(index) {
  //   const existingQuestion = newQuestionnaire.find((q) => q.index === index);

  //   // Reset background color for all checkboxes
  //   $(`.content.content-${index} input[type="checkbox"]`)
  //     .parent()
  //     .css("background-color", "")
  //     .css("color", "");

  //   if (existingQuestion) {
  //     existingQuestion.answers.forEach((item) => {
  //       const checkbox = $(
  //         `.content.content-${index} input[type="checkbox"][value="${
  //           typeof item === "object" ? item.text : item
  //         }"]`
  //       );
  //       if (checkbox.prop("checked")) {
  //         checkbox
  //           .parent()
  //           .css("background-color", "blue")
  //           .css("color", "white");
  //       }
  //     });
  //   }
  // }

  function renderData() {
    const questionnaireContainer = $("#questionnaire-container");
    const containerCard = $("<div>")
      .addClass("container-card my-4")
      .attr("id", "container-card");
    const containerCardContent = $("<div>").addClass("container cardContent");

    questionnaireContainer.append(containerCard.append(containerCardContent));

    questionnaireData.forEach((question, index) => {
      const cardItem = $("<div>").addClass(`cardContent__item cardContent__item-${index}`);
      const questionWord = $("<div>").addClass(
        "question-word d-flex align-items-center"
      );
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
          "justify-content-center d-xl-flex flex-wrap w-50 mx-auto"
        );

        question.answers.forEach((item, itemIndex) => {
          //  console.log('item',item)
          const checkboxLabel = $("<label>").addClass("image-checkbox");
          const checkbox = $("<input>").attr({
            type: "checkbox",
            name: `answer-${index}`,
            value: item.text,  ////  note 
          });
          const checkboxImage = $("<img>")
            .addClass("img-responsive")
            .attr("src", item.image);
          const checkboxContent = $("<div>")
            .addClass("content")
            .text(item.text);

          checkboxLabel.append(
            checkbox,
            checkboxImage,
            $("<i>").addClass("fa fa-check hidden"),
            checkboxContent
          );

          flexContainer.append(
            $("<div>").addClass("nopad text-center m-1").append(checkboxLabel)
          );
        });

        card.append(flexContainer);
        cardItem.append(card);
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
          "justify-content-center d-xl-flex flex-wrap w-75 justify-content-center mx-auto"
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
              .addClass("nopadText text-center mx-3")
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
    
      const selectedCheckboxesLength = $(`.cardContent__item.cardContent__item-${index} input[type="checkbox"]:checked`);
      const unselectedCheckboxes = $(`.cardContent__item.cardContent__item-${index} input[type="checkbox"]:not(:checked)`);
      const maxSelection = questionnaireData[index].maxSelection;
    
      if ($checkbox.prop("checked") && selectedCheckboxesLength.length > maxSelection) {
        // If the checkbox is being checked and the maxSelection limit is reached, prevent further selection
        $(this).removeClass("image-checkbox-checked");
        $checkbox.prop("checked", false);
        unselectedCheckboxes.prop("disabled", true);
      } else if (!$checkbox.prop("checked") && selectedCheckboxesLength.length >= maxSelection) {
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
    $(".cardContent__item > .error-message").remove();

    newQuestionnaire.forEach((question) => {
      const maxSelection = question.question.maxSelection;
      const selectedAnswers = question.answers.length;
      console.log(maxSelection)
      console.log(selectedAnswers);
      if (selectedAnswers !== maxSelection) {
        console.log("hello")
        errorElement.text(`Please select exactly ${maxSelection} answers.`);
        $(`.cardContent__item.cardContent__item-${question.index}`).append(errorElement);
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
  
  }

  $("#handlesubmit").on("click", handleSubmit);

  function cloneArray(arr) {
    return arr.map((obj) => ({ ...obj }));
  }
});
