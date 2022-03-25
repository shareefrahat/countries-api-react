import React from "react";

const Details = (props) => {
  console.log(props.details);
  if (props.details.length === 0) {
    console.log("ekhono load hoyni");
  } else {
    console.log("matro load hoilo");
    const { name } = props.details;
    return (
      <div>
        <h5>Name: {name.common}</h5>
        <p></p>
      </div>
    );
  }
  return <div></div>;
};

export default Details;
