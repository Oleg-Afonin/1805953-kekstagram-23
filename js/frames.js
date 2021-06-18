import {createDescription} from './data.js';
//Шаблон
const pictureContent = document.querySelector('#picture').content;
const picture = pictureContent.querySelector('a');
//Сюда вставляем клоны
const picturesList = document.querySelector('.pictures');


const picturesListFragment = document.createDocumentFragment();

const similarFragment = createDescription();

// Для каждой фотографии вставляется элемент из шаблона
similarFragment.forEach(({url, likes, comments}) => {
  const newElement = picture.cloneNode(true);

  newElement.querySelector('.picture__img').src = url;
  newElement.querySelector('.picture__likes').textContent = likes;
  newElement.querySelector('.picture__comments').textContent = comments.length;

  picturesListFragment.appendChild(newElement);
});

picturesList.appendChild(picturesListFragment);
