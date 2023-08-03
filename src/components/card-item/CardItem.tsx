import type { ReactElement } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { CardItemProps } from "./type";
import type { State } from "../../slice/inventorySlice";
import styled from "@mui/material/styles/styled";
import { uniqueId } from "lodash";
import {useDispatch} from 'react-redux'
import { addToCart } from "../../slice/counterSlice";
const CardItem = (props: CardItemProps): ReactElement => {
  const { data } = props;
  const dispatch = useDispatch();
  const addItemToCart = (item: State): void => {
    dispatch(addToCart({...item, quantity:1}))
  };

  const StyledCard = styled(Card)(() => ({
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'column'
  }));
  return (
    <StyledCard sx={{ maxWidth: 300 }} key={uniqueId()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${data.imageUrl}`}
          alt={`${data.productName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.productName}
          </Typography>
          <Typography variant="body1" fontWeight="bold" color="green">
            {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack direction={'column'}>
        <Typography
                sx={{ paddingTop: 2 }}
                color="red"
                fontWeight="bold"
                variant="h6"
            >
                ₱ {new Intl.NumberFormat().format(data.unitPrice)}
            </Typography>
        <Button
          size="small"
          color="primary"
          onClick={() => addItemToCart(data)}
        >
          Add To Cart
        </Button>
        </Stack>
      </CardActions>
    </StyledCard>
  );
};

export default CardItem;
