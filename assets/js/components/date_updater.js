function updateCopyright() {
  const currentYear = new Date().getFullYear();
  const copyringhtElement = document.querySelector('.footer__copy');
  copyringhtElement.textContent = `©${currentYear}, David Durán, Todos los derechos reservados.`;
}

export default updateCopyright;