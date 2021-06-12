import {getRandomPositiveInteger} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const FIRST_NAMES = [
  'Анна',
  'Мария',
  'Виктория',
  'Юлия',
  'Анжела',
  'Татьяна',
];

let counterComments = 0;


// Добавляется по 4 комментария к каждой фотографии
const getComments = () => {
  const comments = [];

  for (let index=0; index<4; index++){
    counterComments += 1;

    const newComment = {
      id: counterComments,
      avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
      message: COMMENTS[getRandomPositiveInteger(0, COMMENTS.length-1)],
      name: FIRST_NAMES[getRandomPositiveInteger(0, FIRST_NAMES.length-1)],
    };
    comments.push(newComment);
  }
  return comments;
};

// Создаётся описание к каждой фотографии
const generatingComments = (numberOfPhotos) => {
  const photoDescriptions = [];

  for(let indexPhoto=0; indexPhoto<numberOfPhotos; indexPhoto++) {

    const createPhotoDescription = {
      id: indexPhoto+1,
      url: `photos/${indexPhoto+1}.jpg`,
      description: 'Описание фотографии',
      likes: getRandomPositiveInteger(15,200),
      comments: getComments(),
    };
    photoDescriptions.push(createPhotoDescription);
  }
  return photoDescriptions;
};

export {generatingComments};
