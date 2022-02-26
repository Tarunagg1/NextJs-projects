import axios from 'axios';
import { BASE_URL } from './config';
import { getValues } from '../backend/utils/common';

export const signUp = async (payload) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/api/signup`, payload);
        return data;
    } catch (error) {
        return getValues(error, ["response", "data"], null);
    }
}


export const createPostApi = async (payload) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/api/post/createpost`, payload);
        return data;
    } catch (error) {
        return getValues(error, ["response", "data"], null);
    }
}

export const getAllposts = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/post`);
        return data;
    } catch (error) {
        return getValues(error, ["response", "data"], null);
    }
}

export const getSinglepost = async (id) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/post/${id}`);
        return data;
    } catch (error) {
        return getValues(error, ["response", "data"], null);
    }
}