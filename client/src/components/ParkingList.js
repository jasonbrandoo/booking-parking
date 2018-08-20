import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { parkingCar } from '../actions/carAction';


class ParkingList extends Component {
  componentDidMount() {
    this.props.parkingCar();
  }

  render() {
    const { carData } = this.props;
    let x = 1;
    return (
      <div>
        <h4>
          Daftar tempat yang sudah terisi
        </h4>
        <Table>
          <thead>
            <tr>
              <th>
                Slot
              </th>
              <th>
                Status
              </th>
              <th>
                Jam Masuk
              </th>
            </tr>
          </thead>
          {
            carData.map(car => (
              <tbody>
                {car.carData.map(data => (
                  <tr>
                    <td>
                      {x++}
                    </td>
                    <td>
                      Terisi
                    </td>
                    <td>
                      {data.startTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            ))
          }
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carData: state.carData.cars,
    parkingData: state.carData.parked,
  };
};

export default connect(
  mapStateToProps,
  { parkingCar },
)(ParkingList);
