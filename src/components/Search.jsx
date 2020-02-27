import React from "react";
import {
  Input,
  Button,
  Typography as Font,
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
      <form onSubmit={here => handleSubmit(here)}>
        <Input value={search} onChange={here => handleChange(here)} />
        <Button>
          <Font variant="button">Search</Font>
        </Button>
      </form>
    </Container>
  );
}
