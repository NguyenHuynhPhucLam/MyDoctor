import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
    const SearchBar = () => {
        return (
          <View style={styles.searchBarContainer}>
            <TouchableOpacity style={styles.searchIconContainer}>
              <Image source={require('../../assets/icons/Search.png')} style={styles.searchIcon} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#888"
            />
          </View>
        );
      };
  // Dummy data for top doctors and health articles
  const topDoctors = [
    { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology', rating: 4.8 },
    { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', rating: 4.9 },
    { id: 3, name: 'Dr. Mike Johnson', speciality: 'Neurology', rating: 4.7 },
  ];

  const topArticles = [
    { id: 1, title: 'How to Stay Healthy', date: 'May 1, 2024' },
    { id: 2, title: 'Benefits of Exercise', date: 'April 28, 2024' },
    { id: 3, title: 'Understanding Allergies', date: 'April 25, 2024' },
  ];
  const renderTopDoctorsSection = () => {
    return (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Doctors</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            data={topDoctors}
            renderItem={renderTopDoctorItem}
            sliderWidth={300}
            itemWidth={250}
          />
        </View>
      </View>
    );
  };

  const renderArticlesSection = () => {
    return (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Articles</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.articlesContainer}>
          {topArticles.map((article) => (
            <View key={article.id} style={styles.articleItem}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDate}>{article.date}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  // Render individual top doctor item
  const renderTopDoctorItem = ({ item }) => (
    <View style={styles.topDoctorItem}>
      <Image source={item.image} style={styles.doctorImage} />
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorSpeciality}>{item.speciality}</Text>
      <Text style={styles.doctorRating}>{item.rating}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
      </View>
      <View style={styles.searchBar}>
        <SearchBar/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/icons/Doctor.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/icons/Pharmacy.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Pharmacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/icons/Hospital.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/icons/Ambulance.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Ambulance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>Welcome to My App!</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/home_banner.png')}
          style={styles.bannerImage}
        />
      </View>
      {renderTopDoctorsSection()}
      {renderArticlesSection()}
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
  searchBar: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
  marginTop: 8,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E8F3F1',
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  learnMoreButton: {
    marginTop: 8,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  learnMoreButtonText: {
    color: '#fff',
  },
  bannerImage: {
    width: 120,
    height: 120,
  },
  carouselContainer: {
    padding: 16,
  },
  topDoctorItem: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorName: {
    marginTop: 8,
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    padding: 8,
  },
  seeAllButtonText: {
    color: '#888',
    fontSize: 16,
  },
  articlesContainer: {
    padding: 16,
  },
  articleItem: {
    marginBottom: 16,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleDate: {
    fontSize: 12,
    color: '#777',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  searchIconContainer: {
    marginRight: 8,
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
};

export default HomeScreen;