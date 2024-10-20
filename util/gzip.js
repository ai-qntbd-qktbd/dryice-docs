/* eslint-disable @typescript-eslint/no-require-imports */


// Recursively gzip all directory elements in build directory

// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const zlib = require("zlib");

const gzip = async (path) => {
    if ((await fs.promises.lstat(path)).isDirectory()) {
        const files = await fs.promises.readdir(path);
        return Promise.all(files.map(file => gzip(path + "/" + file)));
    }
    else {
        await fs.promises.writeFile(path + ".gz", 
            fs.createReadStream(path).pipe(zlib.createGzip())
        );
    };
};

gzip("build");