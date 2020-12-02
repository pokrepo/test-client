import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export const InfoGrid = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Название теста</TableCell>
            <TableCell align="right">Дисциплина</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Активен с</TableCell>
            <TableCell align="right">Активен до</TableCell>
            <TableCell align="right">Режим доступа</TableCell>
            <TableCell align="right">Тест прошли</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row" style={{ textDecoration: "underline" }}>
                <Link to={`/tests/${index}`}>{row.title}</Link>
              </TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endData}</TableCell>
              <TableCell align="right">{row.groupNumber}</TableCell>
              <TableCell align="right">{row.passedCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
