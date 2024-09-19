import React from 'react'
import NavBar from './NavBar'
import ButtonSection from './ButtonSection'
import Card from './Card'

const NewsApp = () => {
  const Styles = {
    width: "75%",
    padding: "20px",
    margin: "0px auto",
    display: "flex",
    gap: "20px"
  };
  return (
    
    <div>
        <NavBar />
        <ButtonSection />
        <div style={Styles}>
        <Card />
        <Card />

        </div>

    </div>
  )
}

export default NewsApp