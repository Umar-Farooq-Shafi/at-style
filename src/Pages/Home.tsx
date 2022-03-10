/**
 * The home page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';

import { SliderBox } from 'react-native-image-slider-box';
import {
  Button,
  Card,
  Paragraph,
  Surface,
  useTheme,
  Modal,
  Portal,
} from 'react-native-paper';
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';

import { StackNavigatorParamList } from '../types';
import tailorDATA from '../data/tailorSchedule';
import dryDATA from '../data/dryCleanSchedule';

import Schedule from '../Components/Schedule';

type Props = {
  id: number;
  images: Array<string>;
};

type ModelComponentProps = {
  visible: boolean;
  hideModal: () => void;
  backgroundColor: string;
  data: any;
};

const ModelComponent: React.FunctionComponent<ModelComponentProps> = ({
  visible,
  hideModal,
  backgroundColor,
  data,
}: ModelComponentProps) => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value * 255 }],
    };
  });

  return (
    <Animated.View
      style={animatedStyles}
      entering={SlideInDown.duration(3000)}
      exiting={SlideInDown}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={[
            styles.containerStyle,
            {
              backgroundColor: backgroundColor,
            },
          ]}>
          <Schedule data={data} />
        </Modal>
      </Portal>
    </Animated.View>
  );
};

const RenderItem = (props: Props) => {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  return (
    <Surface>
      <SliderBox
        images={props.images}
        sliderBoxHeight={250}
        dotColor="#2196F3"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 8,
          padding: 0,
          margin: 0,
        }}
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        imageLoadingColor="#2196F3"
      />

      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Card style={styles.card}>
          <Card.Cover
            style={styles.cardImg}
            source={require('../assets/images/Mediamodifier-Design-Template.jpg')}
          />
          <Card.Content>
            <Paragraph
              style={{
                color: contentColor,
              }}>
              Get your fabric stitched from the comfort of your home.{'\n'} Time
              Saving.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={styles.cardAction}>
            <Button
              labelStyle={{
                fontSize: 12,
              }}
              icon="arrow-right-bold-circle-outline"
              mode="contained"
              color={contentColor}
              style={styles.btnCard}
              onPress={showModal}>
              <ModelComponent
                visible={visible}
                backgroundColor={theme.colors.background}
                hideModal={hideModal}
                data={tailorDATA}
              />
              Schedule Now
            </Button>
          </Card.Actions>
        </Card>

        <Card
          style={[
            styles.card,
            {
              marginRight: 6,
            },
          ]}>
          <Card.Cover
            style={styles.cardImg}
            source={require('../assets/images/Garment-care-image-resized.png')}
          />
          <Card.Content>
            <Paragraph
              style={{
                color: contentColor,
              }}>
              One stop solution for all your garments laundry & dry cleaning
              needs.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={styles.cardAction}>
            <Button
              labelStyle={{
                fontSize: 12,
              }}
              icon="arrow-right-bold-circle-outline"
              mode="contained"
              color={contentColor}
              style={styles.btnCard}
              onPress={showModal}>
              <ModelComponent
                visible={visible}
                backgroundColor={theme.colors.background}
                hideModal={hideModal}
                data={dryDATA}
              />
              Schedule Now
            </Button>
          </Card.Actions>
        </Card>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require('../assets/images/store-2017.png')}
        />
        <View>
          <Paragraph
            style={[
              styles.paragraph,
              {
                color: contentColor,
              },
            ]}>
            One-Stop destination for all clothing and {'\n'}accessories at one
            platform.
          </Paragraph>
          <Button
            labelStyle={{
              fontSize: 12,
            }}
            icon="arrow-right-bold-circle-outline"
            mode="text"
            color="#2196F3"
            style={{
              width: 200,
              left: -20,
            }}>
            Schedule Now
          </Button>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginVertical: 25,
    marginLeft: 12,
    marginTop: 10,
  },
  btnCard: {
    borderRadius: 20,
    backgroundColor: '#2196F3',
    fontSize: 2,
  },
  cardImg: {
    width: 130,
    height: 150,
    alignSelf: 'center',
  },
  cardAction: {
    justifyContent: 'center',
  },
  paragraph: {
    margin: 15,
    textShadowRadius: 2,
  },
  containerStyle: { width: '100%', height: '100%' },
});

type RenderItemProps = React.ComponentProps<typeof RenderItem>;

function renderItem({ item }: { item: RenderItemProps }) {
  return <RenderItem {...item} />;
}

const DATA: Array<React.ComponentProps<typeof RenderItem>> = [
  {
    id: 1,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree',
    ],
  },
];

type ScreenProps = MaterialBottomTabScreenProps<
  StackNavigatorParamList,
  'Home'
>;

function HomeScreen(_props: ScreenProps) {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={DATA}
      renderItem={renderItem}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
}

export default HomeScreen;
