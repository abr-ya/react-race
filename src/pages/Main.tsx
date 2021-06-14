import React from 'react';

const Main = ({garage, getCars}: any) => {
  console.log(garage);

  return (
    <div className="container">
      <h1>Garage - главная</h1>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="btn btn-success" onClick={getCars}>Машинок!</button>
      <p>Тут будут машинки))</p>
      <p>{`Загружено машинок: ${garage ? garage.cars.length : 'пока нет'}`}</p>
    </div>
  );
};

export default Main;
