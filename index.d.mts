export interface ApiOptions {
    issuerId?: string;
    apiKey?: string;
    privateKey: string;
    version?: number;
    urlBase?: string;
    tokenExpiresInSeconds?: number;
    automaticRetries?: number;
    logRequests?: boolean;
    fetch?: typeof globalThis.fetch;
    haltPaginationOnEmptyData?: boolean;
}

export interface ApiClient {
    read(url: string, options?: object): Promise<{ data: any[]; included: any; meta: any; links: any }>;
    readAll(url: string, options?: object): Promise<{ data: any[]; included: any }>;
    create(options: { type: string; attributes?: object; relationships?: object; included?: object[]; version?: number }): Promise<any>;
    update(data: any, options: { attributes?: object; relationships?: object; included?: object[]; version?: number }): Promise<any>;
    remove(data: any, options?: { version?: number }): Promise<any>;
    uploadAsset(assetData: any, buffer: Buffer, maxTriesPerPart?: number, version?: number): Promise<void>;
    pollForUploadSuccess(assetUrl: string, logHeader?: string, delayInMilliseconds?: number, maxTries?: number): Promise<void>;
    fetch(url: string, options?: object): Promise<Response>;
    fetchJson(url: string, options?: object): Promise<any>;
    postJson(url: string, data: any, options?: object): Promise<any>;
}

export declare const api: (options?: ApiOptions) => Promise<ApiClient>;
