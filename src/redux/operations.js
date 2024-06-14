import axios from 'axios'
import { fetchDataSuccess, isError, isLoading } from './slice'

axios.defaults.baseURL = 'https://66685668f53957909ff798a0.mockapi.io/'

export const fetchCarsThunk = () => async (dispatch) => {
    try{
        dispatch(isLoading(true))
        dispatch(isError(false))
        const {data} = await axios.get('cars')
        dispatch(fetchDataSuccess(data))
    }catch(error) {
        console.log(error)
        dispatch(isError(true))
    }finally{
        dispatch(isLoading(false))
    }
}