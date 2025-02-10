// 引入 jsencrypt 库
import JSEncrypt from "jsencrypt/bin/jsencrypt.min";
import bcrypt from "bcryptjs";

// 公钥（从服务器获取）
const publicKey = localStorage.getItem('publicKey');

// 加密函数
export function encryptPassword(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  encryptor.setOptions({encryptionScheme: 'pkcs1_oaep'}) // 设置PKCS1 OAEP padding模式
  return encryptor.encrypt(txt); // 对数据进行加密
}

// // 生成密钥对
// const key = new NodeRSA({ b: 512 });
// const publicKey = key.exportKey('pkcs8-public-pem');
// const privateKey = key.exportKey('pkcs8-private-pem');
// // 明文
// const plaintext = 'Hello, World!';
// // 创建公钥对象，并设置 OAEP 填充模式
// const rsaPublicKey = new NodeRSA(publicKey);
// rsaPublicKey.setOptions({ encryptionScheme: 'pkcs1_oaep' });


// 引入 bcryptjs 库

// 哈希函数
// function hashPassword(password) {
//   const salt = bcrypt.genSaltSync(9); // 生成盐值
//   return bcrypt.hashSync(password, salt); // 生成哈希值
// }

// export function encryptAndHashPassword(password) {
//   const hashedPassword = hashPassword(password); // 先进行哈希处理
//   return encrypt(hashedPassword); // 再进行加密
// }

