import React from "react";
import Joi from "joi-browser";
import FormBase from "../common/form";
import FormTitle from "../common/formTitle";

class LoginForm extends FormBase {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("User name"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // call the server
    console.log("Submited");
  };

  render() {
    return (
      <div className="container">
        <FormTitle title="Login" />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(
            "username",
            "User name",
            "User name",
            "We'll never share your email with anyone else"
          )}
          {this.renderInput(
            "password",
            "Password",
            "Type password",
            "",
            "password"
          )}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
