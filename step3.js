"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

async function cat(path) {
    try {
        const contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(`Error reading ${path}:`, err.message);
        process.exit(1);
    }
}

async function webCat(url) {
    try {
        const contents = await axios.get(url);
        console.log(contents.data);
    } catch (err) {
        console.log(`Error fetching ${url}: Error:`, err.message);
        process.exit(1);
    }
}

async function webCatWrite(writeFile, readFile) {
    try {
        const contents = await fsP.writeFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(`Error reading ${path}:`, err.message);
        process.exit(1);
    }
}



if (process.argv[2].slice(0, 4) === 'http') {
    webCat(process.argv[2]);
} else {
    cat(process.argv[2]);
}