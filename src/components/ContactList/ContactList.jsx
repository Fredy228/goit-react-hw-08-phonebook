import {ListContacts, ItemContact, Text} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { useRef } from 'react';
import { LoaderDelete } from 'components/Loader/Loader';
import Button from '@mui/material/Button';


const ContactList = () => {
    const dispacth = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);
    const idContactDelete = useRef('');
    
    const renderCondition = () => {
        if(filter.trim() !== '') {
            return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
        } else {
            return contacts;
        }
    }

    return (
        <ListContacts>
            {renderCondition().length > 0 && renderCondition().map(({id, name, number}) => {
                return (
                    <ItemContact key={id}>
                        <Text>{name}:</Text> 
                        <Text>- {number}</Text> 
                        <Button variant="outlined" type='button' onClick={() => {
                            dispacth(deleteContact(id));
                            idContactDelete.current = id;                            
                        }}>
                          {isLoading && idContactDelete.current === String(id) && <LoaderDelete/>} 
                          {idContactDelete.current !== String(id) && 'Delete'}                   
                        </Button>
                    </ItemContact>
                )
            })}
            {renderCondition().length === 0 && <Text>Not found name: {`${filter}`}</Text>}
        </ListContacts>
    )
}

export default ContactList