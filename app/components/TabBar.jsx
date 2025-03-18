import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import React from 'react'

function TabBar({ state, descriptors, navigation }) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();
  
    return (
      <View style={style.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <PlatformPressable
            key={index}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{width:85,backgroundColor:isFocused ? '#000' : null, paddingVertical:8, borderRadius:30, paddingHorizontal:4}}
            >
              <Text style={{ color: isFocused ? "#fff" : "#B0B0B0" ,textAlign:'center'}}>
                {label}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    );
  }

  const style = StyleSheet.create({
    tabBar:{
        position:'absolute',
        bottom:30,
        width:'90%',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#fff',
        marginHorizontal:20,
        paddingVertical:10,
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset:{width:0,height:5},
        shadowRadius:10,
        shadowOpacity:0.1
    }
  })

export default TabBar