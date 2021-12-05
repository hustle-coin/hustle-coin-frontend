import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "sections/Navigation"
import BlogSinglePage from "sections/Blog-single"
import Footer from "sections/Footer"

import theme from "assets/theme/theme"
import GlobalStyle from "assets/theme"

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="404: Not found" />
      <Navigation />
      <BlogItems />
      <Footer/>
    </Layout>
  </ThemeProvider>
)
export default NotFoundPage
