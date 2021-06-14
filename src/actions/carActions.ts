import axios from 'axios';
import {
  SET_LOADING,
  GET_CARS,
} from './actionTypes';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// для работы асинхронного экшена нужны thunk + вложенный dispatch!))
// машинки
// eslint-disable-next-line import/prefer-default-export
export const getCars = () => (
  async (dispatch: any) => {
    dispatch({type: SET_LOADING}); // лоадер
    const response = await axios.get(`${BASE_URL}garage/`);
    if (response.data) {
      // console.log(response.data);
      dispatch({type: GET_CARS, payload: response.data});
    } else {
      console.log('error!');
    }
  }
);

export const getCarStatus = (id: string, status: string) => (
  async (dispatch: any) => {
    const response = await axios.get(`${BASE_URL}engine/?id=${id}&status=${status}`);
    if (response.data) {
      // console.log(response.data);
      // dispatch({type: SET_CAR_STATUS, payload: response.data});
    } else {
      console.log('error!');
    }
  }
);
