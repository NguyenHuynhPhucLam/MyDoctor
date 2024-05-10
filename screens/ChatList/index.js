import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
    const navigation = useNavigation();
  // Dummy data for chat list
  const chatData = [
    { id: 1, name: 'John', lastMessage: 'Hello' },
    { id: 2, name: 'Alice', lastMessage: 'Hey there' },
    { id: 3, name: 'Bob', lastMessage: 'How are you?' },
  ];

  const openConversation = (conversationId) => {
    navigation.navigate('Conversation', { conversationId });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity onPress={() => openConversation(item.id)}>
      <View style={styles.chatItem}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatLastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  chatItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatLastMessage: {
    marginTop: 5,
    color: '#888',
  },
};

export default ChatList;