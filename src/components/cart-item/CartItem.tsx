import type {ReactElement} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { decrement, increment, updateQuantity, type State, removeItem } from '../../slice/counterSlice';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
interface CartItemProps {
    data:State;
}

const CartItem = (props:CartItemProps):ReactElement => {
    const {data} = props
    const dispatch = useDispatch();
    const addQuantity = (item:State):void => {
        dispatch(increment(item))
    }

    const subtractQuantity = (item:State):void => {
        dispatch(decrement(item))
    }

    const updateItem = (qty:number, item:State):void => {
        dispatch(updateQuantity({...item, quantity:qty}))
    }

    const removeItemIn = (item:State):void => {
        dispatch(removeItem(item))
    }
    return (
        <Card sx={{ display: 'flex', width:'100%', maxHeight:120, margin:1, flexDirection:'row', justifyContent:'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Stack direction={'row'} alignItems={'center'}>
                <IconButton onClick={() => removeItemIn(data)}>
                    <CancelIcon />
                </IconButton>
                <Typography component="div" variant="h5">
                    {data.productName}
                </Typography>
            </Stack>
            
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={() => subtractQuantity(data)}>
                <RemoveCircleOutlineIcon />
            </IconButton>
            <TextField sx={{
                ['& .MuiInputBase-input']:{
                    width: 'auto',
                }
            }} variant='standard' type='number' value={data.quantity} onChange={(e) => updateItem(+e.target.value, data)} />
            <IconButton aria-label="next" onClick={() => addQuantity(data)}>
            <AddCircleOutlineIcon />
            </IconButton>
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={`${data.imageUrl}`}
            alt="Live from space album cover"
        />
    </Card>
  )
}

export default CartItem