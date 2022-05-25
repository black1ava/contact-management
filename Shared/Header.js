import { View, Text, StyleSheet } from 'react-native';

function Header(props){
  return (
    <View style={ styles.header }>
      <Text style={ styles.headerText }>{ props.title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'macondo-regular'
  }
})

export default Header;