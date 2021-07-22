import {TopAnime, Movies, Series} from "../Layouts/index"
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default () =>{
    return (
     
        <Tab.Navigator
        
        tabBarOptions={
        { 
          style:{
            height:44,
            marginTop:-10,

          },
          activeTintColor:"white",
          tabStyle:{
            backgroundColor:'rgba(98, 57, 148, .955)',
          },
          labelStyle:{ fontSize:12}
          
        }

      }
 
        >
          <Tab.Screen name="MoviesAnime" component={Movies} />
          <Tab.Screen name="TvAnime" component={Series} />
        </Tab.Navigator>
    );
  }