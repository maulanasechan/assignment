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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scroll(0, 0);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    axios
      .get(API_URL + "listPromos")
      .then((res) => setPromos(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [promos]);

  useEffect(() => {
    if (!loginToken) navigate("/login");
  }, [loginToken]);

  const usePagination = (posts, defaultPage = 1, amountPerPage = 8) => {
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [postsPerPage] = useState(amountPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = [];
    let amountOfPages = 0;
    if (Array.isArray(posts)) {
      currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
      amountOfPages = Math.ceil(posts.length / postsPerPage);
    }
    return {
      setCurrentPage,
      amountOfPages,
      currentPosts,
    };
  };

  const { setCurrentPage, currentPosts, amountOfPages } = usePagination(promos);

  console.log(search);
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar setSearch={setSearch} setLoading={setLoading} />
      <Stack direction="row" justifyContent="center" alignItems="center">
        {search ? (
          <Box width={{ xs: "100%", sm: "60%" }} p={2}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ flexWrap: "wrap", marginTop: "15px" }}
              gap="30px"
            >
              {search &&
                search.map((promo) => (
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
          </Box>
        ) : (
          <Box width={{ xs: "100%", sm: "60%" }} p={2}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ flexWrap: "wrap", marginTop: "15px" }}
              gap="30px"
            >
              {currentPosts &&
                currentPosts.map((promo) => (
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
              sx={{ marginTop: "40px", marginBottom: "30px" }}
            >
              <Pagination
                count={amountOfPages}
                showFirstButton
                showLastButton
                variant="outlined"
                onChange={(event, page) => (
                  setLoading(true), setCurrentPage(page)
                )}
              />
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Homepage;
