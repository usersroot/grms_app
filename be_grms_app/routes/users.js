var express = require('express');
var router = express.Router();
const { user } = require('../mongodb/index')

const fs = require('fs')
const path = require('path')

var multer = require('multer');
let file_name = ''
let storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/info'))
    },
    //给上传文件重命名，获取添加后缀名
    filename: function(req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        //给图片加上时间戳格式防止重名名
        //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
        file_name = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
        cb(null, file_name);
        console.log('file_name', file_name)
    }
});
let upload = multer({
    storage: storage
});
/* GET users listing. */
router
  .get('/', async( req, res, next) =>{
    let result = await user.query()
  })
  .post('/',async ( req,res,next )=>{
    console.log( req.body )
    let result = await user.add(req.body)
    res.render('users',{
      data:JSON.stringify({
        status:result.status,
        info:result.info,
        state:result.state
      })
    })
  })
  .post('/photo',upload.any(),async(req,res,next)=>{
    console.log('req', req.body)
    
    // let result = await user.update(  )
    //     res.render('info', {
    //         data: JSON.stringify({
    //             status: 200,
    //             file_name: file_name
    //         })
    //     });
  })

module.exports = router;
