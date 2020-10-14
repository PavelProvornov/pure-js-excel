import {
    $
} from "@core/DOM.js"

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options ? options.components : []
    }

    getLayoutHtml() {
        const $rootExcelElem = $.create('div', 'excel')

        for (let Component of this.components) {
            // creating root container for componet
            const $componentContainer = $.create('div', Component.className)
            // creating instance of the component and placing it to component root el
            const component = new Component($componentContainer)
            $componentContainer.html(component.toHtml())
            // then append to excel
            $rootExcelElem.append($componentContainer)
        }
        return $rootExcelElem
    }

    render() {
        this.$el.append(this.getLayoutHtml())
    }
}