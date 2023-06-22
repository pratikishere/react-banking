import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Products from './components/Products';
import Expenses from './components/Expenses';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='products' element={<Products />} />
        <Route path='expenses' element={<Expenses />} />
      </Routes>
    </Router>
  );
}

export default App;
