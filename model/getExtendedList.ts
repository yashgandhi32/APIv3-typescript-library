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
import { GetExtendedListAllOf } from './getExtendedListAllOf';
import { GetExtendedListAllOfCampaignStats } from './getExtendedListAllOfCampaignStats';
import { GetList } from './getList';

export class GetExtendedList {
    /**
    * ID of the list
    */
    'id': number;
    /**
    * Name of the list
    */
    'name': string;
    /**
    * Number of blacklisted contacts in the list
    */
    'totalBlacklisted': number;
    /**
    * Number of contacts in the list
    */
    'totalSubscribers': number;
    /**
    * ID of the folder
    */
    'folderId': number;
    /**
    * Creation UTC date-time of the list (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'createdAt': Date;
    'campaignStats'?: Array<GetExtendedListAllOfCampaignStats>;
    /**
    * Status telling if the list is dynamic or not (true=dynamic, false=not dynamic)
    */
    'dynamicList'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "totalBlacklisted",
            "baseName": "totalBlacklisted",
            "type": "number"
        },
        {
            "name": "totalSubscribers",
            "baseName": "totalSubscribers",
            "type": "number"
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "campaignStats",
            "baseName": "campaignStats",
            "type": "Array<GetExtendedListAllOfCampaignStats>"
        },
        {
            "name": "dynamicList",
            "baseName": "dynamicList",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetExtendedList.attributeTypeMap;
    }
}

