import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';

const reactDescriptions = ['Fundamental','Core','Crucial'];

function getRandomInt(max){
  return Math.floor(Math.random()* (max+1));
}

function Header()
{
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts 
            {...CORE_CONCEPTS[0]}
          />
          <CoreConcepts 
            {...CORE_CONCEPTS[1]}
          />
          <CoreConcepts
            {...CORE_CONCEPTS[2]}
          />
          <CoreConcepts
            {...CORE_CONCEPTS[3]}
          />
        </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function CoreConcepts(props){
return (
  <li>
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
);
}

export default App;
