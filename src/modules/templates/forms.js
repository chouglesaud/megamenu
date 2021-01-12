const form = {
  'company-details': {
    'report-page': `
      <div class="col-lg-12 col-md-12 col-sm-12 form-section grid" style="padding: 0px 10px;">
      </div>
      `,
    'form-page': `
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
  },
  'employee-details': {
    'report-page': ``,
    'form-page': ` <div class="row row-container">
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
  },
  'shredder-summary-report': {
    'report-page': '',
    'form-page': `
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
<!-- modal -->
  </div>
  
  </form>`,
  },
};

export { form };
