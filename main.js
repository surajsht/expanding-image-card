let item = document.querySelectorAll(".item");

item[0].classList.add("active");

item.forEach(function (mainItem) {
  mainItem.addEventListener("click", function (e) {
    item.forEach(function (test) {
      test.classList.remove("active");
    });
    let getParentElement = e.target.parentElement;
    getParentElement.classList.add("active");
  });
});
