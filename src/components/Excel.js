export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options ? options.components : []
    }

    getLayoutHtml() {
        const $rootExcelElem = document.createElement('div')
        $rootExcelElem.classList.add('excel')

        for (let Component of this.components) {
            // creating root container for componet
            const $componentContainer = document.createElement('div')
            $componentContainer.classList.add(Component.className)

            // creating instance of the component and placing it to component root el
            const component = new Component($componentContainer)
            $componentContainer.innerHTML = component.toHtml()
            // then append to excel
            $rootExcelElem.append($componentContainer)
        }
        return $rootExcelElem
    }

    render() {
        this.$el.append(this.getLayoutHtml())
    }
}