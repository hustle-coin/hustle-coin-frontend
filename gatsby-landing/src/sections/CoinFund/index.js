import React, { useState } from "react"
import { Link } from "gatsby"
import CountdownTimer from "react-component-countdown-timer"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"

import CoinFundWrapper from "./coinFund.style"

const CoinFund = () => {
  console.log(parseInt(((new Date("2021-12-20T00:00:58.000Z").getTime() - new Date().getTime()) / 1000).toFixed(0)))
  const settings = {
    count: parseInt(((new Date("2021-12-20T00:00:58.000Z").getTime() - new Date().getTime()) / 1000).toFixed(0)),
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  }

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Hustle Coin Pre-Sale.
                  </Heading>
                </SectionBackground>
                <Text>
                  Hustle Coin was developed out of the necessity to provide investors
                  a genuine token to invest and grow with. The creators of Hustle Coin
                  are investors like you, who are tired of the hundreds of scam
                  coins hitting the market daily.
                </Text>
              </SectionTitle>

              <Box className="btn-wrapper">
                <Link to="#" className="btn btn-fill">
                  Buy Token
                </Link>
              </Box>
            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text> say hello to the moon </Text>
              <CountdownTimer {...settings} />
            </Box>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$0</Text>
              </Box>
              <Text as="span">1 BNB = 2,000,000 HSTL</Text>
            </Box>

          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  )
}

export default CoinFund
