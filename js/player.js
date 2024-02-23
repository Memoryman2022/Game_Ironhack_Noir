class Player {
  constructor(gameScreen, right, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.right = right;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.right = `${right}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.right += this.directionX;
    this.top += this.directionY;

    if (this.right < 10) {
      this.right = 10;
    }
    if (this.right > this.gameScreen.offsetWidth - this.width - 10) {
      this.right = this.gameScreen.offsetWidth - this.width - 10;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.right = `${this.right}px`;
  }
}
