const mongoose = require('mongoose')

const HOST_NAME = '127.0.0.1'

const POST = '27017'

const DB_NAME = 'grms_app'

const DB_URL = `mongodb://${HOST_NAME}:${POST}/${DB_NAME}`


const connect = {
    init() {
        mongoose.connect(DB_URL, (err) => {
            if (err) {
                console.log(err)
            }
            console.log(`The DB is connecting success ~~~`)
        })
    }
}


//导出模块
module.exports = connect