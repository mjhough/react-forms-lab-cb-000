import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = event => {
    event.preventDefault();
    if(this.state.username && this.state.password) this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input name="username" id="test-username" value={this.state.username} type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" id="test-password" value={this.state.password} type="password" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
