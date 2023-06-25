import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../redux/actions/user";
import MainPage from "./MainPage/MainPage";
import Navigation from "./NavigationComponents/Navigation/Navigation";
import Registration from "./Authorization/Registration";
import Login from "./Authorization/Login";
import Cart from "./CartComponents/Cart";
import Wishlist from "./NavigationComponents/Wishlist";
import ProductDetails from "./ProductsComponents/ProductDetails";
import AdminPanel from "./AdminPanel/AdminPanel";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(auth())
  }, [])



  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <div className="wrap">

          {!isAuth ?
            <Routes>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
            </Routes>
            :
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/admin" element={<AdminPanel />}/>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="products/:id" element={<ProductDetails />}/>
              <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

