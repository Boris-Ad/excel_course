import { $ } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable, resizeTable } from "./table.template";

export class Table extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
        this.$root = $root;
    }
    static className = 'excel__table';
    toHTML() {
        return createTable();
    }
    onMousedown(e) {
        return resizeTable(e);
        
      
    }
}
