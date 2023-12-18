// import { useDispatch } from "react-redux";
// import{addToCart} from "../orders/orderSlice";
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import CustomizedDialogs from "../orders/CustomizedDialogs";

// const Product = ({item}) => {
//     let dispatch=useDispatch();
//     return ( 
//         <ImageListItem style={{width:350,height:350}} key={item.id}>
//           <img 
          
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.name}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.name+"\t\t\t "+item.price+"₪"}
//             position="below"
//           />
//           {/* <input type="button"value="הוספה לסל קניות" onClick={()=>{dispatch(addToCart(item) )}}/> */}
//           <CustomizedDialogs item={item}/>
//         </ImageListItem>
//     // <>
//     // <h3>{item.id}  {item.name}</h3>
//     // 
//     // </>
// );
// }
 
// export default Product;


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomizedDialogs from "../orders/CustomizedDialogs";
import Update from './Update';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Product({item}) {
  let user = useSelector(state=>state.users.currentUser);
  let rol=1;
  if(user){
    rol=user.roll;
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {rol===3&& <Update item={item}/>}
        {rol===3&&<DeleteIcon/>}
      {rol!=3&&<CustomizedDialogs item={item}/>}
        <Typography size="small" style={{paddingLeft:"72%"}}>{"₪"+item.price}</Typography>
      </CardActions>
    </Card>
  );
}