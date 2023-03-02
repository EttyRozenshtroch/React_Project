import { useSelector } from "react-redux";
import ProductInCart from "./ProductInCart";

const ProductListInCart = ()=>{

    let products = useSelector(state=>state.order.productsInCart);

    return(
        <>
        <ul>
            {products.map(item=><li key={item.id}><ProductInCart item={item}/></li>)}
        </ul>
        </>
    );
}

export default ProductListInCart;
