import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/Profile.png')} style={styles.profilePicture} />
      <Text style={styles.name}>John Doe</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoColumn}>
          <Image source={require('../../assets/icons/Height.png')} style={styles.icon} />
          <Text style={styles.infoHeading}>Height</Text>
          <Text style={styles.infoNumber}>180 cm</Text>
        </View>
        <View style={styles.infoColumn}>
          <Image source={require('../../assets/icons/Weight.png')} style={styles.icon} />
          <Text style={styles.infoHeading}>Weight</Text>
          <Text style={styles.infoNumber}>75 kg</Text>
        </View>
        <View style={styles.infoColumn}>
          <Image source={require('../../assets/icons/Bloodtype.png')} style={styles.icon} />
          <Text style={styles.infoHeading}>Blood Type</Text>
          <Text style={styles.infoNumber}>A+</Text>
        </View>
      </View>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayOption}>
          <Text style={styles.overlayOptionText}>Detailed Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.overlayOption}>
          <Text style={styles.overlayOptionText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.overlayOption}>
          <Text style={styles.overlayOptionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoColumn: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  infoHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoNumber: {
    fontSize: 16,
  },
  overlayOption: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  overlayOptionText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default ProfileScreen;