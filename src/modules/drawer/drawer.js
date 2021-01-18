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
    <!-- option-section start -->
    <div class="option-section">
    <div id="accordion">
    <div class="card">
      <div class="card-header" id="headingOne">
        <span class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
          </button>
        </span>
      </div>
  
      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
        1
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <span class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Collapsible Group Item #2
          </button>
        </span>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
         2
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <span class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Collapsible Group Item #3
          </button>
        </span>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
          3
        </div>
      </div>
    </div>
  </div>
    </div>
    <!-- option-section end -->

  </div>
  `;
}

export { openDrawer, closeDrawer, renderDrawer };
