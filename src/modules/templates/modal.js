function renderModal() {
  return ` <div
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
      </div>`;
}

export { renderModal };
