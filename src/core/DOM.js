// custom jq styled util to manipulate DOM-tree

class DomNode {
    constructor(selector) {
        this.$el = typeof selector === "string" ? document.querySelector(selector) : selector
    }

    // append html layout in string format
    html(htmlString) {
        console.log('test', htmlString);
        if (typeof htmlString === "string") {
            this.$el.innerHTML = htmlString
            return this
            // chaining =)
        }
        return this.$el.outerHtml.trim()
    }

    // clears inner html
    clear() {
        this.html('')
        return this
    }

    // append child
    append = (node) => {
        if (Element.prototype.append) {
            this.$el.append(node.$el)
        } else {
            this.$el.appendChild(node.$el)
        }
        return this
    }
}

export function $(selector) {
    return new DomNode(selector)
}

// static methods

$.create = (tagName, classes = "") => {
    const element = document.createElement(tagName)

    if (classes && typeof classes === "string" && classes.length) {
        element.classList.add(classes)
    }
    return $(element)
}