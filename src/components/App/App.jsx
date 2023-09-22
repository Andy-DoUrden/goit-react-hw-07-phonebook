import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Container, PhonebookContainer, Title, ListTitle } from './App.styled';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Oval } from 'react-loader-spinner';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectError);
  const error = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookContainer>
        <Title>Phonebook</Title>

        <ContactForm />

        <ListTitle>Contacts</ListTitle>

        <Filter />

        {isLoading && !error && (
          <Oval
            height={40}
            width={40}
            color="#f2ab26"
            wrapperStyle={{}}
            wrapperClass="loader-margin"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f2ab26"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}

        <ContactList />
      </PhonebookContainer>
    </Container>
  );
}
