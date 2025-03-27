/**
 * 屏幕亮度 [1000+]
 * 接口声明: {"name": "system.brightness"}
 */
declare module "@system.brightness" {
    interface GetValueCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: GetValueSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface GetValueSuccessOptions {
        /**
         * 屏幕亮度，取值范围 0-255
         */
        value: number;
    }

    /**
     * 获得当前屏幕亮度值
     */
    function getValue(obj: RecordCombine<GetValueCallbackOptions>): void;
    function getValue(): ReturnPromise<GetValueSuccessOptions>;

    interface SetValueOptions {
        /**
         * 屏幕亮度，取值范围0-255
         */
        value: number;
    }

    interface SetValueCallbackOptions {
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
     * 设置当前屏幕亮度值
     */
    function setValue(obj: SetValueOptions & RecordCombine<SetValueCallbackOptions>): void;
    function setValue(obj: SetValueOptions): ReturnPromise<void>;

    interface GetModeCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: GetModeSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface GetModeSuccessOptions {
        /**
         * 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度
         */
        mode: 0 | 1;
    }

    /**
     * 获得当前屏幕亮度模式
     */
    function getMode(obj: RecordCombine<GetModeCallbackOptions>): void;
    function getMode(): ReturnPromise<GetModeSuccessOptions>;

    interface SetModeOptions {
        /**
         * 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度
         */
        mode: 0 | 1;
    }

    interface SetModeCallbackOptions {
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
     * 设置当前屏幕亮度模式
     */
    function setMode(obj: SetModeOptions & RecordCombine<SetModeCallbackOptions>): void;
    function setMode(obj: SetModeOptions): ReturnPromise<void>;

    interface SetKeepScreenOnOptions {
        /**
         * 是否保持屏幕常亮
         */
        keepScreenOn: boolean;
    }

    interface SetKeepScreenOnCallbackOptions {
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
     * 设置是否保持常亮状态
     * [1060+]
     */
    function setKeepScreenOn(obj: SetKeepScreenOnOptions & RecordCombine<SetKeepScreenOnCallbackOptions>): void;
    function setKeepScreenOn(obj: SetKeepScreenOnOptions): ReturnPromise<void>;
}
