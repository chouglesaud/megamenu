const container = '#app';

const form = {
  'company-details': `<p>company detail form</p>`,
  'employee-details': `<p>employee detail form</p>`,
  'supplier-details': `<p>supplier detail form</p>`,
  'work-nature-master': `<p>work-nature-master form</p>`,
  'attendance-process-master': `<p>attendance-process-master form</p>`,
  'item-master': `<p>item-master form</p>`,
  'category-master': `<p>category-master form</p>`,
  'designation-master': `<p>designation-master form</p>`,
};
const allSubmenuLinks = document.querySelectorAll('.sub-menu a[data-report]');

allSubmenuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    loadFormBy(e.target.getAttribute('data-report'));
  });
});

function loadFormBy(name) {
  document.querySelector(container).innerHTML = form[name];
}
fetchForm();

function fetchForm() {
  fetch(
    'http://mbhmoffice.azurewebsites.net/simpl_frm_interface.aspx?aa=tx%2b0ioQ2cB1dPJNAio3plQ%3d%3d',
    {
      headers: {
        'Access-Control-Allow-Origin': 'http://mbhmoffice.azurewebsites.net',
      },
    }
  ).then((data) => {
    console.log(data);
  });
}
