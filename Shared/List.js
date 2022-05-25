import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

function List(props){
  return(
    <View style={ styles.list }>
      <Text style={ styles.listContent }>{ props.content }</Text>
      <View style={ styles.listButtons }>
        <Button title="Edit" onPress={ props.editContact }/>
        <Button title="Delete" danger onPress={ props.deleteContact }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderStyle: 'dashed'
  },
  listButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
  listContent: {
    fontFamily: 'macondo-regular',
    fontSize: 16
  }
});

export default List;