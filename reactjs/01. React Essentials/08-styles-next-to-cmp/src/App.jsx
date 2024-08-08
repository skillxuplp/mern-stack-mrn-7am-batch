
import componentsImg from './assets/components.png';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import Footer from './components/Footer';

import './App.css';


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