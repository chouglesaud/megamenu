const reportList = document.querySelectorAll('.report-list');
const menuList = document.querySelectorAll('.report-panel #main-menu li');

menuList.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    const menuItem = e.target.getAttribute('data-submenu');
    setDisplayNone();

    document.querySelector(`.${menuItem}`).style = 'display: block';
  });
});

function setDisplayNone() {
  reportList.forEach((menu) => {
    menu.style = 'display: none';
  });
}
