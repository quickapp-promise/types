/**
 * 数据存储
 * 接口声明: {"name": "system.storage"}
 */
declare module "@system.storage" {
    export interface GetOptions {
        /**
         * 索引
         */
        key: string;
        /**
         * 如果 key 不存在，返回 default。如果 default 未指定，返回长度为 0 的空字符串
         */
        default?: string;
    }

    export interface GetCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: string) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    export interface SetOptions {
        /**
         * 索引
         */
        key: string;
        /**
         * 新值。如果新值是长度为0的空字符串，会删除以key为索引的数据项
         */
        value?: string;
    }

    export interface SetCallbackOptions {
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

    export interface ClearCallbackOptions {
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

    export interface DeleteOptions {
        /**
         * 索引
         */
        key: string;
    }

    export interface DeleteCallbackOptions {
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

    export interface KeyOptions {
        /**
         * 要查询的键名对应的索引
         */
        index: number;
    }

    export interface KeyCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: string) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    export class Storage {
        /**
         * 存储里的数据项的数量
         * [1050+]
         */
        length: number;

        /**
         * 读取存储内容
         */
        get(obj: GetOptions & RecordCombine<GetCallbackOptions>): void;
        get(obj: GetOptions): ReturnPromise<string>;

        /**
         * 修改存储内容
         */
        set(obj: SetOptions & RecordCombine<SetCallbackOptions>): void;
        set(obj: SetOptions): ReturnPromise<void>;

        /**
         * 清空存储内容
         */
        clear(obj: RecordCombine<ClearCallbackOptions>): void;
        clear(): ReturnPromise<void>;

        /**
         * 删除存储内容
         */
        delete(obj: DeleteOptions & RecordCombine<DeleteCallbackOptions>): void;
        delete(obj: DeleteOptions): ReturnPromise<void>;

        /**
         * 返回存储中某个index的键名
         * [1050+]
         */
        key(obj: KeyOptions & RecordCombine<KeyCallbackOptions>): void;
        key(obj: KeyOptions): ReturnPromise<string>;
    }

    const storage: InstanceType<typeof Storage>;

    export default storage;
}
