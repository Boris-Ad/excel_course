import { capitalize } from "./utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) throw new Error('No $root!');
        this.$root = $root;
        this.listeners = listeners;

    }
    initDomListeners() {
        this.listeners.forEach(listener => {
            let method = getEventName(listener);
            if (!this[method]) throw new Error(`No ${method} in ${this.name}!`);
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[method]);
        })

    }

    removeDomListeners() {
        this.listeners.forEach(listener => {
            let method = getEventName(listener);
            this.$root.of(listener, this[method]);
        })

    }

}
function getEventName(eventName) {
    return 'on' + capitalize(eventName);
}