class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ?
            document.createElement(selector) :
            selector;
    }
    html(str) {
        if (typeof str === 'string') {
            this.$el.innerHTML = str;
            return this;
        }
        return this.$el.outerHTML.trim();
    }
    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }
    of(eventType, callback) {
        console.log('Off');
        this.$el.removeEventListener(eventType, callback);
    }
    getCord() {
        return this.$el.getBoundingClientRect()
    }
    css(styles = {}) {
        Object.keys(styles).forEach(keys => this.$el.style[keys] = styles[keys]);
    }


}
export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    let el = document.createElement(tagName);
    if (classes) el.classList.add(classes);
    return el;
}