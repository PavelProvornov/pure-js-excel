export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options ? options.components : []
    }

    getRoot() {
        const $root = document.createElement('div')
        return $root
    }

    render() {
        console.log(this.components);
        for (let Component of this.components) {
            const component = new Component()
            console.log(component, this, this.$el);
            this.$el.insertAdjacentHTML('afterbegin', component.toHtml())
        }
    }
}