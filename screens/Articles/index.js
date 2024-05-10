import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

// Sample data for articles
const articles = [
  {
    id: 1,
    name: 'Article 1',
    tags: ['tag1', 'tag2'],
    heading: 'Heading 1',
    publishingTime: 'May 1, 2024',
    readingTime: '5 min',
  },
  {
    id: 2,
    name: 'Article 2',
    tags: ['tag2', 'tag3'],
    heading: 'Heading 2',
    publishingTime: 'May 2, 2024',
    readingTime: '7 min',
  },
  // Add more articles as needed
];

const ArticleScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Filter articles by name based on search query
  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter articles by selected tag
  const filteredByTagArticles =
    selectedTag === '' ? [] : articles.filter((article) => article.tags.includes(selectedTag));

  // Render individual article card
  const renderArticleCard = ({ item }) => (
    <View style={styles.articleCard}>
      <Text>{item.heading}</Text>
      <Text>{item.publishingTime}</Text>
      <Text>{item.readingTime}</Text>
      {/* Add additional article card content as needed */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleBackButtonPress()}>
          {/* Add back icon component here */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Articles</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search articles"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <ScrollView horizontal style={styles.carousel}>
        {/* Render the "Popular Articles" carousel */}
        {articles.map((article) => (
          <TouchableOpacity
            key={article.id}
            onPress={() => setSelectedTag(article.name)}>
            <Text style={styles.carouselItem}>{article.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedTag === '' ? (
        <ScrollView style={styles.relatedScrollView}>
          {/* Render the "Related" scroll view */}
          {filteredArticles.map((article) => (
            <TouchableOpacity key={article.id} onPress={() => handleArticlePress(article)}>
              <View style={styles.relatedCard}>
                <Text>{article.name}</Text>
                {/* Add additional related card content as needed */}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={styles.tagScrollView}>
          {/* Render the articles with the selected tag */}
          <FlatList
            data={filteredByTagArticles}
            renderItem={renderArticleCard}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      )}
    </View>
  );
};

// Styles
const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  carousel: {
    marginBottom: 16,
  },
  carouselItem: {
    paddingHorizontal: 8,
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  relatedScrollView: {
    marginBottom: 16,
  },
  tagScrollView: {
    marginBottom: 16,
  },
  articleCard: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  relatedCard: {
    marginRight: 8,
    padding: 16,
    backgroundColor: '#f0f0f0',
    width: 150,
  },
};

export default ArticleScreen;