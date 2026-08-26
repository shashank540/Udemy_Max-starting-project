import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import './components/Header/Header.css';
import './components/CoreConcepts/Coreconcepts.css';
import TabButton from './components/TabButton.jsx';

function App() {

  let tabContent = 'Please click the button';
  function handleClick(selectedButton) {
        tabContent = selectedButton;
        console.log('tabContent:', tabContent);
    }

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
        <section id="examples">
          <h2>Examples</h2>
          <main>            
            <TabButton onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </main>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
