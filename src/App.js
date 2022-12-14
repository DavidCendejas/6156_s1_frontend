import MyNavBar from './components/Navbar.js';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'
import Contacts from './pages/Contacts'

function App() {
  return (
    <Container fluid="md">
      <MyNavBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Students' element={<Students />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
    </Container>
  );
}

export default App;
