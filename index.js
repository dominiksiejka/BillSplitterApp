const btn = document.querySelector(".calculation button");
const boxMessage = document.querySelector("div.boxMessage");
const p = document.querySelector(".boxMessage p");
const showResult = document.querySelector("#result");
const totalToPay = document.querySelector("input#total");
const peoplehowMany = document.querySelector("input#people");
const tipsSelect = document.querySelector("select#tip");

const createModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);
};
createModal();

const getDataFunc = () => {
  const totalVal = totalToPay.value;
  const peopleVal = peoplehowMany.value;
  const tipVal = tipsSelect.value;

  return { totalVal, peopleVal, tipVal };
};

const calcFunc = (input1, input2, input3) => {
  const result = (input1 * 1 + +input1 * +input3) / input2;

  return result.toFixed(2);
};

const handleTiming = (e) => {
  boxMessage.classList.remove("active");
  e.currentTarget.classList.remove("back-drop");
};
btn.addEventListener("click", function () {
  const modal = document.querySelector("div.modal");
  modal.classList.add("back-drop");
  const dataFromInputs = getDataFunc();
  const { totalVal, peopleVal, tipVal } = dataFromInputs;

  if (totalVal === "" && peopleVal === "" && tipVal === "") {
    alert("All inputs are required !");
  } else {
    const calculations = calcFunc(totalVal, peopleVal, tipVal);
    showResult.textContent = `$${calculations}`;
    boxMessage.classList.add("active");

    modal.addEventListener("click", handleTiming);

    totalToPay.value = "";
    peoplehowMany.value = "";
    tipsSelect.value = "";
  }
});
