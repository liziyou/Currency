<template>
<div class="sidebar">
  <el-aside>
    <!--<el-button @click="collapseClick" type="primary">点击</el-button>-->
    <img src="../../../assets/logo.png"/>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
    <template v-for="(route,index) in $router.options.routes" v-if="!route.hidden">
      <el-submenu :index="route.path">
        <template slot="title">
          <i :class="'fa fa-'+route.icon"></i>
          <span>{{route.name}}</span>
        </template>
          <el-menu-item :index="item.path" v-for="(item,index) in route.children" :key="item.path" v-if="!item.hidden">
            <span>{{item.name}}</span>
          </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
  </el-aside>
</div>
</template>
<script>
  module.exports = require('./Sidebar')
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    background-color: #D3DCE6;
  }
  .sidebar{
    min-height: 100vh;
    background-color: #D3DCE6;
  }
  .sidebar img{
    height: 60px;
  }
  .el-submenu .el-menu-item{
    background-color: #D3DCE6;
  }
  .fa  {
    margin-right: 19px;
  }
  .fa-home {
    margin-right: 38px;;
  }
</style>
