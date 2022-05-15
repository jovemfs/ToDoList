import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Item from './components/Item';
import { Container, List } from '@mui/material';

function App() {
  return (
    <Container maxWidth="xs" style={{ marginTop:"1em" }}>
      <Form />
      <List sx={{ bgcolor: 'background.paper', marginTop: '1em' }}>
        <Item />
      </List>
    </Container>
  );
}

export default App;
