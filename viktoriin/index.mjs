import data from './questions.json' assert {type: 'json'};
console.log(data);

const levelsX = 8;
const levelsY = 6;

const container = document.getElementById('image-container');
const image = document.getElementById('image');
const title = document.getElementById('title');

const cardWidth = 100 / levelsX;
const cardHeight = 100 / levelsY;

image.src = data.images[0].image;
title.innerHTML = data.images[0].question;

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
