import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ButtonSection from "./ButtonSection";
import Card from "./Card";
import "../Styles/NewsApp.css";


const NewsApp = () => {
  
  const [search, setSearch] = useState("India")
  const [newsdata, setNewsData] = useState(null);
  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

  const getdata = async () =>{

    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const result = await response.json();
    const data = await result.articles.slice(0,13);
    console.log(data);
    setNewsData(data);
  }
  useEffect(()=>{
    getdata();
  }, []);

  const getButtonName = (name) =>{
    setSearch(name);
    console.log(name)
    getdata();
  }
  const inputContent = (input) =>{
    console.log(input)
    setSearch(input);
  }


  
  return (
    <div>
      <NavBar inputContent={inputContent} getdata= {getdata}/>
      <ButtonSection ButtonName = {getButtonName} />
      {
        newsdata ? <Card data={newsdata}/> : null
      }
    </div>
  );
};

export default NewsApp;
