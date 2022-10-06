import React, { useState, useEffect } from 'react';

const App = () => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [skills, setSkills] = useState([]);

   // GET with fetch API
   useEffect(() => {
      const fetchCharacter = async () => {
         const response = await fetch(
            'https://www.dnd5eapi.co/'
         );
         const data = await response.json();
         console.log(data);
         setCharacter(data);
      };
      fetchCharacter();
   }, []);

  //  // Delete with fetchAPI
  //  const deleteCharacter = async (id) => {
  //     let response = await fetch(
  //        `https://www.dnd5eapi.co/docs/${id}`,
  //        {
  //           method: 'DELETE',
  //        }
  //     );
  //     if (response.status === 200) {
  //        setCharacter(
  //           character.filter((character) => {
  //              return character.id !== id;
  //           })
  //        );
  //     } else {
  //        return;
  //     }
  //  };

  //  // Post with fetchAPI
  //  const addCharacter = async (title, body) => {
  //     let response = await fetch('https://www.dnd5eapi.co/', {
  //        method: 'POST',
  //        body: JSON.stringify({
  //           title: title,
  //           body: body,
  //           userId: Math.random().toString(36).slice(2),
  //        }),
  //        headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //        },
  //     });
  //     let data = await response.json();
  //     setCharacter((posts) => [data, ...posts]);
  //     setTitle('');
  //     setBody('');
  //  };

  //  const handleSubmit = (e) => {
  //     e.preventDefault();
  //     addCharacter(title, body);
  //  };

   
};

export default App;