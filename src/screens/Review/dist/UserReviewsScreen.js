"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../../components/alls/Layout");
var BottomTab_1 = require("../../components/navigation/BottomTab");
var UserReviewsScreen = function (_a) {
    var route = _a.route;
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(BottomTab_1["default"], { elevation: 5, route_name: route.name, position: "absolute", bottom: 0 })));
};
exports["default"] = UserReviewsScreen;
