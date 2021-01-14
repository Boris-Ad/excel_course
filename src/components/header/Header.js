import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent{
    static className = 'excel__header';
    constructor($root){
        super($root,{
           name:'Header',
            listeners:['click','input']
        });
    }
    toHTML(){
        return `
        <input type="text" class="input" value="New table">
        <div>
            <div class="button"><span class="material-icons">exit_to_app</span></div>
            <div class="button"><span class="material-icons">delete</span></div>
        </div>
        `;
    }
    onClick(e){
        console.log('Header click Ok!',this.name);
    }
    onInput(){
        console.log('Header input Ok!',this.name);
    }
}