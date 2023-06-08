import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Shops from './Components/Shops';
import Shop from './Components/Shop';
// Commenting out login(s) until I decide how to handle user account. Check below for commented-out route path.
// import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <Container>
      <Navbar bg='light' expand='md' sticky='top'>
        <Container>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='active fw-bold' href='/shops'>Bikes</Nav.Link>
              <Nav.Link className='active fw-bold' href='/helmets'>Helmets</Nav.Link>
              <Nav.Link className='active fw-bold' href='/nonprofits'>Nonprofits</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shops' element={<Shops asset='shops' key={1} />} />
          <Route path='/helmets' element={<Shops asset='helmets' key={2} />} />
          <Route
            path='/nonprofits'
            element={<Shops asset='nonprofits' key={3} />}
          />
          <Route path='/shops/:state' element={<Shops asset='shops' />} />
          <Route path='/helmets/:state' element={<Shops asset='helmets' />} />
          <Route
            path='/nonprofits/:state'
            element={<Shops asset='nonprofits' />}
          />

          <Route path='/shop/:id' element={<Shop asset='shops' />} />
          <Route path='/helmet/:id' element={<Shop asset='helmets' />} />
          <Route path='/nonprofit/:id' element={<Shop asset='nonprofits' />} />
          {/* Commenting out login(s) until I decide how to handle user account. */}
          {/* <Route path='/login' element={<Shop asset='nonprofits' />} /> */}
        </Routes>
      </div>
      <div className='mx-auto my-2'>
        <p className='text-center'>Please be patient; this website and database are hosted with free-tier accounts, and may experience short delays.</p>
      </div>
      <div className='mx-auto my-4'>
        <p className="fw-lighter text-center">This code is open-sourced <a className="fs-6" href="https://github.com/RainyCityCoder/freebikefinder">on Github.</a></p>
      </div>
    </Container>
  );
}
