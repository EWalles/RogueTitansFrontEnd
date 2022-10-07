import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Index(props) {
    const [ newForm, setNewForm ] = useState({
        name: '',
        description: '',
        skills: '',
    });

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCharacter(newForm);
        console.log(newForm);
        setNewForm({
          
            name: '',
            description: '',
            skills: '',
        });
    }


    const loaded = () => {
        return (
            <section>
                {props.character.map((character) => (
                    <div key={character._id} className="character">
                        <Link to={`/character/${character._id}`}>
                            <h1>{character.name}</h1>
                        </Link>
                        <h2>{character.description}</h2>
                        <h3>{character.skills}</h3>
                    </div>
                ))}
            </section>
        );
    };

    const loading = () => {
        return <h1>Loading ...</h1>
    };
    
    return (
        <section style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <form style={{marginTop: '5rem'}} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.name} 
                    name="name"
                    placeholder="Name"
                 /><br /><br />
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.description} 
                    name="description"
                    placeholder="description"
                 /><br /><br />
                <input 
                    type="text"
                    onChange={handleChange}
                    value={newForm.skills} 
                    name="skills"
                    placeholder="skills"
                 /><br /><br />
                <input 
                    type="submit"
                    value="Add character"
                 />
            </form>
            { props.character ? loaded() : loading() }
        </section>
    );
}

export default Index;