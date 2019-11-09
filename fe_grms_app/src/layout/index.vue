<template>
  <div class="content_impbox">
    <el-container>
      <el-aside width="200px">
        <h1 class="logo_img">
          <img src="../assets/img/1.png" alt draggable="false" />
        </h1>
        <el-menu :default-openeds="['1', '6']" class="auto_y_box">
          <li style="height:56px;font-size:16px;" class="el-submenu__title">
            <router-link to="/home"><i class="el-icon-star-on"></i> 首页</router-link>
          </li>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>数据管理
            </template>
            <el-menu-item index="1-1">
              <router-link to="/userlist">用户列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/shoplist">商家列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/foodlist">食品列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/orderlist">订单列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link to="/adminlist">管理员列表</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item index="2-1">
              <router-link to="/productadd">添加商品</router-link>
          </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/shopadd">添加商铺</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表
            </template>
            <el-menu-item index="3-1">
              <router-link to="/userdistribute">用户分布</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="4-1">
              <router-link to="/edit">文本编辑</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="5-1">
              <router-link to="/set">管理员设置</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item index="6-1">
              <router-link to="/explain">说明</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown" v-if="!userstate">
              <el-dropdown-item><router-link to="/login" tag="span">注册</router-link></el-dropdown-item>
            </el-dropdown-menu>
            <el-dropdown-menu slot="dropdown" v-if="userstate">
              <el-dropdown-item><router-link to="/userphoto">修改信息</router-link></el-dropdown-item>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="font-size:14px;color:rgb(160,230,250);">{{username}}</span>
          <div id="userphoto" @click="upphoto"></div>
        </el-header>

        <el-main>
          <!-- --------------------------------主要内容区域--------------------------------- -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:null,
      userstate:null
    }
  },
  mounted(){
   this.username = localStorage.getItem('username')
   this.userstate = localStorage.getItem('state')
  },
  methods: {
    upphoto(){

    }
  },

};
</script>


<style lang="less">
@import "../assets/css/index.less";
.content_impbox {
  width: 100%;
  height: 100%;
  overflow: auto;
  
}

.el-container {
  width: 100%;
  min-height: 100%;
  .el-aside {
    overflow: hidden;
    background-image: linear-gradient(to bottom, @theme_color, rgb(60, 60, 60));
    .logo_img {
      height: 60px;
      background: @theme_color;

      img {
        height: 45px;
        margin-left: 50px;
        margin-top: 8px;
      }
    }
    .auto_y_box {
      background: transparent;
      width: 201px;
      
    }
  }
}
.el-header {
  background-image: linear-gradient(to right, @theme_color, rgb(90, 90, 90));
  color: #fff;
  line-height: 60px;
}
.el-submenu__title {
  color: #fff !important;
}
.el-submenu__title:hover {
  background: @hover_color !important;
}
.el-menu-item {
  background: rgb(40, 40, 40) !important;
  color: #fff !important;
}
.el-menu-item:hover {
  background: rgb(87, 87, 87) !important;
}
.el-dropdown-selfdefine {
  color: #fff;
}
.el-main{
  background: #e0e0e0;
}
.active_bg{
  background: @hover_color !important;
}
#userphoto{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e0e0;
  float: right;
  margin-top: 10px;
  margin-left: 10px;
}
</style>