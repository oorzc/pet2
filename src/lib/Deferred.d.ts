export default class Deferred {
    /**
     * 回调队列
     *
     * @private
     * @type {(Array<number | Function>)}
     * @memberof Deferred
     */
    private queue;
    /**
     * 0-pending 1-fulfilled
     *
     * @private
     * @type {number}
     * @memberof Deferred
     */
    private statu;
    /**
     * 是否禁用
     *
     * @private
     * @type {boolean}
     * @memberof Deferred
     */
    private disabled;
    /**
     * 是否正在出列
     *
     * @private
     * @type {boolean}
     * @memberof Deferred
     */
    private invoking;
    /**
     * 出列
     *
     * @private
     * @returns {void}
     * @memberof Deferred
     */
    private next;
    /**
     * 添加到队列
     *
     * @param {Function|number} fn
     * @returns {Deferred}
     * @memberof Deferred
     */
    then(fnOrNum: Function | number): Deferred;
    /**
     * 延时
     *
     * @param {number} num
     * @returns {Deferred}
     * @memberof Deferred
     */
    delay(num: number): Deferred;
    /**
     * 改变状态为 fulfilled
     *
     * @returns {Deferred}
     * @memberof Deferred
     */
    resolve(): Deferred;
    /**
     * 禁用
     *
     * @returns {Deferred}
     * @memberof Deferred
     */
    disable(): Deferred;
}
