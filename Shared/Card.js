import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Button from './Button';

function Card(props){

  const buttonMarkUp = props.action && (
    <Button 
      title={ props.action?.title } 
      icon= { <AntDesign name="adduser" size={20} color="#fff" /> }
      onPress={ props.action.onPress }
    />
  );

  return (
    <View style={ styles.card }>
      <View style={ styles.cardHeader} >
        <Text style={ styles.cardHeaderTitle}>{ props.title }</Text>
        { buttonMarkUp  }
      </View>
      <View style={ styles.cardBody }>
        { props.children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '96%',
    margin: '2%',
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: { widht: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardHeaderTitle: {
    fontFamily: 'macondo-regular',
    fontSize: 18
  },
  cardBody: {
    paddingVertical: 10
  }
});

export default Card;