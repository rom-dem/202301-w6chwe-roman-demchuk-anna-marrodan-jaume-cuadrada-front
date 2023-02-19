import styled from "styled-components";

const RobotStyled = styled.article`
  box-sizing: border-box;
  height: 550px;
  width: 320px;
  border-radius: 15px;
  background-color: #3d3d3d;
  background-size: cover;
  text-align: center;
  color: #ffff;
  border: 2px solid black;
  box-shadow: 0px 4px 10px white;
  font-family: press-start-2p, sans-serif;

  .robot {
    &__title {
      font-size: bold;
      color: #a9a9a9;
      -webkit-text-stroke: 2px black;
      padding: 15px;
    }

    &__image {
      border: 1px solid black;
      object-fit: cover;
      max-width: 100%;
      border-radius: 15px;
      &:hover {
        transform: scale(1.1);
      }
    }
    &__info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &__edit {
      color: black;
      padding: 5px;
      width: 100px;
      border-radius: 0 0 0 20px;
      background-color: #a9a9a9;
      &:hover {
        background-color: #33a0ff;
        transform: translateY(-2px);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
      }
    }
    &__delete {
      color: black;
      padding: 5px;
      width: 100px;
      border-radius: 0 20px 0 0;
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
