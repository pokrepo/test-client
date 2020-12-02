import { Button, Icon, IconButton } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const [chosenPath, chooseRoute] = useState("home");
  const [authorized, setAuth] = useState(true);

  const handleClick = (path) => (event) => {
    chooseRoute(path);
  };

  const isChosen = (path) => {
    return chosenPath === path ? "contained" : "text";
  };

  return (
    <div className="navbar">
      {authorized && (
        <div className="navbar-container">
          <Link to="/home">
            <IconButton color="secondary" component="span" onClick={handleClick("home")}>
              <Icon>home</Icon>
            </IconButton>
          </Link>
          <Link to="/tests">
            <Button color="secondary" variant={isChosen("tests")} onClick={handleClick("tests")}>
              Тесты
            </Button>
          </Link>
          <Link to="/database">
            <Button
              color="secondary"
              variant={isChosen("database")}
              onClick={handleClick("database")}
            >
              База вопросов
            </Button>
          </Link>
          <Link to="/documents">
            <Button
              color="secondary"
              variant={isChosen("documents")}
              onClick={handleClick("documents")}
            >
              Документы
            </Button>
          </Link>
          <Link to="/statistics">
            <Button
              color="secondary"
              variant={isChosen("statistics")}
              onClick={handleClick("statistics")}
            >
              Статистика
            </Button>
          </Link>
          <Link to="/management">
            <Button
              color="secondary"
              variant={isChosen("management")}
              onClick={handleClick("management")}
            >
              Управление
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
