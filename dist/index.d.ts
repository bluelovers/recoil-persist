import { MutableSnapshot } from 'recoil';
export interface IRecoilPersistConfig {
    /**
     * The default key to use in local storage
     */
    key?: string;
    /**
     * Can be set as `sessionStorage` or `localStorage`. Defaults value is `localStorage`.
     */
    storage?: Storage;
}
/**
 * Recoil module to persist state to passed storage (it use localStorage by default)
 *
 * @param {String[]} paths The keys of state object
 *    that will be store in storage
 * @param {Object} config The config object
 * @param {String} [config.key='recoil-persist'] The default key
 *    to use in local storage
 * @param {Storage} [config.storage] Can be set as `sessionStorage` or
 *    `localStorage`. Defaults value is `localStorage`.
 */
export declare function recoilPersist(paths?: string[], config?: IRecoilPersistConfig): {
    RecoilPersist: () => null;
    updateState: ({ set }: MutableSnapshot) => void;
};
export default recoilPersist;
