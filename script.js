
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');

  menuButton.classList.toggle('active', isOpen);

  menuButton.setAttribute(
    'aria-expanded',
    String(isOpen)
  );

  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'fechar menu' : 'abrir menu'
  );
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.classList.remove('active');

    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'abrir menu');
  });
});
