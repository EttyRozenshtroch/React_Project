import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductListThunk from './components/ProductListThunk';
import ProductList from './features/products/ProductList';
import ProductListInCart from './features/orders/ProductListInCart';
import AddProduct from './features/products/AddProduct';
import SignUp from './features/users/SignUp';
import SignIn from './features/users/SignIn';
import ResponsiveAppBar from './features/nav bar/ResponsiveAppBar';
import { Route, Routes } from 'react-router-dom';
import Navbar from './features/nav bar/Navbar';
import Cart from './features/orders/Cart';
import Home from "./features/Home";
import Menager from './features/nav bar/Menager';
import Guest from './features/nav bar/Guest';
import User from './features/nav bar/User';
import { useEffect } from 'react';
import { reloadUser } from './features/users/userSlice';
import Checkout from './features/orders/Checkout';

function App() {
  // // let editedPost = useSelector(state => state.post.selectedPostForEdit)
  // let m = useSelector(st => st.mes.message)
  // return (
  //   <div className="App">
  //     <ProductListThunk />
  //     {/* {editedPost && <Edit />} */}
  //     {m && <div className='message-div'>{m.header}</div>}
  //   </div>
  // );
  let dispatch=useDispatch();
  useEffect(()=>{dispatch(reloadUser())},[])
  // let rol =useSelector(state=>state.users.roll);
  let user = useSelector(state=>state.users.currentUser);
  let rol=1;
  if(user){
    rol=user.roll;
  }

  return(<>
  {/* <SignUp/> */}
  {rol===1&&<Navbar><Guest/></Navbar>}
  {rol===2&&<Navbar><User/></Navbar>} 
  {rol===3&&<Navbar><Menager/></Navbar>} 
  <Routes>
    <Route path='' element={<Home />} />
    <Route path='products' element={<ProductList />} />
    <Route path='signin' element={<SignIn />} />
    <Route path='signUp' element={<SignUp />} />
    <Route path='addProduct' element={<AddProduct />} />
    <Route path='cart' element={<Cart />} />
    <Route path='payment' element={<Checkout />} />

  </Routes>
  {/* <img src={home}></img> */}
  {/* <Home/> */}
    </>
  )
}

export default App;
