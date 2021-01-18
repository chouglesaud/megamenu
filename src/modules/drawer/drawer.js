function openDrawer() {
  // const visibility = localStorage.getItem('drawer-visibility')
  document.querySelector('.drawer').style.display = 'block';
  document.querySelector('.main-section').style.width = '78%';
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
            Company Name
          </button>
        </span>
      </div>
  
      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
        <div class="key">
          <select class="btn btn-light btn-sm sec-action sec-action-select" title="contains value that is not present">
            <option>is</option>
            <option>is not</option>
            <option>contains value that is not present</option>
         </select>
        </div>
        <div class="value">
        <input type="text" class="form-control" placeholder="Enter Company Name"/>
        </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <span class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Website
          </button>
        </span>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
        <div class="key">
        <select class="btn btn-light btn-sm sec-action sec-action-select">
          <option>is</option>
          <option>is not</option>
          <option>isn't</option>
          <option>Today</option>
          <option>Tommorow</option>
          <option>Tommorow onwards</option>
          <option>Yesterday</option>
          <option>Between</option>
        </select>
      </div>
      <div class="value">
      <input type="text" class="form-control" placeholder="Enter Website"/>
      </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <span class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Stock Effective
          </button>
        </span>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
        <div class="key">
        <select class="btn btn-light btn-sm sec-action sec-action-select">
          <option>is</option>
          <option>is not</option>
          <option>isn't</option>
          <option>Today</option>
          <option>Tommorow</option>
          <option>Tommorow onwards</option>
          <option>Yesterday</option>
          <option>Between</option>
        </select>
      </div>
      <div class="value">
      <input type="date" class="form-control" placeholder="Enter Company Name"/>
      </div>
       </div>
      </div>
    </div>
    <!-- start -->
    <div class="card">
      <div class="card-header" id="headingOne">
        <span class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
            Email Id
          </button>
        </span>
      </div>
  
      <div id="collapse3" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
        <div class="key">
          <select class="btn btn-light btn-sm sec-action sec-action-select" title="contains value that is not present">
            <option>is</option>
            <option>is not</option>
            <option>contains value that is not present</option>
         </select>
        </div>
        <div class="value">
        <input type="text" class="form-control"/>
        </div>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
    </div>
    <!-- option-section end -->
   
  </div>

  </div>
  `;
}

export { openDrawer, closeDrawer, renderDrawer };
