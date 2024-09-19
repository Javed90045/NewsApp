import React from 'react'
import "../Styles/ButtonSection.css";
const ButtonSection = () => {
    const Buttons = [{
            Name: 'Sport'},
            {Name: 'Politics'},
            {Name:'Health'},
            {Name:'Entertainment'},
            {Name:'Technology'}
        ];
    
  return (
    <div className="ButtonSection">
        <div className="Heading">
            <p>Stay Update With TrendyNews!</p>
        </div>
        <div className='Buttons'>
        {
            Buttons.map((item) =>(
                <button key={item.Name}>{item.Name}</button>
            ))
        }
    </div>
    </div>
    
  )
}

export default ButtonSection