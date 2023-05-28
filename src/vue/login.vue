<template>
  <div class="layout">
    <el-tabs type="border-card">
      <el-tab-pane label="登录">
        <el-form label-position="right" label-width="90px" style="max-width: 460px" class="loginForm">
          <el-form-item label="用户名：">
            <el-input type="userName" v-model="userName" />
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input v-model="Email" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="password" />
          </el-form-item>
          <el-row>
            <el-checkbox class="checkBox" v-model="isAgree" label="同意用户使用准则" name="type" />
          </el-row>
          <el-button v-if="isAgree" type="primary" class="loginBtn" @click="login">
            登录
          </el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="注册">
        <el-form label-position="right" label-width="90px" style="max-width: 460px" class="loginForm">
          <el-form-item label="邮箱：">
            <el-input v-model="rEmail" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="rPassword" />
          </el-form-item>
          <el-form-item label="确认密码：">
            <el-input type="password" v-model="confirmPassword" @blur="confirmFunc" />
          </el-form-item>
          <el-form-item label="验证码：">
            <div style='display:flex;align-items: center;'>
              <el-input type="password" v-model="identifyCode" class="inpWidth" />
              <!-- <el-button type="primary" @click="getIdentifyCode" class="button" plain>
                获取验证码
              </el-button> -->
              <el-img type="primary" @click="getIdentifyCode" class="button" plain>
                获取验证码
              </el-img>
            </div>
          </el-form-item>

          <el-row>
            <el-checkbox class="checkBox" v-model="rAgree" label="同意用户使用准则" name="type" />
          </el-row>
          <el-button v-if="rAgree" type="primary" class="loginBtn" @click="register">
            注册
          </el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {

  reactive, toRefs
} from "@vue/reactivity";
import {
  ElMessage
} from "element-plus";
import { getCurrentInstance, onMounted } from '@vue/runtime-core';
import {
  useRouter
} from 'vue-router'
export default {
  setup () {
    const router = useRouter();
    const form = reactive({

      userName: "",
      Email: "",
      password: "",
      isAgree: 0,
    });
    const registerForm = reactive({
      rEmail: "",
      rPassword: "",
      confirmPassword: "",
      identifyCode: "",
      rAgree: 0,
    });

    // 方法
    // 登录
    function login () {
      router.push("index")
      console.log(form);
    }
    // 注册
    function register () {

      console.log("注册", registerForm);
    }
    // 获取验证码
    function getIdentifyCode () {
      console.log("获取验证码");
    }
    // 确认密码
    // function confirmFunc() {


    //   if (registerForm.confirmPassword !== registerForm.rPassword)
    //     alert("密码与确认密码不一致");
    // }
    const confirmFunc = () => {


      if (registerForm.confirmPassword !== registerForm.rPassword)
        ElMessage.error("密码与确认密码不一致.");
    };
    return {


      ...toRefs(form),
      ...toRefs(registerForm),
      login,
      register,
      getIdentifyCode,
      confirmFunc,
    };
  },
};
</script>

<style scoped>
.layout {
  position: absolute;
  left: calc(50% - 200px);
  top: 20%;
  width: 400px;
}
.loginBtn {
  width: 100px;
}
.loginForm {
  text-align: center;
}
.checkBox {
  margin-left: 7px;
  /* 控制按钮的宽度 */
  width: 0;
  border: 0px solid;
}
.inpWidth {
  width: 150px;
}
.button {
  width: 100px;
  margin-left: 15px;
  border: solid 1px !important;
  border-radius: 1ex;
}
</style>