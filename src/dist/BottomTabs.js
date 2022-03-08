/**
 * The bottom tab component, render the home, search, bag, rate us and profile page
 * @format
 */
'use strict';
exports.__esModule = true;
exports.BottomTabs = void 0;
var react_1 = require("react");
var color_1 = require("color");
// react navigation and re-animated module
var material_bottom_tabs_1 = require("@react-navigation/material-bottom-tabs");
var react_native_paper_1 = require("react-native-paper");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var native_1 = require("@react-navigation/native");
// import { Feed } from './feed';
var message_1 = require("./message");
var notifications_1 = require("./notifications");
var overlay_1 = require("./overlay");
var Profile_1 = require("./Pages/Profile");
var RateApp_1 = require("./Pages/RateApp");
var Home_1 = require("./Pages/Home");
// bottom tab menu
var Tab = material_bottom_tabs_1.createMaterialBottomTabNavigator();
exports.BottomTabs = function (props) {
    var routeName = props.route.state
        ? props.route.state.routes[props.route.state.index].name
        : 'Home';
    var theme = react_native_paper_1.useTheme();
    var safeArea = react_native_safe_area_context_1.useSafeAreaInsets();
    var isFocused = native_1.useIsFocused();
    var icon = 'feather';
    switch (routeName) {
        case 'Home':
            icon = 'home-plus';
            break;
        case 'Search':
            icon = 'shopping-search';
            break;
        case 'Bag':
            icon = 'bag-personal';
            break;
        case 'Rate':
            icon = 'star-plus';
            break;
        case 'Profile':
            icon = 'account-arrow-right';
            break;
        default:
            icon = 'feather';
            break;
    }
    var tabBarColor = theme.dark
        ? overlay_1["default"](6, theme.colors.surface)
        : theme.colors.surface;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Tab.Navigator, { initialRouteName: "Home", backBehavior: "initialRoute", shifting: true, activeColor: theme.colors.primary, inactiveColor: color_1["default"](theme.colors.text).alpha(0.6).rgb().string(), sceneAnimationEnabled: false },
            react_1["default"].createElement(Tab.Screen, { name: "Home", component: Home_1["default"], options: {
                    tabBarIcon: 'home-account',
                    tabBarColor: tabBarColor
                } }),
            react_1["default"].createElement(Tab.Screen, { name: "Search", component: notifications_1.Notifications, options: {
                    tabBarIcon: 'magnify',
                    tabBarColor: tabBarColor
                } }),
            react_1["default"].createElement(Tab.Screen, { name: "Bag", component: message_1.Message, options: {
                    tabBarIcon: 'bag-personal',
                    tabBarColor: tabBarColor
                } }),
            react_1["default"].createElement(Tab.Screen, { name: "Rate Us", component: RateApp_1["default"], options: {
                    tabBarIcon: 'hexagram-outline',
                    tabBarColor: tabBarColor
                } }),
            react_1["default"].createElement(Tab.Screen, { name: "Profile", component: Profile_1["default"], options: {
                    tabBarIcon: 'account-outline',
                    tabBarColor: tabBarColor
                } })),
        react_1["default"].createElement(react_native_paper_1.Portal, null,
            react_1["default"].createElement(react_native_paper_1.FAB, { visible: isFocused, icon: icon, 
                // eslint-disable-next-line react-native/no-inline-styles
                style: {
                    position: 'absolute',
                    bottom: safeArea.bottom + 65,
                    right: 16
                }, color: "white", theme: {
                    colors: {
                        accent: theme.colors.primary
                    }
                }, onPress: function () { } }))));
};
