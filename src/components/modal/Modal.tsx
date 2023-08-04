import type {ReactElement} from 'react'
import type { ModalProps } from './type';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State, clearCart, getCartList } from '../../slice/counterSlice';
import Grid from '@mui/material/Grid';
import CartItem from '../cart-item';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckOutModal from '../checkout-modal';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Modal = (props:ModalProps):ReactElement => {
    const {close,isOpen,submit} = props;
    const dispatch = useDispatch();
    const cartList = useSelector(getCartList);
    const permaData:State[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const [checkout, setCheckout] = useState<boolean>(false);
    const clearCartList = ():void => {
        dispatch(clearCart())
    }

    const openCheckout = ():void => {
        submit()
        dispatch(clearCart())
        setCheckout(true)
    }

    const totalPrice = ():number => {
        return cartList.reduce((a,b) => a + (b.quantity * b.unitPrice),0)
    }

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={close}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
            <Stack direction='row' display='flex' justifyContent='space-between' flexDirection='row'>
            <Typography component="div" variant="h5">
                {'My Cart'}
            </Typography>
            <Button variant='text' color='error' onClick={() => clearCartList()}>Clear Cart</Button>
            </Stack>
            </DialogTitle>
            <DialogContent>
            <Grid container>
                {permaData.reverse().map((cartItem,index) => (
                    <Fragment key={index}>
                        <CartItem data={cartItem} />
                    </Fragment>
                ))}
            </Grid>
            </DialogContent>
            
            <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:5}}>
                <Stack direction={'column'} gap={2}>
                    <Typography>Total Item/s: {cartList.reduce((a,b) => a + b.quantity,0)}</Typography>
                    <Typography justifyContent={'flex-start'} variant='h6' fontWeight={'bold'}>Total: ₱ {new Intl.NumberFormat().format(totalPrice())}</Typography>
                </Stack>
                <Button onClick={openCheckout} variant='contained'>Check Out</Button>
                <CheckOutModal isOpen={checkout} close={() => setCheckout(false)} />
            </Stack>
        </Dialog>
    )
}

export default Modal