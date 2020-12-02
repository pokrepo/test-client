import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import questions from "../../data/questions.json";
import students from "../../data/students.json";
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

export const Statistics = (props) => {
  const key = props.match.params.id;
  const classes = useStyles();
  return (
    <div className="statistics">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            Студенты
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>№</TableCell>
                    <TableCell align="left" >Номер зачетки</TableCell>
                    <TableCell align="left">Фамилия</TableCell>
                    <TableCell align="left">Имя</TableCell>
                    <TableCell align="left">Группа</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((row, index) => (
                    <TableRow key={row.id} key={index}>
                      <TableCell component="th" scope="row">
                        {row.index}
                      </TableCell>
                      <TableCell align="left" style={{ textDecoration: "underline" }}><Link to={`/statistics/${index}`}>{row.id}</Link></TableCell>
                      <TableCell align="left">{row.surname}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.group}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            Вопросы
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>№ вопроса</TableCell>
                    <TableCell align="left">Название вопроса</TableCell>
                    <TableCell align="left">Сложность</TableCell>
                    <TableCell align="left">Упоминание</TableCell>
                    <TableCell align="left">Процент ответов</TableCell>
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
                      <TableCell align="left">{row.mentioned}</TableCell>
                      <TableCell align="left">{row.answered}</TableCell>
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
