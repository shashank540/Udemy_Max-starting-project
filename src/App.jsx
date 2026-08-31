import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import './components/Header/Header.css';
import './components/CoreConcepts/Coreconcepts.css';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [tabContent, setTabContent] = useState();
  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }
  console.log('App component is rendering');

  let tabContentToRender = <p>Please select a topic.</p>;

  if (tabContent) {
    tabContentToRender = (<div id="tab-content">
      <h3>{EXAMPLES[tabContent].title}</h3>
      <p>{EXAMPLES[tabContent].description}</p>
      <pre>
        <code>
          {EXAMPLES[tabContent].code}
        </code>
      </pre>
    </div>);
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

          {tabContentToRender}

        </section>
      </main>
    </div>
  );
}

export default App;
