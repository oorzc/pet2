import { IOpt } from "./Interface";
export declare class elves {
    /**
     * 菜单是否展开
     *
     * @private
     * @type {boolean}
     * @memberof elves
     */
    private menuOn;
    /**
     * 要循环骚操作的定时器
     *
     * @private
     * @type {number}
     * @memberof elves
     */
    private freeActionTimer;
    /**
     * 渐显文字的dfd
     *
     * @private
     * @type {Deferred}
     * @memberof elves
     */
    private freeSayDfd;
    /**
     * 当前菜单配置
     *
     * @private
     * @type {IOpt}
     * @memberof elves
     */
    private opt;
    /**
     * 小精灵文字容器
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleNodeWord;
    /**
     * 整个小精灵
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleNodeMain;
    /**
     * 小精灵身体部分
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleNodeBody;
    /**
     * 菜单容器
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleNodeMenu;
    /**
     * 对话框容器
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleChatBody;
    /**
     * 菜单toggle按钮
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleNodeMenuBtn;
    /**
     * 召唤按钮
     *
     * @readonly
     * @private
     * @memberof elves
     */
    private readonly eleNodeZhaohuan;
    /**
     * 填充dom
     *
     * @private
     * @memberof elves
     */
    private fillDom;
    /**
     * 填充菜单
     *
     * @private
     * @param {Array<string>} [subMenus=[]]
     * @memberof elves
     */
    private fillMenu;
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
     * @memberof elves
     */
    private evtSet;
    /**
     * 选择某一项
     *
     * @private
     * @param {string} [cccmd='']
     * @memberof elves
     */
    private choseItem;
    /**
     * 开始随机行为
     *
     * @private
     * @param {boolean} [rightNow=false] 立即开始
     * @param {boolean} [interval=true] 是否循环
     * @memberof elves
     */
    private freeAction;
    /**
     * 输出对话内容
     *
     * @public
     * @param {string} content
     * @memberof elves
     */
    sayWords(content: string): void;
    /**
     * 渐显文字
     *
     * @private
     * @param {string} content
     * @memberof elves
     */
    private freeSay;
    /**
     * 显示/隐藏 菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof elves
     */
    private toggleMenu;
    /**
     * 显示菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof elves
     */
    private showMenu;
    /**
     * 隐藏菜单
     *
     * @private
     * @returns {Deferred}
     * @memberof elves
     */
    private hideMenu;
    /**
     * 动态插入css
     */
    private loadLessStyle;
    private getPosition;
    /**
     * 初始化
     *
     * @param {IOpt} opt
     * @memberof elves
     */
    init(opt: IOpt): void;
    /**
     * 修改主题配置
     * @param type  是否强制修改主题配置
     */
    changeTheme(type?: boolean): void;
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
     * @memberof elves
     */
    show(): void;
    /**
     * 隐藏
     *
     * @memberof elves
     */
    hide(): void;
}
declare const _default: elves;
export default _default;
