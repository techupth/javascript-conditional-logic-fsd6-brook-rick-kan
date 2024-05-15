//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
lightBulbStatus = "Broken";

if (lightBulbStatus === "on") {
    console.log("Light bulb is on.");
} else if (lightBulbStatus === "off") {
    console.log("Light bulb is off.");
} else if (lightBulbStatus === "broken") {
    console.log("Light bulb is Broken.");
} else {
    console.log("Please choose the correct input (On/Off/Broken)");
}

console.log(lightBulbStatus);