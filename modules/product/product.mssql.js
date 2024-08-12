const mssqlcon = require('../../dbconnection')

class ProductMSSql {
    async getAllProducts() {
        const conn = await mssqlcon.getConnection()
        const res = await conn.request().execute("getAllProducts")
        return res.recordset;
    }

    async addProduct(prod) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("product_name", prod.product_name)
        .input("product_price", prod.product_price)
        .input("product_description", prod.product_description)
        .input("product_qty", prod.product_quantity)
        .execute("addProduct")
    }
    async updateProduct(prod) {
        const conn = await mssqlcon.getConnection()
        const res = await conn.request()
        .input("product_id", prod.product_id)
        .input("product_name", prod.product_name)
        .input("product_price", prod.product_price)
        .input("product_description", prod.product_description)
        .input("product_qty", prod.product_quantity)
        .execute("updateProduct")
    }

    async deleteProduct(id) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("product_id", id)
        .execute("deleteProduct")
    }

    async findProductById(id) {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request()
        .input("product_id", id)
        .execute("findProductById")

        return res.recordset;
    }
}

module.exports = new ProductMSSql()