class Table {
  constructor(id, heads, rows) {
    this.id = id;
    this.heads = heads;
    this.rows = rows;
  }
  render() {
    return `<div class="col-12">
        <table class="table table-hover table-sm" id="${id}">
          <thead>
            ${this._addHeads()}
          </thead>
          <tbody>
            ${this._addRows()}
          </tbody>
        </table>
      </div>`;
  }
  _addHeads() {
    let tableHeads = '';
    this.heads.forEach((head) => {
      tableHeads += `<th scop="col">${head}</th>`;
    });
    return `<tr>${tableHeads}</tr>`;
  }
  addRows() {
    let tableRows = '';
    this.rows.forEach((row) => {
      tableRows += '<tr>';
      row.forEach((data, index) => {
        if (index < 1) {
          tableRows += `<td scope="row">${data}</td>`;
        } else {
          tableRows += `<td>${data}</td>`;
        }
      });
      tableRows += '</tr>';
    });
  }
}
