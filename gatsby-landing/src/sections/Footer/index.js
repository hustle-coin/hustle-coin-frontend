import React from "react"
import { Link } from "gatsby"

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { List, ListItem } from "reusecore/List"

import cryptikFooterLogo from "assets/images/logo-white.png"
import data from "assets/data/footer"
import FooterWrapper from "./footer.style"

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Container>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link to={item.url} key={index}>
                    {item.icon}
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy; Hustle Coin | All right rserved 2021</Text>
                <Text as="span">
                  Designed By <Link to="#">Hustle Coin</Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  )
}

export default Footer;
