/**
 * 坐标
 *
 * @export
 * @interface IPoint
 */
export interface IPoint {
    x: number;
    y: number;
}
/**
 * 初始化参数
 *
 * @export
 * @interface IOpt
 */
export interface IOpt {
    /**
     * 是否可拖动
     * @type {boolean}
     * @memberof IOpt
     */
    drag?: boolean;
    /**
     * 是否显示对话框
     * @type {boolean}
     * @memberof IOpt
     */
    showChat?: boolean;
    /**
     * 隐藏时的对话
     * @type {string}
     * @memberof IOpt
     */
    hideText?: string;
    /**
     * 显示时的对话
     * @type {string}
     * @memberof IOpt
     */
    showText?: string;
    /**
     * 主题颜色
     * @type {string}
     * @memberof IOpt
     */
    themeUrl?: string;
    /**
     * 颜色
     * @type {string}
     * @memberof IOpt
     */
    color?: string;
    /**
     * 大小
     * @type {string}
     * @memberof IOpt
     */
    size?: string;
    /**
     * 菜单
     *
     * @type {IMenuItem}
     * @memberof IOpt
     */
    menu: IMenuItem;
    /**
     * 随机语句
     *
     * @type {Array<string>}
     * @memberof IOpt
     */
    words: Array<string>;
}
/**
 * 菜单项
 *
 * @export
 * @interface IMenuItem
 */
export interface IMenuItem {
    /**
     * 展开菜单时，陈述的文字
     *
     * @type {string}
     * @memberof IMenuItem
     */
    $title?: string;
    /**
     * 点击每一项菜单时，进行的操作
     * string    - 陈述文字
     * Function  - 执行回调方法
     * ImenuItem - 子菜单
     *
     * @type {number|array|string|Function|IMenuItem}
     * @memberof IMenuItem
     */
    [prop: string]: Array<any> | number | string | Function | IMenuItem;
}
