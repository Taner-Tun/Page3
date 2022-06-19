import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit';
import Page2 from './pages/Page2';
import View from './pages/View';

function App() {
  return (
    <Router>
       <div className="App">
       <ToastContainer position="top-center" />
       <Routes>
         <Route exact path = "/" element={<Page2 />} /> 
         <Route path = "/addCourse" element={<AddEdit/>} />
         <Route path = "/update/:id" element={<AddEdit/>} />
         <Route path = "/view/:id" element={<View/>} />
       </Routes>
    </div>   
    </Router>    
  );
}

export default App;
