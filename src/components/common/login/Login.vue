<template>
  <el-row :gutter="24">
    <el-col  :sm="8" :md="8" :lg="8" :xl="8"><div  class="grid-content"></div></el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"><div>
      <el-form :model="loginData" :rules="loginRules" label-width="100px" class="login" ref="loginData">
        <img src="../../../assets/logo.png" style="text-align: center">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginData.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginData.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login('loginData')" size="medium" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    </el-col>
    <el-col :sm="8" :md="8" :lg="8" :xl="8"  class="grid-content "><div></div></el-col>
  </el-row>
</template>
<script>
  module.exports  = require('./Login')
</script>
<style src="./login.less">
</style>

<style>
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
