// import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
import Index from '../pages/Index';
import Show from '../pages/Show';

function CharacterForm(props) {
    const [ character, setCharacter ] = useState(null);
    const URL = 'https://roguetitanp3.herokuapp.com/character';

    // fetch character data from our backend
    const getCharacter = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCharacter(data);
    };


    // create people using fetch
    const createCharacter = async (character) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(character)
        });
        
        getCharacter();
    };


    // update people
    const updateCharacter = async (character, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(character)
        });

        getCharacter();
    }

    // delete people

    const deleteCharacter = async (id) => {
        await fetch(URL + id, {
            method: 'DELETE'
        });
        
        getCharacter();
    }

    useEffect(() => getCharacter(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index character={character} createCharacter={createCharacter} />
                </Route>
                <Route path="/character/:id" render={(rp) => (
                    <Show 
                        {...rp}
                        character={character}
                        deleteCharacter={deleteCharacter} 
                        updateCharacter={updateCharacter}
                    />
                )} />
            </Switch>
        </main>
    );
}

export default CharacterForm;