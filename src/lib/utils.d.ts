/**
 * 获取参数类型
 *
 * @param {any} sender 要确定类型的参数
 * @returns {string}
 */
export declare function getType(sender: any): any;
/**
 * 函数防抖
 *
 * @export
 * @param {Function} fn
 * @param {number} [delay=0]
 * @returns
 */
export declare function debounce(fn: any, delay?: number): (...args: any[]) => void;
/**
 * 使元素可拖动
 *
 * @param {HTMLElement} targetNode 有效拖动区域的元素
 * @param {HTMLElement} dragNode 被拖动的目标元素
 * @param {function} callback
 */
export declare function drag(targetNode: any, dragNode: any, callback: any): void;
/**
 * 遍历(伪)数组，或对象
 *
 * @param {any} sender
 * @param {function} callback
 */
export declare function each(sender: any, callback: any): void;
/**
 * 检测是否属于(伪)数组
 *
 * @param {any} sender
 * @returns {boolean}
 */
export declare function arrayLike(sender: any): boolean;
/**
 * 获取随机数 int
 *
 * @export
 * @param {number} maxNum
 * @returns
 */
export declare function randomInt(maxNum: number): number;
