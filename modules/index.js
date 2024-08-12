class Module {
    constructor(app) {
        this.app =app
    }

    init() {
        const productController = require('./product/product.controller')
        new productController(this.app)
    }
}

module.exports = Module