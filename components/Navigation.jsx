import { Navbar, Nav, Container } from 'react-bootstrap';
export default function NavBar() {
  return (
    <Container>
   <Navbar bg="dark"  expand="md">
   <Navbar.Brand href="#home" className='d-md-none'>Solomon Uche</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white bg-light" />
  <Navbar.Collapse id="basic-navbar-nav" >
  
    <Nav className="mr-auto ">  
      <Nav.Link  href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link> 
      <Nav.Link href="#">Projects</Nav.Link> 
      <Nav.Link href="#">Contact</Nav.Link> 
    </Nav>
   
  </Navbar.Collapse>
      </Navbar>
      </Container>
  );
}
