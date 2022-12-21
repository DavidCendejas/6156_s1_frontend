import MyNavBar from './components/Navbar.js';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Applicants from './pages/Applicants'
import Applications from './pages/Applications'
import Contacts from './pages/Contacts'

function App() {
  return (
    <Container fluid="md">
      <MyNavBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Applicants' element={<Applicants />} />
        <Route path='/Applications' element={<Applications />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
    </Container>
  );
}

export default App;
