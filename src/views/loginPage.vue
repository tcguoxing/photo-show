<template>
  <div class="main">
    <div class="body">
      <div class="leftPart">
        <div id="phoneCartoon" class="mainDiv">
          <div subDiv>
            <img animateImg one src="@/assets/sample/loginPage/first.png" alt = "" />
            <img
              animateImg
              two
              src="@/assets/sample/loginPage/second.png"
              alt = ""
            />
            <img
              animateImg
              three
              src="@/assets/sample/loginPage/third.png"
              alt = ""
            />
            <img
              animateImg
              four
              src="@/assets/sample/loginPage/fourth.png"
              alt = ""
            />
          </div>
        </div>
        <!-- <img src="../../imgs/zhouguanyu.png" alt="从Instagram上爬取的图片" /> -->
      </div>
      <div class="rightPart">
        <div class="upper">
          <img thisImg src="@/assets/Photoshow.png" />
          <div class="acountClass roundClass borderClass">
            <label>手机号、账号或邮箱</label>
            <input id="idInput" type="text" v-model="id" />
          </div>
          <div class="pwdClass roundClass borderClass">
            <div>
              <label>密码</label>
              <input type="password" v-model="password" />
            </div>
            <div>
              <span v-if="pwdHidden" @click="showPwd">显示</span>
              <span v-else @click="showPwd">隐藏</span>
            </div>
          </div>
          <button @click="login">登录</button>
          <div class="divideLine roundClass">
            <div></div>
            <span>或</span>
            <div></div>
          </div>
          <div class="roundClass linkClass">
            <img src="../../assets/sample/logo/wechat.png" alt="" />
            <a href="https://wx.qq.com/">使用微信登录</a>
          </div>
          <div class="forgetClass">
            <a href="https://wx.qq.com/">忘记密码了？</a>
          </div>
        </div>
        <div class="middle">
          <span>没有账户?</span>
          <a href="https://www.baidu.com/">注册</a>
        </div>
        <div class="down">
          <span>下载应用</span>
          <div>
            <img src="@/assets/sample/logo/AppStore.png" />
            <img src="@/assets/sample/logo/GooglePlay.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="buttons">
        <span @click="mentionInfo">Xdxn</span>
        <span @click="mentionInfo">关于</span>
        <span @click="mentionInfo">博客</span>
        <span @click="mentionInfo">工作</span>
        <span @click="mentionInfo">帮助</span>
        <span @click="mentionInfo">API</span>
        <span @click="mentionInfo">隐私</span>
        <span @click="mentionInfo">条款</span>
        <span @click="mentionInfo">热门账户</span>
        <span @click="mentionInfo">话题标签</span>
        <span @click="mentionInfo">地点</span>
        <span @click="mentionInfo">Photoshow Life</span>
        <span @click="mentionInfo">舞蹈</span>
        <span @click="mentionInfo">美食靓饮</span>
        <span @click="mentionInfo">家居园艺</span>
        <span @click="mentionInfo">音乐</span>
        <span @click="mentionInfo">视觉艺术</span>
      </div>
      <div>
        <select name="language">
          <option value="zh">中文（简体）</option>
          <option value="cht">中文（繁体）</option>
          <option value="en">English</option>
        </select>
        <span>2022Photoshow from Xdxn</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';

export default defineComponent( {
  name: "loginPage",
  setup() {
    const router = useRouter()
    const route = useRoute()

    const id = ref("tcguoxing");
    const password = ref("********");
    const pwdHidden = ref(true);

    const login = function () {
      // console.log('typeof lazyLog: ', typeof this.$log());
      router.push({
        path: "loginWelcome",
        query: { id: id.value  },
      });
    };
    const register = function() {
      router.push({
        path: "register",
        query: { name: "register" },
      });
      // alert('no use')
    };
    const mentionInfo = function () {
      alert("comming soon");
    };
    const showPwd = function () {
      pwdHidden.value = !pwdHidden.value;
    };
    return {
      id, password, pwdHidden, login, register, mentionInfo, showPwd
    }
  },
})
</script>
<style lang="less" scoped>
.main {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    height: 80vh;
  }
  .body {
    width: 40vw;
    height: 65vh;
    margin-top: 0vh;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .leftPart {
    display: inline-block;
    width: 45%;
    height: 100%;
    margin-right: 8%;
    .mainDiv {
      background-image: url(../assets/sample/loginPage/base.png);
      background-size: 468.32px 634.15px;
      height: 634.15px;
      width: 468.32px;
      background-position: -46px 0;
      z-index: 100;
      align-self: center;
      div[subDiv] {
        position: relative;
        top: 25px;
        left: 112px;
      }
      img[animateImg] {
        height: 538.84px;
        left: 0;
        position: absolute;
        top: 0;
        opacity: 0;
        visibility: visible;
        width: 250px;
        &[one] {
          animation-name: oneAnimation;
          animation-duration: 18s;
          animation-iteration-count: infinite;
        }
        &[two] {
          animation-name: twoAnimation;
          animation-duration: 18s;
          animation-iteration-count: infinite;
        }
        &[three] {
          animation-name: threeAnimation;
          animation-duration: 18s;
          animation-iteration-count: infinite;
        }
        &[four] {
          animation-name: fourAnimation;
          animation-duration: 18s;
          animation-iteration-count: infinite;
        }
      }
      // img[animateImg]
      // img[animateImg]
      @keyframes oneAnimation {
        0% {opacity: 1; z-index: 100;}
        16.667% {opacity: 1; z-index: inherit;}
        25% {opacity: 0; z-index: 1; animation-timing-function: ease-in-out;}
        91.667% {opacity: 0; z-index: inherit;}
        100% {opacity: 1; z-index: 100; animation-timing-function: inherit;}
      }
      @keyframes twoAnimation {
        0% {opacity: 0; z-index: 1;}
        16.667% {opacity: 0; z-index: inherit;}
        25% {opacity: 1; z-index: 100; animation-timing-function: inherit;}
        41.667% {opacity: 1; z-index: inherit;}
        50% {opacity: 0; z-index: 1; animation-timing-function: inherit;}
        100% {opacity: 0; z-index: inherit;}
      }
      @keyframes threeAnimation {
        0% {opacity: 0; z-index: 1;}
        41.667% {opacity: 0; z-index: inherit;}
        50%{opacity: 1; z-index: 100; animation-timing-function: inherit;}
        66.667%{opacity: 1; z-index: inherit;}
        75%{opacity: 0; z-index: 1; animation-timing-function: inherit;}
        100%{opacity: 0; z-index: inherit;}
      }
      @keyframes fourAnimation {
        0%{opacity: 0; z-index: 1;}
        66.667%{opacity: 0; z-index: inherit;}
        75%{opacity: 1; z-index: 100; animation-timing-function: inherit;}
        91.667%{opacity: 1;z-index: inherit;}
        100%{opacity: 0; z-index: 1; animation-timing-function: inherit;}
      }
      @keyframes totalFade {
        0% {opacity: 0; z-index: 1;}
        25% {opacity: 1; z-index: 100;}
        75% {opacity: 1; z-index: 100;}
        100% {opacity: 0; z-index: 1;}
      }
      // .from {
      //   opacity: 0;
      //   -webkit-transition: opacity 1.5s ease-out;
      //   transition: opacity 1.5s ease-out;
      //   visibility: visible;
      // }
      // .to { 
      //   opacity: 1;
      //   -webkit-transition: opacity 1.5s ease-in;
      //   transition: opacity 1.5s ease-in;
      //   z-index: 2;
      // }
    }
  }
  input {
    border-width: 0;
    background: transparent;
  }
  .roundClass {
    font-size: x-small;
    width: 14vw;
    display: flex;
  }
  .borderClass {
    border: 1px solid rgb(129, 129, 129);
    background: rgb(232, 240, 254);
    border-radius: 3px;
    padding: 2px 0;
  }
  .forgetClass {
    font-size: xx-small;
    font-weight: 100 !important;
    color: rgb(0, 55, 107);
    a {
      text-decoration: none;
    }
  }
  .rightPart {
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .upper {
      width: 100%;
      background: white;
      border: 1px solid lightgray;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .divideLine {
        display: flex;
        width: 14vw;
        flex-basis: row;
        justify-content: space-between;
        align-items: center;
        color: rgb(142, 142, 142);
        div {
          background: rgb(219, 219, 219);
          height: 1px;
          width: 40%;
        }
      }
      button {
        width: 14vw;
        color: white;
        font-weight: 700;
        cursor: pointer;
        background: orange;
        padding: 0.25vw;
        border-width: 0;
        border-radius: 5px;
      }
  
      img[thisImg] {
        height: 6vh;
        margin: 1vh 0vh;
      }
      .linkClass {
        height: 2vh;
        justify-content: center;
        align-items: stretch;
          img {
          width: 2vh !important;
          margin: 0 1vh;
        }
        a {
          text-decoration: none;
          font-weight: 700;
          cursor: pointer;
        }
      }
      label,
      input {
        margin-left: 0.3vw;
        height: 2vh;
      }
      label {
        color: rgb(129, 129, 129);
      }
      input:focus-visible {
        border-width: 0 !important;
      }
      .acountClass {
        flex-direction: column;
      }
      .pwdClass {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        div {
          display: flex;
          width: 83.3%;
          flex-direction: column;
        }
        div:nth-child(2) {
          display: flex;
          width: 16.6%;
          height: 100%;
          background-color: rgb(250, 250, 250);
          align-items: center;
          justify-content: center;
          span {
            font-size: 1.5vh;
            font-weight: 700;
            cursor: pointer;
            align-self: center;
            background: transparent;
          }
        }
      }
  
      .commonClass {
        padding: 5px 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .registerSpan {
          width: 30%;
          display: inline-flex;
        }
        input {
          width: 60%;
          display: inline-flex;
        }
        button {
          width: 30%;
          height: 10%;
          margin: 0 1vw;
        }
      }
    }
    .middle {
      width: 100%;
      height: 13%;
      border: 1px solid lightgray;
      background: white;
      display: flex; 
      justify-content: center;
      align-items: center;
      * {
        margin: 0 1%;
      }
      a {
        text-decoration: none;
        color: rgb(39, 134, 245);
        font-weight: 600;
      }
    }
    .down {
      height: 15%;
      width: 100%;
      margin: 2vh 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        margin: 2vh 0;
        width: auto;
        justify-content: center;
        align-items: center;
        * {
          width: 43%;
          margin: 1vh;
        }
      }
    }
  }
  .footer {
    font-size: 12px;
    color: rgb(129, 129, 129);
    height: 8vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 4vh;
      span {
        margin: 0 0.5vw;
        cursor: pointer;
      }
    }
    div:last-child {
      width: 16vw;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      select {
        border-width: 0;
        background: transparent;
        color: rgb(129, 129, 129);
      }
    }
  }
</style>
