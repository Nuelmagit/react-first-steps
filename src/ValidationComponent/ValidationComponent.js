import React from "react";

const validationComponent = (props) => {
  return (
    <div className="validationComponent">
      {props.hasError ? errorText : okText}
    </div>
  );
};

const okText = <p>It's long enough</p>;

const errorText = <p>need to be greather than 5 letter</p>;

export default validationComponent;
