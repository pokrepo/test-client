import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";

export const SubjectList = (props) => {
  const { data } = props;
  return (
    <List className="subject-list">
      {data.map((item) => {
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
