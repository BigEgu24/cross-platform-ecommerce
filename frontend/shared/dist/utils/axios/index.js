import React from 'react';
import axios from "axios";
export const postData = (url, data) => {
  // axios post
  axios.post(url, data).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
};
export const getData = async url => {
  // axios post
  const data = await axios.get(url);
  return data.data;
};