import React from "react";

const style = {
  display: "inline-block",
  padding: "18px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black",
  backgroundColor: "red",
};

const chartComponent = (props) => {
  const alteredStyle = { ...style };

  if (props.chart === "a") alteredStyle.backgroundColor = "blue";

  return (
    <div className="chartComponent">
      <p onClick={props.click} style={alteredStyle}>
        {props.chart}
      </p>
    </div>
  );
};

export default chartComponent;
