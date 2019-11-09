import Vue from 'vue'
import Vuex from 'vuex'
import { SHOP_ADD,SHOP_GET,SHOP_DEL,SHOP_UPDATE,SHOP_ID} from '../actions_type'
import  request  from 'utils/request'


Vue.use(Vuex)

export default {
    state:{
        result_post:null,
        getShop:null,
        delshop:null,
        shopid:null,
        updateshop:null
    },
    actions:{
        async add({commit},data){
            //   console.log(123456)
            let result = await request({
                url:'/shop/api',
                method:'POST',
                data:data
            })
                commit({
                    type:SHOP_ADD,
                payload:result.data
                })
                // console.log(result.data)
                if(result.data.status == 200){
                    Vue.prototype.$message({
                        message:result.data.info,
                        type:'success'
                    })
                    Vue.prototype.$loading({ fullscreen: true,background: 'rgba(0, 0, 0, 0.7)'})
                    setTimeout(() => {
                        location.pathname = '/shoplist'
                    }, 1000); 

                    
                }else{
                    Vue.prototype.$message.error(result.data.info)
                }
            },
        async del({commit},id){
               let result = await request({
                   url:`/shop/api?id=${id}`,
                   method:'DELETE',
               }) 
               commit({
                   type:SHOP_DEL,
                   payload:result.data
               })

               if(result.data.status == 200){
                Vue.prototype.$message({
                    message:result.data.info,
                    type:'success'
                })
                Vue.prototype.$loading({ fullscreen: true,background: 'rgba(0, 0, 0, 0.7)'})
                    setTimeout(() => {
                        location.pathname = '/shoplist'
                    }, 1000); 
            }else{
                Vue.prototype.$message.error(result.data.info)
            }
            },
        async update({commit},data){
            
            let result = await request({
                url:'/shop/api',
                method:'PUT',
                params:data
            })
            // console.log(result.data)
            commit({
                type:SHOP_UPDATE,
                payload:result.data
            })
            if(result.data.status == 200){
                Vue.prototype.$message({
                    message:result.data.info,
                    type:'success'
                })
                Vue.prototype.$loading({ fullscreen: true,background: 'rgba(0, 0, 0, 0.7)'})
                    setTimeout(() => {
                        location.pathname = '/shoplist'
                    }, 1000); 
            }else{
                Vue.prototype.$message.error(result.data.info)
            }
        },
        async get({commit}){
            let result = await request({
                url:'/shop/api',
                method:'GET',
            })
            commit({
                type:SHOP_GET,
                payload:result.data.res
            })
            
            if(result.data.status == 200){
                Vue.prototype.$message({
                    message:result.data.info,
                    type:'success'
                })
            }else{
                Vue.prototype.$message.error(result.data.info)
            }
            },
    },
    mutations:{
        SHOP_ADD( state,action ){
            state.result_post = action.payload
        },
        SHOP_GET( state,action ){
            state.getShop = action.payload
        },
        SHOP_DEL( state,action ){
            state.delshop = action.payload
        },
        SHOP_UPDATE( state,action ){
            state.updateshop = action.payload
        }
    },
    mounted(){
       
    }

}