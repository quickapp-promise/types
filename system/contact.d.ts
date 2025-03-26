/**
 * 联系人
 * 接口声明: {"name": "system.contact"}
 */
declare module "@system.contact" {
    interface PickCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: ContactItem) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface ContactItem {
        /**
         * 联系人名称
         */
        displayName: string;
        /**
         * 电话号码
         */
        number: string;
    }

    /**
     * 选择联系人
     */
    function pick(obj: RecordCombine<PickCallbackOptions>): void;
    function pick(): Promise<ContactItem>;

    interface ListCallbackOptions {
        /**
         * 成功回调
         */
        success: (data: ListSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete: () => void;
    }

    interface ListSuccessOptions {
        /**
         * 联系人列表
         */
        contactList: ContactItem[];
    }

    /**
     * 获取通讯录所有联系人列表，每次获取都需要用户授权
     * [1050+]
     */
    function list(obj: RecordCombine<ListCallbackOptions>): void;
    function list(): Promise<ListSuccessOptions>;
}
