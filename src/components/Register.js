import React, { useState, useEffect } from 'react'
import '../styles/Register.css'


const Register = props => {
  const [dogs, setDogs] = useState(null)

  useEffect(() => {
      if(dogs == null) {
          fetch('https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6')
          .then(res => {
            return res.json()
          })
          .then(data => {
            console.log(data)
            setDogs(data)
          }, []) 
      }
  }) 

  return (
    <div>
      <div className="centerItems">
        <h1>Kund register</h1>
      </div>
      <table id="customers">
        <tr>
          <th>Förnamn</th>
          <th>Efternamn</th>
          <th>Telefon nummer</th>
        </tr>
        {dogs && dogs.map((dog) => (
            <tr key={dog.chipNumber}>
                <td>{dog.owner.name}</td>
                <td>{dog.owner.lastName}</td>
                <td>{dog.owner.phoneNumber}</td>
            </tr>
          ))}
      </table>
    </div>
  )
}

export default Register