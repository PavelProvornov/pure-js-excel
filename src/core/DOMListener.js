import {
    capitalize
} from "./utils"

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('no root element provided to constrictor')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const methodName = getMethodName(listener)
            if (!this[methodName]) {
                throw new Error(`method '${methodName}' is not implemented for component ${this.name}`)
            }
            this.$root.on(listener, this[methodName].bind(this))
        })
    }

    removeDOMListener() {
        // !TODO remove listener
    }
}

// utils

function getMethodName(eventName) {
    return `on${capitalize(eventName)}`
}