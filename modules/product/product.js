const productMSSql = require('./product.mssql')

class Product {
async getAllProducts(req,res) {
    try {
        const output = await productMSSql.getAllProducts()
        res.send(output)

    } catch(error) {
        console.log(error)
    }
}
}

module.exports = new Product()