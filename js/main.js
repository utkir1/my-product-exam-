let plusBtn = document.querySelector(".questions__item-btn")
let questionText = document.querySelector(".questions__item-desc")

plusBtn.addEventListener("click", function(){
  questionText.classList.toggle("visually-hidden")
  if(plusBtn.textContent == "+"){
    plusBtn.textContent = "-"
  } else {
    plusBtn.textContent = "+"
  }

})