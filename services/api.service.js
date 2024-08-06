import { CONFIG_DICTIONARY, getKeyValue } from './storage.service.js';
import axios from 'axios';

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(CONFIG_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API. Задайте его через команду -t [API_KEY');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appId: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    return data;
}

export {getWeather};