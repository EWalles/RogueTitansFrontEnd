function Show(props) {
    const id = props.match.params.id
    const character = props.character
    const xcharacter = character.find(c => c._id === id)
  
    return (
      <div className="character">
        <h1>{character.name}</h1>
        <h2>{character.description}</h2>
        <h2>{character.skills}</h2>
        <img src={character.image} alt={character.name} />
      </div>
    )
  }
  
  export default Show