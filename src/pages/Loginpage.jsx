import {
  Button,
  Typography,
  Card,
  Box,
  CardActions,
  CardContent,
  styled,
} from "@mui/material";
import { Login, Assignment } from "@mui/icons-material";
import Link from "@mui/material/Link";

const Loginpage = () => {
  const SignButton = styled(Button)({
    textTransform: "none",
    fontSize: 16,
    background: "gray",
    opacity: "0.8",
    color: "white",
    "&:hover": {
      background: "gray",
      opacity: 1,
    },
  });

  const LoginButton = styled(Button)({
    textTransform: "none",
    fontSize: 16,
  });

  const BoxLogin = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: `linear-gradient(217deg, rgba(109,191,242,.8), rgba(109,191,242,0) 40%),
    linear-gradient(127deg, rgba(239,213,242,.8), rgba(0,255,0,0) 90%),
    linear-gradient(336deg, rgba(182,221,242,.8), rgba(0,0,255,0) 70.71%),
    linear-gradient(370deg, rgba(183,141,242,.8), rgba(109,191,242,0) 80%)`,
  });

  const CardContentLogin = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  });

  return (
    <BoxLogin>
      <Card sx={{ minWidth: "25%", p: 3, borderRadius: 5 }}>
        <CardContentLogin>
          <Typography variant="h3">Login</Typography>
          <input
            type="text"
            name="Username"
            placeholder="Username atau Email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              outline: "none",
              border: "2px solid lightgray",
              fontSize: "14px",
            }}
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              outline: "none",
              border: "2px solid lightgray",
              fontSize: "14px",
            }}
          />
          <Link
            href="#"
            sx={{
              fontSize: 14,
            }}
          >
            Forgot your password?
          </Link>
        </CardContentLogin>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoginButton variant="contained" endIcon={<Login />}>
            Login
          </LoginButton>
          <SignButton variant="contained" startIcon={<Assignment />}>
            Sign Up
          </SignButton>
        </CardActions>
      </Card>
    </BoxLogin>
  );
};

export default Loginpage;
