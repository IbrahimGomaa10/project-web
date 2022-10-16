const inputBtn = document.querySelector(".todo-container #to-do-list")
const addBtn = document.querySelector(".todo-container .btn-add-to-do")
let todoContent = document.querySelector(".to-do-content")


addBtn.addEventListener("click", () => {
  inputBtn.innerHTML = ""
  addInput()
});

function addInput() {
  let inputDiv = document.createElement("div")
  inputDiv.classList.add("to-do")
  let para = document.createElement("p")
  let paraCont = document.createTextNode(inputBtn.value)
  para.appendChild(paraCont)
  const deleteBtn = document.createElement("span")
  let delCont = document.createTextNode("Delete")
  deleteBtn.appendChild(delCont)
  inputDiv.appendChild(para)
  inputDiv.appendChild(deleteBtn)
  todoContent.appendChild(inputDiv)
}

function deleteItem() {
  console.log(deleteBtn);
}

deleteItem()