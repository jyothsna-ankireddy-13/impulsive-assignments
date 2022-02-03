import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes,Route} from 'react-router-dom';
import BookList from './components/BookList';
import LoginForm from './components/Login_Form';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Routes>
          
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/home' element={<Sidebar/>}/>
          <Route exact path='/booklist' element={<BookList/>}/>
        </Routes>
    </>
  );
}

export default App;
