import { Navbar, nav, Nav } from 'react-bootstrap';
import { Link, withRouter} from 'react-router-dom';
import './menu.css';

function BaseMenu (props) {
    const { location }= props
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
            <Navbar.Brand>
                <p className="logo">FullStackEletro REACT</p>
            </Navbar.Brand>            
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                <Nav.Item>
                        <Nav.Link as={Link} href="/home" to="/home">Página Inicial</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/lojas" to="/lojas">Lojas</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} href="/contatos" to="/contatos">Contatos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>            
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu