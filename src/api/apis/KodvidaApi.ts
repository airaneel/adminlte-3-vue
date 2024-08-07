/* tslint:disable */
/* eslint-disable */
/**
 * Your Project API
 * API documentation for your project
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@yourproject.local
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  KodVida,
  KodvidaList200Response,
} from '../models/index';
import {
    KodVidaFromJSON,
    KodVidaToJSON,
    KodvidaList200ResponseFromJSON,
    KodvidaList200ResponseToJSON,
} from '../models/index';

export interface KodvidaCreateRequest {
    data: Omit<KodVida, 'id'>;
}

export interface KodvidaDeleteRequest {
    id: number;
}

export interface KodvidaListRequest {
    title?: string;
    limit?: number;
    offset?: number;
}

export interface KodvidaPartialUpdateRequest {
    id: number;
    data: Omit<KodVida, 'id'>;
}

export interface KodvidaReadRequest {
    id: number;
}

export interface KodvidaUpdateRequest {
    id: number;
    data: Omit<KodVida, 'id'>;
}

/**
 * 
 */
export class KodvidaApi extends runtime.BaseAPI {

    /**
     */
    async kodvidaCreateRaw(requestParameters: KodvidaCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KodVida>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling kodvidaCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/kodvida/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: KodVidaToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KodVidaFromJSON(jsonValue));
    }

    /**
     */
    async kodvidaCreate(requestParameters: KodvidaCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KodVida> {
        const response = await this.kodvidaCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kodvidaDeleteRaw(requestParameters: KodvidaDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling kodvidaDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/kodvida/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async kodvidaDelete(requestParameters: KodvidaDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.kodvidaDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async kodvidaListRaw(requestParameters: KodvidaListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KodvidaList200Response>> {
        const queryParameters: any = {};

        if (requestParameters['title'] != null) {
            queryParameters['title'] = requestParameters['title'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/kodvida/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KodvidaList200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async kodvidaList(requestParameters: KodvidaListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KodvidaList200Response> {
        const response = await this.kodvidaListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kodvidaPartialUpdateRaw(requestParameters: KodvidaPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KodVida>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling kodvidaPartialUpdate().'
            );
        }

        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling kodvidaPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/kodvida/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: KodVidaToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KodVidaFromJSON(jsonValue));
    }

    /**
     */
    async kodvidaPartialUpdate(requestParameters: KodvidaPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KodVida> {
        const response = await this.kodvidaPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kodvidaReadRaw(requestParameters: KodvidaReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KodVida>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling kodvidaRead().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/kodvida/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KodVidaFromJSON(jsonValue));
    }

    /**
     */
    async kodvidaRead(requestParameters: KodvidaReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KodVida> {
        const response = await this.kodvidaReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kodvidaUpdateRaw(requestParameters: KodvidaUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KodVida>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling kodvidaUpdate().'
            );
        }

        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling kodvidaUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/kodvida/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: KodVidaToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KodVidaFromJSON(jsonValue));
    }

    /**
     */
    async kodvidaUpdate(requestParameters: KodvidaUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KodVida> {
        const response = await this.kodvidaUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
