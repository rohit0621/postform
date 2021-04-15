import React from "react";
import { connect } from "react-redux";
import { addPost } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

class NewPostform extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addPost({ text: this.state.text, id: uuidv4() });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h1>NewPostForm:</h1>
          <input
            type="textarea"
            placeholder="write a post"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
const mapDispatchToprops = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(null, mapDispatchToprops)(NewPostform);
