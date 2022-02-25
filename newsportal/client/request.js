import axios from 'axios';
import {BASE_URL} from './config';
import {getValues} from '../backend/utils/common';

export const signUp = async (payload)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/api/signup`,payload);
        return data;
    } catch (error) {
        return getValues(error,["response","data"],null);
    }
}