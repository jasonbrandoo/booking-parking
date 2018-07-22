import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParkingList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <div className="row-1">
          <div className="box-1">
            <h4>
No 1
            </h4>
            <p>
Empty
            </p>
          </div>
          <div className="box-2">
            <h4>
No 2
            </h4>
            <p>
Empty
            </p>
          </div>
          <div className="box-3">
            <h4>
No 3
            </h4>
            <p>
Empty
            </p>
          </div>
          <div className="box-4">
            <h4>
No 4
            </h4>
            <p>
Empty
            </p>
          </div>
        </div>
        <div className="row-2">
          <div className="box-5">
            <h4>
No 5
            </h4>
            <p>
Empty
            </p>
          </div>
          <div className="box-6">
            <h4>
No 6
            </h4>
            <p>
Empty
            </p>
          </div>
          <div className="box-7">
            <h4>
No 7
            </h4>
            <p>
Empty
            </p>
          </div>
          <div className="box-8">
            <h4>
No 8
            </h4>
            <p>
Empty
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {};
};

export default connect(
  mapStateToProps,
  null,
)(ParkingList);
