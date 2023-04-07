import axios from "axios";
import { async } from "q";

const placesURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '1a4331f62emshbbe72e291b22f3dp16bfc8jsn93ebd3ba311e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(placesURL, options);
        return data;
    } catch (error) {

    }
}