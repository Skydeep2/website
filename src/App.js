
import './App.css';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './component/Navbar'
import SingleProduct from './pages/SingleProduct';
import Footer from './component/Footer';
import Error from './pages/Error';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/> 
          <Route path='/singleproduct/:id' element={<SingleProduct />} />S
          <Route path='*' element={<Error />}></Route>
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
