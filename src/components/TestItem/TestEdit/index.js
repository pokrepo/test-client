import { TextField, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const TestEdit = (props) => {
  const classes = useStyles();
  return (
    <form className="edit-form">
      <TextField
        id="standard-basic"
        name="subject"
        placeholder="Введите название"
        color="secondary"
      />
      <TextField
        id="standard-basic"
        name="groupNumber"
        placeholder="Введите название"
        color="secondary"
      />
      <TextField
        id="startDate"
        placeholder="Начало"
        type="date"
        color="secondary"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endDate"
        placeholder="Конец"
        color="secondary"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-basic"
        name="answerCount"
        placeholder="Количество вопросов"
        color="secondary"
      />
      <TextField
        id="standard-basic"
        color="secondary"
        name="maxPoint"
        type="number"
        placeholder="Введите число"
      />
      <TextField
        id="standard-basic"
        color="secondary"
        name="time"
        placeholder="Введите число минут"
        type="number"
      />
      <Button color="secondary">Добавить</Button>
    </form>
  );
};
