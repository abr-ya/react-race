import React from 'react';

const Main = ({garage, getCars, getCarStatus}: any) => {
  console.log(garage);

  return (
    <div className="container">
      <h1>Garage - главная</h1>
      <button className="btn btn-success" onClick={getCars} type="button">Машинок!</button>
      <button className="btn btn-success" onClick={() => getCarStatus('1', 'started')} type="button">Запустить 1</button>
      <button className="btn btn-danger" onClick={() => getCarStatus('1', 'stopped')} type="button">Остановить 1</button>
      <button className="btn btn-success" onClick={() => getCarStatus('1', 'drive')} type="button">Drive 1</button>
      <p>Тут будут машинки))</p>
      <p>{`Загружено машинок: ${garage ? garage.cars.length : 'пока нет'}`}</p>
    </div>
  );
};

export default Main;
