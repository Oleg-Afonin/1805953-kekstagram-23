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

const getRandomArrayElement = (elements) => elements[Math.abs(Math.round(Math.random() * elements.length - 1))];

const getRandomPositiveInteger = (numberA, numberB) => {
  const lower = Math.ceil(Math.min(Math.abs(numberA), Math.abs(numberB)));
  const upper = Math.floor(Math.max(Math.abs(numberA), Math.abs(numberB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Создаётся по 4 комментария к каждой фотографии
const addComments = () => {
  const commentsPhoto = [];
  for (let index=1; index<=4; index++){

    counterComments += 1;

    const newComment = {
      id: counterComments,
      avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(FIRST_NAMES),
    };
    commentsPhoto[index] = newComment;
  }
  return commentsPhoto;
};

const createPhotoDescription = (indexPhoto) => ({
  id: indexPhoto,
  url: `photos/${indexPhoto}.jpg`,
  description: 'Описание фотографии',
  likes: getRandomPositiveInteger(15,200),
  comments: addComments(),
});

for(let index=1; index<=25; index++) {
  createPhotoDescription (index);
}
