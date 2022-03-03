/**
 * The bag page
 * @format
 */
'use strict';
exports.__esModule = true;
var color_1 = require("color");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
function Login() {
    var _a = react_1["default"].useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1["default"].useState(''), password = _b[0], setPassword = _b[1];
    var theme = react_native_paper_1.useTheme();
    var contentColor = color_1["default"](theme.colors.text).alpha(0.8).rgb().string();
    return (react_1["default"].createElement(react_native_1.View, { style: {
            flex: 1,
            flexDirection: 'column',
            marginTop: 20
        } },
        react_1["default"].createElement(react_native_1.View, { style: {
                alignItems: 'center',
                flexDirection: 'column'
            } },
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: 30,
                    color: contentColor
                } }, "Welcome Back")),
        react_1["default"].createElement(react_native_1.View, { style: {
                marginVertical: 10,
                width: '70%',
                alignSelf: 'center'
            } },
            react_1["default"].createElement(react_native_paper_1.TextInput, { label: "Email", mode: "flat", value: email, onChangeText: function (e) { return setEmail(e); }, style: {
                    color: contentColor
                } }),
            react_1["default"].createElement(react_native_paper_1.TextInput, { label: "Password", mode: "flat", value: password, onChangeText: function (p) { return setPassword(p); }, style: {
                    color: contentColor,
                    marginTop: 10
                } }))));
}
exports["default"] = Login;
