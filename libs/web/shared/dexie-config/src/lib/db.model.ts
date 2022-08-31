/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IDBConfig {
    name: string;
    payload: { [key: string]: any }
}

export enum DBNames {
    CART = 'carts',
    APP_CONFIG = 'app_configs'
};

export enum DBKeys {
    CUSTOMER = 'customers',
};
