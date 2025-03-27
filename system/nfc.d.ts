/**
 * 实现NFC的相关功能 [1100+]
 * 接口声明: { "name": "system.nfc" }
 * @description
 * |错误码|说明|
 * |---|---|
 * |0|成功|
 * |10000|设备不支持NFC|
 * |10001|系统NFC开关未打开|
 * |10010|未知错误|
 * |10011|参数无效|
 * |10012|参数解析成NdefMessage失败|
 * |10013|未扫描到NFC标签|
 * |10014|连接失败|
 * |10015|相关读写操作失败|
 * |10016|标签未连接|
 * |10017|当前标签不支持改功能|
 * |10018|标签容量不够|
 */
declare module "@system.nfc" {
    namespace Ndef {
        interface Message {
            /**
             * NdefMessage ID
             */
            id: ArrayBuffer;
            /**
             * NdefMessage 类型
             */
            type: ArrayBuffer;
            /**
             * NdefMessage 负载
             */
            payload: ArrayBuffer;
        }

        interface CloseCallbackOptions {
            /**
             * 成功返回的回调函数
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

        interface ConnectCallbackOptions {
            /**
             * 成功返回的回调函数
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

        interface IsConnectedCallbackOptions {
            /**
             * 成功返回的回调函数
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 调用结束
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface SetTimeoutOptions {
            /**
             * 超时时间，单位ms
             */
            timeout: number;
        }

        interface SetTimeoutCallbackOptions {
            /**
             * 成功返回的回调函数
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

        interface WriteNdefMessageOptions {
            /**
             * uri数组
             */
            uris?: string[];
            /**
             * text数组
             */
            texts?: string[];
            /**
             * 二进制对象数组, 需要指明 id, type 以及 payload (均为 ArrayBuffer 类型)
             */
            records?: Message[];
        }

        interface WriteNdefMessageCallbackOptions {
            /**
             * 成功回调
             */
            success: () => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 调用结束
             */
            complete: () => void;
        }

        interface Ndef {
            /**
             * 断开连接
             */
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;
            /**
             * 连接 NFC 标签
             */
            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;
            /**
             * 获取当前标签的连接状态
             */
            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;
            /**
             * 设置超时时间
             */
            setTimeout(obj: SetTimeoutOptions & RecordCombine<SetTimeoutCallbackOptions>): void;
            setTimeout(obj: SetTimeoutOptions): ReturnPromise<void>;
            /**
             * 发送数据
             */
            writeNdefMessage(obj: WriteNdefMessageOptions & RecordCombine<WriteNdefMessageCallbackOptions>): void;
            writeNdefMessage(obj?: WriteNdefMessageOptions): ReturnPromise<void>;
        }
    }

    namespace NfcA {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface SetTimeoutOptions {
            /**
             * 超时时间（ms）
             */
            timeout: number;
        }

        interface SetTimeoutCallbackOptions {
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

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface GetAtqaCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetAtqaSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetAtqaSuccessOptions {
            /**
             * 返回 ATQA/SENS_RES 数据
             */
            atqa: ArrayBuffer;
        }

        interface GetSakCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetSakSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetSakSuccessOptions {
            /**
             * 返回 SAK/SEL_RES 数据
             */
            sak: ArrayBuffer;
        }

        interface NfcA {
            /**
             * 断开连接
             */
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;
            /**
             * 连接 NFC 标签
             */
            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;
            /**
             * 获取最大传输长度
             */
            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;
            /**
             * 获取当前标签的连接状态
             */
            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;
            /**
             * 设置超时时间
             */
            setTimeout(obj: SetTimeoutOptions & RecordCombine<SetTimeoutCallbackOptions>): void;
            setTimeout(obj: SetTimeoutOptions): ReturnPromise<void>;
            /**
             * 发送数据
             */
            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
            /**
             * 获取ATQA信息
             */
            getAtqa(obj: RecordCombine<GetAtqaCallbackOptions>): void;
            getAtqa(): ReturnPromise<GetAtqaSuccessOptions>;
            /**
             * 获取SAK信息
             */
            getSak(obj: RecordCombine<GetSakCallbackOptions>): void;
            getSak(): ReturnPromise<GetSakSuccessOptions>;
        }
    }

    namespace NfcB {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface NfcB {
            /**
             * 断开连接
             */
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;
            /**
             * 连接 NFC 标签
             */
            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;
            /**
             * 获取最大传输长度
             */
            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;
            /**
             * 获取当前标签的连接状态
             */
            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;
            /**
             * 发送数据
             */
            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
        }
    }

    namespace NfcF {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface SetTimeoutOptions {
            /**
             * 超时时间（ms）
             */
            timeout: number;
        }

        interface SetTimeoutCallbackOptions {
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

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface NfcF {
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;

            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;

            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;

            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;

            setTimeout(obj: SetTimeoutOptions & RecordCombine<SetTimeoutCallbackOptions>): void;
            setTimeout(obj: SetTimeoutOptions): ReturnPromise<void>;

            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
        }
    }

    namespace NfcV {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface NfcV {
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;

            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;

            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;

            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;

            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
        }
    }

    namespace IsoDep {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetHistoricalBytesCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetHistoricalBytesSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetHistoricalBytesSuccessOptions {
            /**
             * 返回历史二进制数据
             */
            histBytes: ArrayBuffer;
        }

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 返回最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface SetTimeoutOptions {
            /**
             * 超时时间（ms）
             */
            timeout: number;
        }

        interface SetTimeoutCallbackOptions {
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

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface IsoDep {
            /**
             * 断开连接
             */
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;
            /**
             * 连接 NFC 标签
             */
            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;
            /**
             * 获取复位信息
             */
            getHistoricalBytes(obj: RecordCombine<GetHistoricalBytesCallbackOptions>): void;
            getHistoricalBytes(): ReturnPromise<GetHistoricalBytesSuccessOptions>;
            /**
             * 获取最大传输长度
             */
            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;
            /**
             * 获取当前标签的连接状态
             */
            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;
            /**
             * 设置超时时间
             */
            setTimeout(obj: SetTimeoutOptions & RecordCombine<SetTimeoutCallbackOptions>): void;
            setTimeout(obj: SetTimeoutOptions): ReturnPromise<void>;
            /**
             * 发送数据
             */
            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
        }
    }

    namespace MifareClassic {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 当前标签的连接状态
             */
            isConnected: boolean;
        }

        interface SetTimeoutOptions {
            /**
             * 超时时间（ms）
             */
            timeout: number;
        }

        interface SetTimeoutCallbackOptions {
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

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface MifareClassic {
            /**
             * 断开连接
             */
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;
            /**
             * 连接 NFC 标签
             */
            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;
            /**
             * 获取最大传输长度
             */
            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;
            /**
             * 获取当前标签的连接状态
             */
            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;
            /**
             * 设置超时时间
             */
            setTimeout(obj: SetTimeoutOptions & RecordCombine<SetTimeoutCallbackOptions>): void;
            setTimeout(obj: SetTimeoutOptions): ReturnPromise<void>;
            /**
             * 发送数据
             * @description
             * 对于MifareClassic的分块读写：
             * - 0x30：读取某个块的数据，指令[1位] + 块号[1位]
             * - 0xA0：往某个块区写入数据，指令[1位] + 块号[1位] + 数据[16位]
             * - 0x60：用密钥A对扇区进行身份验证，指令[1位] + 扇区[1位] + tagID[4位] + 秘钥[6位]
             * - 0x61：用密钥B对扇区进行身份验证，指令[1位] + 扇区[1位] + tagID[4位] + 秘钥[6位]
             * - 0xC1：递增值块，将结果存储在标记的临时块中，指令[1位] + 块号[1位] + 数据[4位]
             * - 0xC0：递减值块，将结果存储在标记的临时块中，指令[1位] + 块号[1位] + 数据[4位]
             * - 0xC2：将块区中的数据复制到临时块中，指令[1位] + 块号[1位]
             * - 0xB0：将临时块中的数据复制到指定的块区中，指令[1位] + 块号[1位]
             */
            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
        }
    }

    namespace MifareUltralight {
        interface CloseCallbackOptions {
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

        interface ConnectCallbackOptions {
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

        interface GetMaxTransceiveLengthCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: GetMaxTransceiveLengthSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface GetMaxTransceiveLengthSuccessOptions {
            /**
             * 最大传输长度
             */
            length: number;
        }

        interface IsConnectedCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: IsConnectedSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface IsConnectedSuccessOptions {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }

        interface SetTimeoutOptions {
            /**
             * 超时时间（ms）
             */
            timeout: number;
        }

        interface SetTimeoutCallbackOptions {
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

        interface TransceiveOptions {
            /**
             * 需要传递的二进制数据
             */
            data?: ArrayBuffer;
        }

        interface TransceiveCallbackOptions {
            /**
             * 成功回调
             */
            success: (data: TransceiveSuccessOptions) => void;
            /**
             * 失败回调
             */
            fail: (data: any, code: number) => void;
            /**
             * 执行结束后的回调
             */
            complete: () => void;
        }

        interface TransceiveSuccessOptions {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }

        interface MifareUltralight {
            /**
             * 断开连接
             */
            close(obj: RecordCombine<CloseCallbackOptions>): void;
            close(): ReturnPromise<void>;
            /**
             * 连接 NFC 标签
             */
            connect(obj: RecordCombine<ConnectCallbackOptions>): void;
            connect(): ReturnPromise<void>;
            /**
             * 获取最大传输长度
             */
            getMaxTransceiveLength(obj: RecordCombine<GetMaxTransceiveLengthCallbackOptions>): void;
            getMaxTransceiveLength(): ReturnPromise<GetMaxTransceiveLengthSuccessOptions>;
            /**
             * 获取当前标签的连接状态
             */
            isConnected(obj: RecordCombine<IsConnectedCallbackOptions>): void;
            isConnected(): ReturnPromise<IsConnectedSuccessOptions>;
            /**
             * 设置超时时间
             */
            setTimeout(obj: SetTimeoutOptions & RecordCombine<SetTimeoutCallbackOptions>): void;
            setTimeout(obj: SetTimeoutOptions): ReturnPromise<void>;
            /**
             * 发送数据
             * @description
             * 对于MifareUltralight的分页读写:
             * - 0x30：读取某页的数据，指令[1位] + 页号[1位]
             * - 0xA2：往某页写入数据，指令[1位] + 页号[1位] + 数据
             */
            transceive(obj: TransceiveOptions & RecordCombine<TransceiveCallbackOptions>): void;
            transceive(obj?: TransceiveOptions): ReturnPromise<TransceiveSuccessOptions>;
        }
    }

    namespace NFCAdapter {
        interface StartDiscoveryCallbackOptions {
            /**
             * 成功返回的回调函数
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

        interface StopDiscoveryCallbackOptions {
            /**
             * 成功返回的回调函数
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

        interface OnDiscoveredOptions {
            /**
             * 监听 NFC Tag
             */
            callback?: (data: OnDiscoveredCallbackOptions) => void;
            /**
             * 失败回调
             */
            fail?: (data: any, code: number) => void;
        }

        interface OnDiscoveredCallbackOptions {
            /**
             * tech 数组，用于匹配NFC卡片具体可以使用什么标准（NfcA等实例）处理
             */
            techs: string[];
            /**
             * tag ID
             */
            id: ArrayBuffer;
            /**
             * NdefMessage 数组, 消息格式为 {id: ArrayBuffer, type: ArrayBuffer, payload: ArrayBuffer}
             */
            messages: Ndef.Message[];
        }

        /**
         * NFCAdapter 对象用于扫描和监听 NFC 标签，以及获取对应的标签实例的 API。
         */
        interface NFCAdapter {
            /**
             * 开始扫描NFC标签
             */
            startDiscovery(obj: RecordCombine<StartDiscoveryCallbackOptions>): void;
            startDiscovery(): ReturnPromise<void>;

            /**
             * 关闭NFC标签扫描
             */
            stopDiscovery(obj: RecordCombine<StopDiscoveryCallbackOptions>): void;
            stopDiscovery(): ReturnPromise<void>;

            /**
             * 监听 NFC Tag
             */
            onDiscovered(obj: OnDiscoveredOptions): void;

            /**
             * 取消监听 NFC Tag
             */
            offDiscovered(): void;

            /**
             * 获取 Ndef 实例
             */
            getNdef(): Ndef.Ndef;

            /**
             * 获取 NfcA 实例
             */
            getNfcA(): NfcA.NfcA;

            /**
             * 获取 NfcB 实例
             */
            getNfcB(): NfcB.NfcB;

            /**
             * 获取 NfcF 实例
             */
            getNfcF(): NfcF.NfcF;

            /**
             * 获取 NfcV 实例
             */
            getNfcV(): NfcV.NfcV;

            /**
             * 获取 IsoDep 实例
             */
            getIsoDep(): IsoDep.IsoDep;

            /**
             * 获取 MifareClassic 实例
             */
            getMifareClassic(): MifareClassic.MifareClassic;

            /**
             * 获取 MifareUltralight 实例
             */
            getMifareUltralight(): MifareUltralight.MifareUltralight;
        }
    }

    /**
     * 获取客户端NFC适配器
     */
    function getNFCAdapter(): NFCAdapter.NFCAdapter;
}
