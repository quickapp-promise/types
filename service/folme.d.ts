/**
 * Amaml Folme动画接口
 */
declare module '@system.folme' {
    /**
     * 忽略对象当前状态，通知对象直接运动到目标状态
     * @param obj
     */
    function to(obj: {
        /**
         * 动画节点
         */
        id: string;
        /**
         * 动画属性。支持 参考：动画状态
         */
        toState: {
            [key: string]: number | string | {
                value?: number | string;
                ease?: (string | number)[];
                delay?: number;
            };
        };
        /**
         * 动画选项
         */
        config?: {
            delay?: number;
            ease?: (string | number)[];
        };
        /**
         * 动画更新触发
         */
        onUpdate?: () => void;
        /**
         * 动画执行完成触发
         */
        onComplete?: () => void;
    }): void;

    /**
     * 将对象直接设置到某个状态，如果对象正在动画中会停止当前动画
     * @param obj
     */
    function setTo(obj: {
        /**
         * 动画节点
         */
        id: string;
        /**
         * 动画属性。支持 参考：动画状态
         */
        toState: {
            [key: string]: number | string | {
                value?: number | string;
                ease?: (string | number)[];
                delay?: number;
            };
        };
        /**
         * 动画选项 ease 不生效
         */
        config?: {
            delay?: number;
        };
    }): void;

    /**
     * 将对象从某个状态运动到另一个状态(实现上可先执行setTo，再执行to)
     * @param obj
     */
    function fromTo(obj: {
        /**
         * 动画节点
         */
        id: string;
        /**
         * 开始动画属性。支持 参考：动画状态
         */
        fromState: {
            [key: string]: number | string | {
                value?: number | string;
                ease?: (string | number)[];
                delay?: number;
            };
        };
        /**
         * 结束动画属性。支持 参考：动画状态
         */
        toState: {
            [key: string]: number | string | {
                value?: number | string;
                ease?: (string | number)[];
                delay?: number;
            };
        };
        /**
         * 动画选项
         */
        config?: {
            delay?: number;
            ease?: (string | number)[];
        };
        /**
         * 动画更新触发
         */
        onUpdate?: () => void;
        /**
         * 动画执行完成触发
         */
        onComplete?: () => void;
    }): void;

    /**
     * 取消动画
     * @param obj
     */
    function cancel(obj: {
        /**
         * 动画节点
         */
        id: string;
        /**
         * 需要取消的动画属性。默认去取消所有
         */
        attrs?: string[];
    }): void;

    /**
     * 获取指定属性的状态
     * @param obj
     */
    function getState(obj: {
        /**
         * 动画节点
         */
        id: string;
        /**
         * 需要获取动画属性
         */
        attr: string;
    }): {
        value: string | number;
        isFinished: boolean;
        speed?: number;
    };

    /**
     * Vela新增，设置一组动画序列
     * @param objArray
     */
    function startGroup(objArray: Array<{
        /**
         * 动画节点
         */
        id: string;
        /**
         * 动画属性。支持 参考：动画状态
         */
        toState: {
            [key: string]: number | string | {
                value?: number | string;
                ease?: (string | number)[];
                delay?: number;
            };
        };
        /**
         * 动画选项
         */
        config?: {
            delay?: number;
            ease?: (string | number)[];
        };
    }>): void;
}
