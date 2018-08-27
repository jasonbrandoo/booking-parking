import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dummyData } from '../actions/carAction';

class ParkingList extends Component {
  componentDidMount() {
    this.props.dummyData();
  }

  render() {
    const { dummyCars } = this.props.carData;
    return (
      <div className="parking-list">
        <h4>Daftar tempat yang sudah terisi</h4>
        <div className="grid-container">
          {dummyCars.map(car => (
            <div className="grid-item" key={car.carOwner}>
              <p>{car.startTime}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carData: state.carData,
});

export default connect(
  mapStateToProps,
  { dummyData },
)(ParkingList);
