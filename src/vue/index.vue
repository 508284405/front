<template>
  <div class="common-layout">
    <el-container id="container">
      <el-header id="hearder">
        Header
      </el-header>
      <el-container>
        <el-aside id="aside" width="200px">
          <Aside2></Aside2>
          <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { componentSizes } from "element-plus";
import Aside2 from "./compent/aside.vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

const components = {
  Aside2,
};
</script>
<style>
#container,
#aside,
.col,
#hearder {
  border: 1px solid red;
}
</style>