"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Button_1 = require("../../components/forms/form_elements/Button");
var netinfo_1 = require("@react-native-community/netinfo");
var ModalComponent = function () {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var verify = function () {
        netinfo_1["default"].fetch().then(function (res) {
            if (res.isConnected === false) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        });
    };
    react_1.useEffect(function () {
        verify();
    }, []);
    return (react_1["default"].createElement(react_native_1.Modal, { visible: visible, style: styles.modal },
        react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.modalTitle }, "Erro !!"),
            react_1["default"].createElement(react_native_1.Text, { style: styles.modalText }, "Oops! Parece que voc\u00EA est\u00E1 sem conex\u00E3o com internet"),
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 50 } }, "\uD83D\uDCE1"),
            react_1["default"].createElement(Button_1["default"], { onPress: verify, title: "Tentar Novamente", variant: 'PRIMARY' }))));
};
var styles = react_native_1.StyleSheet.create({
    // ...
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    modalContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 40,
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '600'
    },
    modalText: {
        fontSize: 18,
        color: '#555',
        marginTop: 14,
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    }
});
exports["default"] = ModalComponent;
