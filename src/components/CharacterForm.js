import { useState } from "react"
import { Link } from "react-router-dom"

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

  // handle submit for form from looking back at past work/online/w3 schools
  const handleSubmit = event => {
    event.preventDefault();
    props.createCharacter(newForm);
    setNewForm({
      name: "",
      description: "",
      skills: "",
    });
  }

  // load function w3 schools and past markdowns
  const loaded = () => {
    return props.character.map(xcharacter => (
      <div key={xcharacter._id} className="xcharacter">
        <Link to={`/character/${xcharacter._id}`}>
          <h1>{xcharacter.name}</h1>
        </Link>
        <img src={xcharacter.image} alt={xcharacter.name} />
        <h3>{xcharacter.title}</h3>
      </div>
    ));
  }

  const loading = () => {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
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
      {props.character ? loaded() : loading()}
    </section>
  );
}

export default CharacterForm;


//ZG I used stackoverflow, medium, w3schools and past work to try and create this index page for character creation to show up as a form on the FE with button