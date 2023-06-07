import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Company from './Pages/Company'
import Contact from './Pages/Contact'
import NewProject from './Pages/NewProject'
import Container from './Layout/Container'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'


function App() {
  return (

    <Router>
      
      <Container customClass="min-height">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>

      </Container>

      <Footer />

    </Router>
  );
}

export default App;
