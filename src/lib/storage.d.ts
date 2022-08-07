/**
 * 获取localStorage中存储的信息
 *
 * @export
 * @returns {IPoint}
 */
export declare function getStorage(key: string): any;
/**
 * 将信息存储到localStorage中
 *
 * @export
 * @param {any} config
 */
export declare function saveStorage(key: string, config: any): void;
/**
 * 删除缓存
 * @export
 * @param {key}
 */
export declare function delStorage(key: string): void;
