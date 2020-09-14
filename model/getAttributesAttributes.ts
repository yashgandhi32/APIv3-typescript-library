/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { GetAttributesEnumeration } from './getAttributesEnumeration';

export class GetAttributesAttributes {
    /**
    * Name of the attribute
    */
    'name': string;
    /**
    * Category of the attribute
    */
    'category': GetAttributesAttributes.CategoryEnum;
    /**
    * Type of the attribute
    */
    'type'?: GetAttributesAttributes.TypeEnum;
    /**
    * Parameter only available for \"category\" type attributes.
    */
    'enumeration'?: Array<GetAttributesEnumeration>;
    /**
    * Calculated value formula
    */
    'calculatedValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "GetAttributesAttributes.CategoryEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GetAttributesAttributes.TypeEnum"
        },
        {
            "name": "enumeration",
            "baseName": "enumeration",
            "type": "Array<GetAttributesEnumeration>"
        },
        {
            "name": "calculatedValue",
            "baseName": "calculatedValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetAttributesAttributes.attributeTypeMap;
    }
}

export namespace GetAttributesAttributes {
    export enum CategoryEnum {
        Normal = <any> 'normal',
        Transactional = <any> 'transactional',
        Category = <any> 'category',
        Calculated = <any> 'calculated',
        Global = <any> 'global'
    }
    export enum TypeEnum {
        Text = <any> 'text',
        Date = <any> 'date',
        Float = <any> 'float',
        Id = <any> 'id',
        Boolean = <any> 'boolean'
    }
}
