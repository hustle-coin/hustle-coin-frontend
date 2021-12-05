import React from "react"
import { Link } from "gatsby"

import { IoIosArrowRoundForward } from "react-icons/io"
import Box from "reusecore/Box"
import Text from "reusecore/Text"
import Heading from "reusecore/Heading"
import { Container, Row, Col } from "reusecore/Layout"

import PageHeader from "../../components/PageHeader"

import data from "assets/data/blog"
import { BlogPageWrapper } from "./blogFull.style"

const BlogGridItems = () => {
  return (
    <BlogPageWrapper>
      <Box className="blog-page-wrapper">
        <Container>
          <Text>
          <h1>RUG-PULL.......NOT!!</h1>
          <p>This is NOT a rug-pull....you just hit a page that doesn&#39;t exist... the sadness.</p>
          </Text>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
}

export default BlogGridItems
