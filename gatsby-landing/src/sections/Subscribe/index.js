import React from "react"
import bscscan, { account } from "bsc-scan";

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
  const balance = await account.getTransactions(
      "0xc3266525723960c69263a4b1b6f12042a37cb6addc022a8e20651639b43c8d17"
    );
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
                      <Heading> Always get the Hustle Coin News </Heading>
                      <Text className="post-entry">
                        Readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page
                        editors now use
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
