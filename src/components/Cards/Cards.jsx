import React, { useState } from "react";
import { Card, Text, Button, SimpleGrid, Avatar } from "@mantine/core";
import {
  IconTrash,
  IconUserPlus,
  IconAt,
  IconPhoneCall,
  IconWorld,
  IconStar,
  IconUserMinus,
} from "@tabler/icons-react";
import "./cards.css";

const Cards = ({ mail, contactNo, url, name, id, onDelete }) => {
  const [follow, setFollow] = useState(false);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section display={"flex"} className="cards">
        <Avatar
          style={{ textAlign: "center" }}
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
          alt="no image here"
          size="xl"
        />
      </Card.Section>

      <Text style={{ textAlign: "center" }}>
        {name} {follow ? <IconStar size="15" /> : null}
      </Text>

      <Text size="sm" c="dimmed">
        <IconAt size="15" /> {mail}
      </Text>
      <Text size="sm" c="dimmed">
        <IconPhoneCall size="15" /> {contactNo}
      </Text>
      <Text size="sm" c="dimmed">
        <IconWorld size="15" /> {url}
      </Text>
      <SimpleGrid cols={2}>
        <Button
          color={follow ? "gray" : "blue"}
          fullWidth
          mt="md"
          radius="md"
          variant={!follow ? "" : "outline"}
          leftSection={!follow ? <IconUserPlus /> : <IconUserMinus />}
          onClick={() => setFollow(!follow)}
        >
          {!follow ? "Follow" : "Unfollow"}
        </Button>
        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          variant="outline"
          leftSection={<IconTrash />}
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </SimpleGrid>
    </Card>
  );
};

export default Cards;
