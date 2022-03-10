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
var color_1 = require("color");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_image_slider_box_1 = require("react-native-image-slider-box");
var react_native_paper_1 = require("react-native-paper");
var react_native_reanimated_1 = require("react-native-reanimated");
var tailorSchedule_1 = require("../data/tailorSchedule");
var dryCleanSchedule_1 = require("../data/dryCleanSchedule");
var Schedule_1 = require("../Components/Schedule");
var ModelComponent = function (_a) {
    var visible = _a.visible, hideModal = _a.hideModal, backgroundColor = _a.backgroundColor, data = _a.data;
    var offset = react_native_reanimated_1.useSharedValue(0);
    var animatedStyles = react_native_reanimated_1.useAnimatedStyle(function () {
        return {
            transform: [{ translateY: offset.value * 255 }]
        };
    });
    return (react_1["default"].createElement(react_native_reanimated_1["default"].View, { style: animatedStyles, entering: react_native_reanimated_1.SlideInDown.duration(3000), exiting: react_native_reanimated_1.SlideInDown },
        react_1["default"].createElement(react_native_paper_1.Portal, null,
            react_1["default"].createElement(react_native_paper_1.Modal, { visible: visible, onDismiss: hideModal, contentContainerStyle: [
                    styles.containerStyle,
                    {
                        backgroundColor: backgroundColor
                    },
                ] },
                react_1["default"].createElement(Schedule_1["default"], { data: data })))));
};
var RenderItem = function (props) {
    var theme = react_native_paper_1.useTheme();
    var _a = react_1["default"].useState(false), visible = _a[0], setVisible = _a[1];
    var showModal = function () { return setVisible(true); };
    var hideModal = function () { return setVisible(false); };
    var contentColor = color_1["default"](theme.colors.text).alpha(0.8).rgb().string();
    return (react_1["default"].createElement(react_native_paper_1.Surface, null,
        react_1["default"].createElement(react_native_image_slider_box_1.SliderBox, { images: props.images, sliderBoxHeight: 250, dotColor: "#2196F3", inactiveDotColor: "#90A4AE", dotStyle: {
                width: 10,
                height: 10,
                borderRadius: 10,
                marginHorizontal: 8,
                padding: 0,
                margin: 0
            }, paginationBoxVerticalPadding: 20, autoplay: true, circleLoop: true, imageLoadingColor: "#2196F3" }),
        react_1["default"].createElement(react_native_1.View, { style: {
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            } },
            react_1["default"].createElement(react_native_paper_1.Card, { style: styles.card },
                react_1["default"].createElement(react_native_paper_1.Card.Cover, { style: styles.cardImg, source: require('../assets/images/Mediamodifier-Design-Template.jpg') }),
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_paper_1.Paragraph, { style: {
                            color: contentColor
                        } },
                        "Get your fabric stitched from the comfort of your home.",
                        '\n',
                        " Time Saving.")),
                react_1["default"].createElement(react_native_paper_1.Card.Actions, { style: styles.cardAction },
                    react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                            fontSize: 12
                        }, icon: "arrow-right-bold-circle-outline", mode: "contained", color: contentColor, style: styles.btnCard, onPress: showModal },
                        react_1["default"].createElement(ModelComponent, { visible: visible, backgroundColor: theme.colors.background, hideModal: hideModal, data: tailorSchedule_1["default"] }),
                        "Schedule Now"))),
            react_1["default"].createElement(react_native_paper_1.Card, { style: [
                    styles.card,
                    {
                        marginRight: 6
                    },
                ] },
                react_1["default"].createElement(react_native_paper_1.Card.Cover, { style: styles.cardImg, source: require('../assets/images/Garment-care-image-resized.png') }),
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_paper_1.Paragraph, { style: {
                            color: contentColor
                        } }, "One stop solution for all your garments laundry & dry cleaning needs.")),
                react_1["default"].createElement(react_native_paper_1.Card.Actions, { style: styles.cardAction },
                    react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                            fontSize: 12
                        }, icon: "arrow-right-bold-circle-outline", mode: "contained", color: contentColor, style: styles.btnCard, onPress: showModal },
                        react_1["default"].createElement(ModelComponent, { visible: visible, backgroundColor: theme.colors.background, hideModal: hideModal, data: dryCleanSchedule_1["default"] }),
                        "Schedule Now")))),
        react_1["default"].createElement(react_native_1.View, { style: {
                flexDirection: 'row',
                marginHorizontal: 10
            } },
            react_1["default"].createElement(react_native_1.Image, { style: {
                    width: 100,
                    height: 100
                }, source: require('../assets/images/store-2017.png') }),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_paper_1.Paragraph, { style: [
                        styles.paragraph,
                        {
                            color: contentColor
                        },
                    ] },
                    "One-Stop destination for all clothing and ",
                    '\n',
                    "accessories at one platform."),
                react_1["default"].createElement(react_native_paper_1.Button, { labelStyle: {
                        fontSize: 12
                    }, icon: "arrow-right-bold-circle-outline", mode: "text", color: "#2196F3", style: {
                        width: 200,
                        left: -20
                    } }, "Schedule Now")))));
};
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 20,
        marginVertical: 25,
        marginLeft: 12,
        marginTop: 10
    },
    btnCard: {
        borderRadius: 20,
        backgroundColor: '#2196F3',
        fontSize: 2
    },
    cardImg: {
        width: 130,
        height: 150,
        alignSelf: 'center'
    },
    cardAction: {
        justifyContent: 'center'
    },
    paragraph: {
        margin: 15,
        textShadowRadius: 2
    },
    containerStyle: { width: '100%', height: '100%' }
});
function renderItem(_a) {
    var item = _a.item;
    return react_1["default"].createElement(RenderItem, __assign({}, item));
}
var DATA = [
    {
        id: 1,
        images: [
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree',
        ]
    },
];
function HomeScreen(_props) {
    var theme = react_native_paper_1.useTheme();
    return (react_1["default"].createElement(react_native_1.FlatList, { contentContainerStyle: { backgroundColor: theme.colors.background }, style: { backgroundColor: theme.colors.background }, data: DATA, renderItem: renderItem, ItemSeparatorComponent: function () { return (react_1["default"].createElement(react_native_1.View, { style: { height: react_native_1.StyleSheet.hairlineWidth } })); } }));
}
exports["default"] = HomeScreen;
