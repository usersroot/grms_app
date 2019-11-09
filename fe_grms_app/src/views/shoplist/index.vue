<template>
  <el-table v-loading="loading" :data="getShop" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="信用编号">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="详细地址">
            <span>{{ props.row.place }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.tel }}</span>
          </el-form-item>
          <el-form-item label="店铺简介">
            <span>{{ props.row.intro }}</span>
          </el-form-item>
          <el-form-item label="店铺标语">
            <span>{{ props.row.slogan }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺类型">
            <span v-for=" (v,i) in props.row.value" :key="i">{{ v }}</span>
          </el-form-item>
          <el-form-item label="店铺特点">
            <span v-if="props.row.pinpai === 'true'">品牌保证</span>
            <span v-if="props.row.zhuansong === 'true'">蜂鸟专送</span>
            <span v-if="props.row.xinkai === 'true'">新开店铺</span>
            <span v-if="props.row.waimai === 'true'">外卖保</span>
            <span v-if="props.row.zhuanshi === 'true'">准时达</span>
            <span v-if="props.row.kaipiao === 'true'">开发票</span>
          </el-form-item>
          <el-form-item label="营业时间">
            <span>开始：{{ props.row.startTime }} 至</span>
            <span>结束：{{ props.row.endTime }}</span>
          </el-form-item>
          <el-form-item label="店铺头像"></el-form-item>
          <el-form-item label="营业执照"></el-form-item>
          <el-form-item label="经营许可"></el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="店铺 ID" prop="_id"></el-table-column>
    <el-table-column label="店铺名称" prop="name"></el-table-column>
    <el-table-column label="联系电话" prop="tel"></el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template slot-scope="user">
        <!-- <span>{{user.row._id}}</span> -->
        <el-popover placement="top" width="160">
          <p>店铺编号：{{user.row.id}}，确定要修改吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini" @click.native="editshop(user.row._id)">确定</el-button>
          </div>
          <el-button slot="reference" type="primary" icon="el-icon-edit" circle></el-button>
        </el-popover>
        <el-popover placement="top" width="160">
          <p>店铺编号：{{user.row.id}}，确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini" @click.native="del(user.row._id)">确定</el-button>
          </div>
          <el-button slot="reference" type="danger" icon="el-icon-delete" circle></el-button>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tableData: [],
      loading: true,
      visible: false
    };
  },
  methods: {
    ...mapActions(["get", "del"]),
    editshop(id){
      this.$router.push(`/shopedit?id=${id}`)
    },
  },
  computed: {
    ...mapState({
      getShop: state => state.shop.getShop
    })
  },
  created() {
    this.get();
  },
  updated() {
    this.loading = false;
  }
};
</script>
<style scope>
.demo-table-expand {
  font-size: 0;
}
.el-button--primary {
  margin-right: 10px;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

