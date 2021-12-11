import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tables from '../../pages/Tables/Tables';
import TableDetail from '../../pages/Tables/TableDetail';

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TablesPage"
        component={Tables}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Tables',
        }}
      />
      <Stack.Screen
        name="TableDetailPage"
        component={TableDetail}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Table Detail',
        }}
      />
    </Stack.Navigator>
  );
}
