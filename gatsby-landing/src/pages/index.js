import React from "react";
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Navigation from "sections/Navigation";
import Banner from "sections/Banner";
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Awards from "sections/tokenomics";
import Wallet from "sections/Wallet";
import Statistics from "sections/Statistics";
import Faq from "sections/Faq";
import Subscribe from "sections/Subscribe";
import Stack from "sections/Stack";
import Footer from "sections/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Navigation />
      <Banner />
      <Service />
      <CoinFund />
      <Awards />
      <About />
      <Statistics />
      <Wallet />
      <Faq />
      <Stack />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
