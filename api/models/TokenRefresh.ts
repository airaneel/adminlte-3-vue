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
 * @interface TokenRefresh
 */
export interface TokenRefresh {
    /**
     * 
     * @type {string}
     * @memberof TokenRefresh
     */
    refresh: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRefresh
     */
    readonly access?: string;
}

/**
 * Check if a given object implements the TokenRefresh interface.
 */
export function instanceOfTokenRefresh(value: object): value is TokenRefresh {
    if (!('refresh' in value) || value['refresh'] === undefined) return false;
    return true;
}

export function TokenRefreshFromJSON(json: any): TokenRefresh {
    return TokenRefreshFromJSONTyped(json, false);
}

export function TokenRefreshFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenRefresh {
    if (json == null) {
        return json;
    }
    return {
        
        'refresh': json['refresh'],
        'access': json['access'] == null ? undefined : json['access'],
    };
}

export function TokenRefreshToJSON(value?: Omit<TokenRefresh, 'access'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'refresh': value['refresh'],
    };
}

