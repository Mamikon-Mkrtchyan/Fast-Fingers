let playButton = document.getElementById("play")
let cont = document.getElementById("center")
let level = document.getElementById("level")
let lvl1 = document.getElementById("lvl1")
let lvl2 = document.getElementById("lvl2")
let lvl3 = document.getElementById("lvl3")
let figureJumping = document.getElementById("figure-jumping")
let countDown = document.getElementById("count-down")
let startCount = document.getElementById("start-count")
let keyboard = document.getElementById("keyboard")
let typing = document.getElementById("typing")
let highScore = document.getElementById("high-score")
let infoText = document.getElementById("info-text")
let input = document.getElementById("input")
let scoreEl = document.getElementById("scoreEl")
let timeEl = document.getElementById("time")
let gameOver = document.getElementById("gameOver")
let finalScore = document.getElementById("finalScore")
let menu = document.getElementById("menu")


playButton.addEventListener("click", startGame)
lvl1.addEventListener("click", level1)
lvl2.addEventListener("click", level2)
menu.addEventListener("click", menyu)







function startGame() {
  cont.style.display = 'None'
  level.style.display = "block"
  gameOver.style.display = "none"
}

function level1() {
  let falseEl
  level.style.display = "none"
  figureJumping.style.display = "none"
  keyboard.style.display = "block"

  let oneLetter = randomLetter()
  let letterEl = document.getElementById(oneLetter)
  letterEl.classList.add("selected")

  document.addEventListener("keyup", function (e) {

    if (falseEl) {
      setTimeout(() => falseEl.classList.remove("hit"), 100)
    }


    if (e.code == oneLetter) {
      letterEl.classList.remove("selected")
      oneLetter = randomLetter()
      letterEl = document.getElementById(oneLetter)
      letterEl.classList.add("selected")

    } else {
      falseEl = document.getElementById(e.code)

      falseEl.classList.add("hit")
    }
  })
  console.log(letterEl);



}


function randomLetter() {
  let index = Math.floor(Math.random() * letter.length)
  return letter[index]
}

function level2() {
  level.style.display = "none"
  figureJumping.style.display = "none"
  countDown.style.display = "block"


  let id = setInterval(function time() {
    if (startCount.innerHTML == 0) {
      clearInterval(id)
      game()
      startCount.style.display = "none"
      typing.style.display = "block"
    } else {
      startCount.innerHTML = startCount.innerHTML - 1

    }
  }

    , 1000)



}
function level3() {
  level.style.display = "none"
  figureJumping.style.display = "none"
}

function gameOverF() {
  gameOver.style.display = "block"
  finalScore.innerHTML = scoreEl.innerHTML
  typing.style.display = "none"


}

function game() {
  let time = 5
  let oneWord;
  let score = 0
  let hScore;

  timeEl.innerHTML = time
  if (localStorage.length == 0) {
    localStorage.score = 0
    console.log(localStorage)
  }
  hScore = localStorage.score
  oneWord = randomWord()
  infoText.innerHTML = oneWord
  highScore.innerHTML = hScore
  input.onchange = function () {
    if (input.value == oneWord) {
      score++
      time += 4
      timeEl.innerHTML = time
      if (score >= hScore) {
        hScore = score
        localStorage.score = hScore
        highScore.innerHTML = hScore

      }
      scoreEl.innerHTML = score
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
    } else {
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
      time -= 2
      if (time >= 0)
        timeEl.innerHTML = time
    }
  }
  timeEl.innerHTML = time;
  let id = setInterval(function () {
    if (time <= 0) {
      clearInterval(id)
      gameOverF()
      // gameOver.style.display = "block"
      //game.style.display = "none"

    } else {
      time--
      if (time >= 0)
        timeEl.innerHTML = time
    }
  }, 1000)



}



function randomWord() {
  let i = Math.floor(Math.random() * words.length)
  return words[i]


}


function menyu() {
  gameOver.style.display = "none"
  level.style.display = "block"
  figureJumping.style.display = "block"
}


