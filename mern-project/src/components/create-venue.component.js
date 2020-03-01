import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

export default class CreateVenue extends Component {
  constructor(props) {
    super(props);

    this.onChangeVenue = this.onChangeVenue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      venue: ""
    };
  }

  onChangeVenue(e) {
    this.setState({
      venue: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const venue = {
      venue: this.state.venue
    };

    console.log(venue);

    axios
      .post("http://localhost:5000/venues/add", venue)
      .then(res => console.log(res.data));

    this.setState({
      venue: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Venue</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>venue: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.venue}
              onChange={this.onChangeVenue}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Venue"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
