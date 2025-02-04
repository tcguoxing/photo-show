// 引入 jsencrypt 库
import JSEncrypt from "jsencrypt/bin/jsencrypt.min";
import bcrypt from "bcryptjs";

// 公钥（从服务器获取）
const publicKey = localStorage.getItem('publicKey');

// 加密函数
function encrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对数据进行加密
}

// 引入 bcryptjs 库

// 哈希函数
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(9); // 生成盐值
  return bcrypt.hashSync(password, salt); // 生成哈希值
}

export function encryptAndHashPassword(password) {
  const hashedPassword = hashPassword(password); // 先进行哈希处理
  return encrypt(hashedPassword); // 再进行加密
}

