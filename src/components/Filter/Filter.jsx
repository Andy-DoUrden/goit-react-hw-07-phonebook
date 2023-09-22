import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

import { Form, InputName, FilterValue } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');

  const changeFilter = e => {
    setFilterValue(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(filterChange(filterValue));
  }, [dispatch, filterValue]);

  return (
    <Form>
      <InputName>
        Find contacts by name:
        <FilterValue type="text" value={filterValue} onChange={changeFilter} />
      </InputName>
    </Form>
  );
};

export default Filter;
