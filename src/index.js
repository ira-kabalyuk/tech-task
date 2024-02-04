const closeBtn = document.querySelector('.navigation_closeButton');
const openBtn = document.querySelector('.navigation_openButton');
const navigation = document.querySelector('.navigation');
const layout = document.querySelector('.layout');

  openBtn.addEventListener('click', () => {
    navigation.classList.add('is-opened');
    layout.classList.add('overlay');
  });

  closeBtn.addEventListener('click', () => {
    navigation.classList.remove('is-opened');
    layout.classList.remove('overlay');
  });