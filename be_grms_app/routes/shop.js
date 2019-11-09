
const express = require('express')
const { shop } = require('../mongodb/index')

const router = express.Router()
router
    .get('/',async (req,res,next)=>{
        // console.log(req)
            let result = await shop.query(req.query.id)
            res.render('shop',{
                data:JSON.stringify({
                    //xhr.status:获取当前服务器的响应状态  200=>成功
                    status:result.status,
                    info:result.info,
                    res:result.result
                })
            })
    })
    .post('/',async (req,res,next)=>{
        let result = await shop.add( req.body )
        res.render('shop',{
            data:JSON.stringify({
                status:result.status,
                info:result.info
            })
        })
    })
    .put('/', async (req,res,next)=>{
    
        // console.log('data',req.query)
        let result = await shop.update( req.query )
        res.render('shop',{
            data:JSON.stringify({
                status:result.status,
                info:result.info
            })
        })
    })
    .delete('/', async (req,res,next)=>{
        // console.log(req.query.id)
        let result = await shop.del(req.query.id)
        res.render('shop',{
            data:JSON.stringify({
                status:result.status,
                info:result.info
            })
        })
    })


module.exports = router
