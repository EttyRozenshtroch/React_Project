import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// import ProductListInCart from './ProductListInCart';
import { useDispatch } from 'react-redux';
import{addToCart} from "../orders/orderSlice";
// import { AddShoppingCartIcon } from '@material-ui/icons';
// import {AddShoppingCartIcon}from 
import { AddShoppingCart } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from './productSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({item}) {
  const [open, setOpen] = React.useState(false);
  let dispatch=useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton aria-label="add to shopping cart" onClick={()=>{
        dispatch(deleteProduct(item));
      handleClickOpen()}}>
  {/* <AddShoppingCartIcon /> */}
<DeleteIcon/>
</IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          your cart
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {/* <ProductListInCart/> */}
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}