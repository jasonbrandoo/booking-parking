import React, { Component } from 'react';
import axios from 'axios';

class DataContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get('/contact/')
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    console.log(data, loading, error);
    if (loading) {
      return (
        <h1>
          Loading
        </h1>
      );
    } return (
      <h1>
        Yess
      </h1>
    );
  }
}

export default DataContainer;
