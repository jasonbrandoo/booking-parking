import React, { Component } from 'react';
import axios from 'axios';
import Contact from '../components/contact/Contact';

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
      .get('/dummy/')
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
      <Contact contact={data} />
    );
  }
}

export default DataContainer;
