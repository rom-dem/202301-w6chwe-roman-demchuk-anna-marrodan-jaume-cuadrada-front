import RobotStyled from "./RobotStyled";

const Robot = (): JSX.Element => {
  return (
    <RobotStyled>
      <h2>ROBOT 1</h2>
      <img
        src="https://designobserver.com/media/images/mondrian/40381-8_moxi_m.jpg"
        alt="robot"
        className="image"
        height="256"
        width="256"
      ></img>
      <div className="robot-info">
        <span>Speed: 10</span>
        <span>Endurance: 20</span>
        <span>Creation date: 02/03/2023</span>
      </div>
      <div className="buttons-container">
        <button className="buttons-container__edit">EDIT</button>
        <button className="buttons-container__delete">DELETE</button>
      </div>
    </RobotStyled>
  );
};

export default Robot;
