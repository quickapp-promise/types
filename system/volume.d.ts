/**
 * 系统音量
 * 接口声明: {"name": "system.volume"}
 */
declare module "@system.volume" {
    interface GetMediaValueCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: GetMediaValueSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface GetMediaValueSuccessOptions {
        /**
         * 系统媒体当前音量，0.0-1.0 之间
         */
        value: number;
    }

    /**
     * 获取当前多媒体音量
     */
    function getMediaValue(obj: RecordCombine<GetMediaValueCallbackOptions>): void;
    function getMediaValue(): ReturnPromise<GetMediaValueSuccessOptions>;

    interface SetMediaValueOptions {
        /**
         * 设置的音量，0.0-1.0之间
         */
        value: number;
    }

    interface SetMediaValueCallbackOptions {
        /**
         * 成功回调
         */
        success: () => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    /**
     * 获取当前多媒体音量
     */
    function setMediaValue(obj: SetMediaValueOptions & RecordCombine<SetMediaValueCallbackOptions>): void;
    function setMediaValue(obj: SetMediaValueOptions): ReturnPromise<void>;
}
