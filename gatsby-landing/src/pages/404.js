import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Badge from "reusecore/Badge"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import BannerImage from "assets/images/banners/banner-one/banner-one-thumb.svg"

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png"
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png"
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png"
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png"
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png"

import BannerWrapper from "./sections/banner/banner.style"

const Banner = () => {
  return (
    <BannerWrapper>
      <img
        src={particleTopLeft}
        className="section__particle top-left"
        alt="cryptik particles"
      />
      <img
        src={particleUnderLogo}
        className="section__particle two"
        alt="cryptik particles"
      />
      <img
        src={prticleTopRight}
        className="section__particle top-right"
        alt="cryptik particles"
      />
      <img
        src={particleBottomLeft}
        className="section__particle bottom-left"
        alt="cryptik particles"
      />
      <img
        src={particleBottomRight}
        className="section__particle bottom-right"
        alt="cryptik particles"
      />
      <Container>
        <Row>
          <Col className="lg-8 xs-12">
            <Box className="banner-content">
              <Badge className="offer-text">
                say hello to the moon
              </Badge>
              <Heading as="h1">
                About Hustle Coin
              </Heading>
              <Text>
                Hustle Coin offers a unique lottery system in which holders of{" "}
                <br />
                HSTL have a chance each month at being awarded 100% of the Moon
                <br /> Wallet balance!
                </Text>
                <Text>
                No additional purchase is needed to be entered in for your chance
                to win.{" "}
                <br />
                Simply hold HSLT and your wallet might be the next to see the Moon!
              </Text>
              <Box className="banner-btn">
                <Link to="#" className="btn btn-fill">
                  {" "}
                  Pre-Sale{" "}
                </Link>
                <Link to="#" className="btn">
                  {" "}
                  white paper{" "}
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
        <img
          src={BannerImage}
          className="banner__thumb"
          alt="hustle coin banner thumb"
        />
      </Container>
    </BannerWrapper>
  )
}

export default Banner
