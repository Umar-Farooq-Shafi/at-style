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
exports.DrawerContent = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var drawer_1 = require("@react-navigation/drawer");
var react_native_paper_1 = require("react-native-paper");
var react_native_reanimated_1 = require("react-native-reanimated");
var preferencesContext_1 = require("./context/preferencesContext");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
function DrawerContent(props) {
    var paperTheme = react_native_paper_1.useTheme();
    var _a = react_1["default"].useContext(preferencesContext_1.PreferencesContext), theme = _a.theme, toggleTheme = _a.toggleTheme;
    // shared value for the drawer animation
    var offset = react_native_reanimated_1.useSharedValue(0);
    var animatedStyles = react_native_reanimated_1.useAnimatedStyle(function () {
        return {
            transform: [{ translateX: offset.value * 255 }]
        };
    });
    return (react_1["default"].createElement(drawer_1.DrawerContentScrollView, __assign({}, props),
        react_1["default"].createElement(react_native_reanimated_1["default"].View
        //@ts-ignore
        , { 
            //@ts-ignore
            style: [
                animatedStyles,
                {
                    backgroundColor: paperTheme.colors.surface,
                    flex: 1
                },
            ] },
            react_1["default"].createElement(react_native_1.View, { style: {
                    paddingLeft: 20
                } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                        marginLeft: 10,
                        justifyContent: 'center'
                    }, onPress: function () {
                        props.navigation.toggleDrawer();
                    } },
                    react_1["default"].createElement(react_native_paper_1.Title, { style: {
                            marginTop: 20,
                            fontWeight: 'bold'
                        } }, "AtStyle"))),
            react_1["default"].createElement(react_native_paper_1.Drawer.Section, { style: {
                    marginTop: 15
                } },
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-home-outline", color: color, size: size }));
                    }, label: "Home", onPress: function () {
                        props.navigation.navigate('Home');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-person-outline", color: color, size: size }));
                    }, label: "Profile", onPress: function () {
                        props.navigation.navigate('Profile');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-information-circle-outline", color: color, size: size }));
                    }, label: "About Us", onPress: function () {
                        props.navigation.navigate('About');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-headset-outline", color: color, size: size }));
                    }, label: "Support", onPress: function () {
                        props.navigation.navigate('Support');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-share-social-outline", color: color, size: size }));
                    }, label: "Share App", onPress: function () {
                        props.navigation.navigate('Share');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-cash-outline", color: color, size: size }));
                    }, label: "Refer and Earn", onPress: function () {
                        props.navigation.navigate('Refer');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-lock-closed-outline", color: color, size: size }));
                    }, label: "Login", onPress: function () {
                        props.navigation.navigate('Login');
                    } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "ios-person-add-outline", color: color, size: size }));
                    }, label: "Register", onPress: function () {
                        props.navigation.navigate('Register');
                    } })),
            react_1["default"].createElement(react_native_paper_1.Drawer.Section, { title: "Preferences" },
                react_1["default"].createElement(react_native_paper_1.TouchableRipple, { onPress: toggleTheme },
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 12,
                            paddingHorizontal: 16
                        } },
                        react_1["default"].createElement(react_native_paper_1.Text, null, "Dark Theme"),
                        react_1["default"].createElement(react_native_1.View, { pointerEvents: "none" },
                            react_1["default"].createElement(react_native_paper_1.Switch, { value: theme === 'dark' }))))))));
}
exports.DrawerContent = DrawerContent;
