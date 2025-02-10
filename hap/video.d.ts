/**
 * 视频
 * 接口声明: { "name": "hap.io.Video" }
 */
declare module "@hap.io.Video" {
  // 定义创建视频压缩任务实例的参数类型
  interface VideoCreationOptions {
    /** 原视频文件地址，必填 */
    uri: string;
    /** 压缩后视频的高，单位像素，默认原视频高。部分视频压缩后实际高度会向上对齐16位，原视频旋转角度为90或270时，压缩后实际宽高会和所设宽高互换，可选 */
    height?: number;
    /** 压缩后视频的宽，单位像素，默认原视频宽。部分视频压缩后实际宽度会向上对齐16位，原视频旋转角度为90或270时，压缩后实际宽高会和所设宽高互换，可选 */
    width?: number;
    /** 压缩后视频的码率，单位bps(比特/秒)，默认原视频码率的1/2。受硬件平台限制，无法精确控制实际压缩后的码率与所设定码率一致，可选 */
    bitrate?: number;
    /** 压缩后视频的帧率，单位fps(帧/秒)，默认原视频帧率，若获取不到原视频帧率，则默认为30。受硬件平台限制，无法精确控制实际压缩后的帧率与所设定帧率一致，可选 */
    framerate?: number;
  }

  // 定义压缩进度监听回调函数的返回值类型
  interface ProgressUpdateCallbackResult {
    /** 压缩进度，取值范围0 - 100，每秒有变化时更新 */
    progress: number;
  }

  // 定义压缩视频任务成功回调函数的返回值类型
  interface CompressVideoSuccessResult {
    /** 压缩后视频文件地址 */
    uri: string;
    /** 视频文件名称 */
    name: string;
    /** 视频文件大小，单位B */
    size: string;
  }

  // 定义获取视频信息成功回调函数的返回值类型
  interface GetVideoInfoSuccessResult {
    /** 视频文件地址 */
    uri: string;
    /** 视频文件名称 */
    name: string;
    /** 视频文件大小，单位B */
    size: string;
    /** 视频高度，单位像素 */
    height: number;
    /** 视频宽度，单位像素 */
    width: number;
    /** 视频码率，单位bps(比特/秒) */
    bitrate: number;
    /** 视频帧率，单位fps(帧/秒)。部分机型可能返回为空 */
    framerate: number | null;
  }

  // 定义获取视频缩略图成功回调函数的返回值类型
  interface GetVideoThumbnailSuccessResult {
    /** 缩略图文件地址 */
    uri: string;
  }

  // 定义视频处理接口类型
  export default class Video {
    /**
     * 创建一个视频压缩任务实例
     * @param options - 创建视频压缩任务实例的参数
     * @returns 返回一个Video对象
     */
    constructor(options: VideoCreationOptions);

    /**
     * 对压缩任务注册进度监听
     * @param callback - 压缩进度变化时触发的回调函数，频率为每秒一次
     */
    onprogressupdate: (data: ProgressUpdateCallbackResult) => void;

    /**
     * 执行压缩视频任务
     * @param options - 包含成功回调、失败回调和执行结束后的回调的对象
     */
    compressVideo(options: {
      success?: (data: CompressVideoSuccessResult) => void;
      fail?: (data: any, code: number) => void;
      complete?: () => void;
    }): void;

    /**
     * 放弃执行该压缩任务，若该压缩任务正在进行，则中断压缩进程
     * @param options - 包含成功回调、失败回调和执行结束后的回调的对象
     */
    abort(options: {
      success?: () => void;
      fail?: (data: any, code: number) => void;
      complete?: () => void;
    }): void;

    /**
     * 获取视频信息
     * @param options - 包含视频文件地址、成功回调、失败回调和执行结束后的回调的对象
     */
    static getVideoInfo(options: {
      uri: string;
      success?: (data: GetVideoInfoSuccessResult) => void;
      fail?: (data: any, code: number) => void;
      complete?: () => void;
    }): void;

    /**
     * 获取视频缩略图
     * @param options - 包含视频文件地址、成功回调、失败回调和执行结束后的回调的对象
     */
    static getVideoThumbnail(options: {
      uri: string;
      success?: (data: GetVideoThumbnailSuccessResult) => void;
      fail?: (data: any, code: number) => void;
      complete?: () => void;
    }): void;
  }
}
