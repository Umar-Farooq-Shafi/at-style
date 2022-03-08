/**
 * The main component of the app
 * @format
 */
'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RootNavigator = void 0;
var react_1 = require("react");
var react_native_paper_1 = require("react-native-paper");
var native_1 = require("@react-navigation/native");
var drawer_1 = require("@react-navigation/drawer");
var native_2 = require("@react-navigation/native");
var stack_1 = require("./stack");
var DrawerContent_1 = require("./DrawerContent");
var Drawer = drawer_1.createDrawerNavigator();
exports.RootNavigator = function () {
    var theme = react_native_paper_1.useTheme();
    var navigationTheme = theme.dark ? native_2.DarkTheme : native_2.DefaultTheme;
    return (react_1["default"].createElement(native_1.NavigationContainer, { theme: navigationTheme },
        react_1["default"].createElement(Drawer.Navigator, { drawerContent: function (props) { return (react_1["default"].createElement(DrawerContent_1.DrawerContent, __assign({}, props))); } },
            react_1["default"].createElement(Drawer.Screen, { name: "FeedList", component: stack_1.StackNavigator, options: {
                    // remove the default header
                    headerShown: false,
                    drawerContentContainerStyle: {
                        backgroundColor: theme.colors.surface
                    }
                } }))));
};
