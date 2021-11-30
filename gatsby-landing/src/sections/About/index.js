import React from "react"
import { Link } from "gatsby"
import { FaGooglePlay, FaApple } from "react-icons/fa"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"

import aboutImage from "assets/images/about/about.svg"
import AboutSectionWrapper from "./about.style"

const About = () => {
  return (
    <AboutSectionWrapper id="about-right-content">
      <Container>
        <Row>
        <Col className="lg-6 offset-lg-1 md-6 sm-12">

            <Image
              src={aboutImage}
              className="about-image"
              alt="Hustle Coin"
            />
          </Col>
          <Col className="lg-5 md-6 sm-12">
            <Box className="about">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">
                    How to buy Hustle Coin
                  </Heading>
                </SectionBackground>
                <Text></Text>
              </SectionTitle>

              <Box className="about-list">
                <Text as="span">Install <Link to="http://metamask.io/">MetaMask</Link>.</Text>
                <Text as="span">Purchase BNB On An Exchange.</Text>
                <Text as="span">Swap Hustle Coin On PancakeSwap.</Text>
              </Box>

              <Box className="about-btn-wrapper">
                <Link to="https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&ref=producthunt&_branch_match_id=988807381333775979&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWT6ooz3a1yHeztAQA%2FOIqTSQAAAA%3D" className="btn btn-fill">
                  {" "}
                  <FaGooglePlay /> Google Play
                </Link>
                <Link to="https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=988807381333775979&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D" className="btn">
                  <FaApple /> Apple Store
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  )
}

export default About
