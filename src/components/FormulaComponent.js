import {
    ExcelComponent
} from "@core/ExcelComponent"

export class ExcelFormula extends ExcelComponent {
    // classname for root component node
    static className = "excel__formula"

    constructor($root) {
        super($root, {
            name: 'Formula',
            // list of listeners we are wil listen to 
            listeners: ["input", "click"]
        })
    }

    toHtml() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
            `
    }

    onInput() {
        console.log("oninput formula", event)
    }
    onClick() {
        console.log("onClick formula handler", event, event.target)
    }
}