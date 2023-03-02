import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { removeMessage, setMessage } from "../store/actions/message";
import { deleteProduct, deleteProductInServerAsync, fetchAllProducts, saveAllProdusts, selectProductForEdit } from "../store/actions/product";
import ProductToShow from "./ProductToShow";
const ProductListThunk = () => {
    let myDisp = useDispatch();//מחזיר פונקציה שמאפשרת לשגר לרידוסר פעולות
    useEffect(() => {
        myDisp(fetchAllProducts())
    }, [])//רק בטיעינה בגלל המערך הריק
    let arr = useSelector(st => st.product.productArr)

    const del = (itemid) => {
        myDisp(deleteProductInServerAsync(itemid))


    }
    return (<ul>
        {arr.map(item => <li key={item.id} onClick={() => { del(item.id) }}><ProductToShow item={item} /></li>)}    </ul>);
}

export default ProductListThunk; 
