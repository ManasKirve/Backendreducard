
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import AddNewsUser from './Pages/AddNewsUser'
import ViewUsers from './Pages/ViewUsers';
function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path="/user-addnew-user" element={<AddNewsUser/>}/>
          <Route path='/user-viewall-user' element={<ViewUsers/>}/>
    
        </Routes>
    </div>
  );
}

export default App;
