function renderReportPageActionBar() {
  document.querySelector('.grid').innerHTML += `
    <div class="col-12" style="display: flex;justify-content: flex-start;padding: 5px 20px;">
      <div class="action-btn-container">
        <button type="button" class="btn btn-sm btn-success" type="button" ><span class="bi bi-funnel-fill"></span> <span>Filter</span></button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-success btn-sm">
        <span class="bi bi-plus-square-fill"></span><span>Add Column</span>
        </button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-success btn-sm">
        <span class="bi bi-printer-fill"></span> <span>Print</span>
        </button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-success btn-sm">
        <span class="bi bi-table"></span> <span>Export Excel</span>
        </button>
      </div>
      <div class="action-btn-container">
        <button type="button" class="btn btn-success btn-sm">
        <span class="bi bi-printer-fill"></span> <span>Search & Print</span>
        </button>
      </div>
    
   </div>
   `;
}

export { renderReportPageActionBar };
