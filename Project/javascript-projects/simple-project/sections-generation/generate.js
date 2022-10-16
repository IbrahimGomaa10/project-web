let form1 = document.forms[0]
let numberOfEles = document.querySelector("input[name='elements']")
let eleText = document.querySelector("input[name='texts']")
let options = document.querySelectorAll("select option")
let submitBtn = document.querySelector("input[name='create']")
let removeBtn = document.querySelector("input[name='remove']")
let results = document.querySelector(".results")


submitBtn.onclick = function(e) {
  e.preventDefault()
  for(let i = 0; i < numberOfEles.value; i++) {
    let createdDivs = document.createElement("div")
    createdDivs.textContent = eleText.value;
    results.appendChild(createdDivs)
  }
}
