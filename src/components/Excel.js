export class Excel {
    constructor(selector, options) {
        this.$el = selector
        this.components = options.components || []
    }
}