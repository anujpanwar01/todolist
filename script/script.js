const inputForm = document.querySelector(".input__forms--input");
// const checkMark = document.querySelector(".display__form--check");
const outputForm = document.querySelector(".list__input");
const btn = document.querySelector(".input__forms--submit");
const main = document.querySelector(".main");
const bigContainer = document.querySelector(".big__container");
const bigContainer1 = document.querySelector(".big__container--1");

//function
btn.addEventListener("click", function (e) {
  e.preventDefault();

  //check if input value is empty
  if (inputForm.value === "") {
    alert("Please add Your task");
    return inputForm.focus();
  }

  main.style.opacity = "100";
  bigContainer.style.display = "block";
  bigContainer1.style.display = "block";
  document.querySelector(".heading__tertiary--1").style.display = "block";

  const bigContainer2 = document.createElement("div");
  bigContainer2.className = "big__container--2";

  //lists
  const container = document.createElement("div");
  container.className = "list";

  const output = document.createElement("form");
  output.className = "display__form";

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const outputDisplay = document.createElement("input");
  outputDisplay.setAttribute("type", "text");
  outputDisplay.setAttribute("disabled", "false");
  outputDisplay.classList.add("list__input");
  //append
  outputDisplay.value = inputForm.value;
  // console.log(outputDisplay);
  //btn
  const btnContainer = document.createElement("div");
  btnContainer.className = "button button__edit";

  const btnContainer2 = document.createElement("div");
  btnContainer2.className = "button button__check";
  //btn delete
  const btnContainer1 = document.createElement("div");
  btnContainer1.className = "button button__trash";

  const iconEdit = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-pencil-square button__icon"
  viewBox="0 0 16 16"
>
  <path
    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
  />
  <path
    fill-rule="evenodd"
    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
  />
</svg>`;

  const checkMark = `<svg xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill="currentColor"
class="bi bi-check-square  button__icon"
viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg>`;

  const iconTrash = `<svg
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill="currentColor"
class="bi bi-trash button__icon"
viewBox="0 0 16 16"
>
<path
  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
/>
<path
  fill-rule="evenodd"
  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
/>
</svg>`;
  //move elements to container

  bigContainer1.appendChild(bigContainer2);
  bigContainer2.appendChild(container);
  container.appendChild(output);
  output.appendChild(checkbox);
  output.appendChild(outputDisplay);
  output.appendChild(btnContainer);
  output.appendChild(btnContainer2);
  output.appendChild(btnContainer1);
  btnContainer.innerHTML += iconEdit;
  btnContainer2.innerHTML += checkMark;
  btnContainer1.innerHTML += iconTrash;

  inputForm.value = "";

  //event to edit
  btnContainer.addEventListener("click", function () {
    outputDisplay.removeAttribute("disabled", "false");
    outputDisplay.focus();
    btnContainer.style.display = "none";
    btnContainer2.style.display = "block"; //add check mark div place of the edit div

    //when user click the check button then
    btnContainer2.addEventListener("click", function () {
      outputDisplay.setAttribute("disabled", "true");

      btnContainer2.style.display = "none";
      btnContainer.style.display = "block";
    });
  });
  //event on delete btn
  btnContainer1.addEventListener("click", function () {
    bigContainer2.remove(bigContainer2);
    opacity();
  });

  //checkbox button event
  checkbox.addEventListener("click", function () {
    bigContainer2.style.animation = "fadeOut 2s ";
    function dis() {
      bigContainer2.remove(bigContainer2);
    }

    setTimeout(dis, 1000);

    setTimeout(opacity, 1000);
  });
});

function opacity() {
  if (bigContainer1.children.length === 0) {
    main.style.opacity = 0;
  }
}
