import {useState, useEffect } from 'react';

function Home(props) {

    const [state, setState ] = useState([]);

    // useEffect( () => {
    //     fetch('https://www.dnd5eapi.co/api/')
    //     .then(res => res.json())
    //     .then( (result) => {
    //         setState(result);
    //     }), (error) => {
    //         console.log("error")
    //     }
    // })

    return (
        <div>
            <h5>
                {state}
            </h5>
        </div>
    )
}

export default Home;