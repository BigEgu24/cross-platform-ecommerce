import React from 'react';
import axios from "axios";
export const postData = async (url, payload) => {
  // axios post
  const data = await axios.post(url, payload);
  return data.data;
};
export const getData = async url => {
  // axios post
  const data = await axios.get(url);
  return data.data;
};