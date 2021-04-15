import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import {View, Text} from "react-native";
import Card from "@app/shared/dist/Card/Card";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  const getData = async(url) => {
    const result = await axios.get(url);
    return result.data;
  }
  const postData = () => {
    
  }
  const getProducts = async() => {
    const URL = "http://localhost:3000/api/products";
    const products = await getData(URL);
    const myProducts = products.products;
    console.log(myProducts)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => {
          return <Homepage />;
        }} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;