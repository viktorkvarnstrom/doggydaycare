import React from 'react'
import '../styles/Welcome.css'
import dogimage from '../assets/dogimage.jpg'

  
const Welcome = props => {
    return (
        <div className="centerItems">
          <h1>Hej och välkommen till doggy care!</h1>
          <p>Vi tar hand om din hund</p>
          <img src={dogimage} />
        </div>
    )   
}

export default Welcome