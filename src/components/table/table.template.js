const CODE = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
    <div class="cell" contenteditable=""></div>
    `;
}

function toCol(el) {
    return `
    <div class="column">${el}</div>
    `;
}

function createRow(content, info = '') {
    return `
    <div class="row">
      <div class="row-info">${info}</div>
      <div class="row-data">${content}</div>
    </div>
    `;
}

export function createTable(rowsCount = 15) {
    const colsCount = CODE.Z - CODE.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map((item, index) => String.fromCharCode(CODE.A + index))
        .map(toCol)
        .join('');

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('');
        rows.push(createRow(cells,i + 1))
    }
    return rows.join('');
}