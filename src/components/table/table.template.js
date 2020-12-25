const CODES = {
    A: 65,
    Z: 90
}

function toCell(content) {
    return `
    <div class="cell" contenteditable="">${content}</div>
    `
}

function toColumn(col) {
    return `
<div class="column">${col}</div>
`
}
function createRow(info, data) {
    return `
    <div class = "row">
    <div class="row-info">${info}</div>
    <div class="row-data">${data}</div>
    </div>`
}



export function createTable(rowsCount = 10) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map((item, index) => String.fromCharCode(CODES.A + index))
        .map(item => toColumn(item))
        .join('');

    rows.push(createRow('', cols));

    const cell = new Array(colsCount)
        .fill('')
        .map(item => toCell(item))
        .join('');

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(i + 1, cell));
    }

    return rows.join('');
}