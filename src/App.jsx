import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div className='bg-slate-200'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
