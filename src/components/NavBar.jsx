import {Container, Navbar, Nav} from 'react-bootstrap';
import './NavCss.css';

export default function NavBar(){
    return(
    <div className='navBar'>
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/dashboard">Chargie</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            </Nav>
        </Navbar>
  
</div>
    )
}