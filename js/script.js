// Menu Open Button work 

const menuOpenButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu')
})


// Menu close Button work
const menuCloseButton = document.querySelector("#menu-close-button");

menuCloseButton.addEventListener('click', () => menuOpenButton.click())