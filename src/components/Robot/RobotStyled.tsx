import styled from "styled-components";

const RobotStyled = styled.article`
  box-sizing: border-box;
  height: 520px;
  width: 320px;
  border-radius: 15px;
  background-color: #3d3d3d;
  background-size: cover;
  text-align: center;
  color: #ffff;
  border: 2px solid black;
  box-shadow: 0px 4px 10px white;
  font-family: press-start-2p, sans-serif;

  h2 {
    font-size: bold;
    color: #a9a9a9;
    -webkit-text-stroke: 2px black;
  }

  .image {
    border: 1px solid black;
    border-radius: 15px;
    &:hover {
      transform: scale(1.1);
    }
  }

  .robot-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &_edit {
      color: black;
      padding: 5px;
      width: 100px;
      border-radius: 0 0 0 40px;
      background-color: #a9a9a9;
      &:hover {
        background-color: #33a0ff;
        transform: translateY(-2px);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
      }
    }
    &_delete {
      color: black;
      padding: 5px;
      width: 100px;
      border-radius: 0 40px 0 0;
      background-color: #a9a9a9;
      &:hover {
        background-color: #ff3333;
        transform: translateY(-2px);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export default RobotStyled;