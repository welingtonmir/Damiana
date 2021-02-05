import {Navbar, Nav, Image} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import '../../views/estilos/menu/Menu.css';
import logo from '../../views/estilos/img/Logo.png';

 function BaseMenu(props){
   const {location} = props;
  return(
    <Navbar className="navbar-dark" expand="lg" id="menu" fixed="top">
      <Navbar.Brand>
        <Nav.Link as={Link} href="/" to="/" className="ml-5">
          <Image id="logo" src={logo} />
        </Nav.Link>        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="itens-menu" />
      <Navbar.Collapse id="itens-menu" >
        <Nav activeKey={location.pathname} className="ml-auto mr-3">
          <Nav.Item>
            <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/contatos" to="/contatos">Contatos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/lojas" to="/lojas">Lojas</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
  )
}

const Menu = withRouter(BaseMenu);

export default Menu