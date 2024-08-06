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
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    article?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    model?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    msId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    msCode?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof Product
     */
    isPublic?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    type?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    shorttitle?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    manufacturer?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    brand?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    country?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    regdoc?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    uom?: number | null;
    /**
     * 
     * @type {Set<number>}
     * @memberof Product
     */
    category?: Set<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof Product
     */
    clinics?: Set<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof Product
     */
    technology?: Set<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof Product
     */
    compatibleProducts?: Set<number>;
}

/**
 * Check if a given object implements the Product interface.
 */
export function instanceOfProduct(value: object): value is Product {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    return true;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'slug': json['slug'],
        'article': json['article'] == null ? undefined : json['article'],
        'model': json['model'] == null ? undefined : json['model'],
        'msId': json['ms_id'] == null ? undefined : json['ms_id'],
        'msCode': json['ms_code'] == null ? undefined : json['ms_code'],
        'isPublic': json['is_public'] == null ? undefined : json['is_public'],
        'type': json['type'] == null ? undefined : json['type'],
        'shorttitle': json['shorttitle'] == null ? undefined : json['shorttitle'],
        'manufacturer': json['manufacturer'] == null ? undefined : json['manufacturer'],
        'brand': json['brand'] == null ? undefined : json['brand'],
        'country': json['country'] == null ? undefined : json['country'],
        'regdoc': json['regdoc'] == null ? undefined : json['regdoc'],
        'uom': json['uom'] == null ? undefined : json['uom'],
        'category': json['category'] == null ? undefined : json['category'],
        'clinics': json['clinics'] == null ? undefined : json['clinics'],
        'technology': json['technology'] == null ? undefined : json['technology'],
        'compatibleProducts': json['compatible_products'] == null ? undefined : json['compatible_products'],
    };
}

export function ProductToJSON(value?: Omit<Product, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'slug': value['slug'],
        'article': value['article'],
        'model': value['model'],
        'ms_id': value['msId'],
        'ms_code': value['msCode'],
        'is_public': value['isPublic'],
        'type': value['type'],
        'shorttitle': value['shorttitle'],
        'manufacturer': value['manufacturer'],
        'brand': value['brand'],
        'country': value['country'],
        'regdoc': value['regdoc'],
        'uom': value['uom'],
        'category': value['category'] == null ? undefined : Array.from(value['category'] as Set<any>),
        'clinics': value['clinics'] == null ? undefined : Array.from(value['clinics'] as Set<any>),
        'technology': value['technology'] == null ? undefined : Array.from(value['technology'] as Set<any>),
        'compatible_products': value['compatibleProducts'] == null ? undefined : Array.from(value['compatibleProducts'] as Set<any>),
    };
}

