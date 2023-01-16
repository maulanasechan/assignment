import { HourglassTop } from "@mui/icons-material";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Card,
  Box,
  Skeleton,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import React from "react";
import { IMAGES_PATH } from "../utils/Api";

const StyledTypography = styled(Typography)({
  background: "white",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
});

const Post = ({
  loading,
  promoImage,
  brand,
  times,
  tittle,
  subtittle,
  tittlcolors,
  promoId,
  logo,
  payment,
}) => {
  return (
    <Box>
      <Stack direction="row" gap={2} alignItems="center">
        {loading ? (
          <Skeleton variant="circular" width="35px" height="35px" />
        ) : (
          <StyledTypography sx={{ color: tittlcolors }}>
            #{promoId}
          </StyledTypography>
        )}
        {loading ? (
          <Skeleton variant="rectangular" height="25px" width="100px" />
        ) : (
          <img
            src={IMAGES_PATH + "brand/" + logo}
            alt=""
            style={{
              height: "25px",
              width: "auto",
            }}
          />
        )}
      </Stack>
      <Card
        sx={{
          maxWidth: 190,
          position: "relative",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          cursor: "pointer",
          marginTop: "15px",
        }}
      >
        {loading ? (
          <Box p={2}>
            <Skeleton variant="rectangular" width={100} height={20} />
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              sx={{ marginTop: "10px" }}
            />
          </Box>
        ) : (
          <CardHeader
            title={tittle}
            subheader={subtittle}
            titleTypographyProps={{ fontSize: "14px", color: tittlcolors }}
            subheaderTypographyProps={{
              fontSize: "14px",
              fontWeight: "bold",
              color: tittlcolors,
            }}
          />
        )}

        {loading ? (
          <Skeleton variant="rectangular" width={194} height={194} />
        ) : (
          <CardMedia
            component="img"
            image={IMAGES_PATH + promoImage}
            alt={brand}
            sx={{
              objectFit: "cover",
              height: "190px",
              width: "190px",
            }}
          />
        )}
        {payment && (
          <CardContent
            sx={{
              background: "rgba(245,235,240,0.8)",
              position: "absolute",
              height: "10px",
              bottom: "0",
              width: "100%",
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" width={50} height={20} />
            ) : (
              <img
                src={IMAGES_PATH + "/pembayaran/" + payment + ".png"}
                alt=""
                style={{ width: "50px" }}
              />
            )}
          </CardContent>
        )}
      </Card>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          sx={{ marginTop: "15px" }}
        />
      ) : (
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          sx={{
            marginTop: "10px",
          }}
        >
          <HourglassTop
            sx={{
              fontSize: "13px",
              color: "#AFB1A2",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {times}
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default Post;
