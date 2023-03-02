const ProductInCart = ({item}) => {
    return ( 
        <>
            <h1>{item.id}</h1>
            <h2>{item.qty}</h2>
        </>
     );
}
 
export default ProductInCart;