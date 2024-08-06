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
 * @interface Category
 */
export interface Category {
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    slug?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    urlPath: string;
    /**
     * 
     * @type {object}
     * @memberof Category
     */
    breadcrumbs?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof Category
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Category
     */
    antIsActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Category
     */
    rdhIsActive?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    readonly lft?: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    readonly rght?: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    readonly treeId?: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    readonly level?: number;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    parent?: number | null;
}

/**
 * Check if a given object implements the Category interface.
 */
export function instanceOfCategory(value: object): value is Category {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('urlPath' in value) || value['urlPath'] === undefined) return false;
    return true;
}

export function CategoryFromJSON(json: any): Category {
    return CategoryFromJSONTyped(json, false);
}

export function CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Category {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'title': json['title'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'urlPath': json['url_path'],
        'breadcrumbs': json['breadcrumbs'] == null ? undefined : json['breadcrumbs'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'antIsActive': json['ant_is_active'] == null ? undefined : json['ant_is_active'],
        'rdhIsActive': json['rdh_is_active'] == null ? undefined : json['rdh_is_active'],
        'lft': json['lft'] == null ? undefined : json['lft'],
        'rght': json['rght'] == null ? undefined : json['rght'],
        'treeId': json['tree_id'] == null ? undefined : json['tree_id'],
        'level': json['level'] == null ? undefined : json['level'],
        'parent': json['parent'] == null ? undefined : json['parent'],
    };
}

export function CategoryToJSON(value?: Omit<Category, 'id'|'lft'|'rght'|'tree_id'|'level'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'title': value['title'],
        'slug': value['slug'],
        'url_path': value['urlPath'],
        'breadcrumbs': value['breadcrumbs'],
        'is_active': value['isActive'],
        'ant_is_active': value['antIsActive'],
        'rdh_is_active': value['rdhIsActive'],
        'parent': value['parent'],
    };
}
