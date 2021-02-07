import { Navbar, Nav, Image, Form, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../../views/estilos/menu/Menu.css";
import logo from "../../views/estilos/img/Logo.png";
import { useSelector } from "react-redux";
import bolsa from "../../views/estilos/img/icone--bolsa.png";

function BaseMenu(props) {
  const { location } = props;

  //acc: acumulador e cur= valor atual
  const totalItens = useSelector(state =>
    state.carrinho.reduce((acc, cur) => {
      return acc + cur.quantidade;
    }, 0));

  return (
    <Navbar className="navbar-dark" expand="lg" id="menu" fixed="top">
      <Navbar.Brand>
        <Nav.Link as={Link} href="/" to="/" className="ml-5">
          <Image id="logo" src={logo} />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="items-menu" />
      <Navbar.Collapse id="items-menu">
        <Nav activeKey={location.pathname} className="mx-auto mr-3">
          <Nav.Item>
            <Nav.Link as={Link} href="/" to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/produtos" to="/produtos">
              Produtos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/contatos" to="/contatos">
              Contatos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/lojas" to="/lojas">
              Lojas
            </Nav.Link>
          </Nav.Item>
        </Nav>
        
      </Navbar.Collapse>
      <Nav>
          <Nav.Item>
            <Nav.Link as={Link} href="/carrinho" to="/carrinho">
              <Image id="bolsa" src={bolsa} />
              {totalItens}
            </Nav.Link>
          </Nav.Item>
        </Nav>
    </Navbar>
  )
}

const Menu = withRouter(BaseMenu);

export default Menu;
