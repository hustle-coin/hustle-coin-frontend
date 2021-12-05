import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="404: Not found" />
      <h1>RUG-PULL.......NOT!!</h1>
      <p>This is NOT a rug-pull....you just hit a page that doesn&#39;t exist... the sadness.</p>
      <Navigation />
      <Footer/>
    </Layout>
  </ThemeProvider>
)
export default NotFoundPage
