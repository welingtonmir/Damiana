import Menu from './componet/menu';
import Rotas from './rotas';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './componet/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu/>
        </header>
        
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>  
    </BrowserRouter>
  );
}

export default App;
