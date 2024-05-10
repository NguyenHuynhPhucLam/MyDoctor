import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DoctorDetailScreen = () => {
  const route = useRoute();
  const { doctor } = route.params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const today = new Date();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      nextSevenDays.push(date);
    }
    setDates(nextSevenDays);
  }, []);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const renderDateButton = (date) => {
    const isSelected = date === selectedDate;
    return (
      <TouchableOpacity
        style={[styles.dateButton, isSelected && styles.selectedDateButton]}
        onPress={() => handleDateSelection(date)}
        key={date.toString()}
      >
        <Text style={[styles.dateButtonText, isSelected && styles.selectedDateButtonText]}>
          {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTimeButton = (time) => {
    const isSelected = time === selectedTime;
    return (
      <TouchableOpacity
        style={[styles.timeButton, isSelected && styles.selectedTimeButton]}
        onPress={() => handleTimeSelection(time)}
        key={time}
      >
        <Text style={[styles.timeButtonText, isSelected && styles.selectedTimeButtonText]}>
          {time}
        </Text>
      </TouchableOpacity>
    );
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleBookAppointment = () => {
    setShowPopup(true);
  };

  const handleChatWithDoctor = () => {
    // Redirect to the chat screen
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/ChevronLeft.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.doctorName}>{doctor.name}</Text>
      </View>
      <View style={styles.doctorCard}>
        <Image source={doctor.image} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
          <Text style={styles.doctorRating}>Rating: {doctor.rating}</Text>
        </View>
      </View>
      <View style={styles.aboutDialog}>
        <Text>About</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <View style={styles.datePicker}>
        <Text>Select a Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((date) => renderDateButton(date))}
        </ScrollView>
      </View>
      <View style={styles.timePicker}>
        <Text>Select a Time</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            '9am - 10am',
            '10am - 11am',
            '11am - 12pm',
            '12pm - 1pm',
            '1pm - 2pm',
            '2pm - 3pm',
            '3pm - 4pm',
          ].map((time) => renderTimeButton(time))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.chatIcon}>
          <Image source={require('../../assets/icons/Chat.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton} onPress={handleBookAppointment}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
      
      <Modal visible={showPopup} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../../assets/images/Done.png')} style={styles.tickIcon} />
            <Text style={styles.successText}>Success!</Text>
            <Text style={styles.additionalText}>
              Your appointment has been booked successfully.
            </Text>
            <TouchableOpacity style={styles.chatButton} onPress={handleChatWithDoctor}>
              <Text style={styles.chatButtonText}>Chat with Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowPopup(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    marginLeft: 16,
  },
  doctorSpeciality: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorRating: {
    fontSize: 14,
  },
  aboutDialog: {
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    },
  datePicker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  dateButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  selectedDateButton: {
    backgroundColor: '#007AFF',
  },
  dateButtonText: {
    color: '#000',
  },
  selectedDateButtonText: {
    color: '#fff',
  },
  timePicker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  timeButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  selectedTimeButton: {
    backgroundColor: '#007AFF',
  },
  timeButtonText: {
    color: '#000',
  },
  selectedTimeButtonText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  chatIcon: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    padding: 8,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  tickIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  successText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  additionalText: {
    color: '#A1A8B0',
    fontSize: 16,
    marginBottom: 20,
  },
  chatButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
};

export default DoctorDetailScreen;