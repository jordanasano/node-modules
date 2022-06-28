"use strict";

const fsP = require("fs/promises");

async function cat(path) {
    try {
        const contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log(`Error reading ${path}:`, err.message);
        process.exit(1);
    }
}

cat(process.argv[2]);
