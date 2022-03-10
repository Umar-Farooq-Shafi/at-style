/**
 * The home page
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
exports.RenderItem = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var react_native_modern_datepicker_1 = require("react-native-modern-datepicker");
var color_1 = require("color");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var RenderItem = function (props) {
    var theme = react_native_paper_1.useTheme();
    var _a = react_1["default"].useState('first'), checked = _a[0], setChecked = _a[1];
    var _b = react_1["default"].useState(''), selectedDate = _b[0], setSelectedDate = _b[1];
    var contentColor = color_1["default"](theme.colors.text).alpha(0.8).rgb().string();
    var Item = function (_a) {
        var id = _a.id, title = _a.title, price = _a.price, image = _a.image;
        var _b = react_1["default"].useState(0), counter = _b[0], setCounter = _b[1];
        return (react_1["default"].createElement(react_native_1.View, { key: id },
            react_1["default"].createElement(react_native_1.View, { style: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10
                } },
                react_1["default"].createElement(react_native_1.Image, { source: image, style: {
                        borderRadius: 50,
                        width: 30,
                        height: 30
                    } }),
                react_1["default"].createElement(react_native_1.View, { style: {
                        margin: 10
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: { color: contentColor, fontSize: 18 } }, title),
                    react_1["default"].createElement(react_native_1.Text, { style: { color: contentColor, fontSize: 10, fontWeight: 'bold' } },
                        "RS: ",
                        price)),
                react_1["default"].createElement(react_native_1.View, { style: {
                        flex: 1,
                        flexDirection: 'row-reverse'
                    } },
                    react_1["default"].createElement(react_native_1.Pressable, { onPress: function () {
                            setCounter(counter + 1);
                        }, style: function (_a) {
                            var pressed = _a.pressed;
                            return ({
                                backgroundColor: pressed
                                    ? 'rgb(177, 208, 247)'
                                    : theme.colors.background,
                                borderRadius: 8
                            });
                        } },
                        react_1["default"].createElement(Ionicons_1["default"], { name: "add-outline", size: 30, style: {
                                borderColor: '#000',
                                borderWidth: 1,
                                backgroundColor: theme.colors.background
                            }, color: contentColor })),
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 20,
                            color: contentColor,
                            width: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: '#000',
                            borderWidth: 1,
                            paddingLeft: 10,
                            backgroundColor: theme.colors.background
                        } }, counter),
                    react_1["default"].createElement(react_native_1.Pressable, { onPress: function () {
                            if (counter !== 0) {
                                setCounter(counter - 1);
                            }
                        }, style: function (_a) {
                            var pressed = _a.pressed;
                            return ({
                                backgroundColor: pressed
                                    ? 'rgb(177, 208, 247)'
                                    : theme.colors.background,
                                borderRadius: 8
                            });
                        } },
                        react_1["default"].createElement(Ionicons_1["default"], { name: "remove-outline", size: 30, style: {
                                borderColor: '#000',
                                borderWidth: 1,
                                backgroundColor: theme.colors.background
                            }, color: contentColor })))),
            react_1["default"].createElement(react_native_paper_1.Divider, null)));
    };
    var renderListItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(Item, { id: item.id, title: item.title, image: item.image, price: item.price }));
    };
    return (react_1["default"].createElement(react_native_paper_1.Surface, { style: {
            backgroundColor: theme.colors.background
        } },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginVertical: 20,
                    color: contentColor
                } }, props.title),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10,
                    maxHeight: 600,
                    overflow: 'scroll'
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: contentColor
                        } }, props.serviceDetailsTitle),
                    react_1["default"].createElement(react_native_paper_1.Divider, { style: { marginVertical: 10 } }),
                    react_1["default"].createElement(react_native_1.TextInput, { style: {
                            borderColor: '#2196F3',
                            height: 40,
                            margin: 12,
                            borderWidth: 2,
                            padding: 10,
                            color: contentColor
                        }, placeholder: "Search Services..." }),
                    react_1["default"].createElement(react_native_paper_1.Divider, null),
                    react_1["default"].createElement(react_native_1.ScrollView, { style: {
                            flexGrow: 0
                        } },
                        react_1["default"].createElement(react_native_1.FlatList, { data: props.list, renderItem: renderListItem, keyExtractor: function (item) { return item.id; } })))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: contentColor,
                            paddingBottom: 10
                        } }, "Fabric Details"),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            start: -10
                        } },
                        react_1["default"].createElement(react_native_paper_1.RadioButton, { value: "first", status: checked === 'first' ? 'checked' : 'unchecked', onPress: function () { return setChecked('first'); }, color: "#2196F3" }),
                        react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return setChecked('first'); } },
                            react_1["default"].createElement(react_native_1.Text, { style: { color: contentColor } }, "I have fabric"))),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            start: -10
                        } },
                        react_1["default"].createElement(react_native_paper_1.RadioButton, { value: "second", status: checked === 'second' ? 'checked' : 'unchecked', onPress: function () { return setChecked('second'); }, color: "#2196F3" }),
                        react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { onPress: function () { return setChecked('second'); } },
                            react_1["default"].createElement(react_native_1.Text, { style: { color: contentColor } }, "I don't have fabric"))))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: contentColor
                        } }, "Measurement Details"),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row',
                            start: -10,
                            paddingTop: 10
                        } },
                        react_1["default"].createElement(react_native_paper_1.RadioButton, { value: "third", status: "checked", color: "#2196F3" }),
                        react_1["default"].createElement(react_native_1.Text, { style: { color: contentColor } },
                            "Send the technician to my home for taking",
                            '\n',
                            "measurement. (only in lahore)")))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: contentColor,
                            marginBottom: 15
                        } }, "Pickup address"),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            alignSelf: 'center'
                        } },
                        react_1["default"].createElement(react_native_paper_1.Button, { style: {
                                backgroundColor: '#2196F3',
                                width: 160
                            }, labelStyle: {
                                fontSize: 12
                            }, color: contentColor, onPress: function () { } }, "Select Address")))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: contentColor,
                            marginBottom: 15
                        } }, "Delivery address"),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            alignSelf: 'center'
                        } },
                        react_1["default"].createElement(react_native_paper_1.Button, { style: {
                                backgroundColor: '#2196F3',
                                width: 160
                            }, labelStyle: {
                                fontSize: 12
                            }, color: contentColor, onPress: function () { } }, "Select Address")))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.Text, { style: {
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: contentColor,
                            marginBottom: 5
                        } }, "Select Pickup Date"),
                    react_1["default"].createElement(react_native_modern_datepicker_1["default"], { options: {
                            backgroundColor: theme.colors.background,
                            textHeaderColor: '#2196F3',
                            textDefaultColor: '#F6E7C1',
                            selectedTextColor: '#2196F3',
                            mainColor: contentColor,
                            textSecondaryColor: '#D6C7A1',
                            borderColor: 'rgba(122, 146, 165, 0.1)'
                        }, onSelectedChange: function (date) { return setSelectedDate(date); }, selected: selectedDate }),
                    react_1["default"].createElement(react_native_1.View, { style: {
                            alignSelf: 'center',
                            marginTop: 10
                        } },
                        react_1["default"].createElement(react_native_paper_1.Button, { style: {
                                width: 160
                            }, labelStyle: {
                                fontSize: 12
                            }, mode: "text", color: "#2196F3", onPress: function () {
                                setSelectedDate(react_native_modern_datepicker_1.getToday());
                            } }, "Today")))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: {
                    margin: 10
                } },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_1.View, { style: {
                            flexDirection: 'row'
                        } },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/images/logo.jpg') }),
                        react_1["default"].createElement(react_native_1.Text, { style: {
                                fontWeight: 'bold',
                                color: contentColor,
                                fontSize: 15,
                                marginLeft: 10
                            } }, "AtStyle: The best Service Provider in lahore")),
                    react_1["default"].createElement(react_native_paper_1.Divider, { style: { marginVertical: 10 } }),
                    react_1["default"].createElement(react_native_paper_1.Button, { mode: "outlined", onPress: function () { }, color: "#2196F3" }, "Sign In for booking"))))));
};
exports.RenderItem = RenderItem;
function renderItem(_a) {
    var item = _a.item;
    return react_1["default"].createElement(RenderItem, __assign({}, item));
}
function Schedule(_a) {
    var data = _a.data;
    var theme = react_native_paper_1.useTheme();
    return (react_1["default"].createElement(react_native_1.FlatList, { contentContainerStyle: { backgroundColor: theme.colors.background }, style: { backgroundColor: theme.colors.background }, data: data, renderItem: renderItem, ItemSeparatorComponent: function () { return (react_1["default"].createElement(react_native_1.View, { style: { height: react_native_1.StyleSheet.hairlineWidth } })); } }));
}
exports["default"] = Schedule;
