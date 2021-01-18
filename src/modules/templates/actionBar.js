function renderReportPageActionBar() {
  document.querySelector('.main-section').innerHTML += `
    <div class="col-12" style="display: flex;justify-content: flex-start;padding: 5px 15px;">
      <div class="action-btn-container filter-container">
        <input id="filter" type="checkbox" class="filter btn btn-light btn-sm sec-action">
        <label for="filter" class="btn btn-light btn-sm sec-action"><span class="bi bi-funnel-fill icon"></span> <span>Filter</span><label>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-light btn-sm sec-action">
        <span class="bi bi-plus-square-fill icon"></span><span>Add Column</span>
        </button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-light btn-sm sec-action" id="printBtn">
        <span class="bi bi-printer-fill icon"></span> <span>Print</span>
        </button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-light btn-sm sec-action">
        <span class="bi bi-table icon"></span> <span>Export Excel</span>
        </button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-light btn-sm sec-action">
        <span class="bi bi-printer-fill icon"></span> <span>Search & Print</span>
        </button>
      </div>
      <div class="action-btn-container">
      <select class="btn btn-light btn-sm sec-action sec-action-select">
      <option value="mass-select"><span>Select</span></option>
      <option value="mass-edit"><span>Mass Edit</span></option>
      <option value="mass-delete"><span>Mass Delete</span></option>
      </select>
    </div>
    <div class="action-btn-container">
    <select class="btn btn-light btn-sm sec-action sec-action-select">
    <option value="sort"><span>Sort By</span></option>
    <option value="id"><span>id</span></option>
    <option value="email1"><span>Email 1</span></option>
    <option value="email2"><span>Email 2</span></option>
    <option value="email3"><span>Email 3</span></option>
    <option value="VISIBLE HCF & UID BUTTONS ON REGISTRATION"><span>VISIBLE HCF & UID BUTTONS ON REGISTRATION</span></option>
    </select>
  </div>
    
   </div>
   `;
}

export { renderReportPageActionBar };
