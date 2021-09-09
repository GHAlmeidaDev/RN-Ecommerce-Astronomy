"use strict";
exports.__esModule = true;
exports.useKeyboard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
exports.useKeyboard = function () {
    var keyboardRef = react_1.useRef(0);
    var _a = react_1.useState(false), keyboardShow = _a[0], setKeyboardShow = _a[1];
    function onKeyboardDidShow(e) {
        setKeyboardShow(true);
        keyboardRef.current = e.endCoordinates.height;
    }
    function onKeyboardDidHide() {
        setKeyboardShow(false);
        keyboardRef.current = 0;
    }
    react_1.useEffect(function () {
        react_native_1.Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        react_native_1.Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return function () {
            react_native_1.Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
            react_native_1.Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
        };
    }, []);
    return [keyboardRef.current, keyboardShow];
};
