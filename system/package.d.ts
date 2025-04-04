/**
 * 应用管理
 * 接口声明: {"name": "system.package"}
 */
declare module "@system.package" {
    interface HasInstalledOptions {
        /**
         * 应用包名
         */
        package: string;
    }

    interface HasInstalledCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: HasInstalledSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface HasInstalledSuccessOptions {
        /**
         * 应用是否存在
         */
        result: boolean;
    }

    /**
     * 检测应用是否存在。支持检测原生应用是否已安装
     */
    function hasInstalled(obj: HasInstalledOptions & RecordCombine<HasInstalledCallbackOptions>): void;
    function hasInstalled(obj: HasInstalledOptions): ReturnPromise<HasInstalledSuccessOptions>;

    interface InstallOptions {
        /**
         * 应用包名
         */
        package: string;
    }

    interface InstallCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: InstallSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface InstallSuccessOptions {
        /**
         * 是否成功发起安装操作
         */
        result: boolean;
    }

    /**
     * 安装应用, 支持安装原生应用
     */
    function install(obj: InstallOptions & RecordCombine<InstallCallbackOptions>): void;
    function install(obj: InstallOptions): ReturnPromise<InstallSuccessOptions>;

    interface GetInfoOptions {
        /**
         * 应用包名
         */
        package: string;
    }

    interface GetInfoCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: GetInfoSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface GetInfoSuccessOptions {
        /**
         * 版本号
         */
        versionCode: number;
        /**
         * 版本名称
         */
        versionName: string;
    }

    /**
     * 获取应用版本号、版本名称信息，包括原生应用和快应用
     * [1070+]
     */
    function getInfo(obj: GetInfoOptions & RecordCombine<GetInfoCallbackOptions>): void;
    function getInfo(obj: GetInfoOptions): ReturnPromise<GetInfoSuccessOptions>;

    interface GetSignatureDigestsOptions {
        /**
         * 应用包名
         */
        package: string;
    }

    interface GetSignatureDigestsCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: GetSignatureDigestsSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface GetSignatureDigestsSuccessOptions {
        /**
         * 签名摘要信息列表，使用SHA-256
         */
        signatureDigests: string[];
    }

    /**
     * 获取应用签名摘要信息，包括原生应用和快应用
     * [1070+]
     */
    function getSignatureDigests(obj: GetSignatureDigestsOptions & RecordCombine<GetSignatureDigestsCallbackOptions>): void;
    function getSignatureDigests(obj: GetSignatureDigestsOptions): ReturnPromise<GetSignatureDigestsSuccessOptions>;
}
