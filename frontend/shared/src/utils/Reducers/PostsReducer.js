import React, { useReducer, useEffect } from 'react'
import {View, Text} from 'react-native';
import { getData } from '../axios/index';

export const ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS'
}

export const initialState = {
  products: []
}

export const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
      case 'SET_PRODUCTS':
          return {products: action.payload}
      default:
        return state;
  }
}

export const PostsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  async function fetchData(){
    const data = await getData("http://localhost:3000/api/products")
    dispatch({ type: 'SET_PRODUCTS', payload: data })
  }
  fetchData()
}