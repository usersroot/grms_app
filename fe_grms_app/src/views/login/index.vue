<template>
  <div class="login_box">
        <img src="./1.png" alt="" class="logo">
    <div class="userlogin_box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="useradd(ruleForm)">登陆</el-button>
        </el-form-item>
        <p class="text_p">温馨提示：</p>
        <p class="text_p">如果您之前没有注册过您的账号，输入以后会自动注册，请保存好您的个人信息！</p>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        checkPass: "",
        password:""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(['useradd'])
    
  },
 
  
};
</script>

<style lang="less" scope>
.login_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(20, 20, 20);
  .userlogin_box {
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    border-radius: 20px;
    padding: 30px;
  }
  .logo{
      width: 100px;
      display: block;
      margin: 0 auto;
      margin-top: 30px;
  }
}
.text_p{
    text-align: center;
    color: rgb(240,35,30);
    font-size: 14px;
}
.el-form-item__content{
    margin-left: 140px !important;
}
</style>