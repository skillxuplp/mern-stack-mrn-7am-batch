import reactImg from './assets/react-core-concepts.png';
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

function App() {  
  return(
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;