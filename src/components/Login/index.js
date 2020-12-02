import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import "./index.scss";

export const Login = (props) => {
  const [formValue, setFormValue] = useState({ login: "", password: "" });

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };

  return (
    <div className="login-container">
      <form noValidate autoComplete="off" className="login-form" onSubmit={handleSubmit}>
        <Typography variant="h5" component="h2">
          Авторизация
        </Typography>
        <TextField
          required
          placeholder="Логин"
          color="secondary"
          name="login"
          onChange={handleChange}
          value={formValue.login}
        />
        <TextField
          required
          placeholder="Пароль"
          color="secondary"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          type="password"
        />
        <Button color="secondary" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};
