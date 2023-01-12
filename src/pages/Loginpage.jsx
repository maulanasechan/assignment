import {
  LockOpen,
  Person2Outlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Button,
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  styled,
  InputBase,
  IconButton,
  Link,
} from "@mui/material";
import React, { useState } from "react";

const StyledBox = styled(Box)({
  background:
    "linear-gradient(to right, #0F0E0D 20%, #878776 20% 40%, #AFB1A2 40% 60%, #FFFFFF 60% 80%, #AB7E16 80% 100% )",
});

const StyledInput = styled("div")(({ theme }) => ({
  background: "#FFFFFF",
  width: "80%",
  padding: "5px 20px",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "2px solid #AB7E16",
}));

const StyledLoginButton = styled(Button)({
  background: "#AB7E16",
  borderRadius: "20px",
  textTransform: "none",
  color: "white",
  padding: "5px 20px",
  border: "2px solid #AB7E16",
  "&:hover": {
    color: "#AB7E16",
  },
});

const StyledSignButton = styled(Button)({
  borderRadius: "20px",
  textTransform: "none",
  color: "#878776",
  padding: "5px 20px",
  border: "2px solid #878776",
  "&:hover": {
    color: "white",
    background: "#878776",
  },
});

const Loginpage = () => {
  const [inputFocus, setInputFocus] = useState(0);

  return (
    <StyledBox>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
        x
      >
        <Card sx={{ width: "400px", padding: "0 0 25px 0" }}>
          <CardMedia
            sx={{ height: 250 }}
            image="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            title="green iguana"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Typography gutterBottom variant="h4" sx={{ marginBottom: "15px" }}>
              Login
            </Typography>
            <StyledInput
              sx={
                inputFocus === 1
                  ? { border: "2px solid #AB7E16" }
                  : { border: "2px solid #0F0E0D" }
              }
            >
              <Person2Outlined
                sx={
                  inputFocus === 1 ? { color: "#0F0E0D" } : { color: "#AFB1A2" }
                }
              />
              <InputBase
                sx={{ width: "100%" }}
                placeholder="Username or Email"
                onFocus={(e) => setInputFocus(1)}
                onBlur={(e) => setInputFocus(0)}
              />
            </StyledInput>
            <StyledInput
              sx={
                inputFocus === 2
                  ? { border: "2px solid #AB7E16", padding: "2px 20px" }
                  : { border: "2px solid #0F0E0D", padding: "1px 20px" }
              }
            >
              <LockOpen
                sx={
                  inputFocus === 2 ? { color: "#0F0E0D" } : { color: "#AFB1A2" }
                }
              />
              <InputBase
                sx={{ width: "100%" }}
                placeholder="Password"
                onFocus={(e) => setInputFocus(2)}
                onBlur={(e) => setInputFocus(0)}
              />
            </StyledInput>
            <Link
              sx={{
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Forget your password?
            </Link>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <StyledLoginButton>Log In</StyledLoginButton>
            <StyledSignButton>Sign Up</StyledSignButton>
          </CardActions>
        </Card>
      </Stack>
    </StyledBox>
  );
};

export default Loginpage;
