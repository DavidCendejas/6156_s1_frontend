import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link style={{paddingLeft: '20px'}} as={Link} to="/" >Home</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/Jobs">Jobs</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/Applications">Applications</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/Applicants">Applicants</Nav.Link>
          <Nav.Link style={{paddingLeft: '15px'}} as={Link} to="/Contacts">Contacts</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link style={{paddingRight: '20px'}} as={Link} to="/login">Log In</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  
  export default MyNavbar;