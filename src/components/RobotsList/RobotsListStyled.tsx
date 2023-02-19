import styled from "styled-components";

const RobotsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  gap: 40px;
  align-items: center;
  padding: 50px 0;

  @media (min-width: 768px) {
    gap: 72px;
  }
`;

export default RobotsListStyled;
