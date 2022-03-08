/**
 * The main component of the app
 * @format
 */
'use strict';
exports.__esModule = true;
exports.StackNavigator = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var stack_1 = require("@react-navigation/stack");
var native_1 = require("@react-navigation/native");
var react_native_paper_1 = require("react-native-paper");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var BottomTabs_1 = require("./BottomTabs");
var details_1 = require("./details");
var AboutUs_1 = require("./Components/AboutUs");
var Login_1 = require("./Components/Login");
var Refer_1 = require("./Components/Refer");
var Register_1 = require("./Components/Register");
var Share_1 = require("./Components/Share");
var Support_1 = require("./Components/Support");
var Stack = stack_1.createStackNavigator();
exports.StackNavigator = function () {
    var theme = react_native_paper_1.useTheme();
    return (react_1["default"].createElement(Stack.Navigator, { initialRouteName: "BottomTabs", screenOptions: {
            headerMode: 'screen',
            header: function (_a) {
                var route = _a.route, options = _a.options, progress = _a.progress, navigation = _a.navigation;
                var title = options.headerTitle !== undefined
                    ? options.headerTitle
                    : options.title !== undefined
                        ? options.title
                        : route.name;
                return (react_1["default"].createElement(react_native_paper_1.Appbar.Header, { theme: { colors: { primary: theme.colors.surface } } },
                    progress.previous ? (react_1["default"].createElement(react_native_paper_1.Appbar.BackAction, { onPress: navigation.goBack, color: theme.colors.primary })) : (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { marginLeft: 10 }, onPress: function () {
                            navigation.openDrawer();
                        } },
                        react_1["default"].createElement(react_native_paper_1.Avatar.Image, { size: 40, source: require('./assets/images/logo.jpg') }))),
                    react_1["default"].createElement(react_native_paper_1.Appbar.Content, { title: title === 'Feed' ? (react_1["default"].createElement(Ionicons_1["default"], { style: { marginRight: 10 }, name: "ios-home", size: 40, color: theme.colors.primary })) : (title), titleStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: theme.colors.primary
                        } })));
            }
        } },
        react_1["default"].createElement(Stack.Screen, { name: "BottomTabs", component: BottomTabs_1.BottomTabs, options: function (_a) {
                var _b;
                var route = _a.route;
                var routeName = (_b = native_1.getFocusedRouteNameFromRoute(route)) !== null && _b !== void 0 ? _b : 'Feed';
                return { headerTitle: routeName };
            } }),
        react_1["default"].createElement(Stack.Screen, { name: "Details", component: details_1.Details, options: { headerTitle: 'Details' } }),
        react_1["default"].createElement(Stack.Screen, { name: "About", component: AboutUs_1["default"], options: { headerTitle: 'About Us' } }),
        react_1["default"].createElement(Stack.Screen, { name: "Login", component: Login_1["default"], options: { headerTitle: 'Login' } }),
        react_1["default"].createElement(Stack.Screen, { name: "Refer", component: Refer_1["default"], options: { headerTitle: 'Refer' } }),
        react_1["default"].createElement(Stack.Screen, { name: "Register", component: Register_1["default"], options: { headerTitle: 'Register' } }),
        react_1["default"].createElement(Stack.Screen, { name: "Share", component: Share_1["default"], options: { headerTitle: 'Share' } }),
        react_1["default"].createElement(Stack.Screen, { name: "Support", component: Support_1["default"], options: { headerTitle: 'Support' } })));
};
