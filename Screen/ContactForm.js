import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Button from '../Shared/Button';

function ContactForm(props){

  const { content } = props.action;

  const contactSchema = yup.object({
    name: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required()
  });

  return(
    <Formik
      initialValues={{ 
        id: props.id || '',
        name: props.name || '', 
        phone: props.phone || '', 
        email: props.email || '' 
      }}
      validationSchema={ contactSchema }
      onSubmit={ 
        function(values){
          props.action.onAction(values);
        }
      }
    >
      {
        function(props){
          return(
            <View>
              <TextInput 
                value={ props.values.name }
                onChangeText={ props.handleChange('name') }
                onBlur={ props.handleBlur('name') }
                placeholder="Name"
                style={ styles.textInput }
                autoComplete="off"
              />
              <Text style={ styles.textError }>{ props.touched.name && props.errors.name }</Text>
              <TextInput 
                value={ props.values.phone }
                onChangeText={ props.handleChange('phone') }
                onBlur={ props.handleBlur('phone') }
                placeholder="Phone"
                style={ styles.textInput }
                keyboardType="phone-pad"
                autoComplete="off"
              />
              <Text style={ styles.textError }>{ props.touched.phone && props.errors.phone }</Text>
              <TextInput 
                value={ props.values.email }
                onChangeText={ props.handleChange('email') }
                onBlur={ props.handleBlur('email') }
                placeholder="Email"
                style={ styles.textInput }
                keyboardType="email-address"
                autoComplete="off"
              />
              <Text style={ styles.textError }>{ props.touched.email && props.errors.email }</Text>
              <View style={ styles.formButton }>
                <Button title={ content } onPress={ props.handleSubmit }/>
              </View>
            </View>
          );
        }
      }
    </Formik>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 5, 
    marginBottom: 5,
    fontFamily: 'macondo-regular',
    fontSize: 16
  },
  formButton: {
    alignItems: 'center'
  },
  textError: {
    color: '#FF5D5D',
    fontFamily: 'macondo-regular'
  }
});

export default ContactForm;