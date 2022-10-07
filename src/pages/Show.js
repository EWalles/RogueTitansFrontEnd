import React, { Component }  from 'react';
import { useState, useEffect } from 'react';


// import { Redirect } from 'react-router-dom';

function Show({ match, history, Character, updateCharacter, deleteCharacter }) {
    // if(!user) return <Redirect to="/login" />

    const [ editForm, setEditForm ] = useState({
        name: '',
        description: '',
        skills: ''
    });

    const [character, setCharacter] = useState(null);


    useEffect(() => {
        if(character) {
            const id = match.params.id;
            const foundCharacter = character.find(p => p._id === id);
            setCharacter(foundCharacter);
            setEditForm(foundCharacter);
        }
    }, [character, match])

    
    const loading = () => {
        return <h1>Loading ...</h1>
    }

    
    const loaded = () => {
        return (
            <div className="character">
                <h1>{character.name}</h1>
                <h2>{character.description}</h2>
                <img src={character.skills} alt={character.name} />
                <button onClick={() => handleDelete(character._id)}>Delete Person</button>
            </div>
        );
    }

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {_id, name, description, skills} = editForm;
        updateCharacter({ name, description, skills }, _id);
    }

    const handleDelete = (id) => {
        deleteCharacter(id);
        history.push('/');
    }

    return (
        <div>
            {character ? loaded() : loading()}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={editForm.name} 
                    onChange={handleChange} 
                /><br /><br />
                <input 
                    type="text" 
                    name="description" 
                    value={editForm.description} 
                    onChange={handleChange} 
                /><br /><br />
                <input 
                    type="text" 
                    name="skills" 
                    value={editForm.skills} 
                    onChange={handleChange} 
                /><br /><br />
                <input type="submit" value="Edit character" />
            </form>
        </div>
    );
}

export default Show;