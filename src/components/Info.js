import React, { useState, useEffect } from 'react'
import '../styles/Info.css'

const Info = props => {
    const [dogs, setDogs] = useState(null)

    useEffect(() => {
        if (dogs == null) {
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
            <div className="centerItemsInfo">
                <div className="centerHeaderTxt">
                    <h1>Information om hundarna</h1>
                </div>
                <div id="gridInfoDogs">
                    {dogs && dogs.map((dog) => (
                        <div key={dog.chipNumber} className="card">
                            <img className="infoDog" src={dog.img} />
                            <div className="container">
                                <p><b>Namn: </b>{dog.name}</p>
                                <p>Kön: {dog.sex}</p>
                                <p>Ras: {dog.breed}</p>
                                <p>Närvarande: {dog.present}</p>
                                <p>Ålder: {dog.age}</p>
                                <p>Chipnummer: {dog.chipNumber}</p>
                                <p>---- Ägare ------</p>
                                <p>Namn: {dog.owner.name} {dog.owner.lastName} </p>
                                <p>Telefonnummer: {dog.owner.phoneNumber}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Info

