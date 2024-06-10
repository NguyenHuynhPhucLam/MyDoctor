import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const DoctorListScreen = () => {
    const navigation = useNavigation();
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('https://hidoc-be.onrender.com/api/get-all-doctors');
            setDoctors(response.data.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        } finally {
            setLoading(false);
        }

    };

    const handleDoctorPress = (doctor) => {
        navigation.navigate('DocAppointer', { doctor });
    };

    const renderDoctorItem = (doctor) => (
        <TouchableOpacity style={styles.doctorCard} key={doctor.id} onPress={() => handleDoctorPress(doctor)}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{doctor.lastName} {doctor.firstName}</Text>
      <Text style={styles.doctorSpeciality}>{doctor.positionId === 'P0' ? 'Cardiology' : 'Dermatology'}</Text>
      <Text style={styles.doctorRating}>4.8</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    else {
      
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Doctor List</Text>
            </View>
            <View style={styles.doctorList}>
                {doctors?.map(renderDoctorItem)}
            </View>
        </ScrollView>
    );
    }
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
        color: "gray",
    },
    doctorSpeciality: {
        marginTop: 4,
        fontSize: 14,
    },
    doctorRating: {
        marginTop: 4,
        fontSize: 12,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default DoctorListScreen;
