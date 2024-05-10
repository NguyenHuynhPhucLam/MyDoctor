import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Conversation = () => {
    const route = useRoute();
  const { conversationId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.conversationText}>
        Conversation ID: {conversationId}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conversationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default Conversation;