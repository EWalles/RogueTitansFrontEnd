import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer"
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header className="App-header">
        
      </Header>
      <Footer />
      <body>
      <p>
        Gaming has been around for as long as humans have been alive. Tabletop roleplaying games... not so much. The first commercially available role-playing game, Dungeons and Dragons DnD, was published in 1974 by Gygax's TSR which marketed the game as a niche product. It was a mix of war-games and roleplaying.
        </p>
        <p>     
        A tabletop role-playing game typically abbreviated as TRPG or TTRPG, also known as a pen-and-paper role-playing game, is a form of role-playing game RPG in which the participants describe their characters' actions through speech. Participants determine the actions of their characters based on their characterization, and the actions succeed or fail according to a set formal system of rules and guidelines. Within the rules, players have the freedom to improvise; their choices shape the direction and outcome of the game.
        </p>
        <p>
        This program starts with 5th edition Dungeons and Dragons for a base component. At the top you can click the link and create a character with the SRD rules available. You will need the books for some of the specialties that can not be listed.
        </p>
      </body>
    </div>
    
  );
}

//ZG trying to add a fetch/Ajax call to grab from backend
//found help on geeksforgeeks and medium.com both show same setup
class App extends Component {
  constructor(){
      super();
      this.state ={character: []};
  }
  componentDidMount() {
         fetch('/character')
           .then(res => {
               console.log(res);
               return res.json()
            })
           .then(character => { 
               console.log(character); 
               this.setState({ character })
            });
        }
  render() {
       return (
           <div className="api">
               <h1>New Character</h1>
               
           </div>
           );
          }
      }

// this is only first half. I'm still playing outside of this to add second half and try to make it work.

export default App;