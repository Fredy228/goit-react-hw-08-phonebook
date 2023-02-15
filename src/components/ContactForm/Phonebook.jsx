import {useState} from "react";
import {From, Label} from './Phonebook.styled';
import { addContact } from "redux/operations";
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from "redux/selectors";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Phonebook = () => {
  const [nameContact, setNameContact] = useState('');
    const [number, setNumber] = useState('');
    const dispacth = useDispatch()
    const contacts = useSelector(selectContacts);

    const addNewContact = (name, number) => {
        const haveContact = contacts.find( contact => contact.name === name || contact.number === number);
        if(haveContact) {
        alert(`${haveContact.name} is already in contacts`)
        } else {
        const newContacts = {
            id: nanoid(),
            name,
            number
        };
        dispacth(addContact(newContacts));
        }
    }

    const handleChange = event => {
        const {value, name} = event.currentTarget;
        switch (name) {
            case 'name':
                setNameContact(value)
                break
            case 'number':
                setNumber(value)
                break
            default:
                break;
        }
      }
    
    const submitForm = event => {
        event.preventDefault();
        addNewContact(nameContact, number);
        setNameContact('');
        setNumber('');

    }
    return (
        <From onSubmit={submitForm}>
        <Label>
            <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            type="text"
            name="name"
            value={nameContact}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
        </Label>
        <Label>
            <TextField 
            id="outlined-basic" 
            label="Number" 
            variant="outlined"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
             />
        </Label>
        <Button variant="contained" type='submit'>Add contact</Button>
    </From>
    )
}

export default Phonebook