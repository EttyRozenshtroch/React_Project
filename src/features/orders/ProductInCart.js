import { width } from "@mui/system";
import { useDispatch } from "react-redux";
import { addToCart ,removeFromCart,removeOneCart} from "./orderSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

const ProductInCart = ({item}) =>{
    let dispatch=useDispatch();
    return(
        <>
            <div><img style={{width:100}} src={item.img}/></div> 
            <label>{item.qty}</label>
            <IconButton>
                <AddIcon onClick={()=>{dispatch(addToCart(item))}}/>
            </IconButton>
            <IconButton>
                <RemoveIcon onClick={()=>{dispatch(removeOneCart(item))}}/>
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={()=>{dispatch(removeFromCart(item))}}/>
            </IconButton>
            {/* <input type="button" value="+" onClick={()=>{dispatch(addToCart(item))}}/> */}
            {/* <input type="button" value="-" onClick={()=>{dispatch(removeOneCart(item))}}/>
            <input type="button" value="remove" onClick={()=>{dispatch(removeFromCart(item))}}/> */}
        </>
    );
}

export default ProductInCart;
