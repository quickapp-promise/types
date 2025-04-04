/**
 * 传感器
 * 接口声明: {"name": "system.sensor"}
 */
declare module "@system.sensor" {
    interface SubscribeAccelerometerOptions {
        /**
         * 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean;
        /**
         * 监听加速度数据回调函数的执行频率，默认normal
         * [1060+]
         * @description
         * interval 的合法值：
         * |值|说明|
         * |---|---|
         * |game|适用于更新游戏的回调频率，在 20ms/次 左右|
         * |ui|适用于更新 UI 的回调频率，在 60ms/次 左右|
         * |normal|普通的回调频率，在 200ms/次 左右|
         */
        interval?: "game" | "ui" | "normal";
        /**
         * 重力感应数据变化后会回调此函数。
         */
        callback: (ret: SubscribeAccelerometerCallbackOptions) => void;
    }

    interface SubscribeAccelerometerCallbackOptions {
        /**
         * x 轴坐标
         */
        x: number;
        /**
         * y 轴坐标
         */
        y: number;
        /**
         * z 轴坐标
         */
        z: number;
    }

    /**
     * 监听重力感应数据。如果多次调用，仅最后一次调用生效
     */
    function subscribeAccelerometer(obj: SubscribeAccelerometerOptions): void;

    /**
     * 取消监听重力感应数据
     */
    function unsubscribeAccelerometer(): void;

    interface SubscribeCompassOptions {
        /**
         * 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean;
        /**
         * 罗盘数据变化后会回调此函数。
         */
        callback: (ret: SubscribeCompassCallbackOptions) => void;
    }

    interface SubscribeCompassCallbackOptions {
        /**
         * 表示设备的y轴和地球磁场北极之间的角度，当面朝北，角度为0；朝南角度为π；朝东角度π/2；朝西角度-π/2
         */
        direction: number;
        /**
         * 精度
         * [1080+]
         * @description
         * |值|说明|
         * |---|---|
         * |3|高精度|
         * |2|中等精度|
         * |1|低精度|
         * |-1|不可信，传感器失去连接|
         * |0|不可信，原因未知|
         */
        accuracy: 3 | 2 | 1 | -1 | 0;
    }

    /**
     * 监听罗盘数据。如果多次调用，仅最后一次调用生效
     */
    function subscribeCompass(obj: SubscribeCompassOptions): void;

    /**
     * 取消监听罗盘数据
     */
    function unsubscribeCompass(): void;

    interface SubscribeProximityOptions {
        /**
         * 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean;
        /**
         * 距离感应数据变化后会回调此函数。
         */
        callback: (ret: SubscribeProximityCallbackOptions) => void;
        /**
         * 失败回调函数
         * @description
         * |错误码|说明|
         * |---|---|
         * |203|当前设备不支持距离传感器|
         */
        fail?: (data: any, code: number) => void;
    }

    interface SubscribeProximityCallbackOptions {
        /**
         * 手机距离，单位为 cm
         */
        distance: number;
    }

    /**
     * 监听距离感应数据。如果多次调用，仅最后一次调用生效。
     * [1000+]
     */
    function subscribeProximity(obj: SubscribeProximityOptions): void;

    /**
     * 取消监听距离感应数据。
     */
    function unsubscribeProximity(): void;

    interface SubscribeLightOptions {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean;
        /**
         * 光线感应数据变化后会回调此函数
         */
        callback: (ret: SubscribeLightCallbackOptions) => void;
    }

    interface SubscribeLightCallbackOptions {
        /**
         * 光线强度，单位为 lux
         */
        intensity: number;
    }

    /**
     * 监听光线感应数据。如果多次调用，仅最后一次调用生效
     * [1000+]
     */
    function subscribeLight(obj: SubscribeLightOptions): void;

    /**
     * 取消监听光线感应数据
     */
    function unsubscribeLight(): void;

    interface SubscribeStepCounterOptions {
        /**
         * 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
         */
        reserved?: boolean;
        /**
         * 计步传感器数据变化后会回调此函数
         */
        callback: (ret: SubscribeStepCounterCallbackOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |1000|当前设备不支持计步传感器|
         */
        fail?: (data: any, code: number) => void;
    }

    interface SubscribeStepCounterCallbackOptions {
        /**
         * 计步传感器当前累计记录的步数。每次手机重启，这个值就会从 0 开始重新计算。
         */
        steps: number;
    }

    /**
     * 监听计步传感器数据。如果多次调用，仅最后一次调用生效。
     * [1050+]
     */
    function subscribeStepCounter(obj: SubscribeStepCounterOptions): void;

    /**
     * 取消监听计步传感器数据。
     */
    function unsubscribeStepCounter(): void;
}
