"use strict";
var yargs = require("yargs").argv;
exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub/",
    framework: "jasmine",
    specs: ["../output_js/specs/*.js"],
    splitTestsBetweenCapabilities: true,
    capabilities: {
        browserName: yargs.browserName || "chrome",
        "goog:chromeOptions": {
            w3c: false
        },
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        specs: yargs.specs || "../output_js/specs/*.js"
    },
    chromeOptions: {
        args: [
            //"–headless",
            "–disable-gpu",
            "–window-size=800×600",
        ]
    }
};
