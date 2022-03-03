import React from 'react';
import { RouteProp } from '@react-navigation/native';

import { DetailedTwitt } from './Components/detailedTwitt';
import { StackNavigatorParamList } from './types';

type Props = {
  route: RouteProp<StackNavigatorParamList, 'Details'>;
};

export const Details = (props: Props) => {
  return <DetailedTwitt {...props.route.params} />;
};
