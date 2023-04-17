const damien = require("./info.js");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : damien.name + damien.campus,
    e : "oO",
    T : "U "
}));