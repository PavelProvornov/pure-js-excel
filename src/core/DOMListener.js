export class DOMListener {
    constructor($root) {
        if (!$root) {
            throw new Error('no root element provided to constrictor')
        }
        this.$root = $root
    }
}