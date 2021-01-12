class Table {
  constructor(id, heads, rows) {
    this.id = id;
    this.heads = heads;
    this.rows = rows;
  }
  render() {
    document.dispatchEvent(new Event('gridLoaded'));
    const table = `<div class="col-12 table-responsive"><table class="table table-hover table-sm" id="${
      this.id
    }">
            <thead>
              <th>Edit </th>
              <th>Delete </th>
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

export default Table;
