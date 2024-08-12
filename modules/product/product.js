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

async addProduct(req,res) {
    try {
        const output = await productMSSql.addProduct(req.body)
        res.send(output)

    } catch(error) {
        console.log(error)
    }
}

async updateProduct(req,res) {
    try {
        const output = await productMSSql.updateProduct(req.body)
        res.send(output)

    } catch(error) {
        console.log(error)
    }
}

async deleteProduct(req,res) {
    const id = req.params.id
    try {
        if(!id) {
            console.log("id is not passed")
        }
        const output = await productMSSql.deleteProduct(id)
        res.send(output)

    } catch(error) {
        console.log(error)
    }
}
}

module.exports = new Product()