import {
  renderModal,
  renderReportPageActionBar,
  renderTopBarWith,
  form,
} from './src/modules/templates/index.js';

import { table, reportTable } from './src/modules/table/index.js';

const allSubmenuLinks = document.querySelectorAll('.sub-menu a[data-id]');

allSubmenuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const name = e.target.getAttribute('data-name');
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-form-type');
    loadFormPageBy(name, id, type);
  });
});

function loadFormPageBy(name, id, type) {
  const appId = '#app';
  const app = document.querySelector(appId);

  if (type === 'grid') {
    app.innerHTML = renderTopBarWith(name, 'SAVE');
    app.innerHTML += form[id]['form-page'];
    app.innerHTML += renderModal();
    table.render();
  } else {
    app.innerHTML = renderTopBarWith(name, 'ADD');
    app.innerHTML += form[id]['form-page'];
  }
}
function loadReportPageBy(name, id) {
  const appId = '#app';
  const app = document.querySelector(appId);
  app.innerHTML = renderTopBarWith(name, 'ADD NEW');
  app.innerHTML += form[id]['report-page'];
  renderReportPageActionBar();
  reportTable.render();
}
