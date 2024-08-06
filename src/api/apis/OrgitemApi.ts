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
  Orgitem,
  OrgitemList200Response,
} from '../models/index';
import {
    OrgitemFromJSON,
    OrgitemToJSON,
    OrgitemList200ResponseFromJSON,
    OrgitemList200ResponseToJSON,
} from '../models/index';

export interface OrgitemCreateRequest {
    data: Omit<Orgitem, 'id'|'created_at'|'updated_at'>;
}

export interface OrgitemDeleteRequest {
    id: number;
}

export interface OrgitemListRequest {
    limit?: number;
    offset?: number;
}

export interface OrgitemPartialUpdateRequest {
    id: number;
    data: Omit<Orgitem, 'id'|'created_at'|'updated_at'>;
}

export interface OrgitemReadRequest {
    id: number;
}

export interface OrgitemUpdateRequest {
    id: number;
    data: Omit<Orgitem, 'id'|'created_at'|'updated_at'>;
}

/**
 * 
 */
export class OrgitemApi extends runtime.BaseAPI {

    /**
     */
    async orgitemCreateRaw(requestParameters: OrgitemCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Orgitem>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling orgitemCreate().'
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
            path: `/orgitem/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrgitemToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgitemFromJSON(jsonValue));
    }

    /**
     */
    async orgitemCreate(requestParameters: OrgitemCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Orgitem> {
        const response = await this.orgitemCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async orgitemDeleteRaw(requestParameters: OrgitemDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling orgitemDelete().'
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
            path: `/orgitem/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async orgitemDelete(requestParameters: OrgitemDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.orgitemDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async orgitemListRaw(requestParameters: OrgitemListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrgitemList200Response>> {
        const queryParameters: any = {};

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
            path: `/orgitem/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgitemList200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async orgitemList(requestParameters: OrgitemListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrgitemList200Response> {
        const response = await this.orgitemListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async orgitemPartialUpdateRaw(requestParameters: OrgitemPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Orgitem>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling orgitemPartialUpdate().'
            );
        }

        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling orgitemPartialUpdate().'
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
            path: `/orgitem/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OrgitemToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgitemFromJSON(jsonValue));
    }

    /**
     */
    async orgitemPartialUpdate(requestParameters: OrgitemPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Orgitem> {
        const response = await this.orgitemPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async orgitemReadRaw(requestParameters: OrgitemReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Orgitem>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling orgitemRead().'
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
            path: `/orgitem/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgitemFromJSON(jsonValue));
    }

    /**
     */
    async orgitemRead(requestParameters: OrgitemReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Orgitem> {
        const response = await this.orgitemReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async orgitemUpdateRaw(requestParameters: OrgitemUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Orgitem>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling orgitemUpdate().'
            );
        }

        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling orgitemUpdate().'
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
            path: `/orgitem/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrgitemToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgitemFromJSON(jsonValue));
    }

    /**
     */
    async orgitemUpdate(requestParameters: OrgitemUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Orgitem> {
        const response = await this.orgitemUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}