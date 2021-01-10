//Delgetstei ajillah controller
var uiController = (function () {})();
//Sanhuutei ajillah controller
var financeController = (function () {})();
//Program holboh controller
var appController = (function (fnCtrl, uiCtrl) {
  var ctrlAddItem = function () {
    // 1. Oruulah ogogdliig delgetsees olj avna
    console.log("Delgetsnees ogogdoliig avah heseg");
    // 2. Olj avsan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna
    // 3. Olj avsan ogogdluudee web deeree tohiroh hesegt gargaj ogno
    // 4. Tosviig tootsno
    // 5. Etssiin uldegdel , tootsoog delgetsend gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(financeController, uiController);
