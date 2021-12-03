import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"
import Button from "reusecore/Button"
import Input from "reusecore/Form/Input"
import { SectionTitle } from "reusecore/SectionTitle"

import { BlogPageWrapper } from "./blogList.style"

import SubscribeWrapper from "./subscribe.style"

const Subscribe = () => {
  return (
    <SubscribeWrapper id="contact">
      <Box className="subscribe-box-wrapper">
        <Container>
          <Row>
          <Col className="sm-12 md-8">
            <Row>
              <Col className="xs-12">
                <Box className="post-block list">
                  <Box className="post-thumb-block">
                    <img src={blogThumb1} alt="prime blog page" />
                    <Box className="post-meta">
                      <Text as="span">
                        <Text as="em"> 15 </Text> DEC
                      </Text>
                    </Box>
                  </Box>
                  <Heading as="h2" className="post-title">
                    <Link to="/blog-single">
                      It is a long established fact that
                    </Link>
                  </Heading>
                  <Text className="post-entry">
                    Readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable
                    English. Many desktop publishing packages and web page
                    editors now use
                  </Text>

                  <Link to="/blog-single" className="readmore-btn">
                    see more <IoIosArrowRoundForward />
                  </Link>
                </Box>
              </Col>
              <Col className="xs-12">
                <Box className="post-block list text-only">
                  <Heading as="h2" className="post-title">
                    <Link to="/blog-single">
                      Friendship contrasted solicitude insipidity in
                      introduced literature it.
                    </Link>
                  </Heading>
                  <Text className="post-entry">
                    Readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable
                    English. Many desktop publishing packages and web page
                    editors now use
                  </Text>

                  <Link to="/blog-single" className="readmore-btn">
                    see more <IoIosArrowRoundForward />
                  </Link>
                </Box>
              </Col>
              <Col className="xs-12">
                <Box className="post-block list qutoe-post">
                  <Heading as="h2" className="post-title">
                    <Link to="/blog-single">
                      Friendship contrasted solicitude insipidity in
                      introduced literature it. He seemed denote except as
                      oppose do spring my.
                    </Link>
                  </Heading>
                </Box>
              </Col>
              <Col className="xs-12">
                <Box className="post-block list">
                  <Box className="post-thumb-block">
                    <img src={blogThumb2} alt="prime blog page" />
                    <Box className="post-meta">
                      <Text as="span">
                        <Text as="em"> 15 </Text> DEC
                      </Text>
                    </Box>
                  </Box>
                  <Heading as="h2" className="post-title">
                    <Link to="/blog-single">
                      It is a long established fact that
                    </Link>
                  </Heading>
                  <Text className="post-entry">
                    Readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable
                    English. Many desktop publishing packages and web page
                    editors now use
                  </Text>

                  <Link to="/blog-single" className="readmore-btn">
                    see more <IoIosArrowRoundForward />
                  </Link>
                </Box>
              </Col>
                </Row>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </SubscribeWrapper>
  )
}

export default Subscribe
