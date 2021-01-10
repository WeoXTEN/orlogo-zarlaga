//Delgetstei ajillah controller
var uiController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },
    getDomStrings: function () {
      return DOMStrings;
    },
  };
})();
//Sanhuutei ajillah controller
var financeController = (function () {})();
//Program holboh controller
var appController = (function (fnCtrl, uiCtrl) {
  var DOM = uiController.getDomStrings();
  var ctrlAddItem = function () {
    // 1. Oruulah ogogdliig delgetsees olj avna
    console.log(uiController.getInput());
    // 2. Olj avsan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna
    // 3. Olj avsan ogogdluudee web deeree tohiroh hesegt gargaj ogno
    // 4. Tosviig tootsno
    // 5. Etssiin uldegdel , tootsoog delgetsend gargana
  };

  document.querySelector(DOM.addBtn).addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(financeController, uiController);
