import React from "react";
import { Button, Icon } from "@material-ui/core";
import "./index.scss";
import { Link } from "react-router-dom";
import { InfoGrid } from "../Common/Grid.js";
import tests from "../../data/tests.json";

export const Tests = (props) => {
  return (
    <div className="tests-page">
      <Link to="/tests/edit" className="link">
        <Button color="secondary" startIcon={<Icon>add</Icon>} className="add-button">
          Тест
        </Button>
      </Link>
      <InfoGrid data={tests} />
    </div>
  );
};
