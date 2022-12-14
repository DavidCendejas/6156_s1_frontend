import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function MyNavbar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/" >Home</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/Students">Students</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/Courses">Courses</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}}as={Link} to="/Contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  
  export default MyNavbar;