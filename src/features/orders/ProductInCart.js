import { useDispatch } from "react-redux";
import { addToCart ,removeFromCart,removeOneCart} from "./orderSlice";

const ProductInCart = ({item}) =>{
    let dispatch=useDispatch();
    return(
        <>
            <div><h1>{item.id}</h1><p>{item.qty}</p></div>
            <input type="button" value="+" onClick={()=>{dispatch(addToCart(item))}}/>
            <input type="button" value="-" onClick={()=>{dispatch(removeOneCart(item))}}/>
            <input type="button" value="remove" onClick={()=>{dispatch(removeFromCart(item))}}/>
        </>
    );
}

export default ProductInCart;
