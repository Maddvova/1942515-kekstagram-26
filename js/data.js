import {getRandomArrayElement} from './util.js';
import {getRandomPositiveInteger} from './util.js';
const COUNT = 25;
const AVATARCOUNT = 6;
const MINLIKES = 15;
const MAXLIKES = 250;
const COMMENTSCOUNT = 6;
const ID = [];
const URLS = [];
const AVATARS = [];
const COMMENTS = [];
for(let i = 1; i<=COUNT; i++){
  ID.push(i);
  URLS.push( `photos/${i+1}.jpg`);
}
for(let i = 0; i<=AVATARCOUNT;i++){
  AVATARS.push( `avatar-${i+1}.jpg`);
}
const allDescriptions = [
  'Осень' ,
  'Поездка в даль' ,
  'Лучшие моменты в моей жизни' ,
  'Унылая пора',
  'Тёплые денёчки' ,
  'Опять поезда'
];
const allNames = [
  'Алексей' ,
  'Владимир',
  'Сергей' ,
  'Георгий' ,
  'Ирина' ,
  'Вероника'
];
const allMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Всё круто',
];


for (let i = 1;i <= COMMENTSCOUNT; i++)
{
  COMMENTS[i] = {id:getRandomArrayElement( ID),
    avatar:getRandomArrayElement(AVATARS),
    message:getRandomArrayElement(allMessages),
    name:getRandomArrayElement(allNames)
  };
}
const createReview = () => ({
  id:getRandomArrayElement( ID),
  url:getRandomArrayElement(URLS),
  description : getRandomArrayElement(allDescriptions),
  likes: getRandomPositiveInteger (MINLIKES,MAXLIKES),
  comments: getRandomArrayElement(COMMENTS)
});
export const allPosts = Array.from({length:10},createReview);
