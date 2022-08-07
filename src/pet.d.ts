import { IOpt } from "./Interface";
export declare class pet {
    /**
     * 初始化配置
     *
     * @private
     * @type {object}
     * @memberof pet
     */
    private initOpt;
    /**
     * 菜单是否展开
     *
     * @private
     * @type {boolean}
     * @memberof pet
     */
    private menuOn;
    /**
     * 输入框是否展开
     *
     * @private
     * @type {boolean}
     * @memberof pet
     */
    private inputOn;
    /**
     * 输入框回调函数
     *
     * @private
     * @type {Function}
     * @memberof pet
     */
    private inputFunc;
    /**
     * 要循环骚操作的定时器
     *
     * @private
     * @type {number}
     * @memberof pet
     */
    private freeActionTimer;
    /**
     * 渐显文字的dfd
     *
     * @private
     * @type {Deferred}
     * @memberof pet
     */
    private freeSayDfd;
    /**
     * 当前菜单配置
     *
     * @private
     * @type {IOpt}
     * @memberof pet
     */
    private opt;
    /**
     * 小精灵文字容器
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleNodeWord;
    /**
     * 整个小精灵
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleNodeMain;
    /**
     * 小精灵身体部分
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleNodeBody;
    /**
     * 菜单容器
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleNodeMenu;
    private readonly eleFace;
    /**
     * 身体容器
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleChatBody;
    /**
     * 对话框输入
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleChatInputBox;
    /**
 * 对话框输入
 * @private
 * @memberof pet
 */
    private readonly eleChatInput;
    /**
     * 输入确认
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleChatInputOK;
    /**
     * 菜单toggle按钮
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleNodeMenuBtn;
    /**
     * 召唤按钮
     *
     * @readonly
     * @private
     * @memberof pet
     */
    private readonly eleNodeZhaohuan;
    /**
     * 填充dom
     *
     * @private
     * @memberof pet
     */
    private fillDom;
    /**
     * 填充菜单
     *
     * @private
     * @param {Array<string>} [subMenus=[]]
     * @memberof pet
     */
    private fillMenu;
    private getPosBySieze;
    /**
     * 判断相对屏幕偏移，防止超出屏幕
     * @param pos  坐标
     * @param type 1显示状态 2隐藏状态
     * @param immediately  是否立即改变位置
     * @param isChange  是否修正坐标
     */
    private calcDrag;
    /**
     * 设置位置
     * @param type 1显示状态 2隐藏状态
     * @param pos  坐标
     */
    private setPosition;
    /**
     * 绑定事件
     *
     * @private
     * @memberof pet
     */
    private evtSet;
    /**
     * 选择某一项
     *
     * @private
     * @param {string} [cccmd='']
     * @memberof pet
     */
    private choseItem;
    /**
     * 开始随机行为
     *
     * @private
     * @param {boolean} [rightNow=false] 立即开始
     * @param {boolean} [interval=true] 是否循环
     * @memberof pet
     */
    private freeAction;
    /**
     * 输出对话内容
     *
     * @public
     * @param {string} content
     * @memberof pet
     */
    sayWords(content: string): void;
    /**
     * 渐显文字
     *
     * @private
     * @param {string} content
     * @memberof pet
     */
    private freeSay;
    /**
     * 显示/隐藏 菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof pet
     */
    private toggleMenu;
    /**
     * 显示菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof pet
     */
    private showMenu;
    /**
     * 隐藏菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof pet
     */
    private hideMenu;
    /**
     * 显示输入框
     *
     * @private
     * @returns {Deferred}
     * @memberof pet
     */
    private showInput;
    /**
     * 隐藏输入框
     *
     * @private
     * @returns {Deferred}
     * @memberof pet
     */
    private hideInput;
    /**
     * 动态插入css
     */
    private loadLessStyle;
    private getPosition;
    /**
     * 初始化
     *
     * @param {IOpt} opt
     * @memberof pet
     */
    init(opt: IOpt): void;
    /**
     * 清除缓存
     */
    clearAll(key?: string): void;
    /**
     * 修改主题配置
     * @param type  是否强制修改主题配置
     */
    changeTheme(type?: boolean): void;
    /**
     * 获取真实尺寸
     * @param key
     */
    private getRealSize;
    /**
     * 修改颜色
     * @param type
     */
    changeColor(type: any): void;
    /**
     * 修改大小
     * @param type
     */
    changeSize(type: any): void;
    /**
     * 显示小精灵
     *
     * @memberof pet
     */
    show(): void;
    /**
     * 隐藏
     *
     * @memberof pet
     */
    hide(): void;
}
declare const _default: pet;
export default _default;
