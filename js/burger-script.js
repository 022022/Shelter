const navigation = document.querySelector('.navigation');
const burger = document.querySelector(".burger");
const headerInnerPage = document.querySelector(".header-inner-page");
const startScreenCont = document.querySelector(".start-screen__content");

const  headerLogoArea = document.querySelector(".header__logo-area");

burger.addEventListener('click', openMenu);


function openMenu(){
    if (document.querySelector(".header-inner-page")){
        headerInnerPage.classList.toggle('-show-overflow');
    }

    navigation.classList.toggle('-show-nav');
    burger.classList.toggle('-turn-burger');
    headerLogoArea.classList.toggle('-move-logo');
    document.body.classList.toggle('-hide-scroll');

    if (startScreenCont){
        startScreenCont.classList.toggle('-margin-instead-of-burger');
    }




    //darkenPage = document.createElement('div');
    //darkenPage.classList.add('darken-page');
   // document.body.prepend(darkenPage);

   window.addEventListener('click', closeMenu);

}


function closeMenu(e){

    if ((!e.target.closest('.header__navigation')) && (!e.target.closest('.logo-subtitle'))){

        navigation.classList.remove('-show-nav');
        burger.classList.remove('-turn-burger');
        headerLogoArea.classList.remove('-move-logo');
        document.body.classList.remove('-hide-scroll');

        if (startScreenCont){
            startScreenCont.classList.remove('-margin-instead-of-burger');
        }

        window.removeEventListener('click', closeMenu);
    }

    if (e.target.closest('a')){
        navigation.classList.remove('-show-nav');
        burger.classList.remove('-turn-burger');
        headerLogoArea.classList.remove('-move-logo');
        document.body.classList.remove('-hide-scroll');

        startScreenCont.classList.remove('-margin-instead-of-burger');

        window.removeEventListener('click', closeMenu);
    }


}