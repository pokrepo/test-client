import { Grid, Paper, makeStyles, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./index.scss";
import { TestList } from "./TestList";
import tests from "../../data/tests.json";
import { Link } from "react-router-dom";
import { SubjectList } from "./SubjectList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  firstItem: {
    margin: "0 15%",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export const Home = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState("Андрей Покрепо");
  return (
    <div className="home-container">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper className={classes.paper + " " + classes.firstItem}>
            Доброго времени суток, {username}
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.column}>
          <Paper className={classes.paper}>
            <Typography type="h5" component="h2">
              Активные тесты:
            </Typography>
            <TestList data={tests} />
            <Link to="/tests">
              <Button color="secondary">Все тесты</Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography type="h5" component="h2">
              Активные пользователи на платформе:
            </Typography>
            <SubjectList data={tests} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
