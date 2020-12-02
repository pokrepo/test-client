import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";

export const TestList = (props) => {
  const { data } = props;
  const firstThree = data.slice(0, 3);
  return (
    <List className="test-list">
      {firstThree.map((item) => {
        return (
          <ListItem className="test-list-item">
            <Typography>Название теста: {item && item.title}</Typography>
            <Typography>Дисциплина: {item && item.subject}</Typography>
            <Typography>Активен до: {item && item.endDate}</Typography>
            <Typography>Группы: {item && item.groupNumber}</Typography>
          </ListItem>
        );
      })}
    </List>
  );
};
