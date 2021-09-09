"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var rootReducer_1 = require("./rootReducer");
// ...
var store = toolkit_1.configureStore({
    reducer: rootReducer_1["default"]
});
exports["default"] = store;
