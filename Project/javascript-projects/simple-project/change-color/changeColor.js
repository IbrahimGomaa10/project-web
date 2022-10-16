let letterHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let body = document.body
const btn = document.querySelector("#chncolor")
let res = []

for(let i = 0; i < 6; i++) {
  res.push(letterHex[Math.floor(Math.random() * letterHex.length)])
}
btn.onclick = function() {
  body.style.backgroundColor = `#${res.join("")}`
}
