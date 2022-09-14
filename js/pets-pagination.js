const data = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

window.app = {};

let cardsOnPage;
let pages;

const sliderLargeContent =  document.querySelector(".slider-large__content");

const toFirstPageButton = document.querySelector("#ltlt");
const lessButton = document.querySelector("#lt");
const activePageCircle = document.querySelector("#cards-nav__active");
const greaterButton = document.querySelector("#gt");
const toLastPageButton = document.querySelector("#gtgt");


window.addEventListener("load", checkMedia);
//window.addEventListener("resize", checkMediaIfResized);

toFirstPageButton.addEventListener("click", loadFirst);
lessButton.addEventListener("click", loadPreviousPage);
greaterButton.addEventListener("click", loadNextPage);
toLastPageButton.addEventListener("click", loadLast);


function checkMediaIfResized (){
    console.log('resizing');


    if (window.screen.width <= 1279.5 && window.screen.width >= 767.5){
        checkMedia();
        console.log('breakpoint!');
    }
}


function checkMedia() {

  if (window.matchMedia("(max-width: 1279.5px)").matches) {
    cardsOnPage = 6;
    pages = 8;
  } else {
    cardsOnPage = 8;
    pages = 6;
  }

  if (window.matchMedia("(max-width: 767.5px)").matches) {
    cardsOnPage = 3;
    pages = 16;
  }

  //initial generate of all pages and the first page
  generatePage(0, generateCards(cardsOnPage, pages, data));

}

function generateCards(cardsOnPage, pages, data) {
  //forms array of arrays-pages with no repetitions - no two same pages across the whole array

  let arrPages = [];

  for (let i = 0; arrPages.length < pages; i++) {
    let arrCardsOnPage = [];

    while (arrCardsOnPage.length < cardsOnPage) {
      let randomIndex = Math.floor(Math.random() * data.length);
      if (!arrCardsOnPage.includes(randomIndex)) {
        arrCardsOnPage.push(randomIndex);
      }
    }

    if (arrPages.length > 1) {
      // if we already have smth in arrPages

      let cardIsRepeated = 0;
      let wholePageRepeated;

      outer: for (let i = 0; i < arrPages.length; i++) {
        for (let j = 0; j < arrCardsOnPage.length; j++) {
          if (arrPages[i][j] === arrCardsOnPage[j]) {
            cardIsRepeated++;
          }
        }

        //console.log(          cardIsRepeated >= arrCardsOnPage.length,          arrPages,          arrCardsOnPage        );

        if (cardIsRepeated >= arrCardsOnPage.length) {
          wholePageRepeated = true;

          //whole Page Is Repeated at least once
          break outer;
        }
        cardIsRepeated = 0;
      }

      if (!wholePageRepeated) {
        arrPages.push(arrCardsOnPage);
      }
    } else {
      // if we don't have anything in arrPages yet, let's put in first element
      arrPages.push(arrCardsOnPage);
    }
  }

  window.app.arrPages = arrPages;
  console.log(window.app.arrPages);
  return arrPages;
}


function generatePage(pageIndex, arrPages){


    console.log(pageIndex+1 + '   ' + arrPages[pageIndex]);

    let generatedPage =
    `
        <div class="slider-large__page" data-page="${pageIndex}">
            ${arrPages[pageIndex].map(item => generateOneCard(item)).join('\n')}
        </div>
    `
    activePageCircle.innerHTML = `<h4>${pageIndex + 1}</h4>`
    sliderLargeContent.innerHTML = generatedPage;
}



function generateOneCard(index){

    return `
        <div class="card" id="${index}">
            <img src="${data[index].img}" class="card__image" alt="${data[index].name}">
            <h4 class="card__text">${data[index].name}</h4>
            <button class="button button-secondary card__button">Learn more</button>
        </div>

        `
}


// controls handling


//lessButton.addEventListener("click", loadPreviousPage);
function loadPreviousPage(){
    const sliderLargePage = document.querySelector(".slider-large__page");
    const currentPage = +(sliderLargePage.dataset.page);

    if (currentPage - 1 > 0){
        // previous page is not the first
        generatePage(currentPage-1, window.app.arrPages);
        handleGreyOuts('middle');
    }

    if (currentPage - 1 === 0){
        loadFirst();
    }
}



//toFirstPageButton.addEventListener("click", loadFirst);
function loadFirst(){
    generatePage(0, window.app.arrPages);
    handleGreyOuts('first');
}


//greaterButton.addEventListener("click", loadNextPage);
function loadNextPage(e){

    const sliderLargePage = document.querySelector(".slider-large__page");
    const currentPage = +(sliderLargePage.dataset.page);

    if (currentPage + 1 < window.app.arrPages.length - 1){
        // next page is not the last
        generatePage(currentPage + 1, window.app.arrPages);
        handleGreyOuts('middle');
    }

    if (currentPage + 1 === window.app.arrPages.length - 1){
        // next page is the last -> grey buttons out
        loadLast();
    }
}



//toLastPageButton.addEventListener("click", loadLast);
function loadLast(){
        generatePage(window.app.arrPages.length - 1, window.app.arrPages);
        handleGreyOuts('last');
}




function handleGreyOuts(direction){

    if (direction === 'last'){
        greaterButton.classList.add("cards-nav__inactive");
        toLastPageButton.classList.add("cards-nav__inactive");
        lessButton.classList.remove("cards-nav__inactive");
        toFirstPageButton.classList.remove("cards-nav__inactive");
    }
    if (direction === 'middle'){
        greaterButton.classList.remove("cards-nav__inactive");
        toLastPageButton.classList.remove("cards-nav__inactive");
        lessButton.classList.remove("cards-nav__inactive");
        toFirstPageButton.classList.remove("cards-nav__inactive");
    }
    if (direction === 'first'){
        lessButton.classList.add("cards-nav__inactive");
        toFirstPageButton.classList.add("cards-nav__inactive");
        greaterButton.classList.remove("cards-nav__inactive");
        toLastPageButton.classList.remove("cards-nav__inactive");
    }
}
