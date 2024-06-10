import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AppointmentScreen = () => {
  const [appointments, setAppointments] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const sortAppointments = () => {
    const sortedAppointments = [...appointments].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (sortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setAppointments(sortedAppointments);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortOptions}>
        <TouchableOpacity onPress={sortAppointments}>
          <Text style={styles.sortButton}>
            Sort by date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.appointmentBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>Date: {new Date(item.date).toLocaleDateString()}</Text>
            <Text style={styles.details}>Time: {item.time}</Text>
            <Text style={styles.details}>Provider: {item.provider}</Text>
            <Text style={styles.details}>Description: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  sortOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  sortButton: {
    color: 'blue',
    fontSize: 16,
  },
  appointmentBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default AppointmentScreen;