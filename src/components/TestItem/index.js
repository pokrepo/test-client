import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./index.scss";
import tests from "../../data/tests.json";
import questions from "../../data/questions.json";
import attendance from "../../data/attendance.json";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
}));

export const TestItem = (props) => {
  const key = props.match.params.id;
  const classes = useStyles();
  return (
    <div className="test-edit">
      <Link to="/tests">
        <Button color="secondary" startIcon={<ArrowBackIosIcon />}>
          Список тестов
        </Button>
      </Link>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <List>
              <ListItem>
                <ListItemText>Дисциплина: {tests[key].title}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Доступ для групп: {tests[key].groupNumber}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Доступ с {tests[key].startDate} по {tests[key].endDate}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Количество вопросов: {""}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Максимальный балл: {""}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Время на выполнение: {""}</ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            Вопросы теста:
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>№ вопроса</TableCell>
                    <TableCell align="left">Название вопроса</TableCell>
                    <TableCell align="left">Сложность</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {questions.map((row, index) => (
                    <TableRow key={row.title} key={index}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.complexity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            Студенты, прошедшие тест:
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell align="left">Тест начат</TableCell>
                    <TableCell align="left">Тест завершен</TableCell>
                    <TableCell align="left">Время прохождения</TableCell>
                    <TableCell align="left">Ошибок</TableCell>
                    <TableCell align="left">Результат</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendance.map((row, index) => (
                    <TableRow key={row.title} key={index}>
                      <TableCell component="th" scope="row">
                        {row.username}
                      </TableCell>
                      <TableCell align="left">{row.start}</TableCell>
                      <TableCell align="left">{row.end}</TableCell>
                      <TableCell align="left">{row.duration}</TableCell>
                      <TableCell align="left">{row.failures}</TableCell>
                      <TableCell align="left">{row.results}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
