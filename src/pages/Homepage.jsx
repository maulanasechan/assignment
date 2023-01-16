import { Box, Pagination, Stack } from "@mui/material";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("isLoggedIn");

  const [loading, setLoading] = useState(true);
  const [promos, setPromos] = useState();
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (!loginToken) navigate("/login");
    if (searchKeyword.length < 3) setSearchKeyword("");

    getPromos();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scroll(0, 0);
    return () => clearTimeout(timer);
  }, [page, searchKeyword, loginToken]);

  const getPromos = async () => {
    const response = await axios.get(
      API_URL +
        "listPromos?brand_like=" +
        searchKeyword +
        "&_page=" +
        page +
        "&_limit=8"
    );
    setLoading(true);
    setPromos(response.data);
    var total = response.headers["x-total-count"];
    total = total / 8;
    setTotalPages(total);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(1);
    setSearchKeyword(search);
  };

  console.log(totalPages);
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar setSearch={setSearch} searchData={searchData} />
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box width={{ xs: "100%", sm: "60%" }} p={2}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ flexWrap: "wrap", marginTop: "15px" }}
            gap="30px"
          >
            {promos &&
              promos.map((promo) => (
                <Post
                  key={promo.id}
                  loading={loading}
                  promoId={promo.id}
                  promoImage={promo.imageJenis}
                  brand={promo.brand}
                  times={promo.waktuBerakhir}
                  tittle={promo.jenis}
                  subtittle={promo.subjenis}
                  tittlcolors={promo.color}
                  logo={promo.imageBrand}
                  payment={promo.pembayaran}
                />
              ))}
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={
              totalPages > 1
                ? { display: "flex", marginTop: "40px", marginBottom: "30px" }
                : { display: "none" }
            }
          >
            <Pagination
              count={totalPages}
              showFirstButton
              showLastButton
              variant="outlined"
              onChange={(event, currentPage) => setPage(currentPage)}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Homepage;
