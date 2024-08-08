import reactImg from '../assets/react-core-concepts.png';
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(3)];
  
    return(
      <header>
        <img src={reactImg} alt="react" />
        <h1>React Essentials</h1>
        <p>{description} React concepts you will need for almose any app you are going to build!!</p>
      </header>
    );
}

