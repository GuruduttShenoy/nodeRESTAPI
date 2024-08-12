const mssql = require('mssql')
require('dotenv').config()

class DBConnection {

    async getConnection() {
        try {
            return await mssql.connect({
                user: process.env.user,
                password: process.env.password,
                server: process.env.server,
                database:process.env.database,
                options: {
                    trustServerCertificate: true,
                    //prefixing + to convert it to integer
                    port:+process.env.port
                }
            })
        } catch(error) {
            console.log("connection error",error)
        }
    }
}

module.exports = new DBConnection();