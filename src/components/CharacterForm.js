import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import React from "react";
import axios from 'axios';
function CharacterForm(props) {
  // formData and I'm not sure if I have to have open strings here
  const [ newForm, setNewForm ] = useState({
    name: "",
    description: "",
    skills: "",
  });

  // handle change for form from looking back at past work/online/w3 schools
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  }
  

  async function createCharacter(inpt) {
    const {data} = await axios.post(
        'http://localhost:4949/character'
        , newForm);
  }
  
  // handle submit for form from looking back at past work/online/w3 schools
  const handleSubmit = event => {
    event.preventDefault();

    // Create the character and add to the database
    createCharacter(newForm);
    
    setNewForm({
      name: "",
      description: "",
      skills: "",
    });
  }
  // load function w3 schools and past markdowns
  const loaded = () => {
    return (
        <div id="new-character"> 
            <h3>Character Name: {newForm.name}</h3>
            <h3>Description:  {newForm.description}</h3>
            <h3>Skills: {newForm.skills} </h3>
        </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }
  let newCharacter;
  if (handleSubmit)
  {
    newCharacter = <div>{loaded()}</div>;
  }
  else
  {
    newCharacter = <div>{loading()}</div>;
  }

  return (
    <section id="character-form">
      <h3> CREATE NEW CHARACTER! </h3>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="desc"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.skills}
          name="skills"
          placeholder="skills"
          onChange={handleChange}
        />
        <input type="submit" value="Create Character" />
      </form>
      {newCharacter}

    </section>
  );
}

export default CharacterForm;


//ZG I used stackoverflow, medium, w3schools and past work to try and create this index page for character creation to show up as a form on the FE with button