import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Button(props){
  return(
    <TouchableOpacity 
      style={{ 
        ...styles.button, 
        backgroundColor: props.danger ? '#F24C4C' : '#14C38E' 
      }}
      onPress={ props.onPress }
    >
      { props.icon }
      <Text style={ styles.title }>{ props.title }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'macondo-regular',
    color: 'white',
    fontSize: 16
  }
});

export default Button;