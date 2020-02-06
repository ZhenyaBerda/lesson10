'use strict';

const books = document.querySelector('.books'),
    book = document.querySelectorAll('.book');

//восстановление порядка книг
books.insertBefore(book[1], book[0]);
books.insertBefore(book[2], null);
books.insertBefore(book[4], book[3]);

//изменение картинки
const body = document.querySelector('body');
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// исправление заголовков
book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

// удаление рекламы
const adv = document.querySelector('.adv');
adv.remove();

// восстановление глав книги 2
let chapterList = document.querySelectorAll('.book ul')[1],
    chapter = chapterList.querySelectorAll('li');

// восстановление глав книги 2
chapterList.insertBefore(chapter[3], chapter[2]);
chapterList.insertBefore(chapter[6], chapter[4]);
chapterList.insertBefore(chapter[8], chapter[4]);
chapterList.insertBefore(chapter[2], chapter[10]);

// восстановление глав книги 5
chapterList = document.querySelectorAll('.book ul')[4];
chapter = chapterList.querySelectorAll('li');

chapterList.insertBefore(chapter[9], chapter[2]);
chapterList.insertBefore(chapter[2], chapter[6]);
chapterList.insertBefore(chapter[5], chapter[8]);

// добавление главы 8 в 6 книгу
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
chapterList = document.querySelectorAll('.book ul')[5];
chapter = chapterList.querySelectorAll('li');
console.log(chapter);
chapterList.appendChild(newChapter);
chapterList.insertBefore(chapter[9], null);