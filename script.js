'use strict';

const books = document.querySelector('.books'),
    book = document.querySelectorAll('.book');

//восстановление порядка книг
books.insertBefore(book[1], book[0]);
books.insertBefore(book[2], null);
books.insertBefore(book[4], book[3]);

//изменение картинки
document.querySelector('body').style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// исправление заголовков
book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

// удаление рекламы
document.querySelector('.adv').remove();

// восстановление глав книг
const chapterList = document.querySelectorAll('ul'),
    chapter = document.querySelectorAll('li');

// восстановление глав книги 2
chapterList[1].insertBefore(chapter[9], chapter[8]);
chapterList[1].insertBefore(chapter[8], chapter[16]);
chapterList[1].insertBefore(chapter[14], chapter[10]);
chapterList[1].insertBefore(chapter[12], chapter[14]);

// восстановление глав книги 5
chapterList[4].insertBefore(chapter[45], chapter[38]);
chapterList[4].insertBefore(chapter[39], chapter[38]);
chapterList[4].insertBefore(chapter[40], chapter[38]);
chapterList[4].insertBefore(chapter[41], chapter[44]);

// добавление главы 8 в 6 книгу
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
chapterList[5].appendChild(newChapter);
chapterList[5].insertBefore(chapter[56], null);