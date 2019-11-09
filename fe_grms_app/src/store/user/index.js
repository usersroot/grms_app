import Vue from 'vue'
import Vuex from 'vuex'
import { USER_ADD,USER_GET,USER_DEL,USER_UPDATE,USER_ID } from '../actions_type'
import request from 'utils/request'

Vue.use(Vuex)

export default {
    state:{
        useradd:null,
    },
    actions:{
       async useradd({commit},data){
           console.log(data)
            let result = await request({
                url:'/users/api',
                method:'POST',
                data:data
            })

            commit({
                type:USER_ADD,
                payload:result.data
            })
            if(result.data.status == 200){
                Vue.prototype.$message({
                    message:result.data.info,
                    type:'success'
                })
                localStorage.setItem('username',data.username)
                localStorage.setItem('state',result.data.state)
                Vue.prototype.$loading({ fullscreen: true,background: 'rgba(0, 0, 0, 0.7)'})
                setTimeout(() => {
                    location.pathname = '/home'
                }, 1000); 

                
            }else{
                Vue.prototype.$message.error(result.data.info)
            }

        }
    },
    mutations:{
        USER_ADD( state,action ){
            state.useradd = action.payload
        }
    }
}

