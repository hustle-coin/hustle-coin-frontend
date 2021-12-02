import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Counter from "reusecore/Counter"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"

import walletImage from "assets/images/FO38E42F5741-04.jpg"
import SectionParticle from "assets/images/particles/crypto-managment-wallet.svg"

import data from "assets/data/wallet"
import WalletSectionWrapper from "./wallet.style"

const Wallet = () => {
  return (
    <WalletSectionWrapper>
      <Container>
        <img
          src={SectionParticle}
          className="section__particle"
          alt="cryptik"
        />
        <Row>
          <Col className="lg-5 md-4 xs-12">
            <Box className="wallet-image">
              <img src={walletImage} alt="cryptik wallet image" />
            </Box>
          </Col>
          <Col className="lg-6 offset-lg-1 md-8 xs-12">
            <Box className="wallet-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading> Giving back with the Hustle Coin Moon Wallet </Heading>
                </SectionBackground>
                <Text>
                  Hustle Coin donates 5% of the Marketing Wallet in BNB each month
                  to the Moon Wallet. Additionally, 7% of each HSTL transaction is
                  converted to BNB and added to the balance throughout the day.
                </Text>
                <Text>
                 Hustle Coin will automatically select one HSTL holder and
                 award them with 100% of the Moon Wallet on the 25th of EVERY month. <br />
                 For your chance, simply hold a minimum of 100 HSTL coins in your wallet and
                 you might be the next one to say hello to the moon!
                </Text>
              </SectionTitle>

              <Box className="wallet-info">
                {data.wallet.map((item, index) => (
                  <Box className="counter-item" key={index}>
                    <Counter end={item.count} suffix={item.suffixText} />
                    <Text>{item.body}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </WalletSectionWrapper>
  )
}

export default Wallet
