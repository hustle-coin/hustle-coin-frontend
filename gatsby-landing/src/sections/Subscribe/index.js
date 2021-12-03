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

import bscscan, { account } from "bsc-scan";

bscscan.setUrl("https://testnet.bscscan.com");
bscscan.setApiKey("DQKEFS56AKQ1NXY3KVIZWK2UFG8IP5RY46");

const start = async () => {
  try {
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
                        <Text>
                          Sign up for updates and market news. Subscribe to our
                          newsletter and receive update about ICOs and crypto
                          tips.
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

    console.log(`Your balance is: ${balance}`);
  } catch (err) {
    console.log(err);
  }
};

start();



export default Subscribe
