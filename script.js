const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];


const shopItems = document.querySelector("#shop-item");

const searchBtn = document.querySelector('#search-btn');

const searchInput = document.querySelector('#search-input');

const textContainer = document.querySelector('.texts');



function makeCardByTemplate(title, description, tags, price, img) {

  const myCard = itemTemplate.content.cloneNod(true);

  myCard.querySelector('h1').textContent = title;
  myCard.querySelector('p').textContent = description;
  myCard.querySelector('img').src = img;
  myCard.querySelector('.price').textContent = price;
  myCard.querySelector('.tags').textContent = tags;

  return myCard;
};

items.forEach(function(item) {
  const Card = makeCardByTemplate (`${iten.title}, ${item.description}, ${item.tags}, ${item.price}, ${item.img}`);
  
  shopItems.append(Card);
});

/*Товары после применения поиска которые мы будем показывать пользователю*/

let currentState = [...items];


//Переменная с контейнером для товаров
const itemsContainer = document.querySelector('#shop-items');

//Шаблон для товаров
const itemTemplate = document.querySelector('#item-template');

//Текст если ни чего не найдено
const nothingFound = document.querySelector('#nothing-found');


//Функция для отрисовки
//В качестве параметров - товарыб которые нужно отсортировать

function renderItems(arr) {
  //Сбрасываем текст "Ничего не найдено" после предыдущего поиска
  nothingFound.textContent = "";

  //И чистим контейнер с товрами на случай если там чтото было

  itemsContainer.innerHTML = "";

  // Отрисовываем товары из переданного параметра arr
  arr.forEach((item) => {
    //Вызываем prepareShopItem для каждого товараб и подставляем результат в верстку
    itemsContainer.append(prepareShopItem(item));
  })
 
  //Если массив товаров пустой, отображаем текстб что ни чего не нашлось
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}


