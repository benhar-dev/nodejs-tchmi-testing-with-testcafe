const { readSymbolValue } = require("./modules/ads.js");

let value = readSymbolValue("127.0.0.1.1.1", 851, "Main.myBool");
console.log(value);
