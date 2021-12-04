import React from "react"

import bscscan, { account } from "bsc-scan";

bscscan.setUrl("https://testnet.bscscan.com");
bscscan.setApiKey("DQKEFS56AKQ1NXY3KVIZWK2UFG8IP5RY46");

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Image from "reusecore/Image"
import Button from "reusecore/Button"
import Input from "reusecore/Form/Input"
import { SectionTitle } from "reusecore/SectionTitle"

import SubscribeWrapper from "./subscribe.style"

const start = async () => {
  try {
    const balance = await account.getTransactions(
      "0x0793f460c5f2a0ef94fa1f089df38d2046753987"
    );
<Text>
${balance}
</Text>
    console.log(`Your balance is: ${balance}`);
  } catch (err) {
    console.log(err);
  }
};

start();

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
