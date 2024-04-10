import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeForm from './Employee/EmployeeForm';
import NewForm from './Employee/NewForm';
import ReviewPage from './Employee/ReviewPage';
import ThemeProvider from './Employee/context/NewContext';







function App() {
  return (

     <BrowserRouter>
  <Routes>
<Route path='/' element={<NewForm/>}/>
<Route path='/review' element={<ReviewPage/>}/>

  </Routes>
 </BrowserRouter>
  
   
  );
}

export default App;


