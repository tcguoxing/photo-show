<template>
  <div ref="mainDiv" class="main">
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
      <div right>
        <div class="rightPart">
          <div class="upper">
            <img thisImg src="@/assets/Photoshow.png" />
            <div class="acountClass roundClass borderClass">
              <label>账号</label>
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
            <button @click="userLogin">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { encryptAndHashPassword } from '@/utils/encrypt'
import { login } from '@/api/login';
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router';



const router = useRouter()
const route = useRoute()

  const id = ref("xiangshoudexiaowu");
  const reactiveId = reactive(id)
  const mainDiv = ref(null)
  const password = ref("********");
  const pwdHidden = ref(true);

  const userLogin = function () {
    // const mentionInfo = [
    //   '这账号不对！',
    //   '没有这个账号。',
    //   '跟你说了，账号错啦！',
    //   '还点登录，账号都错了！',
    // ]
    // const info = mentionInfo[Math.floor(Math.random() * 4)] 
    // window.alert(info)

    // 假设使用了某个加密库（如 CryptoJS 或 Web Crypto API）
    const plainPassword = password.value;

    let encryptPassword = encryptAndHashPassword(plainPassword)

    // // 使用非对称加密（如 RSA）加密密码
    // const encryptedPassword = encryptWithPublicKey(plainPassword, publicKey);

    // // 使用哈希算法（如 bcrypt）对密码进行哈希处理
    // const hashedPassword = hashPassword(encryptedPassword);

        login({
          account_name: reactiveId.value,
          password: password.value
        }).then(res => {
          console.log('login info: ', res)
        })
      };

  function showPwd () {
    pwdHidden.value = !pwdHidden.value;
  };
    
</script>
<style lang="less" scoped>
.main {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    height: 100vh;
  }
  .body {
    width: fit-content;
    height: fit-content;
    margin-top: 0vh;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .leftPart {
    display: inline-block;
    width: fit-content;
    height: fit-content;
    .mainDiv {
      margin-right: -60px;
      background-image: url(../assets/sample/loginPage/base.png);
      background-size: cover;
      background-repeat: no-repeat;
      height: 634.15px;
      width: 468.32px;
      background-position: -46px 0;
      z-index: 100;
      align-self: center;
      div[subDiv] {
        position: relative;
        top: 26px;
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
    }
  }
  input {
    border-width: 0;
    background: transparent;
  }
  .roundClass {
    font-size: x-small;
    width: 90%;
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
  div[right] {
    height: 634.15px;
    width: 468.32px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    // background: red;
    .rightPart {
      width: 70%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .upper {
        width: 100%;
        background: white;
        border: 1px solid lightgray;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .divideLine {
          display: flex;
          width: 90%;
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
          width: 90%;
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
