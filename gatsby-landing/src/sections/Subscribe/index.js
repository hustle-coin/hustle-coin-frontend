import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"
import Button from "reusecore/Button"
import Input from "reusecore/Form/Input"
import { SectionTitle } from "reusecore/SectionTitle"

import SubscribeWrapper from "./subscribe.style"

const Subscribe = () => {
  return (
    <SubscribeWrapper id="contact">
      <Box className="subscribe-box-wrapper">
        <Container>
          <Row>
            <Col className="col-12">
              <Box className="subscribe-box-bg">
                <Row>
                  <Col className="lg-6 offset-lg-3 xs-12">
                    <SectionTitle>
                      <Heading> Moon Wallet Balance </Heading>
                      <Text className="post-entry">
                        One lucky Hustle Coin holder has the chance to win balance
                      </Text>
                    </SectionTitle>
                  </Col>
                </Row>
                <Row>
                  <Col className="lg-8 offset-lg-2 xs-12">
                    <Box className="form-box">
                      <Input
                        type="text"
                        placeholder="Enter your email address . . ."
                      />
                      <Button>Subscribe</Button>
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
