import axios from "axios";

const API = axios.create({ baseURL: 'https://assessment-edvora.herokuapp.com'});

const getAll = () => API.get('/');

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const FILTER_STATES = 'FILTER_STATES';

export const FILTER_CITIES = 'FILTER_CITIES';

export const getAllProducts = (setError) => async dispatch => {
    try {
        dispatch({type: START_LOADING});

        const {data} = await getAll();

        dispatch({ type: GET_ALL_PRODUCTS, data: data });

        dispatch({type: END_LOADING});
    } catch (error) {
        console.error(error);
        setError(error?.response?.data?.message);
        dispatch({ type: END_LOADING })
    }
};