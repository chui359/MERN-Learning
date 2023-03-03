const mongooose = require('mongoose')

const connectdb = async () => {
    try {
        const conn = await mongooose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectdb