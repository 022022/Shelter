const sliderLargeContentForModal = document.querySelector(".slider-large__content");
const sliderPetsSmall = document.querySelector("#slider__content");
//data is defined in pagination and slider files

const popUp = document.querySelector("#popup");

let cardsContainer = sliderLargeContentForModal || sliderPetsSmall;

cardsContainer.addEventListener('click', showModal);



function showModal(e){
    const index = e.target.closest('.card').id;

    //console.log(closestCard.id);
    popUp.classList.add("-show-modal");

    popUp.innerHTML =

    `
        <div class="modal-window__wrapper">
            <div class="modal-window__content">
                <button class="cards-nav modal-window__close"> X </button>

                <img src="${data[index].img}" class="modal-window__image"  alt="${data[index].name}">
                <div class="modal-window__pet-description">
                    <div class="modal-window__heading">
                        <h3>${data[index].name}</h3>
                        <h4>${data[index].type} - ${data[index].breed}</h4>
                    </div>

                    <h5>${data[index].description}</h5>

                    <ul>
                        <li><span class="h5-modal-window">Age:</span> ${data[index].age}</li>
                        <li><span class="h5-modal-window">Inoculations:</span> ${data[index].inoculations}</li>
                        <li><span class="h5-modal-window">Diseases:</span> ${data[index].deseases}</li>
                        <li><span class="h5-modal-window">Parasites:</span> ${data[index].parasites}</li>
                    </ul>
                </div>
            </div>
        </div>

    `
    const closeModalButton = document.querySelector('.modal-window__close');
    closeModalButton.addEventListener('click', closeModal);

    //closeModalButton.classList.add('-overlay-hovered');

    popUp.addEventListener("click", closeModal);

    document.body.classList.add('-hide-scroll');

    const content = document.querySelector('.modal-window__content');
    content.addEventListener('mouseover', hideHoverEffect);
    content.addEventListener('mouseout', showHoverEffect);

}

function closeModal(e){

    if(!e.target.closest('.modal-window__content') || e.target.closest('.modal-window__close')){
        popUp.classList.remove("-show-modal");
        popUp.innerHTML = '';
        document.body.classList.remove('-hide-scroll');
    }

}

function hideHoverEffect(e){
    //console.log('content.addEventListener mouseover', e.target.closest('.modal-window__close'));
    const closeModalButton = document.querySelector('.modal-window__close');
    closeModalButton.classList.remove('-overlay-hovered');

    //if(!e.target.closest('.modal-window__content') || e.target.closest('.modal-window__close')){
    //   const closeModalButton = document.querySelector('.modal-window__close');
    //    closeModalButton.classList.add('-overlay-hovered');
    //}
}

function showHoverEffect(e){
    //console.log('content.addEventListener mouseout', e.target.closest('.modal-window__close'));
    const closeModalButton = document.querySelector('.modal-window__close');
    closeModalButton.classList.add('-overlay-hovered');

}
