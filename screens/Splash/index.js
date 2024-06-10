import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../../screens/Login';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('firstLaunch');
        if (value === null) {
          // First launch
          await AsyncStorage.setItem('firstLaunch', 'true');
          setShowCarousel(true);
        } else {
          // Not the first launch
          setShowCarousel(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShowCarousel(true);
      }
    };

    checkFirstLaunch();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image source={require('./splash.png')} style={styles.logo} />
      </View>
    );
  }

  if (showCarousel) {
    return <GettingStartedCarousel />;
  }

  return <LoginScreen />;
};

const GettingStartedCarousel = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onCarouselEnd = () => {
    // Called when the carousel reaches the last screen
    setCurrentIndex(0);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.carouselText}>{item.title}</Text>
      </View>
    );
  };

  const carouselData = [
    { title: 'Screen 1' },
    { title: 'Screen 2' },
    { title: 'Screen 3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
        onEndReached={onCarouselEnd}
      />
      {currentIndex === carouselData.length - 1 && (
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText} 
          onPress={() => navigation.navigate('LoginScreen')}
          >Login/Signup</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  carouselText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;