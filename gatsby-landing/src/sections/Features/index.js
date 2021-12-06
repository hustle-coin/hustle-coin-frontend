import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import data from "assets/data/features"
import FeaturesSectionWrapper from "./features.style"

const Features = () => {
  return (
    <FeaturesSectionWrapper id="features">
      <Container>
        <Row>
          <Col className="md-12">
            <Box className="features-item-wrapper">
              <Row>
                {data.featuress.map((features, index) => (
                  <Col className="lg-3 sm-6 xs-12" key={index}>
                    <Box className="features-item text-center">
                      <img src={features.icon} alt="hustle coin feature" />
                      <Heading as="h3">{features.title}</Heading>
                      <Text>{features.body}</Text>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Box>
          </Col>
        </Row>
      </Container>
    </FeaturesSectionWrapper>
  )
}

export default Features
