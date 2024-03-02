import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import { Grid } from "@mantine/core";

function CardsContainer() {
  const [users, setUsers] = useState([]);
  const onDelete = (id) => {
    const upDatedUsers = users.filter((item) => item.id != id);
    setUsers(upDatedUsers);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data.slice(0, 10));
    };
    fetchUsers();
  }, []);

  return (
    <Grid style={{ margin: "16px" }}>
      {users.map((item) => (
        <Grid.Col span={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
          <Cards
            contactNo={item.phone}
            key={item.id}
            mail={item.email}
            name={item.name}
            url={item.website}
            id={item.id}
            onDelete={onDelete}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default CardsContainer;
