/**
 * The home page
 * @format
 */

'use strict';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

import {
  Button,
  Card,
  Divider,
  RadioButton,
  Surface,
  useTheme,
} from 'react-native-paper';
import Color from 'color';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import normalize from './Normalize';

type ListProps = {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
};

type Props = {
  id: number;
  title: string;
  serviceDetailsTitle: string;
  list: Array<ListProps>;
};

const RenderItem = (props: Props) => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState('first');
  const [selectedDate, setSelectedDate] = React.useState('');

  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  const Item = ({ id, title, price, image }: ListProps) => {
    const [counter, setCounter] = React.useState(0);

    return (
      <View key={id}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: normalize(10),
          }}>
          <Image
            source={image}
            style={{
              borderRadius: normalize(50),
              width: normalize(25),
              height: normalize(25),
            }}
          />
          <View
            style={{
              margin: normalize(10),
              flex: 1,
            }}>
            <Text style={{ color: contentColor, fontSize: normalize(18) }}>
              {title}
            </Text>
            <Text
              style={{
                color: contentColor,
                fontSize: normalize(10),
                fontWeight: 'bold',
              }}>
              RS: {price}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
            }}>
            <Pressable
              onPress={() => {
                setCounter(counter + 1);
              }}
              style={({ pressed }) => ({
                backgroundColor: pressed
                  ? 'rgb(177, 208, 247)'
                  : theme.colors.background,
                borderRadius: 8,
              })}>
              <Ionicons
                name="add-outline"
                size={30}
                style={{
                  borderColor: '#000',
                  borderWidth: 1,
                  backgroundColor: theme.colors.background,
                }}
                color={contentColor}
              />
            </Pressable>
            <Text
              style={{
                fontSize: normalize(18),
                color: contentColor,
                width: normalize(30),
                borderColor: '#000',
                borderWidth: 1,
                paddingLeft: normalize(10),
                backgroundColor: theme.colors.background,
              }}>
              {counter}
            </Text>
            <Pressable
              onPress={() => {
                if (counter !== 0) {
                  setCounter(counter - 1);
                }
              }}
              style={({ pressed }) => ({
                backgroundColor: pressed
                  ? 'rgb(177, 208, 247)'
                  : theme.colors.background,
                borderRadius: normalize(8),
              })}>
              <Ionicons
                name="remove-outline"
                size={30}
                style={{
                  borderColor: '#000',
                  borderWidth: 1,
                  backgroundColor: theme.colors.background,
                }}
                color={contentColor}
              />
            </Pressable>
          </View>
        </View>
        <Divider />
      </View>
    );
  };

  const renderListItem = ({ item }: any) => (
    <Item
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
    />
  );

  return (
    <Surface
      style={{
        backgroundColor: theme.colors.background,
      }}>
      <View>
        {/* Title of the screen */}
        <Text
          style={{
            fontSize: normalize(25),
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: normalize(20),
            color: contentColor,
          }}>
          {props.title}
        </Text>

        {/* tailor service details search card */}
        <Card
          style={{
            margin: normalize(10),
            overflow: 'scroll',
          }}>
          <Card.Content>
            <Text
              style={{
                fontSize: normalize(15),
                fontWeight: 'bold',
                color: contentColor,
              }}>
              {props.serviceDetailsTitle}
            </Text>
            <Divider style={{ marginVertical: normalize(10) }} />

            {/* search for the service(s) */}
            <TextInput
              style={{
                borderColor: '#2196F3',
                height: normalize(40),
                margin: normalize(12),
                borderWidth: 2,
                padding: normalize(10),
                color: contentColor,
              }}
              placeholder="Search Services..."
            />
            <Divider />

            {/* list of the service available */}
            <FlatList
              data={props.list}
              renderItem={renderListItem}
              keyExtractor={(item: any) => item.id}
            />
          </Card.Content>
        </Card>

        {/* fabric details card */}
        <Card
          style={{
            margin: 10,
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: normalize(15),
                color: contentColor,
                paddingBottom: normalize(10),
              }}>
              Fabric Details
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                start: normalize(-10),
              }}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                color="#2196F3"
              />
              <TouchableOpacity onPress={() => setChecked('first')}>
                <Text style={{ color: contentColor }}>I have fabric</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                start: normalize(-10),
              }}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                color="#2196F3"
              />
              <TouchableOpacity onPress={() => setChecked('second')}>
                <Text style={{ color: contentColor }}>I don't have fabric</Text>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>

        {/* measurement details card */}
        <Card
          style={{
            margin: normalize(10),
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: normalize(15),
                color: contentColor,
              }}>
              Measurement Details
            </Text>

            <View
              style={{
                flexDirection: 'row',
                start: normalize(-10),
                paddingTop: normalize(10),
              }}>
              <RadioButton value="third" status="checked" color="#2196F3" />
              <Text style={{ color: contentColor }}>
                Send the technician to my home for taking{'\n'}measurement.
                (only in lahore)
              </Text>
            </View>
          </Card.Content>
        </Card>

        {/* pick up address card */}
        <Card
          style={{
            margin: normalize(10),
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: normalize(15),
                color: contentColor,
                marginBottom: normalize(15),
              }}>
              Pickup address
            </Text>

            <View
              style={{
                alignSelf: 'center',
              }}>
              <Button
                style={{
                  backgroundColor: '#2196F3',
                  width: normalize(140),
                }}
                labelStyle={{
                  fontSize: normalize(12),
                }}
                color={contentColor}
                onPress={() => {}}>
                Select Address
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* delivery address card */}
        <Card
          style={{
            margin: 10,
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: normalize(15),
                color: contentColor,
                marginBottom: normalize(15),
              }}>
              Delivery address
            </Text>

            <View
              style={{
                alignSelf: 'center',
              }}>
              <Button
                style={{
                  backgroundColor: '#2196F3',
                  width: normalize(140),
                }}
                labelStyle={{
                  fontSize: normalize(12),
                }}
                color={contentColor}
                onPress={() => {}}>
                Select Address
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* select deliver address card */}
        <Card
          style={{
            margin: 10,
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: normalize(15),
                color: contentColor,
                marginBottom: normalize(5),
              }}>
              Select Pickup Date
            </Text>

            <DatePicker
              options={{
                backgroundColor: theme.colors.background,
                textHeaderColor: contentColor,
                textDefaultColor: contentColor,
                selectedTextColor: contentColor,
                mainColor: contentColor,
                textSecondaryColor: contentColor,
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onSelectedChange={(date: any) => setSelectedDate(date)}
              selected={selectedDate}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: normalize(10),
              }}>
              <Button
                style={{
                  width: normalize(160),
                }}
                labelStyle={{
                  fontSize: normalize(12),
                }}
                mode="text"
                color="#2196F3"
                onPress={() => {
                  setSelectedDate(getToday());
                }}>
                Today
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* sign-up card */}
        <Card
          style={{
            margin: normalize(10),
          }}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image source={require('../assets/images/logo.jpg')} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: contentColor,
                  fontSize: normalize(15),
                  marginLeft: normalize(10),
                }}>
                AtStyle: The best Service {'\n'} Provider in lahore
              </Text>
            </View>
            <Divider style={{ marginVertical: normalize(10) }} />

            <Button mode="outlined" onPress={() => {}} color="#2196F3">
              Sign In for booking
            </Button>
          </Card.Content>
        </Card>
      </View>
    </Surface>
  );
};

export { RenderItem };

type RenderItemProps = React.ComponentProps<typeof RenderItem>;

function renderItem({ item }: { item: RenderItemProps }) {
  return <RenderItem {...item} />;
}

function Schedule({ data }: any) {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
}

export default Schedule;
