import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
  background-color: rgba(158, 158, 158, 0.2);
  border-radius: 10px;
`;

const ThirdBanner = () => {
  return (
    <Wrapper>
      <img src="https://www.edb.gov.sg/content/dam/edb-en/insights/innovation/innovation-in-a-crisis-singapore-flexes-biomed-chops-against-covid-19/Tracking.gif" />
    </Wrapper>
  );
};

export default ThirdBanner;
