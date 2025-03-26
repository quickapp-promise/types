/**
 * 通信信息
 * 接口声明: { "name": "system.telecom" }
 */
declare module "@system.telecom" {
    interface GetTelecomInfoCallbackOptions {
        success: (data: GetTelecomInfoSuccessOptions) => void;
        fail: (data: any, code: number) => void;
        complete: () => void;
    }

    interface GetTelecomInfoSuccessOptions {
        /**
         * 是否是5G设备
         */
        is5GDevice: boolean;
        /**
         * 5G开关是否已打开
         */
        is5GSwitchOpened: boolean;
    }

    /**
     * 获取设备通信信息
     */
    function getTelecomInfo(obj: RecordCombine<GetTelecomInfoCallbackOptions>): void;
    function getTelecomInfo(): Promise<GetTelecomInfoSuccessOptions>;
}
