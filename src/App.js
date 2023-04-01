import { Header } from './components/Header/Header';
import { Sections } from './components/Sections/Sections';
import { Instagram } from './components/Instagram/Instagram';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className='App'>
          <Header />
          <Sections />
          <Instagram />
          <Footer />
      </div>
    </>
  );
}

export default App;