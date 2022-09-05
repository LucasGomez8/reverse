import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './containers/Layout';
import {UserContextProvider} from "./context/UserContext.jsx"


function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
          </Routes>
        </Layout>
      </UserContextProvider>

    </div>
  );
}

export default App;
