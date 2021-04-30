import React, {useState} from 'react';
import {getData} from "../axios/index";
import reducer from '../Reducers/PostsReducer';

const posts = (type) => {
    // Store posts state here and pass it down to the context
    
    if(type==="get-all"){
        //const data = await getData('https://api.github.com/users/BigEgu24');
        // setPosts({
        //     ...posts,
        //     data
        // })
        // console.log(data)
        // return posts;
    }
}
export default posts;
