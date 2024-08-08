import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import './App.css';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max));
}

function Header() {
  const description = reactDescriptions[getRandomInt(3)];

  return(
    <header>
      <img src={reactImg} alt="react" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almose any app you are going to build!!</p>
    </header>
  );
}

function Footer() {
  return(
    <div>
      <p>&copy; all rights reserved</p>
    </div>
  );
}

function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {  
  return(
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept 
              title='Components' 
              description='The Core UI building block' 
              image={componentsImg}
            />

            <CoreConcept title='Props' />

            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;