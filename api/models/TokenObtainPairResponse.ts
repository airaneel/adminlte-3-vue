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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenObtainPairResponse
 */
export interface TokenObtainPairResponse {
    /**
     * 
     * @type {string}
     * @memberof TokenObtainPairResponse
     */
    access: string;
    /**
     * 
     * @type {string}
     * @memberof TokenObtainPairResponse
     */
    refresh: string;
}

/**
 * Check if a given object implements the TokenObtainPairResponse interface.
 */
export function instanceOfTokenObtainPairResponse(value: object): value is TokenObtainPairResponse {
    if (!('access' in value) || value['access'] === undefined) return false;
    if (!('refresh' in value) || value['refresh'] === undefined) return false;
    return true;
}

export function TokenObtainPairResponseFromJSON(json: any): TokenObtainPairResponse {
    return TokenObtainPairResponseFromJSONTyped(json, false);
}

export function TokenObtainPairResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenObtainPairResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'access': json['access'],
        'refresh': json['refresh'],
    };
}

export function TokenObtainPairResponseToJSON(value?: TokenObtainPairResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'access': value['access'],
        'refresh': value['refresh'],
    };
}

