/* eslint-disable */
export interface ApiReponse {
    data: any;
    code: number;
    count: number;
    message: string;
}

export interface ApiRequestParams {
    limit?: number;
    skip?: number;
    [key: string]: any;
}


export interface ApiRequestBody {
    [key: string]: any;
}