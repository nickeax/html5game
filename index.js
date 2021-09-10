import { Component } from "./modules/component.js";

let gamePiece
const maxVel = 5

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      gamePiece.speedY -= maxVel - 1
      break
    case 'ArrowDown':
      gamePiece.speedY += maxVel - 1
      break
    case 'ArrowLeft':
      gamePiece.speedX -= maxVel
      if (gamePiece.speedX < -maxVel) gamePiece.speedX = -maxVel - 1
      break
    case 'ArrowRight':
      if (gamePiece.speedX > maxVel) gamePiece.speedX = maxVel - 1
      gamePiece.speedX += maxVel
      break
  }
})

document.addEventListener('keyup', e => {
  console.log(`STOP!`)
  gamePiece.speedX = 0
  gamePiece.speedY = 0
})

const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 800
    this.canvas.height = 800
    this.context = this.canvas.getContext('2d')
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    this.interval = setInterval(updateGameArea, 20)
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

function startGame() {
  gamePiece = new Component(30, 30, 10, 120, "red", myGameArea)
  myGameArea.start()
}

function updateGameArea() {
  myGameArea.clear()
  gamePiece.newPos()
  gamePiece.update()

}

startGame()