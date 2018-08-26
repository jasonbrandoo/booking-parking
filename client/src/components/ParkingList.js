import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parkingCar } from '../actions/carAction';

class ParkingList extends Component {
  componentDidMount() {
    this.props.parkingCar();
  }

  render() {
    const { carData } = this.props;
    return (
      <div>
        <h4>Daftar tempat yang sudah terisi</h4>
        <div className="grid-container">
          {carData.map(car => (
            <div className="grid-item">
              {car.carData.map(data => (
                <p>{data.carOwner}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.carData.cars);
  return {
    carData: state.carData.cars,
    parkingData: state.carData.parked,
  };
};

export default connect(
  mapStateToProps,
  { parkingCar },
)(ParkingList);
