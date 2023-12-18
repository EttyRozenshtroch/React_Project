import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import{fatchAllProducts}from "./productSlice";
import Product from './Product';
import ImageList from '@mui/material/ImageList';


const ProductList = () => {
    let products=useSelector(state=>state.products.productsArr);
    let status=useSelector(state=>state.products.status);
    let dispatch=useDispatch();
    useEffect(()=>{
        if(status=='idle')
            dispatch(fatchAllProducts())
    },[])
    return (
<ul style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"15px",listStyleType: "none"}}> 
  {products.map(item=><li><Product item={item}/></li>)}</ul>   
    // </ImageList>
    //
        
    //     <>
    // <ul>
    //     {products.map(item=><li key={item.id}><Product item={item}/></li>)}
    // </ul>
    // </> 
    );
}
//<ul style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"15px",listStyleType: "none"}}>

 
export default ProductList;