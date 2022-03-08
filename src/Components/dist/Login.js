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
    var _c = react_1["default"].useState(false), isSelected = _c[0], setSelection = _c[1];
    var theme = react_native_paper_1.useTheme();
    var contentColor = color_1["default"](theme.colors.text).alpha(0.8).rgb().string();
    return (react_1["default"].createElement(react_native_1.View, { style: {
            flex: 1,
            flexDirection: 'column',
            marginTop: 30,
            backgroundColor: theme.colors.background
        } },
        react_1["default"].createElement(react_native_1.View, { style: {
                alignItems: 'center',
                flexDirection: 'column'
            } },
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: 30,
                    color: contentColor
                } }, "Welcome Back"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    color: contentColor
                } }, "Sign in to continue")),
        react_1["default"].createElement(react_native_1.View, { style: {
                marginVertical: 10,
                width: '90%',
                alignSelf: 'center'
            } },
            react_1["default"].createElement(react_native_paper_1.Card, null,
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_paper_1.Paragraph, { style: {
                            color: contentColor
                        } }, "Email/Phone"),
                    react_1["default"].createElement(react_native_1.TextInput, { value: email, onChangeText: function (e) { return setEmail(e); }, placeholder: "Enter Phone or Email...", placeholderTextColor: contentColor, style: {
                            borderBottomWidth: 1,
                            borderBottomColor: '#2196F3',
                            marginBottom: 10
                        } }),
                    react_1["default"].createElement(react_native_paper_1.Paragraph, { style: {
                            color: contentColor
                        } }, "Password"),
                    react_1["default"].createElement(react_native_1.TextInput, { value: password, onChangeText: function (p) { return setPassword(p); }, placeholder: "Enter Password...", placeholderTextColor: contentColor, style: {
                            borderBottomWidth: 1,
                            borderBottomColor: '#2196F3',
                            marginBottom: 10
                        } }),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row'
                        } },
                        react_1["default"].createElement(react_native_paper_1.Checkbox, { status: isSelected ? 'checked' : 'unchecked', onPress: function () { return setSelection(!isSelected); }, color: "#2196F3" }),
                        react_1["default"].createElement(react_native_paper_1.Paragraph, { style: {
                                color: contentColor,
                                marginTop: 7
                            } }, "Remember me")),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            alignSelf: 'center',
                            marginVertical: 10
                        } },
                        react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                                fontSize: 12
                            }, style: {
                                backgroundColor: '#2196F3',
                                width: 90
                            }, mode: "contained", color: contentColor }, "Log IN")),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            alignSelf: 'center'
                        } }, "OR"),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row',
                            marginVertical: 8,
                            justifyContent: 'space-between'
                        } },
                        react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                                fontSize: 10,
                                fontWeight: 'bold'
                            }, mode: "text", color: "#2196F3" }, "Forget password"),
                        react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                                fontSize: 10,
                                fontWeight: 'bold'
                            }, mode: "text", color: "#2196F3" }, "Login with phone and OTP"))),
                react_1["default"].createElement(react_native_paper_1.Card.Actions, { style: {
                        justifyContent: 'center',
                        backgroundColor: theme.colors.background
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            color: contentColor
                        } }, "Don't have an account?"),
                    react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                            fontSize: 12
                        }, mode: "text", color: "#2196F3" }, "Sign UP"))))));
}
exports["default"] = Login;
