import Navbar from './components/navbar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </Router>
  )
}

export default App
