import React from "react";
import {
  Input,
  Container
} from "@material-ui/core";
export default function Search({ search,setSearch}) {
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = ({ target: { value } }) => {
    setSearch(value);
};
  return (
    <Container maxWidth='lg'>
      <form onSubmit={here => handleSubmit(here)} style={{textAlign:'center'}}>
        <Input value={search} onChange={here => handleChange(here)} placeholder='Enter Name'/>
      </form>
    </Container>
  );
}
