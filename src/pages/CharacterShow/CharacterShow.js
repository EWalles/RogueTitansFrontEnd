import React from 'react';
import { useEffect, useState } from 'react';
import './../CharacterShow/style.css';


const Characters = () => {
    const [characters, setCharacters] = useState([])

    const fetchData = () => {
        fetch("https://roguetitanp3.herokuapp.com/character")
        .then(res => { return res.json() })
        .then(data => { setCharacters(data) });
    }

    useEffect( () => {
        fetchData()
    }, [])

    return (
        <div className="list-character"> 
            <h3> List of Characters </h3>
            <ul>
                {characters.map(ch => (
                    <li>
                        <div key={ch.id}>
                            <h5> {ch.name}</h5>
                            <h5> {ch.description}</h5>
                            <h5> {ch.skills}</h5>
                            <hr></hr>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default Characters;