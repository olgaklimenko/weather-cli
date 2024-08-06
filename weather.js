#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, CONFIG_DICTIONARY, getKeyValue } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(CONFIG_DICTIONARY.token, token);
        printSuccess('Токен сохранён');
    } catch(e) {
        printError(e.message);
    }  
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await saveKeyValue(CONFIG_DICTIONARY.city, city);
        printSuccess('Город сохранён');
    } catch(e) {
        printError(e.message);
    }  
};


const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(CONFIG_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather);
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Неверно указан город');

        } else if (e?.response?.status == 401) {
            printError('Неверно указан токен');
        } else {
            printError(e.message);
        }
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        return saveCity(args.s)
    }
    if (args.t) {
        return saveToken(args.t);
    }

    getForecast();
    
};

initCLI();