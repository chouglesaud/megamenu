export const companyDetailsFormPage = `
<form class="form-row">
<div class="col-lg-9 col-md-9 col-sm-12 form-section grid" style="padding: 0px 10px;">
<div class="col-12"  style="display: flex;justify-content: flex-end;padding: 5px 20px;">
  <button type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" class="btn btn-success btn-sm">ADD NEW ENTRY</button>
 </div>
  
</div>
<div class="col-lg-3 col-md-3 col-sm-12 form-section grid-container">
  <p><b>Summary Report</b></p>
  <div class="form-group grid-form-group">
    <label for="date-of-birth">Date</label>
    <input
      type="date"
      class="form-control"
      id="date-of-birth"
    />
  </div>
  <div class="form-group grid-form-group">
    <label for="start-reading">Start Reading</label>
    <input
      type="text"
      class="form-control"
      id="start-reading"
    />
  </div>
  <div class="form-group grid-form-group">
    <label for="close-reading">Close Reading</label>
    <input
      type="text"
      class="form-control"
      id="close-reading"
    />
  </div>
  <div class="form-group grid-form-group">
    <label for="electricity-consumption"
      >Electricity Consumption</label
    >
    <input
      type="text"
      class="form-control"
      id="electricity-consumption"
    />
  </div>
  <div class="form-group grid-form-group">
  <label for="start-time"
    >Start Time</label
  >
  <input
    type="time"
    class="form-control"
    id="start-time"
  />
</div>
<div class="form-group grid-form-group">
  <label for="start-time"
    >Start Time</label
  >
  <input
    type="time"
    class="form-control"
    id="start-time"
  />
</div>
 ${renderModal()}
</div>
</form>`;
