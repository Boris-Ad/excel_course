import { capitalize } from "./util";

export class DomListener {
    constructor($root, listeners = []) {

        if (!$root) throw new Error('$root no are,Error');
        this.$root = $root;
        this.listeners = listeners;
       
    }
    initDomListener() {
      
       this.listeners.forEach(listener => {
           const method = getMethodName(listener)
            
           this.$root.on(listener,this[method]);
       })
    }
    removeDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
             
            this.$root.of(listener,this[method]);
        })
    }
}

function getMethodName(eventName){
return 'on' + capitalize(eventName);
}