import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParkingList extends Component {
  state = {
    fill: false,
  };

  render() {
    const { carData } = this.props;
    return (
      <div>
        <div className="grid-container">
          {
            carData.map(car => (
              <div className="grid-item">
                <p>
                  {car.owner}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state.carData);
  return {
    carData: state.carData.cars,
    parkingData: state.carData.parked,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ParkingList);
