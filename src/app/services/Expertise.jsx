"use client"
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const Title = styled.h2`
  margin: 1.5rem;
  font-size: 36px;
  font-weight: 700;
  margin-left: 92px;
  line-height: 50px;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin: 1rem;
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    font-size: 24px;
    margin-left: 15px;
    line-height: 30px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    margin-left: 10px;
    line-height: 25px;
  }
`;

const ExpertiseParagraph = styled.p`
  margin-top: 120px;
  margin-left: 90px;
  font-size: 20px;

  @media (max-width: 1024px) {
    margin-top: 60px;
    margin-left: 30px;
    font-size: 16px;
  }

  @media (max-width: 800px) {
    margin-top: 30px;
    margin-left: 15px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    margin-left: 10px;
    font-size: 14px;
  }
`;

function Expertise() {
  return (
    <Container>
      <Title className="font-skyhook" style={{fontWeight:'600', }}  >
        Our process has been proven and repeated over <br /> 100 times now, to
        create digital products that <br /> people love and innovation that
        future-proof <br /> companies rely on.
      </Title>
      <ExpertiseParagraph>(Our Expertise)</ExpertiseParagraph>
    </Container>
  );
}

export default Expertise;
