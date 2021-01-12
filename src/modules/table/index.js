import Table from './Table.js';

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
const reportTableHeads = [
  'ID',
  'VISIBLE HCF & UID BUTTONS ON REGISTRATION',
  'SMS API',
  'STOCK EFFECTIVE',
  'EMAIL ID 1',
  'EMAIL ID 2',
  'EMAIL ID 3',
  'MPCB CONSENT NO',
  'COMPANY NAME',
  'OFFICE NO',
  'TELEPHONE NO',
  'ADDRESS',
  'WEBSITE',
  'MANAGER NO',
];
const reportTableRows = [
  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    '1',
    'No',
    'sms api',
    '22-12-2020',
    'company1@gmail.com',
    'company2@gmail.com',
    'company3@gmail.com',
    '50',
    'Company One',
    '11111',
    '+91-1232-123-1212',
    'Gowalkoat road Chiplun',
    'companyone.com',
    'manager01',
  ],
  [
    '<i class="bi bi-pencil-square"></i>',
    '<i class="bi bi-trash-fill"></i>',
    '1',
    'No',
    'sms api',
    '22-12-2020',
    'company11@gmail.com',
    'company12@gmail.com',
    'company13@gmail.com',
    '52',
    'Company two',
    '11112',
    '+91-13232-123-1212',
    'Chiplun',
    'companytwo.com',
    'manager02',
  ],
];

const table = new Table('table01', tableHeads, tableRows);
const reportTable = new Table('reportTable', reportTableHeads, reportTableRows);

export { table, reportTable };
