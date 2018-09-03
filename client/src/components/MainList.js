import React from 'react';
import ListCar from './ListCar';

const ParkingList = ({ car }) => {
  const listCar = car.user.map(cars => (
    <ListCar key={cars.startTime} startTime={cars.startTime} />
  ));
  return (
    <div className="main-list">
      <div className="list-container">
        {listCar}
      </div>
    </div>
  );
};

export default ParkingList;
