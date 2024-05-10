import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const BottomNavbar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        
        const isFocused = state.index === index;

        const defaultIcon = options.tabBarDefaultIcon;
        const chosenIcon = options.tabBarChosenIcon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
            <TouchableOpacity
            key={index}
            style={styles.tabBarButton}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            <Image
              source={isFocused ? chosenIcon : defaultIcon}
              style={[
                styles.tabBarIcon,
                isFocused && styles.tabBarIconFocused,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
    tabBarContainer: {
      flexDirection: 'row',
      height: 56,
      backgroundColor: 'transparent',
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
    },
    tabBarButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarIcon: {
      width: 24,
      height: 24,
    },
    tabBarIconFocused: {
      tintColor: '#FF0000', // Adjust the color as per your design
    },
  });