import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import summary from "../../../data/statisticSummary.json";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const StatisticsItem = (props) => {
    const classes = useStyles();
    const key = props.match.params.id;
    return (
      <div className={classes.root}>
        <Link to="/statistics">
            <Button color="secondary" startIcon={<ArrowBackIosIcon />}>
                Статистика по студенту
            </Button>
        </Link>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">{summary[key].subject}/{summary[key].test}</Typography>
                <div name="top">
                    <div name="answer">
                        <Typography>Количество неверных:</Typography>
                        <Typography>Общий результат:</Typography>
                    </div>
                    <div name="time">
                        <Typography>Тест начат:</Typography>
                        <Typography>Тест закончен:</Typography>
                    </div>
                </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
};
