/**
 * 动画函数，用于linear执行某个变化
 *
 * @export
 * @param {number} from 起始值
 * @param {number} to 目标值
 * @param {number} duration 持续时间
 * @param {Function} stepFn 每次变化执行的回调
 */
export default function animate(from: any, to: any, duration: any, stepFn: any): void;
/**
 * 向上收起
 *
 * @export
 * @param {HTMLElement} eleNode
 * @param {number} duration
 * @param {Function} callback
 */
export declare function slideUp(eleNode: any, duration: any, callback: any): void;
/**
 * 向下展开
 *
 * @export
 * @param {HTMLElement} eleNode
 * @param {number} duration
 * @param {Function} callback
 */
export declare function slideDown(eleNode: HTMLElement, duration: number, callback: Function): void;
/**
 * 渐隐，淡出
 *
 * @export
 * @param {HTMLElement} eleNode
 * @param {number} duration
 * @param {Function} callback
 */
export declare function fadeOut(eleNode: HTMLElement, duration: number, callback?: Function): void;
/**
 * 渐现，淡入
 *
 * @export
 * @param {HTMLElement} eleNode
 * @param {number} duration
 * @param {Function} callback
 */
export declare function fadeIn(eleNode: HTMLElement, duration: number, callback?: Function): void;
