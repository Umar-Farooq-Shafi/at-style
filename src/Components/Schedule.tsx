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
  ScrollView,
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
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import Color from 'color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            padding: 10,
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 50,
              width: 30,
              height: 30,
            }}
          />
          <View
            style={{
              margin: 10,
            }}>
            <Text style={{ color: contentColor, fontSize: 18 }}>{title}</Text>
            <Text
              style={{ color: contentColor, fontSize: 10, fontWeight: 'bold' }}>
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
                fontSize: 20,
                color: contentColor,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#000',
                borderWidth: 1,
                paddingLeft: 10,
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
                borderRadius: 8,
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
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 20,
            color: contentColor,
          }}>
          {props.title}
        </Text>

        {/* tailor service details search card */}
        <Card
          style={{
            margin: 10,
            maxHeight: 600,
            overflow: 'scroll',
          }}>
          <Card.Content>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: contentColor,
              }}>
              {props.serviceDetailsTitle}
            </Text>
            <Divider style={{ marginVertical: 10 }} />

            {/* search for the service(s) */}
            <TextInput
              style={{
                borderColor: '#2196F3',
                height: 40,
                margin: 12,
                borderWidth: 2,
                padding: 10,
                color: contentColor,
              }}
              placeholder="Search Services..."
            />
            <Divider />

            {/* list of the service available */}
            <ScrollView
              style={{
                flexGrow: 0,
              }}>
              <FlatList
                data={props.list}
                renderItem={renderListItem}
                keyExtractor={(item: any) => item.id}
              />
            </ScrollView>
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
                fontSize: 15,
                color: contentColor,
                paddingBottom: 10,
              }}>
              Fabric Details
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                start: -10,
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
                start: -10,
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
            margin: 10,
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: contentColor,
              }}>
              Measurement Details
            </Text>

            <View
              style={{
                flexDirection: 'row',
                start: -10,
                paddingTop: 10,
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
            margin: 10,
          }}>
          <Card.Content>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: contentColor,
                marginBottom: 15,
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
                  width: 160,
                }}
                labelStyle={{
                  fontSize: 12,
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
                fontSize: 15,
                color: contentColor,
                marginBottom: 15,
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
                  width: 160,
                }}
                labelStyle={{
                  fontSize: 12,
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
                fontSize: 15,
                color: contentColor,
                marginBottom: 5,
              }}>
              Select Pickup Date
            </Text>

            <DatePicker
              options={{
                backgroundColor: theme.colors.background,
                textHeaderColor: '#2196F3',
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#2196F3',
                mainColor: contentColor,
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onSelectedChange={(date: any) => setSelectedDate(date)}
              selected={selectedDate}
            />
            <View
              style={{
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Button
                style={{
                  width: 160,
                }}
                labelStyle={{
                  fontSize: 12,
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
            margin: 10,
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
                  fontSize: 15,
                  marginLeft: 10,
                }}>
                AtStyle: The best Service Provider in lahore
              </Text>
            </View>
            <Divider style={{ marginVertical: 10 }} />

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

// const DATA: Array<React.ComponentProps<typeof RenderItem>> = [
//   {
//     id: 1,
//     title: 'Book Tailor Schedule',
//     serviceDetailsTitle: 'Tailer Service Details',
//     list: [
//       {
//         id: 1,
//         title: 'men suit 3 pcs',
//         price: 65000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 2,
//         title: 'men suit 2 pcs',
//         price: 55000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 3,
//         title: 'men bandi',
//         price: 21000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 4,
//         title: 'men wait coat',
//         price: 13000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 5,
//         title: 'men coat/blazer',
//         price: 36000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 6,
//         title: 'men shirt',
//         price: 5000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 7,
//         title: 'men pant',
//         price: 6000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 8,
//         title: 'men kurta plain',
//         price: 5000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 9,
//         title: 'men silk kurta',
//         price: 13000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 10,
//         title: 'men apron',
//         price: 9000,
//         image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
//       },
//       {
//         id: 11,
//         title: 'woman blouse (plain)',
//         price: 2000,
//         image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
//       },
//       {
//         id: 12,
//         title: 'women slwar suit',
//         price: 450,
//         image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
//       },
//       {
//         id: 13,
//         title: 'women slwar suit designer',
//         price: 500,
//         image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
//       },
//       {
//         id: 14,
//         title: 'women top/shirt',
//         price: 400,
//         image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
//       },
//       {
//         id: 15,
//         title: 'women five seater sofa cover',
//         price: 2000,
//         image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
//       },
//       {
//         id: 16,
//         title: 'home curtain',
//         price: 200,
//         image: require('../assets/images/curtain.jpg'),
//       },
//       {
//         id: 17,
//         title: 'home pillow',
//         price: 150,
//         image: require('../assets/images/pillow.jpg'),
//       },
//     ],
//   },
// ];

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
