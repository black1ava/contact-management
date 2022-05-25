import { Text, StyleSheet, View } from 'react-native';
import Button from '../Shared/Button';
import Card from '../Shared/Card';

function Detail(props){
  return (
    <Card title={ `Name: ${ props.navigation.getParam('name') }` }>
      <Text style={ styles.text }>Phone: { props.navigation.getParam('phone') }</Text>
      <Text style={ styles.text }>Email: { props.navigation.getParam('email') }</Text>
      <View style={ styles.alignLeft }>
        <View style={ styles.gap }>
          <Button 
            title="Edit" 
            onPress={ () => props.navigation.getParam('openEditModal')(props.navigation.getParam('id'), false) }
          />
          <Button 
            title="Delete" danger 
            onPress={ () => props.navigation.getParam('deleteContact')(props.navigation.getParam('id'), false) }
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'macondo-regular'
  },
  alignLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  gap: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around'
  }
});

export default Detail;