import { Logout, Search } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { API_URL } from "../utils/Api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../features/users";

const StyledSearch = styled("div")(({ theme }) => ({
  background: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "3px 15px",
  borderRadius: "25px",
  width: "30%",
}));

const StyledIconButton = styled(IconButton)({
  background: "white",
  border: "2px solid #0F0E0D",
  borderRadius: "50%",
  "&:hover": {
    background: "white",
    opacity: "60%",
  },
});

const StyledAppBar = styled(AppBar)({
  position: "sticky",
  background:
    "linear-gradient(to right, #0F0E0D 20%, #878776 20% 40%, #AFB1A2 40% 60%, #FFFFFF 60% 80%, #AB7E16 80% 100% )",
});

const Navbar = ({ setSearch, setLoading, search }) => {
  const [focusSearch, setFocusSearch] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (searchValue && searchValue.length >= 3) {
      axios
        .get(API_URL + "listPromos?brand_like=" + searchValue)
        .then((res) => setSearch(res.data))
        .catch((error) => {
          console.log(error);
        });
    } else setSearch(null);
  };

  return (
    <StyledAppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Ecomindo</Typography>
        <StyledSearch
          sx={
            focusSearch
              ? { border: "2px solid #AB7E16" }
              : { border: "2px solid #0F0E0D" }
          }
        >
          <Search
            sx={
              focusSearch
                ? {
                    color: "#0F0E0D",
                  }
                : {
                    color: "#AB7E16",
                  }
            }
          />
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
            }}
          >
            <InputBase
              placeholder="Search..."
              fullWidth={true}
              onFocus={() => setFocusSearch(!focusSearch)}
              onBlur={() => setFocusSearch(!focusSearch)}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </StyledSearch>
        <StyledIconButton onClick={() => dispatch(logout())}>
          <Logout
            sx={{
              color: "#0F0E0D",
            }}
            fontSize="small"
          />
        </StyledIconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
