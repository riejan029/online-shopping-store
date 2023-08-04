import type { ReactElement } from 'react'
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { Fragment } from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogTitle, Stack, Typography, Button, DialogActions } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

interface CheckOutProps {
    isOpen:boolean;
    close:() => void;
}

const CheckOutModal = (props:CheckOutProps):ReactElement => {
    const {isOpen, close } = props
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
                {'Thank you for purchasing'}
            </Typography>
            </Stack>
            </DialogTitle>
            <DialogActions>
                <Button onClick={close} variant='contained' color='success'>Ok</Button>
            </DialogActions>
    </Dialog>
  )
}

export default CheckOutModal