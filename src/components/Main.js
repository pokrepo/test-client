import { Home } from "./Home";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Login } from "./Login";
import { Documents } from "./Documents";
import { Management } from "./Management";
import { Database } from "./Database";
import { Statistics } from "./Statistics";
import { Tests } from "./Tests";
import { TestItem } from "./TestItem";
import { TestEdit } from "./TestItem/TestEdit";
import { StatisticsItem } from "./Statistics/StatisticsItem";

export const Main = (props) => {
  return (
    <Container className="container">
      <div className="wrapper">
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/documents" component={Documents}></Route>
          <Route exact path="/management" component={Management}></Route>
          <Route exact path="/database" component={Database}></Route>
          <Route exact path="/statistics" component={Statistics}></Route>
          <Route path="/statistics/:id" component={StatisticsItem}></Route>
          <Route exact path="/tests" component={Tests}></Route>
          <Route exact path="/tests/edit" component={TestEdit}></Route>
          <Route path="/tests/:id" component={TestItem}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route component={Home}></Route>
        </Switch>
      </div>
    </Container>
  );
};
