import { Fragment } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>Real Estate</Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </Box>
    </Fragment>
  );
};

export default Layout;
