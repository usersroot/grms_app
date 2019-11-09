<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      enctype="multipart/form-data"
    >
      <el-form-item label="信用编号" prop="id">
        <el-input v-model="ruleForm.id" name="id"></el-input>
      </el-form-item>
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name" name="name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="place">
        <el-input v-model="ruleForm.place" name="place"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="ruleForm.tel" name="tel"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介" prop="intro">
        <el-input v-model="ruleForm.intro" name="intro"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语" prop="slogan">
        <el-input v-model="ruleForm.slogan" name="slogan"></el-input>
      </el-form-item>
      <el-form-item label="店铺类型">
        <div class="block">
          <span class="demonstration"></span>
          <el-cascader v-model="value" :options="options"></el-cascader>
        </div>
      </el-form-item>
      <el-form-item label="店铺特点" class="switch_box">
        <span>
          <i>品牌保证</i>
          <el-switch
            v-model="ruleForm.pinpai"
            active-color="rgb(77,0,8)"
            inactive-color="rgb(30,30,30)"
          ></el-switch>
        </span>
        <span>
          <i>蜂鸟专送</i>
          <el-switch
            v-model="ruleForm.zhuansong"
            active-color="rgb(77,0,8)"
            inactive-color="rgb(30,30,30)"
          ></el-switch>
        </span>
        <span>
          <i>新开店铺</i>
          <el-switch
            v-model="ruleForm.xinkai"
            active-color="rgb(77,0,8)"
            inactive-color="rgb(30,30,30)"
          ></el-switch>
        </span>
        <br />
        <span>
          <i>外卖保</i>
          <el-switch
            v-model="ruleForm.waimai"
            active-color="rgb(77,0,8)"
            inactive-color="rgb(30,30,30)"
          ></el-switch>
        </span>
        <span>
          <i>准时达</i>
          <el-switch
            v-model="ruleForm.zhuanshi"
            active-color="rgb(77,0,8)"
            inactive-color="rgb(30,30,30)"
          ></el-switch>
        </span>
        <span>
          <i>开发票</i>
          <el-switch
            v-model="ruleForm.kaipiao"
            active-color="rgb(77,0,8)"
            inactive-color="rgb(30,30,30)"
          ></el-switch>
        </span>
      </el-form-item>
      <el-form-item label="配送费" required>
        <el-input-number v-model="ruleForm.peisongjia" :min="1" :max="15" label="配送费"></el-input-number>
      </el-form-item>
      <el-form-item label="起送价" required>
        <el-input-number v-model="ruleForm.qisongjia" :min="1" label="起送价"></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间" required>
        <el-time-select
          placeholder="起始时间"
          v-model="ruleForm.startTime"
          :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
        ></el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="ruleForm.endTime"
          :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: ruleForm.startTime
    }"
        ></el-time-select>
      </el-form-item>
      <el-form-item label="上传店铺头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess1"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl1" :src="ruleForm.imageUrl1" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess2"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl2" :src="ruleForm.imageUrl2" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮许可证">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess3"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl3" :src="ruleForm.imageUrl3" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="saveshop">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        id: "",
        name: "",
        place: "",
        tel: "",
        intro: "",
        slogan: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
       haha: true,
        pinpai: true,
        zhuansong: true,
        xinkai: true,
        waimai: true,
        zhuanshi: true,
        kaipiao: true,
        peisongjia: 1,
        qisongjia: 20,
        startTime: "",
        endTime: "",
        imageUrl1: "",
        imageUrl2: "",
        imageUrl3: "",
      },
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        place: [
          { required: true, message: "请输入地址", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { min: 8, max: 11, message: "长度在 8 到 11 个字符", trigger: "blur" }
        ],
        slogan: [
          { required: false, message: "请输入店铺标语", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur"
          }
        ],
        intro: [
          { required: false, message: "请输入店铺简介", trigger: "blur" },
          {
            min: 3,
            max: 1000,
            message: "长度在 3 到 1000 个字符",
            trigger: "blur"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
     saveshop(){
         console.log({...this.ruleForm})
        this.$store.dispatch('update',{...this.ruleForm,value:this.value})
        },
    shopgetbyid() {
      let id = location.search.split("=")[1];
      this.$http.get(`/shop/api?id=${id}`).then(res => {
        console.log(res.data.res)
        Object.assign(this.ruleForm,res.data.res)
        console.log('after',this.ruleForm)
    })
    },
    handleAvatarSuccess1(res, file) {
      this.shopimg.imageUrl1 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess2(res, file) {
      this.shopimg.imageUrl2 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess3(res, file) {
      this.shopimg.imageUrl3 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
    }
  },
  computed: {
    ...mapState({
      shopId: state => state.shop.shopid
    })
  },
  mounted() {
    this.shopgetbyid();
  }
};
</script>

<style lang="less" scope>
.demo-ruleForm {
  max-width: 700px;
  margin: 0 auto;
}
.el-form-item__label {
  min-width: 120px;
}
.el-input__inner {
  max-width: 530px;
}
.el-form-item__content {
  margin-left: 130px !important;
}
.switch_box {
  span {
    margin: 5px;
    i {
      margin: 0 5px 0 5px;
    }
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>