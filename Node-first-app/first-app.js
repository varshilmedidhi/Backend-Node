console.log("Hello world!! ");

// files system funtionality in  nodejs ..

const fs = require("fs"); // this is the funtion which implements the file system
fs.writeFileSync("Hello.txt", "hello from node.js"); // and we can use that var to write any file like python
