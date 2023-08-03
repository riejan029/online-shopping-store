import type { ReactElement } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import inventory from "../../assets/items.json";
import DrawerContent from "./components/drawer-content";
import { Outlet, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledDrawer = styled(Drawer)(() => ({
  ["& .MuiPaper-root"]: {
    width: "20%",
  },
}));

const SideBar = (): ReactElement => {
  const category = [...new Set(inventory.map((item) => item.category))];
  const navigate = useNavigate();
  const filterItem = (path: string): void => {
    navigate(path, {
      state: path.split("/")[1],
    });
  };
  return (
    <Grid container>
      <Grid item xs={2}>
        <Grid item xs={12}>
          <StyledDrawer variant="permanent" anchor="left">
            <Toolbar />
            <DrawerContent sx={{ width: "100%" }}>
              <List>
                {["all", ...category].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => filterItem(`list/${text}`)}>
                      <Typography>
                        {text.charAt(0).toUpperCase()}
                        {text.slice(1)}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </DrawerContent>
          </StyledDrawer>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid sx={{position:'fixed', top:100, right:30}}>
                    <Fab size="medium" color="secondary" aria-label="add" >
                        <ShoppingCartIcon />
                    </Fab>
                </Grid>
          <Toolbar />
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SideBar;
