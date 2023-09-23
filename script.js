const shopItems = document.querySelector("#shop-items");

const textContainer = document.querySelector('.texts');

//Переменная с контейнером для товаров
const itemsContainer = document.querySelector('#shop-items');

//Шаблон для товаров
const itemTemplate = document.querySelector('#item-template');

//Текст если ни чего не найдено
const nothingFound = document.querySelector('#nothing-found');

function makeCardByTemplate(title, description, tags, price, img) {

  const myCard = itemTemplate.content.cloneNode(true);

  myCard.querySelector('h1').textContent = title;
  myCard.querySelector('p').textContent = description;
  myCard.querySelector('img').src = img;
  myCard.querySelector('.price').textContent = price;
  myCard.querySelector('.tags').textContent = tags;

  return myCard;
};


const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
    rating: 4.4,
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
    rating: 3.1,
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
    rating: 5.0,
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
    rating: 4.7,
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
    rating: 4.9,
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
    rating: 3.2,
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
    rating: 2.9,
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
    rating: 3.4,
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
    rating: 4.8,
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
    rating: 3.2,
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
    rating: 3.7,
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
    rating: 4.1,
  },
];


items.forEach(function(item) {
  const Card = makeCardByTemplate(`${item.title}, ${item.description}, ${item.tags}, ${item.price}, ${item.img}`);
  
  shopItems.append(Card);
});

//Товары после применения поиска которые мы будем показывать пользователю
let currentState = [...items];

//Функция для отрисовки
//В качестве параметров - товарыб которые нужно отсортировать

function renderItems(currentState) {
  //Сбрасываем текст "Ничего не найдено" после предыдущего поиска
  nothingFound.textContent = "";

  //И чистим контейнер с товрами на случай если там чтото было
  itemsContainer.innerHTML = "";

  // Отрисовываем товары из переданного параметра arr
  currentState.forEach((item) => {
    //Вызываем prepareShopItem для каждого товара и подставляем результат в верстку
    itemsContainer.append(prepereShopItemShopItem(item));
  });
 
  //Если массив товаров пустой, отображаем текст, что ни чего не нашлось
  if (!currentState.length) {
    nothingFound.textContent = "Ничего не найдено";
  };
};

//Вызываем функцию для отрисовки в самом начале
renderItems(currentState);


//Импут для поиска
const searchInput = document.querySelector('#search=input');

//Кнопка
const searchBtn = document.querySelector("#search-btn");


//Фукция-хелпер для сортировки товара по олфавиту
function sortByAlphabet(a, b) {
  //Смотрим на title, если title первого ирвара алфавитно больше второго...
  if (a.title > b.title) {
    return 1;
  };

  //Если title второго товара больше
  if (a.title < b.title) {
    return -1;
  };
  //Если оно равны
  return 0;
  };

  //Вызываем функцию для отрисовки в самом начале
  //И тут же сортируем по алфавиту
  renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));


  searchBtn.addEventListener('click', function() {
  const searchText = searchInput.value;

});
  
//Функция для создания верстки конкретного товара
function prepereShopItem(shopItem) {
  //Деструктурируем свойства обьекта
  const {title, description, tags, img, price, rating} = shopItem;

  //Берем за основу шаблон товара
  const item = itemTemplate.content.cloneNode(true);

  //Наполняем его информацией из обьекта
  item.querySelector("h1").textContent = title;
  item.querySelector("p").textContent = description;
  item.querySelector("img").src = img;
  item.querySelector(".price").textContent = `${price}P`;

  //Находим контейнер для рейтинга
  const ratingContainer = item.querySelector('.rating');

  //Рисуем нужное количество звездочек
 for (let i = 0; i < rating; i++) {
  const star = document.createElement("i");
  star.classList.add("fa", "fa-star");
  ratingContainer.append(star);
  };
  //Находим шаблон для тегов
  const tagsHolder = item.querySelector(".tags");

  //Отрисовываем теги для твара
  tags.forEach((tag) => {
  const element = document.createElement("span");
  element.textContent = tag;
  element.classList.add("tag");
  tagsHolder.append(element);
  });
 //возвращаем HTML-элемент

  return item;
};



//функция для поиска по товарам(сбрасывает фильтр)
function applySearch() {
  //Взяли значения импута и "причеали" егоб привели к нижнему регистру, чтобы написание не мешало поиску
  const searchString = searchInput.value.trim().toLowerCase();

  //Нашли все товары в title
  searchString
  currentState = items.filter((el) => el.title.toLowerCase().includes(searchString));

  //Отсортировали их по алфавиту
  currentState.sort((a, b) => sortByAlphabet(a, b));

  //Отрисовали результаты поиска
  renderItems(currentState);

  //По умолчанию сортировка по алфавиту
  sortControl.selectedIndex = 0;
};

//Обработчик при клике на кнопку поиск
searchBtn.addEventListener("click", applySearch);

//Обработчик события поиска при взаимодействии с импутом
searchInput.addEventListener("search", applySearch);


//Скелет с опциями сортировки
const sortControl = document.querySelector("#sort");

//Обработчик события выбора опции из скелета
sortControl.addEventListener("change", (event) => {
  //Атрибут value опции скелета, чтобы выбрал пользователь
  const selectedOption = event.target.value;

  //В зависимости от вида сортировки упорядочиваем массив товаров
  switch(selectedOption) {
    case "expensive": {
      //сначала дорогие
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      //сначала дешевые
      currentState.sort((a, b) => a.price - b.price);
      break;
    }

    case "alphabet": {
      //по алфавиту
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
    }
  }

  //Массив упорядочили - осталось его отрисовать

  renderItems(currentState);
});
