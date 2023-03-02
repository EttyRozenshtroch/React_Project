import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductListThunk from './components/ProductListThunk';
import ProductList from './features/products/ProductList';
import ProductListInCart from './features/orders/ProductListInCart';
import AddProduct from './features/products/AddProduct';
import SignUp from './features/users/SignUp';
import Login from './features/users/Login';
import ResponsiveAppBar from './features/nav bar/ResponsiveAppBar';

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

  return(<>
  {/* <SignUp/> */}
  <ResponsiveAppBar/>
  <Login/>
    <ProductList/>
    <h1>Cart</h1>
    <ProductListInCart/>
    <AddProduct/>
    </>
  )
}

export default App;
