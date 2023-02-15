import {Label} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeFilter } from 'redux/filtersSlice'
import { selectFilter } from 'redux/selectors';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
      <Label>
          <TextField 
          id="filled-basic" 
          label="Find contacts by name" 
          variant="filled"
          type='text'
          value={filter}
          onChange={(e) => {dispatch(handleChangeFilter(e.currentTarget.value))}}
           />
      </Label>
  )
}

export default Filter;
