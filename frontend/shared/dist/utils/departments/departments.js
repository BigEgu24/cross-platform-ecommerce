import React from 'react';
import dotenv from '../variables/dotenv';
import { postData } from "../axios/index";
export default async function getDepartments() {
  try {
    let {
      api
    } = dotenv();
    let payload = {
      id: id
    };
    const data = postData(`${api}/api/department`, payload);
    return data;
  } catch (error) {
    return error;
  }
}