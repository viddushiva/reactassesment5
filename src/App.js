
import './App.css';
import First from './components/First';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import Addstudent from './components/Addstudent';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <Router>
      <First/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student/addstudent' element={<Addstudent/>}/>
        <Route path="/edit/:id" element={<Edit />} />



      </Routes>
      </Router>
    </div>
  );
}

export default App;
