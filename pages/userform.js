import React, { Component } from "react";
import Layout from "../components/Layout";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        identifier: "",
        is_disabled: true,
        metadata: {
          first_name: "",
          last_name: ""
        }
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
//     const user = this.state.user;
//     const md = this.state.user.metadata;
//     const data = `{
//       "user": {
//           "identifier": "${user.identifier}",
//           "metadata": '{"first_name": "${md.first_name}", "last_name": "${md.last_name}"}'
//       }
//   }`;
    const data = JSON.stringify({ ...this.state });
    fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/JSON"
      }
    });
    console.log(data);
  }
  handleChange1(propertyName, e) {
    const user = this.state.user;
    user[propertyName] = e.target.value;
    this.setState({ user: user });
  }
  handleChange2(propertyName, e) {
    const metadata = this.state.user.metadata;
    metadata[propertyName] = e.target.value;
    this.setState({ user: { metadata: metadata } });
  }

  render() {
    return (
      <Layout>
        <h1>Sign up!</h1>
        <div>
          <form
            style={{ padding: 15 }}
            onSubmit={this.handleSubmit}
            className="form"
          >
            <br />
            <label>
              First Name
              <input
                type="text"
                name="first_name"
                value={this.state.user.metadata.first_name || ""}
                onChange={this.handleChange2.bind(this, "first_name")}
              ></input>
            </label>
            <br />
            <label>
              Last Name
              <input
                type="text"
                name="last_name"
                value={this.state.user.metadata.last_name || ""}
                onChange={this.handleChange2.bind(this, "last_name")}
              ></input>
            </label>
            <br />
            <label>
              Identifier
              <input
                type="text"
                name="identifier"
                value={this.state.user.identifier}
                onChange={this.handleChange1.bind(this, "identifier")}
              ></input>
            </label>
            <br />
            <button type="submit">submit</button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default UserForm;
