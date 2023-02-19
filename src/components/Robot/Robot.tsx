import { RobotStructure } from "../../types";
import RobotStyled from "./RobotStyled";

interface RobotProps {
  robot: RobotStructure;
}

const Robot = ({
  robot: { name, creation, endurance, image, speed },
}: RobotProps): JSX.Element => {
  return (
    <RobotStyled>
      <h2 className="robot__title">{name}</h2>
      <img
        src={image}
        alt="robot"
        className="robot__image"
        height="256"
        width="256"
      ></img>
      <ul className="robot__info">
        <li>Speed: {speed}</li>
        <li>Endurance: {endurance}</li>
        <li>Creation date: {creation}</li>
      </ul>
      <div className="buttons-container">
        <button className="buttons-container__edit">EDIT</button>
        <button className="buttons-container__delete">DELETE</button>
      </div>
    </RobotStyled>
  );
};

export default Robot;
