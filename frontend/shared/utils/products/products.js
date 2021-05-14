import React, { useState } from 'react';
import dotenv from '../variables/dotenv';
import { postData } from "../axios/index";
export const getProductInfo = async id => {
  try {
    let {
      api
    } = dotenv();
    let payload = {
      id: id
    };
    const data = await postData(`${api}/api/product/get`, payload);
    return data;
  } catch (error) {
    return error;
  }
};