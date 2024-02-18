import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase"
import {useDispatch} from "react-redux";
import {addUser} from './actions/index.js'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('this user is ', authUser);
      if(authUser){
        dispatch(addUser(authUser));

        //the user just logged in /  the user was logged out
      }else{
        //the user is logged out

      }
    })
  })
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<><Header /><Home /> </> } index />
          <Route path="/checkout" element={<><Header /><Checkout/></>} />
          <Route path="/productDetails" element={<><Header /><ProductDetails /> </>} />
          {/* Redirect any unmatched paths to the default route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
