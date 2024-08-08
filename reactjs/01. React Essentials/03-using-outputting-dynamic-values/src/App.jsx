import './App.css';
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return(
    <header>
      <img src="src/assets/react.svg" alt="react" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almose any app you are going to build!!</p>
    </header>
  );
}

function App() {
  return(
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;