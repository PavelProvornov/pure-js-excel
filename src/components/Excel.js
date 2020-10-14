import {
    $
} from "@core/DOM.js"

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options ? options.components : []
    }

    getAppHtmlLayout() {
        const $rootExcelElem = $.create('div', 'excel')

        // map to replace abstract class to created instance of class
        this.components = this.components.map(Component => {
            // creating root container for componet
            const $componentContainer = $.create('div', Component.className)
            // creating instance of the component and placing its layout to component root el
            const component = new Component($componentContainer)
            $componentContainer.html(component.toHtml())
            // then append to excel app
            $rootExcelElem.append($componentContainer)

            // retun createn instance of class, so components now is not array of Counstructors
            return component
        })
        return $rootExcelElem
    }

    render() {
        // render layout 
        this.$el.append(this.getAppHtmlLayout())

        // set all events listeners for every component
        this.components.forEach(component => {
            component.init()
        });
    }
}