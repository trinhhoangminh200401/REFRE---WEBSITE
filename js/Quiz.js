import { questionnaireData } from "./mockData/quiz.js";

let newQuestionnaire = [];

$(document).ready(function () {
  $(".lazy").Lazy({
    afterLoad: function (element) {
      element.addClass("loaded");
    },
  });

  const errorElement = $("<span>").addClass("error-message");

  function validateSelection(selectedItem, existingQuestion, maxSelection, index) {
    const elementOfList = existingQuestion ? existingQuestion.answers.length : 0;

    if (!selectedItem) {
      return "Please select an answer for the question.";
    }

    if (elementOfList >= maxSelection) {
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
    let existingQuestion = newQuestionnaire.find((question) => question.index === index);
    const validationError = validateSelection(selectedItem, existingQuestion, maxSelection, index);

    if (validationError) {
      console.log(validationError);
      return;
    }

    let updatedQuestionnaire = cloneArray(newQuestionnaire);

    if (!existingQuestion) {
      existingQuestion = {
        index,
        question: { ...questionnaireData[index] },
        answers: [],
      };
      updatedQuestionnaire.push(existingQuestion);
    }

    const answers = existingQuestion.answers;
    const isItemSelected = answers.includes(selectedItem);

    if (isItemSelected) {
      existingQuestion.answers = answers.filter((item) => item !== selectedItem);
    } else {
      if (answers.length < maxSelection) {
        existingQuestion.answers.push(selectedItem);
      }
    }

    newQuestionnaire = updatedQuestionnaire;
    updateStyling(index);
  }

  function updateStyling(index) {
    const existingQuestion = newQuestionnaire.find((q) => q.index === index);
  
    // Reset background color for all checkboxes
    $(`.content.content-${index} input[type="checkbox"]`).parent().css("background-color", "").css("color", "");
  
    if (existingQuestion) {
      existingQuestion.answers.forEach((item) => {
        const checkbox = $(`.content.content-${index} input[type="checkbox"][value="${typeof item === 'object' ? item.text : item}"]`);
        if (checkbox.prop("checked")) {
          checkbox.parent().css("background-color", "blue").css("color", "white");
        }
      });
    }
  }
    

  function renderData() {
    const questionId = $("#questionnaire-container");
  
    questionnaireData.forEach((question, index) => {
      const title = $("<h3>").text(question.question);
      const divContainer = $("<div>").addClass(`content content-${index}`);
  
      if (question.answers) {
        question.answers.forEach((item) => {
          const clickAnswer = $("<label>");
  
          let answerText, answerImage;
  
          if (typeof item === 'object') {
            // If item is an object, assume it has 'text' and 'image' properties
            answerText = $("<span>").text(item.text);
            answerImage = item.image ? $("<img>").attr("src", item.image).addClass("answer-image") : null;
          } else {
            // If item is not an object, assume it's a string
            answerText = $("<span>").text(item);
            answerImage = null;
          }
  
          // Always append both answerText and answerImage, even if answerImage is null
          clickAnswer.append(answerText, answerImage);
  
          const checkbox = $("<input>").attr({
            type: "checkbox",
            value: typeof item === 'object' ? item.text : item,
          });
  
          const existingQuestion = newQuestionnaire.find((q) => q.index === index);
  
          if (existingQuestion && existingQuestion.answers && existingQuestion.answers.some((ans) => {
            if (typeof item === 'object') {
              return ans.text === item.text;
            } else {
              return ans.text === item;
            }
          })) {
            checkbox.prop("checked", true);
            checkbox.parent().css("background-color", "blue");
            checkbox.parent().css("color", "white");
          } else {
            checkbox.parent().css("background-color", "");
            checkbox.parent().css("color", "");
          }
  
          checkbox.on("change", () => {
            const maxSelection = question.maxSelection;
            const validationError = validateSelection(typeof item === 'object' ? item.text : item, existingQuestion, maxSelection, index);
  
            if (validationError) {
              checkbox.prop("checked", false);
              return;
            }
  
            handleResponse(index, typeof item === 'object' ? item.text : item);
            updateStyling(index);
  
            // Disable checkboxes after reaching maxSelection
            const checkedCheckboxes = $(`.content.content-${index} input[type="checkbox"]:checked`);
            const uncheckedCheckboxes = $(`.content.content-${index} input[type="checkbox"]:not(:checked)`);
  
            if (checkedCheckboxes.length >= maxSelection) {
              uncheckedCheckboxes.prop("disabled", true);
              
            } else {
              
              uncheckedCheckboxes.prop("disabled", false);
            }
          });
  
          clickAnswer.prepend(checkbox);
  
          const answerItem = $("<div>")
            .css("cursor", "pointer")
            .append(clickAnswer);
  
          divContainer.append(answerItem);
        });
  
        divContainer.prepend(title);
        questionId.append(divContainer);
      }
    });
  }
  
  
  renderData();

  function handleSubmit() {
    $(".content > .error-message").remove();

    newQuestionnaire.forEach((question) => {
      const maxSelection = question.question.maxSelection;
      const selectedAnswers = question.answers.length;

      if (selectedAnswers !== maxSelection) {
        errorElement.text(`Please select exactly ${maxSelection} answers.`);
        $(`.content.content-${question.index}`).append(errorElement);
      }
      else{
        errorElement.text(``);
      }
    });

    newQuestionnaire.forEach((question) => {
      const maxSelection = question.question.maxSelection;
      question.answers.forEach((selectedItem) => {
        const existingQuestion = newQuestionnaire.find((q) => q.index === question.index);
        const validationError = validateSelection(selectedItem, existingQuestion, maxSelection, question.index);
        if (validationError) {
          console.log(validationError);
        }
      });
    });
    if(newQuestionnaire != []){
       newQuestionnaire.map(item=>{
        console.log
       })
    }
  }

  $("#handlesubmit").on("click", handleSubmit);

  function cloneArray(arr) {
    return arr.map(obj => ({ ...obj }));
  }
});
