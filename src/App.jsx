// import reactImg from'./assets/react-core-concepts.png';
//  import componentsImg from './assests/components.png';import componentsImg from './assests/components
// import { useState } from "react";
// import reactImg from "./assets/components.png";

// import componentsImg from "./assets/components.png";

import { useState } from 'react';
import{ CORE_CONCEPTS} from './data';
import CoreConcept from "./components/coreconcept.jsx"; 
import TabBUtton from "./assets/TabBUtton.jsx";
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

 function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}


function CoreConcept(props){ 
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
} 

function App() {
   const [ selectedTopic, setselectedtopic ] = useState('please click a button');
  // let tabContent = 'please click a button';
  // function handleselect(selectedButton) {
  //  tabContent  = selectedButton;
  setSelectedTopic(selectedButton) {
   console.log(selectedTopic);
  }
  console.log('APP COMPONENT EXECUTING');
  return (
    <div>
      <header>
       <h1>hello world</h1> 
      </header>
      <Header />
      <main>
      <section id = "core-concepts">
        <h2>Core-Concepts</h2>
        <ul>
          <CoreConcept
           title={CORE_CONCEPTS[0].title} 
          Description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[1].title} 
          Description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
           />
          <CoreConcept
          title={CORE_CONCEPTS[2].title} 
          Description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
           />
          <CoreConcept 
          title={CORE_CONCEPTS[3].title} 
          Description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
            <TabBUtton oneselect={() => handleSelect('components')}>Components</TabBUtton>
            <TabBUtton oneselect={() => handleSelect('jsx')}>Jsx</TabBUtton>
            <TabBUtton oneselect={() => handleSelect('props')}>props</TabBUtton>
            <TabBUtton oneselect={() => handleSelect('state')}>state</TabBUtton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;