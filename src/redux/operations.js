import axios from 'axios'
import { fetchDataSuccess } from './slice'

axios.defaults.baseURL = 'https:// 66685668f53957909ff798a0.mockapi.io/'

export const fetchCarsThunk = () => async () => {
    try{
        const {data} = await axios.get('cars')
        dispatchEvent(fetchDataSuccess(data))
    }catch(error) {
        console.log(error)
    }
}