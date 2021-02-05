import Menu from "./components/menu";
import Rotas from "./rotas";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./views/estilos/App.css";
import Footer from "./components/footer";

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
