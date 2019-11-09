const mongoose = require('mongoose')

const shopschema = new mongoose.Schema({
    id: String,
    name: String,
    tel: String,
    place: String,
    intro: String,
    slogan: String,
    value: Array,
    pinpai: Boolean,
    zhuansong: Boolean,
    xinkai: Boolean,
    waimai: Boolean,
    zhuanshi: Boolean,
    kaipiao: Boolean,
    peisongjia: String,
    qisongjia: String,
    startTime: String,
    endTime: String,
    imageUrl1:String,
    imageUrl2:String,
    imageUrl3:String,
})

module.exports = shopschema