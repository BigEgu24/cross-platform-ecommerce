import React from 'react';
import {API_URL, API_TOKEN} from "@env";

export default function dotenv() {
    return {
        api: API_URL, 
        token: API_TOKEN
    }
}
