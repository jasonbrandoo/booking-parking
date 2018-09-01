import React from 'react';
import Empty from './Empty';

const ParkingList = ({ list, space }) => {
  const renderParkingList = () => {
    if (space.freeSpace === 10) {
      return <Empty />;
    } return (
      <div className="parking">
        <h4>Daftar tempat yang sudah terisi</h4>
        <p>Sisa tempat {space.freeSpace}</p>
        <div className="grid-container">
          {list.map(car => (
            <div className="grid-item" key={car.carOwner}>
              <p>{car.startTime}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="parking-list">{renderParkingList()}</div>
  );
};

export default ParkingList;
