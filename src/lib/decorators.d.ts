/**
 * 装饰器 - 前置某个方法
 *
 * @export
 * @param {Function} fn 要在方法调用前先执行的方法
 * @returns
 */
export declare function prependFn(fn: Function): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => void;
