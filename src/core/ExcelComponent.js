import {
    DOMListener
} from "./DOMListener";

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name
    }
    // return layout
    toHTML() {
        return ""
    }

    init() {
        this.initDOMListeners()
    }
}