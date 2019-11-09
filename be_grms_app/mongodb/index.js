//引入connect模块

const connect = require('./connect')

const mongoose = require('mongoose')


connect.init()

//骨架处理，解构骨架

const { shopschema,userschema} = require('./schema')

//得到模型

const shopModel = mongoose.model('shops', shopschema)
const userModel = mongoose.model('users',userschema)

const db = {
    shop: {
        add( data ) {
            return new Promise((resolve, reject) => {
                console.log(data)
                const f = shopModel.find({ id: data.id }, (err, doc) => {
                    if(err){
                        console.log(err)
                        return
                    }
                    if (doc.length) {
                        resolve({
                            status: 300,
                            info: '店铺已存在！'
                        })
                    } else {
                        var shop = new shopModel(data)
                        // console.log(shop)
                        shop.save((err) => {
                            if (err) console.log(err)
                            resolve({
                                status: 200,
                                info: '添加成功',
                            })
                        })
                    }
                })
                // console.log(data)

            })
        },
        update( data ) { 
            return new Promise((resolve,reject)=>{
                shopModel.findById(data._id,(err,doc)=>{
                    for(var i in data){
                        doc[i] = data[i]
                    }
                    doc.save((err)=>{
                        if(err){
                            resolve({
                                status:304,
                                info:'网络错误修改失败'
                            })
                        }else{
                            resolve({
                                status:200,
                                info:'修改成功'
                            })
                        }
                    })
                })
            })
         },
        del( _id ) {
            return new Promise ((resolve,reject)=>{
                // console.log(_id)
                shopModel.findById(_id,(err,doc)=>{
                    console.log(doc)
                    if(err){
                        console.log(err)
                    }else{
                        if(doc){
                            doc.remove()
                            resolve({
                                status:200,
                                info:'删除成功！'
                            })
                        }else{
                            resolve({
                                status:304,
                                info:'Document Not Found!'
                            })
                        }
                    }
                })
            })
         },
        query( id ) {
            return new Promise((resolve, reject) => {
                // console.log(id)
                if(id){
                    shopModel.findById(id, (err, doc) => {
                        // console.log(id)
                        // console.log(123)
                        if (err) console.log(err)
                        resolve({
                            //xhr.status:获取当前服务器的响应状态  200=>成功
                            status: 200,
                            info: '查询成功',
                            result: doc
                        })
                    })
                }else{
                    shopModel.find({}, (err, doc) => {
                        // console.log(doc)
                        if (err) console.log(err)
                        resolve({
                            //xhr.status:获取当前服务器的响应状态  200=>成功
                            status: 200,
                            info: '查询成功',
                            result: doc
                        })
                    })
                }
            })
        }
    },
    user:{
        add( data ){
            return new Promise(( resolve,reject )=>{
                userModel.find({username:data.username},(err,doc)=>{
                    // console.log(doc)
                    if(err){
                        console.log(err)
                    }else{
                        if(doc.length){
                            if(doc[0].password == data.password){
                                resolve({
                                    status:200,
                                    info:'登入成功',
                                    state:true
                                })
                            }else{
                                resolve({
                                    status:200,
                                    info:'用户名或密码错误',
                                    state:false
                                })
                            }
                        }else{
                            let user = new userModel(data)
                            user.save(err=>{
                                if(!err){
                                    resolve({
                                        status:200,
                                        info:'注册成功',
                                        state:true
                                    })
                                }
                            })

                        }
                    }
                })
            })
        },
        update(){},
        del(){},
        query(){}
    }
}


//导出模块
module.exports = {
    shop: db.shop,
    user: db.user
}