import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Categories from './pages/Categories/Categories';
import Meal from './pages/Meal';
import Details from './pages/Detail/Details';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',

            headerTitleStyle: {
              color: '#FFA500',
              fontWeight: 'semibold',
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MealPage"
          component={Meal}
          options={{
            title: 'Meal',
            headerTitleStyle: {
              color: '#FFA500',
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Details}
          options={{
            title: 'Detail',
            headerTitleStyle: {
              color: '#FFA500',
              fontWeight: 'bold',
              fontSize: 25,
            },

            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
