const form = {
  'company-details': `
<div class="row row-container">
  <div class="col-lg-6 col-md-6 col-sm-12 form-row-container" id="app">
    <form class="my-form">
      <div class="form-group">
        <label for="company-name">Company Name</label>
        <input type="text" class="form-control" id="company-name" />
      </div>
      <div class="form-group">
        <label for="website">Website</label>
        <input type="text" class="form-control" id="website" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <textarea
          type="text"
          class="form-control"
          id="address"
          cols="30"
          rows="2"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="telphone-no">Telephone no</label>
        <input type="text" class="form-control" id="telphone-no" />
      </div>
      <div class="form-group">
        <label for="manager-no">Manager no</label>
        <input type="text" class="form-control" id="manager-no" />
      </div>
      <div class="form-group">
        <label for="office-no">Office no</label>
        <input type="text" class="form-control" id="office-no" />
      </div>
      <div class="form-group">
        <label for="mpcd-consent-no">MPCD Consent no</label>
        <input type="text" class="form-control" id="mpcd-consent-no" />
      </div>
      <div class="form-group">
        <label for="email-1">Email 1</label>
        <input type="text" class="form-control" id="email-1" />
      </div>
      <div class="form-group">
        <label for="email-2">Email 2</label>
        <input type="text" class="form-control" id="email-2" />
      </div>
      <div class="form-group">
        <label for="email-2">Email 2</label>
        <input type="text" class="form-control" id="email-2" />
      </div>
      <p><b>Stock Effective</b></p>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" />
      </div>
      <div class="form-group">
        <label for="sms-api">SMS API</label>
        <textarea
          class="form-control"
          name="sms-api"
          id="sms-api"
          cols="30"
          rows="2"
        ></textarea>
      </div>
    </form>
  </div>
</div>`,
  'employee-details': ` <div class="row row-container">
  <div
    class="col-lg-12 col-md-12 col-sm-12 form-row-container"
    id="app"
  >
    <form class="form-row">
      <div class="col-4 form-section">
        <div class="form-group">
          <label for="employee-no">Employee no</label>
          <input type="text" class="form-control" id="employee-no" />
        </div>
        <div class="form-group">
          <label for="aadhar-no">Aadhar no</label>
          <input type="text" class="form-control" id="aadhar-no" />
        </div>
        <div class="form-group">
          <label for="employee-name">Employee Name</label>
          <input type="text" class="form-control" id="employee-name" />
        </div>
        <div class="form-group">
          <label for="designation">Designation</label>
          <select class="custom-select form-control" id="designation">
            <option selected>Choose...</option>
            <option value="accountant">Accountant</option>
            <option value="manager">Manager</option>
            <option value="operator">Operator</option>
          </select>
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <textarea
            type="text"
            class="form-control"
            id="address"
            cols="30"
            rows="2"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="contact-no">Contact no</label>
          <input type="text" class="form-control" id="contact-no" />
        </div>
        <div class="form-group">
          <label for="mobile-no">Mobile no</label>
          <input type="text" class="form-control" id="mobile-no" />
        </div>
        <div class="form-group">
          <label for="whatsapp-no">WhatsApp no</label>
          <input type="text" class="form-control" id="whatsapp-no" />
        </div>
        <div class="form-group">
          <label for="reference-or-agency">Reference/Agency</label>
          <input
            type="text"
            class="form-control"
            id="reference-or-agency"
          />
        </div>
      </div>
      <div class="col-4 form-section">
        <div class="form-group">
          <label for="date-of-birth">Date Of Birth</label>
          <input type="date" class="form-control" id="date-of-birth" />
        </div>
        <div class="form-group">
          <label for="license-no">License no</label>
          <input type="text" class="form-control" id="license-no" />
        </div>
        <div class="form-group">
          <label for="license-authority">License Authority</label>
          <input
            type="text"
            class="form-control"
            id="license-authority"
          />
        </div>
        <div class="form-group">
          <label for="license-valid-till">License Valid Till</label>
          <input
            type="date"
            class="form-control"
            id="license-valid-till"
          />
        </div>
        <div class="form-group">
          <label for="medical-checkup-date">Medical Checkup Date</label>
          <input
            type="date"
            class="form-control"
            id="medical-checkup-date"
          />
        </div>
        <div class="form-group">
          <label for="sms-api">Liability</label>
          <textarea
            class="form-control"
            name="sms-api"
            id="sms-api"
            cols="30"
            rows="2"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="discontinue">Discontinue</label>
          <div id="discontinue" class="radiobox-container">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1"
                >Yes</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio2"
                >No</label
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>`,
  'shredder-summary-report': `
 
<form class="form-row ">

<div class="col-lg-3 col-md-3 col-sm-12 form-section grid-container">
  
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
  <input class="form-check-input" class="" type="checkbox" value="" id="defaultCheck1">
</div>
 
</div>
<div class="col-lg-9 col-md-9 col-sm-12 form-section grid" style="padding: 0px 10px;">
<div class="col-12"  style="display: flex;justify-content: flex-end;padding: 5px 20px;"><button type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" class="btn btn-success btn-sm">Add New</button></div>
   
   <div
   class="modal fade bd-example-modal-lg"
   id="exampleModal"
   tabindex="-1"
   role="dialog"
   aria-labelledby="exampleModalLabel"
   aria-hidden="true"
 >
   <div class="modal-dialog modal-lg" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Add New</h5>
         <button
           type="button"
           class="close"
           data-dismiss="modal"
           aria-label="Close"
         >
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form class="form">
           <div class="col-8 form-section">
             <div class="form-group">
               <label for="material">Material</label>
               <select
                 class="custom-select form-control"
                 id="material"
               >
                 <option selected>Select Material</option>
                 <option value="AMPOOLS">AMPOOLS</option>
                 <option value="INJECTION">INJECTION</option>
                 <option value="MIX-COVER">MIX COVER</option>
                 <option value="SALAINE-CAP">SALAINE CAP</option>
                 <option value="WASTE">WASTE</option>
               </select>
             </div>
             <div class="form-group">
               <label for="total-batch-no">Total Batch no</label>
               <input
                 type="text"
                 class="form-control"
                 id="total-batch-no"
               />
             </div>
             <div class="form-group">
               <label for="total-bag">Total Bag</label>
               <input
                 type="text"
                 class="form-control"
                 id="total-bag"
               />
             </div>
             <div class="form-group">
               <label for="total-kg">Total KG</label>
               <input
                 type="text"
                 class="form-control"
                 id="total-kg"
               />
             </div>
             <div class="form-group">
               <label for="quantity-per-hr-kg"
                 >Quantity Per HR. KG</label
               >
               <input
                 type="text"
                 class="form-control"
                 id="quantity-per-hr-kg"
               />
             </div>
             <div
               class="form-group"
               style="justify-content: flex-end"
             ></div>
           </div>
         </form>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-primary btn-sm">
           ADD
         </button>
       </div>
   </div>
 </div>
</div>
</form>`,
};
const allSubmenuLinks = document.querySelectorAll('.sub-menu a[data-id]');

let addGridBtn;

document.addEventListener('gridLoaded', () => {
  const material = document.querySelector('#material');
  const totalBatchNo = document.querySelector('#total-batch-no');
  const totalBag = document.querySelector('#total-bag');
  const totalKg = document.querySelector('#total-kg');
  const quantityPerHrKg = document.querySelector('#quantity-per-hr-kg');
  addGridBtn = document.querySelector('#addGrid');
});
class Table {
  constructor(id, heads, rows) {
    this.id = id;
    this.heads = heads;
    this.rows = rows;
  }
  render() {
    document.dispatchEvent(new Event('gridLoaded'));
    const table = `<div class="col-12"><table class="table table-hover table-sm" id="${
      this.id
    }">
          <thead>
            <th> </th>
            <th> </th>
            ${this._addHeads()}
          </thead>
          <tbody id="tableBody">
            ${this._addRows()}
          </tbody>
        </table>
      </div>`;
    document.querySelector('.grid').innerHTML += table;
  }
  _addHeads() {
    let tableHeads = '';
    this.heads.forEach((head) => {
      tableHeads += `<th scope="col">${head}</th>`;
    });
    return `${tableHeads}`;
  }
  _addRows() {
    let tableRows = '';
    const append = true;
    this.rows.forEach((row, index) => {
      tableRows += this.addRow(row, index, append);
    });
    return tableRows;
  }
  addRow(values, index, append) {
    let tableData = '';
    values.forEach((data) => {
      tableData +=
        index < 1 ? `<td scope="row">${data}</td>` : `<td>${data}</td>`;
    });
    if (append) {
      return `<tr>${tableData} </tr>`;
    }
    document.querySelector('#tableBody').innerHTML += tableData;
  }
}

const tableHeads = [
  'Material',
  'Total Batch No',
  'Total Bag',
  'Total KG',
  'Quantity Per HR.kg',
];
const tableRows = [
  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    'AMPOOLS',
    '12',
    '2',
    '120',
    '50',
  ],
  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    'INJECTION',
    '13',
    '3',
    '121',
    '51',
  ],
  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    'MIX COVER',
    '14',
    '4',
    '122',
    '52',
  ],
  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    'SALAINE CAP',
    '15',
    '5',
    '123',
    '53',
  ],

  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    'WASTE',
    '16',
    '5',
    '124',
    '54',
  ],
];

const table = new Table('table01', tableHeads, tableRows);

allSubmenuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const name = e.target.getAttribute('data-name');
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-form-type');
    loadFormBy(name, id, type);
  });
});

function loadFormBy(name, id, type) {
  const appId = '#app';
  const app = document.querySelector(appId);

  if (type === 'grid') {
    app.innerHTML = renderTopBarWith(name, 'SAVE');
    app.innerHTML += form[id];
    table.render();
  } else {
    app.innerHTML = renderTopBarWith(name, 'ADD');
    app.innerHTML += form[id];
  }
}
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
