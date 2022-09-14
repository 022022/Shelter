const data = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]





//async function getPets() {
//    const jsonFile = 'pets.json';
 //   const res = await fetch(jsonFile);
 //   const data = await res.json();
 //   initialGenerateCards(maxCardsInOneSlide, data);
//}


//  ************** determining number of cards depending on media  **************

const sliderContent = document.querySelector("#slider__content");

let maxCardsInOneSlide; // depends on media

let sliderCarousel; // get it after we have generated slider__carousel element

const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');


btnRight.addEventListener('click', moveRight);
btnLeft.addEventListener('click', moveLeft);


window.addEventListener("load", checkMedia);
//window.addEventListener("resize", checkMedia);



function checkMedia(){

    if (window.matchMedia('(max-width: 1279.5px)').matches){
        maxCardsInOneSlide = 2;
    }
    else{
        maxCardsInOneSlide = 3;
    }

    if (window.matchMedia('(max-width: 767.5px)').matches){
        maxCardsInOneSlide = 1;
    }

// why didn't else if work???

    initialGenerateCards(maxCardsInOneSlide, data);
}



//  ************** generating cards  **************



    function initialGenerateCards(maxCardsInOneSlide, data){

        const activeSlideIndexes = generateActiveItemIndexes(maxCardsInOneSlide, data);
        const slideLeftIndexes = generateSiblingItemIndexes(maxCardsInOneSlide, data, activeSlideIndexes);
        const slideRightIndexes = generateSiblingItemIndexes(maxCardsInOneSlide, data, activeSlideIndexes);


        sliderContent.innerHTML =
                `
            <div class="slider__carousel" id="slider__carousel">

                <div class="slide" id="slide__left">
                ${
                    slideLeftIndexes.map(item => generateOneCard(item)).join('\n')
                }
                </div>

                <div class="slide" id="slide__active">
                ${
                    activeSlideIndexes.map(item => generateOneCard(item)).join('\n')
                }
                </div>

                <div class="slide" id="slide__right">
                ${
                    slideRightIndexes.map(item => generateOneCard(item)).join('\n')
                }
                </div>
            </div>  `

            sliderCarousel = document.querySelector('#slider__carousel');

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


    function generateActiveItemIndexes(maxCardsInOneSlide, data){

        let result = [];

        while(result.length < maxCardsInOneSlide){

            let randomIndex = Math.floor(Math.random() * (data.length));
            if (!result.includes(randomIndex)){
                result.push(randomIndex);
            }
        }

        return result;
    }


    function generateSiblingItemIndexes(maxCardsInOneSlide, data, activeItemIndexes){
        let result = [];

        while(result.length < maxCardsInOneSlide){
            let randomIndex = Math.floor(Math.random() * (data.length));
            if (!activeItemIndexes.includes(randomIndex) && !result.includes(randomIndex)){
                result.push(randomIndex);
            }
        }

        return result;
    }


    // ************** moving  **************




    function moveRight(){
        sliderCarousel.classList.add("move-right");
        sliderCarousel.addEventListener('animationend', rewriteSlideActive);
        btnLeft.removeEventListener('click', moveLeft);
    }

    function moveLeft(){
        sliderCarousel.classList.add("move-left");
        sliderCarousel.addEventListener('animationend', rewriteSlideActive);
        btnRight.removeEventListener('click', moveLeft);
    }


function generateSiblingHTML(slideActive){
    const activeSlideIndexes = Array.from(slideActive.querySelectorAll('.card'))
    .reduce(function(result, item, index) {
        result[index] = +(item.id);
        return result;
    }, []);

    const siblingSlideIndexes = generateSiblingItemIndexes(maxCardsInOneSlide, data, activeSlideIndexes);

    return siblingSlideIndexes.map(item => generateOneCard(item)).join('\n');
}




    function rewriteSlideActive(e){

        const slideActive = document.querySelector('#slide__active');

        const slideRight = document.querySelector('#slide__right');
        const slideLeft = document.querySelector('#slide__left');


            if (e.animationName === 'move-right' || e.animationName === 'move-right-tablet' || e.animationName === 'move-right-mobile' ){
                slideActive.innerHTML = slideRight.innerHTML;
                sliderCarousel.classList.remove("move-right");

            }

            if (e.animationName === 'move-left' || e.animationName === 'move-left-tablet' || e.animationName === 'move-left-mobile' ){
                slideActive.innerHTML = slideLeft.innerHTML;
                sliderCarousel.classList.remove("move-left");
            }


            slideRight.innerHTML = generateSiblingHTML(slideActive);
            slideLeft.innerHTML = generateSiblingHTML(slideActive);

            btnRight.addEventListener('click', moveRight);
            btnLeft.addEventListener('click', moveLeft);

       sliderCarousel.removeEventListener('animationend', rewriteSlideActive);

    }
