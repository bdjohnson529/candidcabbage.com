---
---

function ToggleElement(element_id) {
  var element = document.getElementById(element_id);

  console.log(element.classList);

  if(element.classList.contains("d-none")) {
    ShowElement(element_id);
  } else {
    HideElement(element_id);
  }
}

function HideElement(element_id) {
  var element = document.getElementById(element_id);
  element.classList.add("d-none");
}

function ShowElement(element_id) {
  var element = document.getElementById(element_id);
  element.classList.remove("d-none");
}
