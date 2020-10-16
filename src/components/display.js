import React from "react";

const Display = (props) => {
  const { taco } = props;

  const h1 = {
    color: "beige",
    backgroundColor: "red",
  };

  const loaded = () => {
    return (
      <div style={div}>
        <h1 style={h1}>{taco.base_layer.name}</h1>
        <h3>Condiment Style :{taco.condiment.name}</h3>
        <h3>Condiment Style :{taco.condiment.recipe}</h3>

        <h3>Mixin : {taco.mixin.name}</h3>
        <h3>Mixin : {taco.mixin.recipe}</h3>

        <h3>Seasoning: {taco.seasoning.name}</h3>
        <h3>Seasoning: {taco.seasoning.recipe}</h3>

        <h3>Shell: {taco.shell.name}</h3>
        <h3>Shell: {taco.shell.recipe}</h3>
      </div>
    );
  };
  const div = {
    textAlign: "center",
    color: "red",
    backgroundColor: "beige",
  };
  return taco.shell ? loaded() : <h1>flavor en route...</h1>;
};

export default Display;
