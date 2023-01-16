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
import { useDispatch } from "react-redux";
import { logout } from "../features/users";
import { useNavigate } from "react-router-dom";

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

const Navbar = ({ setSearch, searchData }) => {
  const navigate = useNavigate();
  const [focusSearch, setFocusSearch] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
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
            onSubmit={searchData}
            style={{
              width: "100%",
            }}
          >
            <InputBase
              placeholder="Search..."
              fullWidth={true}
              onFocus={() => setFocusSearch(!focusSearch)}
              onBlur={() => setFocusSearch(!focusSearch)}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </StyledSearch>
        <StyledIconButton onClick={handleLogout}>
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
