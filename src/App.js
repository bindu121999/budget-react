
import {Container} from 'semantic-ui-react';
import './App.css';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title="Budget"/>

      <DisplayBalance title="Balance" value="2000" size="small"/>

      <DisplayBalances/>

      <MainHeader title="History" type="h3"/>

      <EntryLine description="Something" value="100"/>
      <EntryLine description="Something else" value="50"/>

      <MainHeader title="Add New Transaction" type="h3"/>
      <NewEntryForm/>

     <ButtonSaveOrCancel/>

    </Container>
  );
}

export default App;
