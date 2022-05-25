import { useCallback } from 'react';
import { 
  View, 
  TouchableOpacity, 
  FlatList, 
  Alert
} from 'react-native';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Card from '../Shared/Card';
import List from '../Shared/List';
import ContactForm from './ContactForm';
import CustomModal from '../Shared/CustomModal';

function Home(props){

  const[modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isAtHome, setIsAtHome] = useState(true);
  const [contact, setContact] = useState({
    id: '',
    name: '',
    phone: '',
    email: ''
  });
  const [contacts, setContacts] = useState([
    { 
      name: 'Admin', 
      id: uuidv4(),
      phone: '111222333',
      email: 'admin@admin.com'
    },
    { 
      name: 'Tharath', 
      id: uuidv4() ,
      phone: '0888467929',
      email: 'roeunboratharath@gmailcom'
  },
    { 
      name: 'Tharith', 
      id: uuidv4(),
      phone: '0714316815',
      email: 'roeunboratharith@gmail.com'
    }
  ]);

  function handleModalToggle(){
    setModalOpen(prevState => !prevState);
  }

  const handleEditModalOpen = useCallback(function(id, atHome = true){
    setEditModalOpen(true);
    const contact = contacts.find(function(contact){
      return contact.id === id;
    });
    setContact(contact);
    setIsAtHome(atHome);
  }, [contacts]);

  function handleEditModalClose(){
    setEditModalOpen(false);
  }

  const deleteContact = useCallback(function(id, atHome){
    setContacts(function(currentContacts){
      return currentContacts.filter(function(contact){
        return contact.id !== id;
      });
    });

    if(!atHome){
      props.navigation.navigate('Home');
    }
  }, [contacts]);

  const handleDeleteContact = useCallback(function(id, atHome = true){
    Alert.alert(
      'Are you sure you want to delete this contact?',
      'This action cannot be undone.',
      [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {
          text: 'Delete',
          onPress: () => deleteContact(id, atHome)
        }
      ]
    )
  }, [deleteContact]);

  function renderContacts(contact){
    return(
      <TouchableOpacity onPress={ () => handlePress(contact.item) }>
        <List 
          content={ contact.item.name } 
          editContact={ () => handleEditModalOpen(contact.item.id) }
          deleteContact={ () => handleDeleteContact(contact.item.id) }
        />
      </TouchableOpacity>
    );
  }

  function extractContactKey(contact){
    return contact.id;
  }

  function addContact(contact){
    contact.id = uuidv4();
    setContacts(prevContact => [...prevContact, contact])
    setModalOpen(false);
  }

  const updateContact = useCallback(function(_contact){
    const { id } = _contact;
    setContacts(function(currentContacts){
      return currentContacts.map(function(contact){
        if(contact.id === id){
          return _contact;
        }

        return contact;
      });
    });
    setEditModalOpen(false);

    if(!isAtHome){
      props.navigation.navigate('Home');;
    }
  }, [isAtHome, contacts]);

  function handlePress(contact){
    props.navigation.navigate('Detail', {
      ...contact,
      openEditModal: handleEditModalOpen,
      deleteContact: handleDeleteContact
    });
  }

  return (
    <View>
      <Card title="Contacts" action={{ title: "New contact", onPress: handleModalToggle  }}>
        <CustomModal open={ modalOpen } dismissModal={ handleModalToggle } title="New contact">
          <ContactForm  
            action={{ content: 'Create contact', onAction: addContact }}
          />
        </CustomModal>
        <CustomModal title="Edit contact" open={ editModalOpen } dismissModal={ handleEditModalClose }>
          <ContactForm 
            action={{ content: 'Update contact', onAction: updateContact }}
            id={ contact.id }
            name={ contact.name }
            email={ contact.email }
            phone={ contact.phone }
          />
        </CustomModal>
        <FlatList 
          data={ contacts }
          renderItem={ renderContacts }
          extractContactKey={ extractContactKey }
        />
      </Card>
    </View>
  );
}

export default Home;