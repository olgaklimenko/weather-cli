#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // return help
    }
    if (args.s) {
        // set city

    }
    if (args.t) {
        // set token
    }

    // return weather
}

initCLI();