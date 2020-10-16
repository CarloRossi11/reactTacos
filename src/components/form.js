import React from "react";

const Form = (props) => {
  const [search, setSearch] = React.useState({
    term: "",
  });

  const handleChange = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    props.search(search.term);
  };

  const but = {
    color: "beige",
    backgroundColor: "red",
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input style={but} type="submit" value="Taco Me!" />
    </form>
  );
};

export default Form;
