function renderTopBarWith(name, btnName) {
  return `<div class="top-bar row">
    <div class="form-label-container col-lg-9 col-md-9 col-sm-12">
      <h5>${name}</h5>
    </div>
    <div class="action-container col-lg-2 col-md-2 col-sm-12">
      <div class="back-btn-container btn-container">
        <button class="btn btn-sm">BACK</button>
      </div>
      <div class="add-btn-container btn-container">
        <button class="btn btn-sm btn-primary">${btnName}</button>
      </div>
    </div>
  </div>`;
}

export { renderTopBarWith };
