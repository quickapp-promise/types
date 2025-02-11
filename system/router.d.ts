/**
 * 页面路由
 * 接口声明: 无需声明
 */
declare module "@system.router" {
  // router.push接口
  interface PushParams {
    /**
     * 要跳转到的uri，可以是包含schema的完整uri（如tel:10086）、以‘/’开头的应用内页面的路径（如/about）、以非‘/’开头的应用内页面的名称（如About），特殊的，若为"/"，则跳转到path为"/"的页，没有则跳转到首页
     */
    uri: string;
    /**
     * 跳转时需要传递的数据，跳转到短信发送页面时，可通过body插入短信内容；跳转到快应用页面时，参数可在目标页面中通过this.param1的方式使用，param1对应的值会统一转换为String类型。
     * 此外还包含快应用官方提供的部分供选参数：
     * - body: 跳转时短信发送页面时携带的短信内容
     * - ___PARAM_LAUNCH_FLAG___: 快应用启动参数，目前仅支持"clearTask"，在启动目标页面时会清除除此页面外的其他页面
     * - ___PARAM_PAGE_ANIMATION___: 页面跳转时动画类型
     */
    params?: {
      body?: string;
      ___PARAM_LAUNCH_FLAG___?: string;
      ___PARAM_PAGE_ANIMATION___?: {
        openEnter?: "slide" | "none";
        closeEnter?: "slide" | "none";
        openExit?: "slide" | "none";
        closeExit?: "slide" | "none";
      };
      [key: string]: any;
    };
  }

  /**
   * 跳转到应用内的某个页面，页面栈层数没有限制
   * 注意：不能跳到 tabBar 页面
   */
  function push(OBJECT: PushParams): void;

  // router.replace接口
  interface ReplaceParams {
    /**
     * 要跳转到的uri，可以是以‘/’开头的应用内页面的路径（如/about）、以非‘/’开头的应用内页面的名称（如About），特殊的，若为"/"，则跳转到path为"/"的页，没有则跳转到首页
     */
    uri: string;
    /**
     * 跳转时需要传递的数据，参数可在目标页面中通过this.param1的方式使用，param1对应的值会统一转换为String类型
     */
    params?: {
      [key: string]: any;
    };
  }

  /**
   * 跳转到应用内的某个页面，当前页面无法返回
   * 注意：不能跳到 tabBar 页面
   */
  function replace(OBJECT: ReplaceParams): void;

  // router.switchTab接口
  interface SwitchTabParams {
    /**
     * 要跳转到的uri，是以‘/’开头的应用内页面的路径，且必须是配置文件中已经定义存在的tabBar页面路径
     */
    uri: string;
    /**
     * 跳转时需要传递的数据，参数可在目标页面中通过this.param1的方式使用，param1对应的值会统一转换为String类型
     */
    params?: {
      [key: string]: any;
    };
  }

  /**
   * 跳转到 tabBar 页面，并关闭其他所有页面
   * 注：oppo侧暂不支持
   */
  function switchTab(OBJECT: SwitchTabParams): void;

  // router.back接口
  interface BackParams {
    /**
     * 返回目标页面的路径，可以是不传该参数（返回上一页面）、以‘/’开头的应用内已打开页面的路径（如/about），特殊的，若为"/"，则跳转到页面名称为"/"的页，没有则跳转到首页
     */
    path?: string;
  }

  /**
   * 返回指定页面
   */
  function back(OBJECT?: BackParams): void;

  /**
   * 清空所有历史页面记录，仅保留当前页面
   */
  function clear(): void;

  /**
   * 获取当前页面栈的页面数量
   */
  function getLength(): number;

  // router.getState接口
  interface GetStateResult {
    /**
     * 当前页面在页面栈中的位置
     */
    index: number;
    /**
     * 当前页面的名称
     */
    name: string;
    /**
     * 当前页面的路径
     */
    path: string;
  }

  /**
   * 获取当前页面状态
   */
  function getState(): GetStateResult;

  // router.getPages接口
  interface PageInfo {
    /**
     * 页面的名称
     */
    name: string;
    /**
     * 页面的路径
     */
    path: string;
  }

  /**
   * 获取当前页面栈列表
   */
  function getPages(): PageInfo[];
}
