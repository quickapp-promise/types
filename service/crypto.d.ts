/**
 * 密码算法 crypto
 */
declare module "@system.crypto" {
  /**
   * 创建数据的哈希摘要。
   * @param arg - 创建哈希摘要的参数
   * @returns 经过计算生成的摘要内容
   * @example
   * const digest = crypto.hashDigest({
   *   data: 'hello',
   *   algo: 'MD5'
   * });
   */
  function hashDigest(arg: {
    /**
     * 待计算内容，和 uri 二者必须有一个
     * */
    data?: string | Uint8Array;
    /**
     * 待计算文件地址，和 data 二者必须有一个
     */
    uri?: string;
    /**
     * 算法
     * @default "SHA256"
     * 可选: "MD5", "SHA1", "SHA256", "SHA512"
     *  */
    algo?: "MD5" | "SHA1" | "SHA256" | "SHA512";
  }): string;

  /**
   * 创建加密 HMAC 摘要
   * @param param - 创建 HMAC 摘要的参数
   * @returns 摘要内容
   * @example
   * crypto.hmacDigest({
   *   data: 'hello',
   *   algo: 'SHA256',
   *   key: 'a secret',
   *   success: function(res) {
   *     console.log(`handling success: ${res.data}`)
   *   },
   *   fail: function(data, code) {
   *     console.log(`### cipher.rsa fail ### ${code}: ${data}`)
   *   }
   * });
   */
  function hmacDigest(param: {
    /**
     * 待计算数据
     * */
    data: string;
    /**
     * 算法
     * @default "SHA256"
     * 可选: "MD5", "SHA1", "SHA256", "SHA512"
     * */
    algo?: "MD5" | "SHA1" | "SHA256" | "SHA512";
    /**
     * 密钥
     */
    key: string;
    /**
     * 成功回调
     * */
    success?: (res: { data: string }) => void;
    /**
     * 失败回调
     */
    fail?: (data: any, code: number) => void;
    /**
     * 完成回调
     */
    complete?: () => void;
  }): { data: string };

  /**
   * 生成签名
   * @param param - 生成签名的参数
   * @returns 签名内容
   * @example
   * crypto.sign({
   *   data: 'hello',
   *   algo: 'RSA-SHA256',
   *   privateKey: 'a secret',
   *   success: function(res) {
   *     console.log(`handling success: ${res.data}`)
   *   },
   *   fail: function(data, code) {
   *     console.log(`### cipher.rsa fail ### ${code}: ${data}`)
   *   }
   * });
   */
  function sign(param: {
    /**
     * 被签名文本，和 uri 二者必须有一个
     * */
    data?: string | Uint8Array;
    /**
     * 被签名文件地址，和 data 二者必须有一个
     */
    uri?: string;
    /**
     * 签名算法
     * @default "RSA-SHA256"
     * 可选: "RSA-MD5", "RSA-SHA1", "RSA-SHA256", "RSA-SHA512"
     * */
    algo?: "RSA-MD5" | "RSA-SHA1" | "RSA-SHA256" | "RSA-SHA512";
    /**
     * 私钥
     */
    privateKey: string;
    /**
     * 成功回调
     * */
    success?: (res: { data: string | Uint8Array }) => void;
    /**
     * 失败回调
     */
    fail?: (data: any, code: number) => void;
    /**
     * 完成回调
     */
    complete?: () => void;
  }): { data: string | Uint8Array };

  /**
   * 验证签名
   * @param param - 验证签名的参数
   * @returns 校验结果，通过为 true, 不通过为 false
   * @example
   * crypto.verify({
   *   data: 'hello',
   *   algo: 'RSA-SHA256',
   *   publicKey: 'public key',
   *   signature: 'signature',
   *   success: function(data) {
   *     console.log(`handling success: ${data}`)
   *   },
   *   fail: function(data, code) {
   *     console.log(`### cipher.rsa fail ### ${code}: ${data}`)
   *   }
   * });
   */
  function verify(param: {
    /**
     * 被签名文本，和 uri 二者必须有一个
     * */
    data?: string | Uint8Array;
    /**
     * 被签名文件地址，和 data 二者必须有一个
     */
    uri?: string;
    /**
     * 签名算法
     * @default "RSA-SHA256"
     * 可选: "RSA-MD5", "RSA-SHA1", "RSA-SHA256", "RSA-SHA512"
     * */
    algo?: "RSA-MD5" | "RSA-SHA1" | "RSA-SHA256" | "RSA-SHA512";
    /**
     * 签名
     */
    signature: string | Uint8Array;
    /**
     * 公钥
     */
    publicKey: string;
    /**
     * 成功回调
     * */
    success?: (data: boolean) => void;
    /**
     * 失败回调
     */
    fail?: (data: any, code: number) => void;
    /**
     * 完成回调
     */
    complete?: () => void;
  }): boolean;

  /**
   * 加密
   * @param param - 加密的参数
   * @returns 加密结果
   * @example
   * crypto.encrypt({
   *   data: 'hello',
   *   key: crypto.btoa('KEYKEYKEYKEYKEYK'),
   *   algo: 'AES',
   *   success: function(res) {
   *     console.log(`handling success: ${res.data}`)
   *   },
   *   fail: function(data, code) {
   *     console.log(`### cipher.rsa fail ### ${code}: ${data}`)
   *   }
   * });
   */
  function encrypt(param: {
    /**
     * 待加密数据
     * */
    data: string | Uint8Array;
    /**
     * 加密算法
     * @default "RSA"
     * 可选: "RSA", "AES"
     * */
    algo?: "RSA" | "AES";
    /**
     * 加密使用到的密钥，经过 base64 编码后生成的字符串
     */
    key: string;
    /**
     * 加密参数
     */
    options?:
      | {
          /**
           * RSA 算法的加密模式和填充项
           * @default "RSA/None/OAEPwithSHA-256andMGF1Padding"
           */
          transformation?: string;
        }
      | {
          /**
           * AES 算法的加密模式和填充项
           * @default "AES/CBC/PKCS7Padding"
           */
          transformation?: string;
          /**
           * AES 加解密的初始向量，经过 base64 编码后的字符串，默认值为 key 值
           */
          iv?: string;
          /**
           * AES 加解密的初始向量偏移，整数，默认值为 0
           */
          ivOffset?: number;
          /**
           * AES 加解密的初始向量字节长度，整数，默认值为 16
           */
          ivLen?: number;
        };
    /**
     * 成功回调
     * */
    success?: (res: { data: string | Uint8Array }) => void;
    /**
     * 失败回调
     */
    fail?: (data: any, code: number) => void;
    /**
     * 完成回调
     */
    complete?: () => void;
  }): { data: string | Uint8Array };

  /**
   * 从 String 对象中创建一个 base-64 编码的 ASCII 字符串，其中字符串中的每个字符都被视为一个二进制数据字节。
   * @param str - 待编码文本
   * @returns 经过编码之后的结果
   * @example
   * const encodeData = crypto.btoa('hello');
   */
  function btoa(str: string): string;

  /**
   * 对经过 base-64 编码的字符串进行解码。
   * @param str - 待解码文本
   * @returns 经过解码之后的结果
   * @example
   * const encodeString = crypto.btoa('hello');
   * const res = crypto.atob(encodeString);
   */
  function atob(str: string): string;
}
