import React from 'react';
import dotenv from '../variables/dotenv';
import {postData} from "../axios/index";

export const stores = () => {
    try {
        let payload = { id: id };
        const data = postData(`${api}/api/product/get`, payload);
        return data;
    } catch (error) {
        return error;
    }
}
