import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Products from './components/Products';
import Expenses from './components/Expenses';
import ExpenseDetails from './components/ExpenseDetails';
import IncomeDetails from './components/IncomeDetails';
import InvestmentDetails from './components/InvestmentDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='products' element={<Products />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='expenses-details' element={<ExpenseDetails />} />
        <Route path='income-details' element={<IncomeDetails />} />
        <Route path='investment-details' element={<InvestmentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
