import { $ } from "../../core/dom";

const CODE = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
    <div class="cell" contenteditable=""></div>
    `;
}

function toCol(el,index) {
    
    return `
    <div class="column" data-type="resizable" >${el}<div class="col-resize" data-resize="col" data-col="${index}"></div>
    </div>
    `;
}

function createRow(content, info) {
    let resize = info ? '<div class="row-resize" data-resize="row"></div>': '';
    return `
    <div class="row" data-type="resizable">
      <div class="row-info">${info ? info : ''}${resize}</div>
      <div class="row-data" data-row="">${content}</div>
    </div>
    `;
}

function createTable(rowsCount = 15) {
    const colsCount = CODE.Z - CODE.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map((item, index) => String.fromCharCode(CODE.A + index))
        .map(toCol)
        .join('');

    rows.push(createRow(cols,null));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('');
        rows.push(createRow(cells,i + 1))
    }
    return rows.join('');
}

function resizeTable(e){
    if (e.target.dataset.resize) {

        document.ondragstart = () => false;

        let target = e.target;
        let parent = target.closest('[data-type="resizable"]');
        let indexCol = target.dataset.col;
        let rows = e.currentTarget.querySelectorAll('.row [data-row]');
        let [one, ...row] = rows;
        let width = '';
        let height = '';
        let tableHeight = e.currentTarget.clientHeight - 2 + 'px';
        let tableWidth = e.currentTarget.clientWidth - 2 + 'px';
        $(target).css({ opacity: 1 });
        let sideProp = target.dataset.resize === 'col' ? { height: tableHeight } : { width: tableWidth };
        $(target).css(sideProp);

        document.onmousemove = (e) => {
            if (target.dataset.resize === 'col') {
                let widthParent = $(parent).getCord().width;
                let result = e.clientX - $(parent).getCord().right;
                width = widthParent + result + 'px';
                $(target).css({ right: -result + 'px' });

            } else {
                let heightParent = $(parent).getCord().height;
                let result = e.clientY - $(parent).getCord().bottom;
                height = heightParent + result + 'px';
                $(target).css({ bottom: -result + 'px' });

            }
            document.onmouseup = () => {

                $(target).css({ opacity: null });
                if (target.dataset.resize === 'col') {
                    $(parent).css({ width: width });
                    row.forEach(item => item.children[indexCol].style.width = width);
                    $(target).css({ right: 0, height: null });
                } else {
                    $(target).css({ bottom: 0, width: null });
                    $(parent).css({ height: height });
                }
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
}

export {createTable,resizeTable};