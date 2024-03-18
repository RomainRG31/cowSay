const cowsay = require("cowsay");
const userInfo = require("./information.js");

console.log(
  cowsay.say({
    text: `Hey ! I'm ${userInfo.name} and i'm from the campus of ${userInfo.campus}`,
    e: "oO",
    T: "U ",
  })
);
