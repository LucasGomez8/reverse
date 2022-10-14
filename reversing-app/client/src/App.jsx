import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './containers/Layout';
import { UserContextProvider } from "./context/UserContext.jsx"
import MyFriends from './containers/login-views/MyFriends.jsx';
import Profile from './containers/login-views/Profile';
import FollowUsers from './containers/login-views/FollowUsers';
import EditProfile from './components/login-user/profile/EditProfile';
import ViewFriend from './containers/login-views/ViewFriend';


function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/follow' element={<FollowUsers></FollowUsers>}></Route>
            <Route path='/my-friends' element={<MyFriends></MyFriends>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/edit-profile' element={<EditProfile></EditProfile>}></Route>
            <Route path='/viewfriend' element={<ViewFriend></ViewFriend>}></Route>
          </Routes>
        </Layout>
      </UserContextProvider>

    </div>
  );
}

export default App;
