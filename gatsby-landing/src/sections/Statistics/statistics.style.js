import styled from "styled-components";

const StatisticsSectionWrapper = styled.div`
  .pie{
    width: 40%;
    height: 40%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50%;
    position: absolute;

  }

  .l60{
    flex-direction: row-reverse;
    left: 290px;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .l6-5{
    flexDirection: row;
    left: 0;
    right: 195px;
    top: -280px;
    bottom: 0;
    transform: rotate(45deg);
    justify-content: flex-end;
  }
  .l6{
    flexDirection: row;
    left: 0;
    right: 80px;
    top: -320px;
    bottom: 0;
    transform: rotate(65deg);
    justify-content: flex-end;
  }

  .l10{
    flexDirection: row;
    left: 0;
    right: 150px;
    top: -280px;
    bottom: 0;
    transform: rotate(45deg);
    justify-content: flex-end;
  }

  .l30{
    left: -340px;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: flex-end;
  }

  .center{
    width: 90px;
    height: 90px;
    position: absolute;
    transform: rotate(-90deg);
    background: #4D68D8;
    box-shadow: 1px 7px 55px 0px rgba(0,0,0,0.75);
    background-image: linear-gradient(#B274E4, #3766D5)
  }

  .p60-2{
    width: 290px;
    height: 290px;
    transform: rotate(0deg);
    background-image: linear-gradient(to right, transparent 50%, #19ABFA 0);
  }
  .p62{
    width: 290px;
    height: 290px;
    transform: rotate(45deg);
    background-image: linear-gradient(to right, transparent 50%, #19ABFA 0);
  }
  .p60{
    width: 290px;
    height: 290px;
    transform: rotate(36deg);
    background-image: linear-gradient(to right, transparent 50%, #19ABFA 0)
  }

  .p30{
    width: 270px;
    height: 270px;
    transform: rotate(140deg);
    background-image: linear-gradient(to right, transparent 50%, #706CDD 0)
  }
  .p25{
    width: 270px;
    height: 270px;
    transform: rotate(135deg);
    background-image: linear-gradient(to right, transparent 50%, #706CDD 0)
  }
  .p6{
    width: 240px;
    height: 240px;
    transform: rotate(160deg);
    background-image: linear-gradient(to right, transparent 50%, #2373EA 0)
  }
  .p6-5{
    width: 230px;
    height: 230px;
    transform: rotate(180deg);
    background-image: linear-gradient(to right, transparent 50%, #6F6BDC 0)
  }

  .p10{
    width: 230px;
    height: 230px;
    transform: rotate(-52deg);
    background-image: linear-gradient(to right, transparent 50%, #2373EA 0)
  }

  .legend{
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: flex-end;
    display: flex;
    width:fit-content;
    height:8px;
    position:absolute
  }
  .line{
    width: 70px;
    height: 1px;
    background-color: white;
    margin-top: auto;
    margin-bottom: auto
  }
  .ltext{
    width: 15px;
    height: 15px;
    margin-top:20px;
    color:white;
    font-size:15px
  }
  .point{
    width:10px;
    height: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50%;
    background-color: white
  }

  .statistics-wrapper {
    padding: 85px 0;

    .statistics-image {
      text-align: center;
      .heading {
        font-size: 36px;
      }

      img {
        margin-top: 55px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .statistics-wrapper {
      .statistics-image {
        .heading {
          font-size: 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .statistics-wrapper {
      .statistics-image {
        .heading {
          font-size: 30px;
        }
      }
    }
    .p10{
      width: 220px;
      height: 220px;
    }

    .p62{
      width: 260px;
      height: 260px;
    }

    .p30{
      width: 240px;
      height: 240px;
    }

    .p60-2{
      width: 260px;
      height: 260px;
    }
    .p60{
      width: 260px;
      height: 260px;
    }
    .l60{
      left: 230px;
    }

    .l30{
      left: -260px;
    }

    .label{
      font-size: 12px
    }

  }
  @media only screen and (max-width: 760px) {
    .statistics-wrapper {
      .statistics-image {
        text-align: center;
        padding: 10px 0;
        .heading {
          font-size: 25px;
        }

      }
    }
    .p10{
      width: 220px;
      height: 220px;
    }

    .p30{
      width: 240px;
      height: 240px;
    }

    .p60-2{
      width: 260px;
      height: 260px;
    }
    .p62{
      width: 260px;
      height: 260px;
    }
    .p60{
      width: 260px;
      height: 260px;
    }
    .l30{
      left: -340px;
    }

    .l60{
      left: 220px;
    }

    .label{
      font-size: 12px
    }

  }
  @media only screen and (max-width: 568px) {
    .statistics-wrapper {
      .statistics-image {
        text-align: center;
        img {
          margin: 50px auto 0px auto;
          width: 70%;
        }

        &:last-child {
          margin-top: 50px;
        }
      }
    }

    .p10{
      width: 200px;
      height: 200px;
    }

    .p30{
      width: 220px;
      height: 220px;
    }

    .p60-2{
      width: 240px;
      height: 240px;
    }
    .p60{
      width: 240px;
      height: 240px;
    }
    .62{
      width: 240px;
      height: 240px;
    }
    .l60{
      left: 155px;
    }
    .l30{
      left: -220px;
    }
    .label{
      font-size: 12px;
    }
    .center{
      width: 60px;
      height: 60px;
    }

  }
  @media only screen and (max-width: 480px) {
    .statistics-wrapper{
      padding: 10px 0;
    }
    .p10{
      width: 150px;
      height: 150px;
    }
    .p6-5{
      width: 150px;
      height: 150px;
    }
    .p6{
      width: 160px;
      height: 160px;
    }

    .p30{
      width: 170px;
      height: 170px;
    }

    .p25{
      width: 170px;
      height: 170px;
    }

    .p60-2{
      width: 180px;
      height: 180px;
    }
    .p62{
      width: 180px;
      height: 180px;
    }
    .p60{
      width: 180px;
      height: 180px;
    }
    .l60{
      left: 155px;
    }
    .l6-5{
      top: -190px;
      right: 200px
    }
    .l6{
      top: -240px;
      left: 15px;
    }
    .l30{
      left: -180px;
    }
    .l10{
      top: -180px;
      left: 10px;
    }
    .label{
      font-size: 12px;
    }
    .line{
      width: 50px
    }
    .center{
      width: 40px;
      height: 40px;
    }
  }
`;

export default StatisticsSectionWrapper;
