const levelsX = 6;
const levelsY = 6;

const container = document.getElementById('image-container');
const image = document.getElementById('image');
const title = document.getElementById('title');
const buttonNext = document.getElementById('button-next');
const buttonShow = document.getElementById('button-show');

const images = [
  {
    file: 'AT.JPG',
    name: 'Alar Tetting',
  },
  {
    file: 'GP.jpg',
    name: 'Gerli Pajula',
  },
  {
    file: 'HA.JPG',
    name: 'Helen Arukaev',
  },
  {
    file: 'HO.jpg',
    name: 'Harri Ohaka',
  },
  {
    file: 'HP.jpg',
    name: 'Helen Potman',
  },
  {
    file: 'JP.JPG',
    name: 'Julia Polikašova',
  },
  {
    file: 'KK.JPG',
    name: 'Kairi Kuldmets',
  },
  {
    file: 'NP.JPG',
    name: 'Nikolai Põld',
  },
  {
    file: 'TS.JPG',
    name: 'Tanel Sepajõe',
  },
];

const cardWidth = 100 / levelsX;
const cardHeight = 100 / levelsY;

class Game {
  constructor() {
    this.lvl = 0;
    this.loadNextLevel();
  }

  showImage() {
    let cards = document.getElementsByClassName('card');
    for (let i = cards.length - 1; i >= 0; i--) {
      cards[i].remove();
    }
    title.innerHTML = images[this.lvl-1].name;
    if (this.lvl == images.length) buttonShow.style.display = "none";
  }

  loadNextLevel() {
    let cards = document.getElementsByClassName('card');
    for (let i = cards.length - 1; i >= 0; i--) {
      cards[i].remove();
    }

    image.src = `images/${images[this.lvl].file}`;
    title.innerHTML = `Kes on pildil?`;
    for (let y = 0; y < levelsY; y++) {
      for (let x = 0; x < levelsX; x++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.style.width = `${cardWidth}%`;
        card.style.height = `${cardHeight}%`;
        card.style.left = `${cardWidth * x}%`;
        card.style.top = `${cardHeight * y}%`;
        card.addEventListener('click', () => {
          card.remove();
        });
        card.innerHTML = `<div>${y * levelsX + x + 1}</div>`;
        container.append(card);
      }
    }
    this.lvl++;
    if (this.lvl == images.length) buttonNext.style.display = "none";
  }
}

const game = new Game();
buttonNext.addEventListener('click', () => game.loadNextLevel());
buttonShow.addEventListener('click', () => game.showImage());
