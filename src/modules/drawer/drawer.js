function openDrawer() {
  // const visibility = localStorage.getItem('drawer-visibility')
  document.querySelector('.drawer').style.display = 'block';
  document.querySelector('.main-section').style.width = '80%';
}

function closeDrawer() {
  document.querySelector('.drawer').style.display = 'none';
  document.querySelector('.main-section').style.width = '100%';
}

function renderDrawer() {
  document.querySelector('.drawer').innerHTML += `
  <div class="drawer-container">
    <div class="filter-header-container">
      <div class="filter-header">
          <h3>Filter By</h3>
      </div>
      <div class="close-btn-container">
        <button type="button" class="closebtn btn btn-light btn-sm sec-action">close</button>
      </div>
    </div>
  </div>
  `;
}

export { openDrawer, closeDrawer, renderDrawer };
