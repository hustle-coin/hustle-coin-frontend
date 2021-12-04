import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"

import statisticsImage1 from "assets/images/chart/token-chart-1.png"
import statisticsImage2 from "assets/images/chart/token-chart-2.png"

import StatisticsSectionWrapper from "./statistics.style"

const Statistics = () => {
  return (
    <StatisticsSectionWrapper>
      <Box className="statistics-wrapper">
        <Container>
          <Row>
            <Col className="md-6 sm-6" style={{marginLeft: "auto", marginRight: "auto"}} >
              <Box className="statistics-image">
                <Heading as="h2">Funds Allocation</Heading>
                <div style={{ marginLeft: "auto", marginRight: "auto",marginTop:"80px", width: "240px", height: "400px" }}>
                  <div class="pie p10" ></div>
                  <div class="pie p30" ></div>
                  <div class="pie p60-2" ></div>
                  <div class="pie p60"></div>
                  <div class="pie center" ></div>
                  <div className="legend l60" >
                    <div className="label" style={{paddingInline:"10px"}}> PoLiquidity</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{  width: "15px", height: "15px", marginTop:"10px", color:"white", fontSize:"15px"  }}>60%</div>
                  </div>
                  <div className="legend l10" >
                    <div className="label" style={{transform: "rotate(-45deg)", paddingInline:"5px"}}>Marketing Wallet</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{ transform: "rotate(-45deg)", width: "15px", height: "15px", marginTop:"10px", color:"white", fontSize:"15px"  }}>10%</div>
                  </div>
                  <div className="legend l30" >
                    <div className="label" style={{paddingInline:"5px"}}>Moon Wallet</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{ width: "15px", height: "15px", marginTop:"10px", marginRight:"10%", color:"white", fontSize:"15px"  }}>30%</div>
                  </div>
                </div>


                {/* <img src={statisticsImage1} alt="cryptic statistics image" /> */}
              </Box>
            </Col>
            <Col className="md-6 sm-6" style={{marginLeft: "auto", marginRight: "auto"}}>
              <Box className="statistics-image">
                <Heading as="h2">Token Distribution</Heading>

                <div style={{ marginLeft: "auto", marginRight: "auto",marginTop:"80px", width: "240px", height: "400px" }}>
                  <div class="pie p6-5" ></div>
                  <div class="pie p6" ></div>
                  <div class="pie p25" ></div>
                  <div class="pie p62"></div>
                  <div class="pie p60-2" ></div>
                  <div class="pie center" ></div>
                  <div className="legend l60">
                    <div style={{paddingInline:"10px"}}>Token Lock</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{ width: "15px", height: "15px", marginTop:"20px", color:"white", fontSize:"15px"  }}>62.5%</div>
                  </div>

                  <div className="legend l30">
                    <div style={{paddingInline:"10px", width:"95px"}}>Pre-Sale</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{ width: "15px", height: "15px", marginTop:"10px", marginRight:"10%", color:"white", fontSize:"15px"  }}>25%</div>
                  </div>

                  <div className="legend l6-5" >
                    <div className="label" style={{transform: "rotate(-45deg)", paddingInline:"2px"}}>Developers</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{ transform: "rotate(-45deg)", width: "10px", height: "10px", marginTop:"5px", color:"white", fontSize:"12px"  }}>6.5%</div>
                  </div>

                  <div className="legend l6" >
                    <div className="label" style={{transform: "rotate(-65deg)", paddingInline:"-200px"}}>Marketing</div>
                    <hr className="line"/>
                    <div class="point" ></div>
                    <div style={{ transform: "rotate(-65deg)", width: "10px", height: "10px", marginTop:"5px", color:"white", fontSize:"12px"  }}>6%</div>
                  </div>
                </div>


                {/* <img src={statisticsImage2} alt="cryptic statistics image" /> */}
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  )
}

export default Statistics
