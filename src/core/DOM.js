// custom jq styled util to manipulate DOM-tree

class DomNode {
    constructor($el) {
        this.$el = $el
    }
}

export function $() {
    return new DomNode()
}

$.create = (tagName, classes = "") => {
    const element = document.createElement(tagName)

    if (classes && typeof classes === "string" && classes.length) {
        element.classList.add(classes)
    }
    return element
}

$.find = (selector) => {
    const element = document.querySelector(selector)
    return element
}