import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DoctorListScreen = () => {
    const navigation = useNavigation();
  // Dummy data for doctors
  const doctors = [
    { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology', rating: 4.8 },
    { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', rating: 4.9 },
    { id: 3, name: 'Dr. Mike Johnson', speciality: 'Neurology', rating: 4.7 },
    // Add more doctors as needed
  ];
  const handleDoctorPress = (doctor) => {
    navigation.navigate('DocAppointer', { doctor });
  };
  const renderDoctorItem = (doctor) => (
    <TouchableOpacity style={styles.doctorCard} key={doctor.id} onPress={() => handleDoctorPress(doctor)}>
      <Image source={doctor.image} style={styles.doctorImage} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
        <Text style={styles.doctorRating}>{doctor.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Doctor List</Text>
      </View>
      <View style={styles.doctorList}>
        {doctors.map(renderDoctorItem)}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  doctorList: {
    padding: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    marginLeft: 16,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpeciality: {
    marginTop: 4,
    fontSize: 14,
  },
  doctorRating: {
    marginTop: 4,
    fontSize: 12,
  },
};

export default DoctorListScreen;