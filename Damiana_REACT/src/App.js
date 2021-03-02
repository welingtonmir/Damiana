import Menu from "./components/menu";
import Footer from "./components/footer";
import Rotas from "./rotas";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./views/estilos/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
